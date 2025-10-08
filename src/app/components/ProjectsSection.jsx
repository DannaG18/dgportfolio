"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Services Portfolio - Gabriela Ortiz",
    description: "Development and branding of a portfolio of services for a Colombian fashion designer and influencer",
    image: "/images/projects/gabriela-portfolio.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/DannaG18/go_website",
    previewUrl: "https://gabriela-go.netlify.app/",
  },
    {
    id: 2,
    title: "Services Portfolio - Danna Alvarez",
    description: "Development of a portfolio of services for a Colombian web developer",
    image: "/images/projects/webfreelance.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/DannaG18/personalwebsite",
    previewUrl: "https://dg18.netlify.app/",
  },
  {
    id: 3,
    title: "Full-stack PrestService",
    description: "Manager and Client Interface",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/DannaG18/Service-Companies",
    
  },
  {
    id: 4,
    title: "Electrical Sales Management",
    description: "Login, CRUD Operation, Invoice generator",
    image: "/images/projects/4.png",
    tag: ["All", "Java"],
    gitUrl: "https://github.com/DannaG18/Electrical-Sales-Management",
    
  },
  {
    id: 5,
    title: "Web Design",
    description: "Responsive web designs",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/DannaG18/landingpagess",
    previewUrl: "https://dannag18.github.io/landingpagess/landingpages-main/index.html",
  },
  {
    id: 6,
    title: "Pepita's Clothing",
    description: "Production cost calculator for product lines",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/DannaG18/proyecto-confecciones",
    previewUrl: "https://confeccionesproyecto.netlify.app/Home",
  },
  {
    id: 7,
    title: "Logistics Database",
    description: "SQL Operation",
    image: "/images/projects/2.png",
    tag: ["All", "Database"],
    gitUrl: "https://github.com/DannaG18/Logistics",
    
  },
  {
    id: 8,
    title: "Burger Website",
    description: "Responsive website, dropdown menu",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/DannaG18/Burger-Mission",
    previewUrl: "https://dannag18.github.io/Burger-Mission/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-wrap justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Database"
          isSelected={tag === "Database"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Java"
          isSelected={tag === "Java"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
