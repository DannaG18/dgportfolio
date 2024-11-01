import { EmailTemplate } from '../../components/EmailTemplate';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { email, subject, message } = await req.json();
    
    if (!email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: `Contact Form <${process.env.FROM_EMAIL}>`,
      to: [process.env.FROM_EMAIL],
      reply_to: email,
      subject: `New Contact Form Submission: ${subject}`,
      react: <EmailTemplate email={email} subject={subject} message={message} />
    });

    return NextResponse.json(data, { status: 200 });
    
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
