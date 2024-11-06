"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const LanguageCarousel = () => {
  // Use state to track if we're on the client side
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const languages = [
    { name: "Java", icon: "/images/skills/icons8-java-96.png" },
    { name: "SpringBoot", icon: "/images/skills/icons8-spring-boot-logo-96.png" },
    { name: "TypeScript", icon: "/images/skills/icons8-typescript-96.png" },
    { name: "JavaScript", icon: "/images/skills/icons8-javascript-96.png" },
    { name: "Python", icon: "/images/skills/icons8-python-96.png" },
    { name: "MySQL", icon: "/images/skills/icons8-mysql-logo-96.png" },
    { name: "PostgreSQL", icon: "/images/skills/icons8-postgresql-96.png" },
    { name: "Git", icon: "/images/skills/icons8-git-logo-96.png" },
    { name: "React", icon: "/images/skills/icons8-react-native-96.png" },
    { name: "Vite", icon: "/images/skills/icons8-vite-logo-96.png" },
    { name: "TailWind", icon: "/images/skills/icons8-tailwind-css-96.png" },
    { name: "BootStrap", icon: "/images/skills/icons8-bootstrap-logo-96.png" },
    { name: "HTML", icon: "/images/skills/icons8-html-logo-96.png" },
    { name: "CSS", icon: "/images/skills/icons8-css-logo-96.png" },
  ];

  const doubledLanguages = [...languages, ...languages];

  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <h2 className="text-4xl font-bold text-white mb-4 text-center">My Skills</h2>
      <div className="rounded-md py-8 px-16">
        <div className="relative overflow-hidden w-full">
          {/* Only apply animation class on client side */}
          <div className={`flex flex-row items-center justify-start gap-16 ${isClient ? 'animate-scroll' : ''}`}>
            {doubledLanguages.map((language, index) => (
              <div
                key={`${language.name}-${index}`}
                className="flex flex-col items-center justify-center flex-shrink-0 transition-transform duration-300 hover:scale-110"
              >
                <div className="w-16 h-16 mb-4">
                  <Image
                    src={language.icon}
                    alt={`${language.name} logo`}
                    width={64}
                    height={64}
                    className="object-contain"
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

export default LanguageCarousel;