
import styles from "./skill.module.scss"
type SkillProp ={
    skillName:string
    imageSrc:string;
}
export default function Skill({skillName,imageSrc}:SkillProp) {
  return (
    <div className={styles.skills_container}>
        <img className={styles.skills_image} src={imageSrc} alt={skillName} />
    </div>
  )
}
