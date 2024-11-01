"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Technical High School Graduate in Systems - INAC</li>
        <li>Labor technician in programming competencies - Campuslands</li>
      </ul>
    ),
  },
  // {
  //   title: "Certifications",
  //   id: "certifications",
  //   content: (
  //     <ul className="list-disc pl-2">
  //       <li>AWS Cloud Practitioner</li>
  //       <li>Google Professional Cloud Developer</li>
  //     </ul>
  //   ),
  // },
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
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-3 gap-8 items-center py-10 px-4 xl:gap-19 sm:py-19 xl:px-16">
        
        <div className="rounded-md mt-4 md:mt-0 flex flex-col h-full p-10 shadow-lg shadow-violet-500">
          <h2 className="text-4xl font-bold text-white mb-4 text-center">Vision</h2>
          <p className="text-base lg:text-lg">
            To be recognized as a leading software developer in creating innovative,
            high-impact technological solutions, driving the digital transformation 
            of companies globally. I aspire to establish long-lasting relationships
            with my clients, consistently providing added value through technical excellence,
            continuous improvement, and a focus on adapting to the latest technological trends.
          </p>
        </div>

        <div className="rounded-md mt-4 md:mt-0 flex flex-col h-full p-10 shadow-lg shadow-violet-500">
          <h2 className="text-4xl font-bold text-white mb-4 text-center">Mission</h2>
          <p className="text-base lg:text-lg">
            To create innovative, customized technological solutions that optimize business processes, leveraging advanced technologies and best architectural practices. I cater to companies and startups seeking digital transformation, offering remote services on a global scale. My focus on technical excellence, adaptability to new technologies, and alignment with business objectives ensures scalable, high-value solutions based on principles of integrity, discipline, and continuous improvement.
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
          <div className="flex flex-row justify-start mt-8"> 
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            {/* <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton> */}
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