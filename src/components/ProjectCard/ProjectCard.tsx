import styles from "./project-card.module.scss"
export default function ProjectCard() {
  return (
    <div className={styles.card_container}>
        <div>
            <p>featured project</p>
            <h2></h2>
            <div className={styles.about_project}></div>
            <div className={styles.tools_used}></div>
        </div>
        <div></div>
    </div>
  )
}
