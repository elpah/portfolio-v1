"use client";
import styles from "./about.module.scss";
import Skill from "@/components/Skill/Skill";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useMediaQuery } from "@custom-react-hooks/all";
import { useEffect } from "react";

export default function Aboutpage() {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const animation = useAnimation();

  const threshold = isMobile ? 0.2 : 0.5;
  const { ref: aboutHeaderRef, inView: aboutHeaderInView } = useInView({
    triggerOnce: true,
    threshold: threshold,
  });
  const { ref: aboutIntroRef, inView: aboutIntroInView } = useInView({
    triggerOnce: true,
    threshold: threshold,
  });
  const { ref: skillsHeaderRef, inView: skillsHeaderInView } = useInView({
    triggerOnce: true,
    threshold: threshold,
  });

  const { ref: skillItemRef, inView: skillItemInView } = useInView({
    triggerOnce: true,
    threshold: threshold,
  });
  const skills = [
    { skillName: "Next.js", imageSrc: "next.svg" },
    { skillName: "React", imageSrc: "react.svg" },
    { skillName: "Typescript", imageSrc: "typescript.svg" },
    { skillName: "Javascript", imageSrc: "js.png" },
    { skillName: "C", imageSrc: "c.svg" },
    { skillName: "C++", imageSrc: "cpp.svg" },
    { skillName: "Python", imageSrc: "python.svg" },
    { skillName: "Node.js", imageSrc: "nodejs.svg" },
    { skillName: "MongoDB", imageSrc: "mongodb.svg" },
    { skillName: "MySql", imageSrc: "sql.svg" },
    { skillName: "Express", imageSrc: "express.svg" },
    { skillName: "Firebase", imageSrc: "firebase.svg" },
    { skillName: "Tailwind", imageSrc: "tailwind.svg" },
    { skillName: "Sass", imageSrc: "sass.svg" },
  ];

  return (
    <section className={styles.main_container} id="about">
      <motion.p
        ref={aboutHeaderRef}
        initial={{ opacity: 0, y: 50 }}
        animate={
          aboutHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
        }
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        className={styles.badge}
      >
        🔗About me...
      </motion.p>
      <motion.section
        className={styles.about_me}
        ref={aboutIntroRef}
        initial={{ opacity: 0, y: 50 }}
        animate={
          aboutIntroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
        }
        transition={{
          duration: 0.6,
          delay: 0.2,
          ease: "easeOut",
        }}
      >
        <h2 className={styles.header}>Introduction.</h2>
        <p className={styles.paragraph}>
          🎓 Graduated with a Bachelor&apos;s degree in Computer Engineering from
          KhNURE - Kharkiv, Ukraine and Software Engineering from 42 Wolfsburg -
          Wolfsburg, Germany
          <br />
          <br />
          👨‍💻 I specialize in building user-friendly frontend interfaces and
          robust backend applications using technologies such as React.js,
          Next.js, Node.js, Express, TypeScript, and Python.
          <br />
          <br />
          🚀 Committed to continual growth, I strive to improve my technical
          skills daily through continous learning and, staying updated with
          emerging technologies and best practices.
          <br />
          <br />
          🕒 In my free time, I enjoy playing video games, the piano and
          saxophone, and occasionally playing hockey.
          <br />
          <br />
          👨🏾‍💼 I am open to new opportunities where I can contribute my expertise.
          Feel free to reach out if you have an exciting opportunity to discuss!
        </p>
      </motion.section>

      <section className={styles.skills}>
        <motion.p
          ref={skillsHeaderRef}
          initial={{ opacity: 0, y: 50 }}
          animate={
            skillsHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
          }
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className={`${styles.badge} ${styles.badge_skills}`}
        >
          🛠️Skills...
        </motion.p>
        <motion.div animate={animation} className={styles.skills_container}>
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              ref={skillItemRef}
              initial={{ opacity: 0, y: 50 }}
              animate={
                skillItemInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
              }
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut",
              }}
            >
              <Skill
                imageSrc={`/images/skills_png/${skill.imageSrc}`}
                skillName={skill.skillName}
              />
            </motion.div>
          ))}
        </motion.div>
        <img
          className={styles.skills_image}
          src="/images/skills.webp"
          alt="skills-image"
        />
      </section>
    </section>
  );
}
