"use client";
import React, {useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";


import styles from "./navbar.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(window.innerWidth > 767);
  // const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();

  const handleListItemClick = () => {
    if (window.innerWidth < 767) {
      setIsOpen(false);
    }
  };
  const handleResize = () => {
    setIsOpen(window.innerWidth > 767);
  };
  window.addEventListener("resize", handleResize);

  return (
    <nav className={styles.container}>
      <motion.div
       initial={{ opacity: 0, x: -150 }}
       animate={{ opacity: 1, x: 0 }}
       transition={{ duration: 1 }}
       className={styles.logo_container}>
        <img
          className={styles.logo_container_img}
          src="/images/pp.jpg"
          alt="Image"
        />
        <div className={styles.logo_container_name}>EL-PACHRIS OBENG</div>
      </motion.div>
      <motion.ul
      initial={{ opacity: 0, x: 150 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
        className={`${styles.container_list} ${isOpen ? styles.slideDown : ""}`}
      >
        <li
          className={styles.container_list_items}
          onClick={handleListItemClick}
        >
          <Link href={"/"}>HOME</Link>
        </li>
        <li
          className={styles.container_list_items}
          onClick={handleListItemClick}
        >
          <Link href={"/about"}>ABOUT</Link>
        </li>
        <li
          className={styles.container_list_items}
          onClick={handleListItemClick}
        >
          <Link href={"/projects"}>PROJECTS</Link>
        </li>
        <li
          className={styles.container_list_items}
          onClick={handleListItemClick}
        >
          <Link href={"/contact"}>CONTACT</Link>
        </li>
      </motion.ul>
      <motion.div
        className={styles.container_hamburger}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </motion.div>
    </nav>
  );
}
