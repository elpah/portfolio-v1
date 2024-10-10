"use client";
import React, {useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";
import localFont from "next/font/local";
import styles from "./navbar.module.scss";

const myfont = localFont({ src: "../../fonts/AnkhSanctuary-nROx4.ttf" });

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  const handleListItemClick = () => {
    setIsOpen(false);
  };

  return (
    <header className={styles.nav_cover}>
    <nav className={styles.container}>
      <Link  href={"/"} ><motion.div
        initial={{ opacity: 0, x: -150 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className={styles.logo_container}
      >
        <img
          className={styles.logo_container_img}
          src="/images/logo_icon.png"
          alt="Image"
        />
        <h2 style={myfont.style} className={styles.logo_container_name}>
          EL-PACHRIS
        </h2>
      </motion.div>
      </Link>
      <motion.ul
        initial={{ opacity: 0, x: 150 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className={`${isOpen ? `${styles.display} ${styles.container_list}` : `${styles.container_list}`}`}
      >
        <Link href={"/"}>
          <li
            className={styles.container_list_items}
            onClick={handleListItemClick}
          >
            HOME
          </li>
        </Link>
        <Link href={"/about"}>
          <li
            className={styles.container_list_items}
            onClick={handleListItemClick}
          >
            ABOUT
          </li>
        </Link>
        <Link href={"/projects"}>
          <li
            className={styles.container_list_items}
            onClick={handleListItemClick}
          >
            PROJECTS
          </li>
        </Link>
        <Link href={"/contact"}>
          <li
            className={styles.container_list_items}
            onClick={handleListItemClick}
          >
            CONTACT
          </li>
        </Link>
      </motion.ul>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className={styles.container_hamburger}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </motion.div>
    </nav>
    </header>
  );
}
