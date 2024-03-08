import Image from "next/image";
import styles from "./projects.module.scss";
import Badge from "@/components/Badge/Badge";
import ProjectCard from "@/components/ProjectCard/ProjectCard";

export default function Projects() {
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
        ],    },
    {
      projectName: "Arith-magics",
      projectDetails:
        "A web application for math lovers that allows users to perform semi-complex and simple math operations, or read random math quotes ",
      toolsUsed: [   "/images/skills_png/react.svg",
     ],
    },
    {
      projectName: "JSArrayPlayGround",
      projectDetails: "An application that visualizes array operations.",
      toolsUsed:          [ "/images/skills_png/react.svg",
]
    },
    {
      projectName: "Employee Portal",
      projectDetails:
        "A frontend application that performs displays a list of employers. It allows a user to create, read update and delete employees from the portal. ",
      toolsUsed: [ "/images/skills_png/react.svg"],
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
        ],    },
    {
      projectName: "FlickerFeed",
      projectDetails:
        "A web application that allows a user to search for data from the flicker public feed and displays it to the user.",
        toolsUsed: [
          "/images/skills_png/next.svg",
          "/images/skills_png/tailwind.svg",

        ]},

  ];
  return (
    <main className={styles.main_container}>
      <Badge text="🚀Projects..." className={styles.badge} />
      <div className={styles.project_card_container}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            projectName={project.projectName}
            projectDetails={project.projectDetails}
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
