"use client";
import styles from "./projects.module.scss";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import { useMediaQuery } from "@custom-react-hooks/all";
import { motion } from "framer-motion";

export default function Projects() {
  const isMobile = useMediaQuery("(max-width: 767px)");

  const projects = [
    {
      projectName: "Portfolio",
      projectDetails:
        "My personal portfolio is a project that tells a bit about who i am and provides a comprehensive overview of my capabilities while highlighting some selected projects.",
      toolsUsed: [
        "/images/skills_png/next.svg",
        "/images/skills_png/framermotion.svg",
        "/images/skills_png/sass.svg",
      ],
      projectSrc: "",
      x: -150,
    },
    {
      projectName: "Elpatronics",
      projectDetails:
        "An e-commerce website demonstrating end-to-end shopping experience, including user registration, login authentication, payments via PayPal or Visa checkout, order tracking, and email confirmations.",
      toolsUsed: [
        "/images/skills_png/react.svg",
        "/images/skills_png/firebase.svg",
        "/images/skills_png/mongodb.svg",
        "/images/skills_png/express.svg",
        "/images/skills_png/nodejs.svg",
      ],
      projectSrc: "elpatronics.png",
      x: isMobile ? 150 : -150,
    },
    {
      projectName: "Tinny Sitters",
      projectDetails:
        "A babysitter booking web app where users can browse sitters, make bookings, and securely pay via PayPal. It also includes seamless signup, signin, and order confirmation.",
      toolsUsed: [
        "/images/skills_png/react.svg",
        "/images/skills_png/firebase.svg",
        "/images/skills_png/mongodb.svg",
        "/images/skills_png/express.svg",
        "/images/skills_png/nodejs.svg",
      ],
      projectSrc: "tinnysitters.png",
      x: isMobile ? -150 : 150,
    },
    {
      projectName: "Arith-magics",
      projectDetails:
        "A web application for math enthusiasts, enabling users to conduct both simple and semi-complex mathematical operations, as well as indulge in random math quotes.",
      toolsUsed: ["/images/skills_png/react.svg"],
      projectSrc: "arithmatician.png",
      x: 150,
    },
    {
      projectName: "JSArrayPlayGround",
      projectDetails: "An application that visualizes array operations.",
      toolsUsed: ["/images/skills_png/react.svg"],
      projectSrc: "",
      x: -150,
    },
    {
      projectName: "Employee Portal",
      projectDetails:
        "A frontend application form managing employer information. Functionalities include create, view, update, and delete employee profiles within the portal.",
      toolsUsed: ["/images/skills_png/react.svg"],
      projectSrc: "",
      x: isMobile ? 150 : -150,
    },
    {
      projectName: "Movie App",
      projectDetails:
        "A two-day hackathon project dedicated to fetching data from a movie API, storing it in a database, and presenting it to users. Alongside browsing movies, users can add likes to their favorites.",
      toolsUsed: [
        "/images/skills_png/react.svg",
        "/images/skills_png/mongodb.svg",
        "/images/skills_png/express.svg",
        "/images/skills_png/nodejs.svg",
      ],
      projectSrc: "",
      x: isMobile ? -150 : 150,
    },
    {
      projectName: "FlickerFeed",
      projectDetails:
        "A web application showcasing captivating images sourced from Flickr's public feed. Users can also search for specific images and discover related photos tailored to their input. +",
      toolsUsed: [
        "/images/skills_png/next.svg",
        "/images/skills_png/tailwind.svg",
      ],
      projectSrc: "flickrfeed.png",
      x: 150,
    },
  ];
  return (
    <main className={styles.main_container}>
      <motion.p
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        exit={{ opacity: 0, x: -100 }}
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
          >
            {project.toolsUsed.map((tool, index) => (
              <img key={index} src={tool} alt="tool" />
            ))}
          </ProjectCard>
        ))}
      </div>
    </main>
  );
}
