import ProjectDetails from "./ProjectDetails";
import ProjectImage from "./ProjectImage";
import styles from "./project-card.module.scss";
export default function ProjectCard() {
  return (
    <div className={styles.card_container}>
      <ProjectDetails/>
      <ProjectImage/>
    </div>
  );
}
