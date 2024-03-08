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
        "My portfolio project that tells a bit about who i am and showcases some of my projects",
      toolsUsed: [
        "/images/skills_png/next.svg",
        "/images/skills_png/framermotion.svg",
        "/images/skills_png/sass.svg",
      ],
      projectSrc:"",
      x: -150,
    },
    {
      projectName: "Elpatronics",
      projectDetails:
        " A non commercial ecommerce website that demonstrates the online shopping process. Inluding features like signup, signin, paypal or visa checkout, find order and email confirmations.",
      toolsUsed: [
        "/images/skills_png/react.svg",
        "/images/skills_png/firebase.svg",
        "/images/skills_png/mongodb.svg",
        "/images/skills_png/express.svg",
        "/images/skills_png/nodejs.svg",
      ],
      projectSrc:"elpatronics.png",
      x: isMobile? 150 : -150,
    },
    {
      projectName: "Tinny Sitters",
      projectDetails:
        "An Application that allows users to book a baby sitter. ",
      toolsUsed: [
        "/images/skills_png/react.svg",
        "/images/skills_png/firebase.svg",
        "/images/skills_png/mongodb.svg",
        "/images/skills_png/express.svg",
        "/images/skills_png/nodejs.svg",
      ],
      projectSrc:"tinnysitters.png",
      x: isMobile? -150 : 150,
    },
    {
      projectName: "Arith-magics",
      projectDetails:
        "A web application for math lovers that allows users to perform semi-complex and simple math operations, or read random math quotes ",
      toolsUsed: ["/images/skills_png/react.svg"],
      projectSrc:"arithmatician.png",
      x: 150,
    },
    {
      projectName: "JSArrayPlayGround",
      projectDetails: "An application that visualizes array operations.",
      toolsUsed: ["/images/skills_png/react.svg"],
      projectSrc:"",
      x: -150,
    },
    {
      projectName: "Employee Portal",
      projectDetails:
        "A frontend application that performs displays a list of employers. It allows a user to create, read update and delete employees from the portal. ",
      toolsUsed: ["/images/skills_png/react.svg"],
      projectSrc:"",
       x: isMobile? 150 : -150,

    },
    {
      projectName: "Movie App",
      projectDetails:
        "A two day hackathon project project for fetching data from movie api, store in database and displays to user. allows users to also add likes to movie",
      toolsUsed: [
        "/images/skills_png/react.svg",
        "/images/skills_png/mongodb.svg",
        "/images/skills_png/express.svg",
        "/images/skills_png/nodejs.svg",
      ],
      projectSrc:"",
      x: isMobile? -150 : 150,

    },
    {
      projectName: "FlickerFeed",
      projectDetails:
        "A web application that allows a user to search for data from the flicker public feed and displays it to the user.",
      toolsUsed: [
        "/images/skills_png/next.svg",
        "/images/skills_png/tailwind.svg",
      ],
      projectSrc:"flickrfeed.png",
      x: 150,
    },
  ];
  return (
    <main className={styles.main_container}>
      <motion.p
        initial={{ opacity: 0,  y: -50 }}
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
            projectSrc ={project.projectSrc}
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
