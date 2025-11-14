"use client";

import Image from "next/image";
import styles from "./homepage.module.scss";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "@custom-react-hooks/all";
import { FaLinkedin, FaGithub, FaEnvelope, FaTelegram } from "react-icons/fa";
import Link from "next/link";

const Homepage = () => {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const [nameText, setNameText] = useState("");
  const [index, setIndex] = useState(0);
  const name = "El-Pachris Obeng";

  useEffect(() => {
    if (index < name.length) {
      const timer = setTimeout(() => {
        setNameText((prev) => prev + name.charAt(index));
        setIndex(index + 1);
      }, 50);

      return () => clearTimeout(timer);
    }
  }, [index, name]);



  return (
    <motion.section className={styles.main_container} id="homepage">
      <motion.div
        initial={{
          opacity: 0,
          x: isMobile ? 0 : -150,
          y: isMobile ? -100 : 0,
        }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1 }}
        className={styles.image_container}
      >
        <Image
          className={styles.image}
          src="/images/pp.webp"
          alt="cartoon-image"
          width={100}
          height={100}
        />
      </motion.div>
      <div className={styles.intro_container}>
        <motion.p
          initial={{
            opacity: 0,
            x: isMobile ? 150 : 0,
            y: isMobile ? 0 : -50,
          }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1 }}
          className={styles.badge}
        >
          👋🏽 Hello Real World...
        </motion.p>

        <h1 className={styles.intro_name}>
          {nameText}
          <span className={styles.cursor}></span>
        </h1>

        <motion.p
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className={styles.intro_sentence}
        >
          Software Engineering graduate and Full-Stack Developer with experience
          building end-to-end solutions for companies, startups, and SMEs, using{" "}
          <span className={styles.bold_text}>
            React, TypeScript, Next.js, Node.js, MongoDB, Python and MySQL.{" "}
          </span>{" "}
          Strong foundation in
          <span className={styles.bold_text}>
            {" "}
            C/C++, algorithms, data structures, OOP{" "}
          </span>
          and proficient in both{" "}
          <span className={styles.bold_text}>Frontend</span> and{" "}
          <span className={styles.bold_text}>backend</span> technologies.
        </motion.p>
        <motion.div
          initial={{
            opacity: 0,
            x: -100,
          }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1 }}
          className={styles.socials_container}
        >
          <Link href="https://github.com/elpah" target="_blank">
            <div className={styles.social_container}>
              <FaGithub className={styles.social} />
            </div>
          </Link>
          <Link href="https://www.linkedin.com/in/elpachris/" target="_blank">
            <div className={styles.social_container}>
              <FaLinkedin className={styles.social} />
            </div>
          </Link>
          <Link href="mailto:obengelpachris@gmail.com" target="_blank">
            <div className={styles.social_container}>
              <FaEnvelope className={styles.social} />
            </div>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Homepage;
