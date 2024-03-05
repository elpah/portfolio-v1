"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Badge from "@/components/Badge/Badge";
import PacmanLoader from "react-spinners/ClipLoader";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import React from "react";
// import { useMediaQuery } from '@react-hook/media-query';


export default function Home() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {/* {loading ? (
          <PacmanLoader
          color="red"
           />
      ) : ( */}
      {/* <AnimatePresence> */}
        <motion.div className={styles.main_container}>
          <motion.div
          initial={{ opacity: 0, x: -150 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className={styles.image_container}>
            <Image
              className={styles.image}
              src="/images/pp.jpg"
              alt="cartoon-image"
              width={100}
              height={100}
            />
          </motion.div>
          <div className={styles.intro_container}>
            <motion.p
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className={styles.badge}
            >
              👋🏽 Hello Real World...
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, x: 150 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className={styles.intro_name}
            >
              El-Pachris Obeng,
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 1.5 }}
              className={styles.intro_sentence}
            >
              A fullstack Javascript developer dedicated to crafting elegant,
              responsive and user-friendly web applications.
            </motion.p>
            <motion.div className={styles.cv_container}>
              <div className={styles.cv_container_2}>
                <div>Download CV</div>
                <Image
                  height={20}
                  width={20}
                  src="/images/download-icon.svg"
                  alt="download icon"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      {/* </AnimatePresence> */}
    </>
  );
}
