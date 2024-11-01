import React from 'react';

export const EmailTemplate = ({ email, subject, message }) => {
  return (
    <div>
      <h2>New Contact Form Submission</h2>
      <p><strong>From:</strong> {email}</p>
      <p><strong>Subject:</strong> {subject}</p>
      <p><strong>Message:</strong></p>
      <p>{message}</p>
    </div>
  );
};