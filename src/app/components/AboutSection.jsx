"use client";
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-4">
        <li>Technical Labor Diploma in Software Programming - Campuslands</li>
        <li>Systems Technician - National Learning Service (SENA) </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-4">
        <li><b>IBM: </b>Artificial Intelligence Fundamentals</li>
        <p className="">Issued 19 - March 2025</p>
        <li><b>Microsoft Certified:</b> Security, Compliance, and Identity Fundamentals</li>
        <p className="">Issued 13 - March 2025</p>
        <li><b>EF SET: </b> English Certified (C1 Advanced)</li>
        <p className="">Issued 7 - February 2025</p>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("education");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white py-10 px-4 xl:px-17" id="about">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center px-0 sm:px-0.5 md:px-1 lg:px-2 xl:px-4">

        <div className="rounded-md mt-4 md:mt-0 flex flex-col h-full p-10 shadow-lg shadow-blue-500">
          <h2 className="text-4xl font-bold text-white mb-4 text-center">Vision</h2>
          <p className="text-base lg:text-lg">
            Be recognized as a leading software developer in creating innovative,
            high-impact technological solutions, driving the digital transformation
            of companies globally. I aspire to establish long-lasting relationships
            with my clients, consistently providing added value through technical excellence,
            continuous improvement, and a focus on adapting to the latest technological trends.
          </p>
        </div>

        <div className="rounded-md mt-4 md:mt-0 flex flex-col h-full p-10 shadow-lg shadow-blue-500">
          <h2 className="text-4xl font-bold text-white mb-4 text-center">Mission</h2>
          <p className="text-base lg:text-lg">
            Create innovative, customized technological solutions that optimize business processes, leveraging advanced technologies and best architectural practices. I cater to companies and startups seeking digital transformation, offering remote services on a global scale. My focus on technical excellence, adaptability to new technologies, and alignment with business objectives ensures scalable, high-value solutions based on principles of integrity, discipline, and continuous improvement.
          </p>
        </div>

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I am a quick learner and am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-wrap justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
