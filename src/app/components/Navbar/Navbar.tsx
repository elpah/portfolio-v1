"use client";
import React, { useState } from 'react'
import { FaBars, FaTimes} from 'react-icons/fa';
import styles from './navbar.module.scss';

export default function Navbar() {
 const [isOpen, setIsOpen] = useState(false);
  return (
    <header className={styles.container}>
        <div className={styles.logo_container}>
            <div className={styles.logo_container_image}>img</div>
            <div className={styles.logo_container_name}>El-Pachris Obeng</div>
        </div>
        <div onClick={()=>setIsOpen(!isOpen)}>{isOpen? <FaTimes/>:<FaBars/>}</div>
        {/* <ul>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
        </ul> */}
    </header>
   
  )
}
