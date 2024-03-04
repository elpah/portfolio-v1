import Image from "next/image";
import styles from "./projects.module.scss"
import Badge from "@/components/Badge/Badge";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
export default function Projects() {
  return (
    <main className={styles.main_container}>
    <Badge text="🚀Projects..." className={styles.badge}/>
    <div className={styles.project_card_container}>
      <ProjectCard/>
      <ProjectCard/>
      <ProjectCard/>
      <ProjectCard/>
      <ProjectCard/>
      <ProjectCard/>
      <ProjectCard/>
    </div>
    </main>
  );
}
