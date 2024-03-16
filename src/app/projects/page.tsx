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
      projectSrc: "portfolio.webp",
      x: -100,
      liveLink:"",
      githubLink:"https://github.com/elpah/portfolio"
    },
    {
      projectName: "Elpatronics",
      projectDetails:
        "An e-commerce website demonstrating the shopping process, including user registration, login authentication, payments via PayPal or Visa, order tracking, and email confirmations.",
      toolsUsed: [
        "/images/skills_png/react.svg",
        "/images/skills_png/firebase.svg",
        "/images/skills_png/mongodb.svg",
        "/images/skills_png/express.svg",
        "/images/skills_png/nodejs.svg",
      ],
      projectSrc: "elpatronics.webp",
      x: isMobile ? 100 : -100,
      liveLink:"https://elpahtronics.vercel.app/",
      githubLink:"https://github.com/elpah/Elpahtronics"
    },
    {
      projectName: "Tinny Sitters",
      projectDetails:
        "A babysitter booking web app where users can browse sitters, make bookings, and securely pay via PayPal. It also includes seamless signup, signin, and order confirmation.",
      toolsUsed: [
        "/images/skills_png/react.svg",
        "/images/skills_png/redux.svg",
        "/images/skills_png/firebase.svg",
        "/images/skills_png/mongodb.svg",
        "/images/skills_png/express.svg",
        "/images/skills_png/nodejs.svg",

      ],
      projectSrc: "tinnysitters.webp",
      x: isMobile ? -100 : 100,
      liveLink:"https://tinysitters.vercel.app/",
      githubLink:"https://github.com/elpah/tiny-sitters"
    },
    {
      projectName: "Flickr Image viewer",
      projectDetails:
        "A web application showcasing captivating images sourced from Flickr's public feed. Users can also search for specific images and discover related photos tailored to their input.",
      toolsUsed: [
        "/images/skills_png/next.svg",
        "/images/skills_png/tailwind.svg",
      ],
      projectSrc: "flickrfeed.webp",
      x: 100,
      liveLink:"https://flickr-feed-green.vercel.app/",
      githubLink:"https://github.com/elpah/flickrfeed-Nextjs"
    },
    {
      projectName: "Employee Portal",
      projectDetails:
        "A frontend application for managing employer information. Functionalities include create, view, update, and delete employee profiles within the portal.",
      toolsUsed: ["/images/skills_png/react.svg"],
      projectSrc: "employeeportal.webp",
      x: isMobile ? 100 : -100,
      liveLink:"https://employee-portal-iota.vercel.app/",
      githubLink:"https://github.com/elpah/employee-portal"
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
      projectSrc: "movie-list.webp",
      x: isMobile ? -100 : 100,
      liveLink:"https://github.com/elpah/the-movie-app",
      githubLink:"https://github.com/elpah/the-movie-app"
    },
   
    {
      projectName: "Arith-magics",
      projectDetails:
        "A web application for math enthusiasts, enabling users to conduct both simple and semi-complex mathematical operations, as well as indulge in random math quotes.",
      toolsUsed: ["/images/skills_png/react.svg"],
      projectSrc: "arithmatician.webp",
      x: 100,
      liveLink:"https://arith-magics.vercel.app/",
      githubLink:"https://github.com/elpah/Arith-Magics"
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
