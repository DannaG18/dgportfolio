"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const LanguageCarousel = () => {
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
    <div className="w-full py-4 px-2 sm:py-8 sm:px-4">
      <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4 text-center">
        My Skills
      </h2>
      <div className="rounded-md py-4 px-4 sm:py-8 sm:px-16">
        <div className="relative overflow-hidden w-full">
          <div
            className={`flex flex-row items-center justify-start gap-8 sm:gap-16 ${
              isClient
                ? "animate-[scroll_10s_linear_infinite] hover:[animation-play-state:paused]"
                : ""
            }`}
          >
            {doubledLanguages.map((language, index) => (
              <div
                key={`${language.name}-${index}`}
                className="flex flex-col items-center justify-center flex-shrink-0 group"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 mb-2 sm:mb-4 relative transition-transform duration-300 group-hover:scale-110">
                  <Image
                    src={language.icon}
                    alt={`${language.name} logo`}
                    width={64}
                    height={64}
                    className="object-contain w-full h-full"
                    priority={index < 4} // Prioritize loading first few images
                  />
                </div>
                <p className="text-[#ADB7BE] text-sm sm:text-base whitespace-nowrap">
                  {language.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageCarousel;