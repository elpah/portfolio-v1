"use client";
import styles from "./projects.module.scss";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import { useMediaQuery } from "@custom-react-hooks/all";
import { motion } from "framer-motion";

export default function Projects() {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const projects = [
    {
      projectName: "ZaurAutos",
      projectDetails:
        "A fully-featured MERN stack (MongoDB, Express.js, React.js, Node.js) web application developed for a car company. Features include multi-language support and car filtering based on parameters such as price, make, model, and URL search parameters.",
      toolsUsed: [
        { tool_img: "/images/skills_png/react.svg", tool_name: "React" },
        { tool_img: "/images/skills_png/sass.svg", tool_name: "Sass" },
        { tool_img: "/images/skills_png/express.svg", tool_name: "Express" },
        { tool_img: "/images/skills_png/nodejs.svg", tool_name: "Node.js" },
        { tool_img: "/images/skills_png/mongodb.svg", tool_name: "MongoDB" },
      ],
      projectSrc: "zaurautos.webp",
      x: -100,
      liveLink: "https://www.zaurautos.com/",
      githubLink: "https://github.com/elpah/autosnl",
    },
    {
      projectName: "ZaurAutos-Admin",
      projectDetails:
        "A full-stack application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) for managing the ZaurAutos car platform. Key features include user authentication, and the ability to add, edit, view, and delete cars.",
      toolsUsed: [
        { tool_img: "/images/skills_png/react.svg", tool_name: "React" },
        { tool_img: "/images/skills_png/express.svg", tool_name: "Express" },
        { tool_img: "/images/skills_png/nodejs.svg", tool_name: "Node.js" },
        { tool_img: "/images/skills_png/mongodb.svg", tool_name: "MongoDB" },
      ],
      projectSrc: "autosnl-dashboard.webp",
      x: -100,
      liveLink: "https://github.com/elpah/autosnl-admin",
      githubLink: "https://github.com/elpah/autosnl-admin",
    },
    {
      projectName: "Bridge Benter Center",
      projectDetails:
        "A website built using the MERN Stack (React.js, Node.js, strapi) for a Dutch-based NGO",
      toolsUsed: [
        { tool_img: "/images/skills_png/react.svg", tool_name: "React" },
        { tool_img: "/images/skills_png/nodejs.svg", tool_name: "Node.js" },
      ],
      projectSrc: "bridgebrightcenter-cover.webp",
      x: -100,
      liveLink: "https://bridgebrightcenter.nl/",
    },

    {
      projectName: "LoveLifeCoach",
      projectDetails:
        "A user-friendly website designed and created for a counsellor to connect with clients, showcase their services, and provide valuable resources for personal growth and support.",
      toolsUsed: [
        { tool_img: "/images/skills_png/next.svg", tool_name: "Next.js" },
        {
          tool_img: "/images/skills_png/framermotion.svg",
          tool_name: "Framer Motion",
        },
        { tool_img: "/images/skills_png/sass.svg", tool_name: "Sass" },
      ],
      projectSrc: "lovelifecoach.webp",
      x: -100,
      liveLink: "https://kofiasiedu.com/",
      githubLink: "https://github.com/elpah/lovelifecoach/",
    },
    {
      projectName: "Portfolio",
      projectDetails:
        "My personal portfolio is a project that tells a bit about who i am and provides a comprehensive overview of my capabilities while highlighting some selected projects.",
      toolsUsed: [
        { tool_img: "/images/skills_png/next.svg", tool_name: "Next.js" },
        {
          tool_img: "/images/skills_png/framermotion.svg",
          tool_name: "Framer Motion",
        },
        { tool_img: "/images/skills_png/sass.svg", tool_name: "Sass" },
      ],
      projectSrc: "portfolio.webp",
      x: 100,
      liveLink: "https://www.elpachrisobeng.com/projects",
      githubLink: "https://github.com/elpah/portfolio",
    },
    {
      projectName: "Elpatronics",
      projectDetails:
        "An e-commerce website demonstrating the shopping process, including user registration, login authentication, payments via PayPal or Visa, order tracking, and email confirmations.",
      toolsUsed: [
        { tool_img: "/images/skills_png/react.svg", tool_name: "React" },
        { tool_img: "/images/skills_png/firebase.svg", tool_name: "Firebase" },
        { tool_img: "/images/skills_png/mongodb.svg", tool_name: "MongoDB" },
        { tool_img: "/images/skills_png/express.svg", tool_name: "Express" },
        { tool_img: "/images/skills_png/nodejs.svg", tool_name: "Node.js" },
      ],
      projectSrc: "elpatronics.webp",
      x: 100,
      liveLink: "https://elpahtronics.vercel.app/",
      githubLink: "https://github.com/elpah/Elpahtronics",
    },
    {
      projectName: "Tinny Sitters",
      projectDetails:
        "A babysitter booking web app where users can browse sitters, make bookings, and securely pay via PayPal. It also includes seamless signup, signin, and order confirmation.",
      toolsUsed: [
        { tool_img: "/images/skills_png/react.svg", tool_name: "React" },
        { tool_img: "/images/skills_png/redux.svg", tool_name: "Redux" },
        { tool_img: "/images/skills_png/firebase.svg", tool_name: "Firebase" },
        { tool_img: "/images/skills_png/mongodb.svg", tool_name: "MongoDB" },
        { tool_img: "/images/skills_png/express.svg", tool_name: "Express" },
        { tool_img: "/images/skills_png/nodejs.svg", tool_name: "Node.js" },
      ],
      projectSrc: "tinnysitters.webp",
      x: -100,
      liveLink: "https://tinysitters.vercel.app/",
      githubLink: "https://github.com/elpah/tiny-sitters",
    },
    {
      projectName: "Employee Portal",
      projectDetails:
        "A frontend application for managing employer information. Functionalities include create, view, update, and delete employee profiles within the portal.",
      toolsUsed: [
        { tool_img: "/images/skills_png/react.svg", tool_name: "React" },
      ],
      projectSrc: "employeeportal.webp",
      x: 100,
      liveLink: "https://employee-portal-iota.vercel.app/",
      githubLink: "https://github.com/elpah/employee-portal",
    },
  ];
  return (
    <main className={styles.main_container}>
      <motion.p
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1 }}
        className={styles.badge}
      >
        🚀Projects...
      </motion.p>
      <div className={styles.project_card_container}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            x={project.x}
            projectName={project.projectName}
            projectDetails={project.projectDetails}
            projectSrc={project.projectSrc}
            githubLink={project.githubLink}
            liveLink={project.liveLink}
            toolsUsed={project.toolsUsed}
          ></ProjectCard>
        ))}
      </div>
    </main>
  );
}
