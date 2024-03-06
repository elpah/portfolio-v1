"use client" 
import Badge from "@/components/Badge/Badge";
import Image from "next/image";
import styles from "./about.module.scss";
import Skill from "@/components/Skill/Skill";
import { motion } from "framer-motion";
import { useMediaQuery } from '@custom-react-hooks/all';



export default function About() {
  
  const isMobile = useMediaQuery('(max-width: 767px)');

  const skills = [
    {skillName: "next", imageSrc: "next.svg"},
    {skillName: "react", imageSrc: "react.svg"},
    { skillName: "typescript", imageSrc: "typescript.svg" },
    { skillName: "javascript", imageSrc: "js.png" },
    { skillName: "c", imageSrc: "c.svg" },
    { skillName: "c++", imageSrc: "cpp.png" },
    { skillName: "powershell", imageSrc: "shell.svg" },
    { skillName: "git", imageSrc: "git.svg" },
    { skillName: "nodejs", imageSrc: "nodejs.svg" },
    { skillName: "mongodb", imageSrc: "mongodb.svg" },
    { skillName: "mysql", imageSrc: "sql.svg" },
    { skillName: "express", imageSrc: "express.svg" },
    { skillName: "firebase", imageSrc: "firebase.svg" },
    { skillName: "framermotion", imageSrc: "framermotion.svg" },
    { skillName: "figma", imageSrc: "figma.svg" },
    { skillName: "tailwind", imageSrc: "tailwind.svg" },
    { skillName: "sass", imageSrc: "sass.svg" },
    { skillName: "html", imageSrc: "html5.svg" },
    { skillName: "css", imageSrc: "css.svg" },
  ];

  return (
    <main className={styles.main_container}>


      <motion.p 
      initial={{ opacity: 0, x: isMobile? 150: 0, y: isMobile? 0 : -50 }}
      animate={{ opacity: 1, x:0, y: 0}}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 1 }}
      className={styles.badge} >🔗About me...</motion.p>
      <section className={styles.about_me}>
        <h2 className={styles.header}>Introduction.</h2>
        <p className={styles.paragraph}>
          🎓 Graduated in Computer Engineering in 2022. <br /> <br />
          👨‍💻 Over 2 years of experience in developing and programming interfaces
          with JavaScript, React JS, and TypeScript, focusing on both front and
          backend development. <br />
          <br />
          💡 Particularly interested in mastering technologies like React,
          Next.js, Node.js, and Express for building robust and scalable
          applications. <br /> <br />
          🚀 Every day, my goal is to enhance my skills and capabilities,
          pushing myself to exceed yesterday's accomplishments in both front and
          backend development.
          <br /> <br />
          👨🏾‍💼I'm open to Job opportunities where I can contribute, learn and
          grow. If you have a good opportunity that matches my skills and
          experience then don't hesitate to contact me.
        </p>
      </section>

      <section className={styles.skills}>
      <Badge className={styles.badge} text="🛠️Skills..." />
        <div className={styles.skills_container}>
          {skills.map((skill, index) => (
            <Skill
              key={index} 
              imageSrc={`/images/skills_png/${skill.imageSrc}`} 
              skillName={skill.skillName}
            />
          ))}
        </div>
        <img
          className={styles.skills_image}
          src="/images/skills.png"
          alt="skills-image"
        />
      </section>
    </main>
  );
}
