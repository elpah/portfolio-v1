import Image from "next/image";
import styles from "./projects.module.scss";
import Badge from "@/components/Badge/Badge";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
export default function Projects() {
  const Projects = [
    {
      projectName: "Portfolio",
      projectAbout: "",
      toolsUsed: ["", "", "", "", ""],
    },
    {
      projectName: "Elpatronics",
      projectAbout: "",
      toolsUsed: ["", "", "", "", ""],
    },
    {
      projectName: "Tinny Sitters",
      projectAbout: "",
      toolsUsed: ["", "", "", "", ""],
    },
    {
      projectName: "Arith-magics",
      projectAbout: "",
      toolsUsed: ["", "", "", "", ""],
    },
    {
      projectName: "JSArrayPlayGround",
      projectAbout: "",
      toolsUsed: ["", "", "", "", ""],
    },
    {
      projectName: "Employee Portal",
      projectAbout: "",
      toolsUsed: ["", "", "", "", ""],
    },
    {
      projectName: "Movie App",
      projectAbout: "",
      toolsUsed: ["", "", "", "", ""],
    },
    {
      projectName: "FlickerFeed",
      projectAbout: "",
      toolsUsed: ["", "", "", "", ""],
    },
    {
      projectName: "Elpatronics",
      projectAbout: "",
      toolsUsed: ["", "", "", "", ""],
    },
    {
      projectName: "Elpatronics",
      projectAbout: "",
      toolsUsed: ["", "", "", "", ""],
    },
  ];
  return (
    <main className={styles.main_container}>
      <Badge text="🚀Projects..." className={styles.badge} />
      <div className={styles.project_card_container}>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </main>
  );
}
