import Image from "next/image";
import styles from "./projects.module.scss";
import Badge from "@/components/Badge/Badge";
import ProjectCard from "@/components/ProjectCard/ProjectCard";

export default function Projects() {
  const projects = [
    {
      projectName: "Portfolio",
      projectDetails: "My portfolio project that tells a bit about who i am and showcases some of my projects",
      toolsUsed: ["", "", "", "", ""],
    },
    {
      projectName: "Elpatronics",
      projectDetails: " A non commercial ecommerce website that demonstrates the online shopping process. Inluding features like signup, signin, paypal or visa checkout, find order and email confirmations.",
      toolsUsed: ["", "", "", "", ""],
    },
    {
      projectName: "Tinny Sitters",
      projectDetails: "An Application that allows users to book a baby sitter. ",
      toolsUsed: ["", "", "", "", ""],
    },
    {
      projectName: "Arith-magics",
      projectDetails: "A web application for math lovers that allows users to perform semi-complex and simple math operations, or read random math quotes ",
      toolsUsed: ["", "", "", "", ""],
    },
    {
      projectName: "JSArrayPlayGround",
      projectDetails: "An application that visualizes array operations.",
      toolsUsed: ["", "", "", "", ""],
    },
    {
      projectName: "Employee Portal",
      projectDetails: "A frontend application that performs displays a list of employers. It allows a user to create, read update and delete employees from the portal. ",
      toolsUsed: ["", "", "", "", ""],
    },
    {
      projectName: "Movie App",
      projectDetails: "A two day hackathon project project for fetching data from movie api, store in database and displays to user. allows users to also add likes to movie",
      toolsUsed: ["", "", "", "", ""],
    },
    {
      projectName: "FlickerFeed",
      projectDetails: "A web application that allows a user to search for data from the flicker public feed and displays it to the user.",
      toolsUsed: ["", "", "", "", ""],
    },
    {
      projectName: "Elpatronics",
      projectDetails: "",
      toolsUsed: ["", "", "", "", ""],
    },
    {
      projectName: "Elpatronics",
      projectDetails: "",
      toolsUsed: ["", "", "", "", ""],
    },
  ];
  return (
    <main className={styles.main_container}>
      <Badge text="🚀Projects..." className={styles.badge} />
      <div className={styles.project_card_container}>
        {projects.map((project,index)=> <ProjectCard key={index} projectName={project.projectName} projectDetails={project.projectDetails}>
          <img src="" alt="" />
        </ProjectCard>)}
      </div>
    </main>
  );
}
