import styles from "./skill.module.scss";
import { motion } from "framer-motion";

type SkillProp = {
  skillName: string;
  imageSrc: string;
};

export default function Skill({ skillName, imageSrc }: SkillProp) {
  return (
    <motion.div className={styles.skills_container}>
      <img className={styles.skills_image} src={imageSrc} alt={skillName} />
      <p className={styles.skill_name}>{skillName}</p>
    </motion.div>
  );
}
