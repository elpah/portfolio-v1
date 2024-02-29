"use client";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "./navbar.module.scss";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <nav className={styles.container}>
      <div className={styles.logo_container}>
        <img
          className={styles.logo_container_img}
          src="/images/pp.jpg"
          alt="Image"
        />
        <div className={styles.logo_container_name}>EL-PACHRIS OBENG</div>
      </div>
      {isOpen && (
        <ul
          className={styles.container_list}
        >
          <li className={styles.container_list_items}>
            <Link href={"/"}>HOME</Link>
          </li>
          <li className={styles.container_list_items}>
            <Link href={"/about"}>ABOUT</Link>
          </li>
          <li className={styles.container_list_items}>
            <Link href={"/projects"}>PROJECTS</Link>
          </li>
          <li className={styles.container_list_items}>
            <Link href={"/contact"}>CONTACT</Link>
          </li>
        </ul>
      )}
      <div
        className={styles.container_hamburger}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
}
