"use client";
import styles from "./projects.module.scss";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import { useMediaQuery } from "@custom-react-hooks/all";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

export default function Projectspage() {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const [category, setCategory] = useState("all");
  const threshold = isMobile ? 0.2 : 0.5;
  const { ref: headerRef, inView: headerInView } = useInView({
    triggerOnce: true,
    threshold: threshold,
  });
  const { ref: catRef, inView: catInview } = useInView({
    triggerOnce: true,
    threshold: threshold,
  });

  const projects = [
    {
      category: "web",
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
      liveLink: "https://www.zaurautos.com/",
      githubLink: "https://github.com/elpah/autosnl",
    },
    {
      category: "web",
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
      githubLink: "https://github.com/elpah/autosnl-admin",
    },
    {
      category: "python",
      projectName: "Sys Health Checker",
      projectDetails:
        "A Python script to monitor system health by checking disk usage and CPU usage, with logging and configurable thresholds.",
      toolsUsed: [
        { tool_img: "/images/skills_png/python.svg", tool_name: "Python" },
      ],
      projectSrc: "python_sys.webp",
      githubLink: "https://github.com/elpah/python-system-health-checker",
    },
    {
      category: "web",
      projectName: "Bridge Benter Center",
      projectDetails:
        "A website built using the MERN Stack (React.js, Node.js, strapi) for a Dutch-based NGO",
      toolsUsed: [
        { tool_img: "/images/skills_png/react.svg", tool_name: "React" },
        { tool_img: "/images/skills_png/nodejs.svg", tool_name: "Node.js" },
      ],
      projectSrc: "bridgebrightcenter-cover.webp",
      liveLink: "https://bridgebrightcenter.nl/",
    },
    {
      category: "c",
      projectName: "So Long",
      projectDetails:
        "A 2D game built in C programming language using MiniLibX. A player navigate a custom map, collect items, and reaches the goal (exit). This project focuses on core game dev concepts like map parsing, sprite rendering, and interactive controls.",
      toolsUsed: [
        { tool_img: "/images/skills_png/c.svg", tool_name: "C Programming" },
        { tool_name: "Minilibx" },
      ],
      projectSrc: "so_long.webp",
      githubLink: "https://github.com/elpah/so_long",
    },
    {
      category: "c",
      projectName: "Minitalk",
      projectDetails:
        "Minitalk is an inter-process communication (IPC) project using Unix signals. It involves creating a client-server communication system where the client sends a string to the server via signals, and the server processes and prints the received message.",
      toolsUsed: [
        { tool_img: "/images/skills_png/c.svg", tool_name: "C Programming" },
      ],
      projectSrc: "minitalk.webp",
      githubLink: "https://github.com/elpah/minitalk",
    },
    {
      category: "web",
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
      liveLink: "https://kofiasiedu.com/",
      githubLink: "https://github.com/elpah/lovelifecoach/",
    },
    {
      category: "web",
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
      liveLink: "https://www.elpachrisobeng.com/projects",
      githubLink: "https://github.com/elpah/portfolio",
    },
    {
      category: "web",
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
      liveLink: "https://elpahtronics.vercel.app/",
      githubLink: "https://github.com/elpah/Elpahtronics",
    },
    {
      category: "c",
      projectName: "Libft",
      projectDetails:
        " A custom C standard library recreated from scratch, implementing essential functions for memory handling, string manipulation, linked lists, and more as part of the 42 curriculum.",
      toolsUsed: [
        { tool_img: "/images/skills_png/c.svg", tool_name: "C Programming" },
      ],
      projectSrc: "libft.webp",
      githubLink: "https://github.com/elpah/minitalk",
    },
    {
      category: "web",

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
      liveLink: "https://tinysitters.vercel.app/",
      githubLink: "https://github.com/elpah/tiny-sitters",
    },
    {
      category: "web",

      projectName: "Employee Portal",
      projectDetails:
        "A frontend application for managing employer information. Functionalities include create, view, update, and delete employee profiles within the portal.",
      toolsUsed: [
        { tool_img: "/images/skills_png/react.svg", tool_name: "React" },
      ],
      projectSrc: "employeeportal.webp",
      liveLink: "https://employee-portal-iota.vercel.app/",
      githubLink: "https://github.com/elpah/employee-portal",
    },
  ];
  const categories = [
    { key: "all", label: "All Projects" },
    { key: "web", label: "Web Development" },
    { key: "python", label: "Python Automation" },
    { key: "c", label: "C Programming" },
  ];
  return (
    <section className={styles.main_container} id="projects">
      <motion.p
        ref={headerRef}
        initial={{ opacity: 0, y: 50 }}
        animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        className={styles.badge}
      >
        🚀Projects...
      </motion.p>
      <div className={styles.category_container}>
        {categories.map(({ key, label }, index) => (
          <motion.div
            ref={catRef}
            initial={{ opacity: 0, y: 50 }}
            animate={catInview ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{
              duration: 0.6,
              delay: 0.2 * index,
              ease: "easeOut",
            }}
            key={key}
            className={`${styles.category_item} ${
              category === key ? styles.category : ""
            }`}
            onClick={() => setCategory(key)}
          >
            {label}
          </motion.div>
        ))}
      </div>
      <div className={styles.project_card_container}>
        {projects
          .filter(
            (project) => category === "all" || project.category === category
          )
          .map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: index % 2 != 0 ? 0.2 : 0,
                ease: "easeOut",
              }}
            >
              <ProjectCard
                projectName={project.projectName}
                projectDetails={project.projectDetails}
                projectSrc={project.projectSrc}
                githubLink={project.githubLink}
                liveLink={project.liveLink}
                toolsUsed={project.toolsUsed}
              ></ProjectCard>
            </motion.div>
          ))}
      </div>
    </section>
  );
}
