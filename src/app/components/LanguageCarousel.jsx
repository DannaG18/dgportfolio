"use client";
import React from "react";
import dynamic from "next/dynamic";

const LanguageCarousel = () => {
  const languages = [
    { name: "Java", icon: "/images/skills/icons8-java-96.png"},
    { name: "SpringBoot", icon: "/images/skills/icons8-spring-boot-logo-96.png"},
    { name: "TypeScript", icon: "/images/skills/icons8-typescript-96.png"},
    { name: "JavaScript", icon: "/images/skills/icons8-javascript-96.png"},
    { name: "Python", icon: "/images/skills/icons8-python-96.png"},
    { name: "MySQL", icon: "/images/skills/icons8-mysql-logo-96.png"},
    { name: "PostgreSQL", icon: "/images/skills/icons8-postgresql-96.png"},
    { name: "Git", icon: "/images/skills/icons8-git-logo-96.png"},
    { name: "React", icon: "/images/skills/icons8-react-native-96.png"},
    { name: "Vite", icon: "/images/skills/icons8-vite-logo-96.png"},
    { name: "TailWind", icon: "/images/skills/icons8-tailwind-css-96.png"},
    { name: "BootStrap", icon: "/images/skills/icons8-bootstrap-logo-96.png"},
    { name: "HTML", icon: "/images/skills/icons8-html-logo-96.png"},
    { name: "CSS", icon: "/images/skills/icons8-css-logo-96.png"},
  ];

  // Double the array to create a seamless loop
  const doubledLanguages = [...languages, ...languages];

  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <h2 className="text-4xl font-bold text-white mb-4 text-center">My Skills</h2>
      <div className="rounded-md py-8 px-16">
        <div className="relative overflow-hidden w-full">
          <div className="flex flex-row items-center justify-start gap-16 animate-scroll">
            {doubledLanguages.map((language, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center flex-shrink-0 transition-transform duration-300 hover:scale-110"
                style={{
                  animation: 'none',
                  transform: 'none'
                }}
              >
                <div className="w-16 h-16 mb-4">
                  <img 
                    src={language.icon} 
                    alt={`${language.name} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-[#ADB7BE] text-base whitespace-nowrap">{language.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Add the animation to the stylesheet
const style = document.createElement('style');
style.textContent = `
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  .animate-scroll {
    animation: scroll 15s linear infinite;
  }

  .animate-scroll:hover {
    animation-play-state: paused;
  }
`;
document.head.appendChild(style);

export default LanguageCarousel;