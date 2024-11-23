import React from "react";
import Image from "next/image";
import styles from "./project-card.module.scss";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";

type ProjectCardProps = {
  projectName: string;
  projectDetails: string;
  projectSrc: string;
  x: number;
  liveLink: string;
  githubLink: string;
  toolsUsed: { tool_img: string; tool_name: string }[];
};

export default function ProjectCard({
  projectName,
  projectDetails,
  projectSrc,
  x,
  liveLink,
  toolsUsed,
  githubLink,
}: ProjectCardProps) {
  return (
    <motion.div 
    onClick={() => {
      window.open(`${liveLink}`, "_blank");
    }}
    initial={{ opacity: 0, x: x }}
    animate={{ opacity: 1, x: 0, y: 0 }}
    transition={{ duration: 1 }}
    className={styles.wrapper}>
      <div
        className={styles.card_container}
      >
        <div className={styles.details}>
          <p className={styles.featured}>Featured Project</p>
          <h2 className={styles.header}>{projectName}</h2>
          <div className={styles.about_project}>
            <p className={styles.about_project_text}>{projectDetails}</p>
          </div>
        </div>
        <div className={styles.image_container}>
          <img
            className={styles.project_image}
            src={`/images/project-images/${projectSrc}`}
            alt="image"
          />
        </div>
      </div>
      <div className={styles.tools_redirect_container}>
        <div className={styles.tools_used}>
          {toolsUsed.map((tool, index) => (
            <div key={index} className={styles.tool_item}>
              <img
                src={tool.tool_img}
                alt={tool.tool_name}
                className={`${styles.tools_image}`}
              />
              <p className={styles.tool_name}>{tool.tool_name}</p>{" "}
            </div>
          ))}
        </div>
        <div className={styles.redirect_container}>
          <div className={styles.link_container}>
            <div className={styles.link_image_container}>
              <Image
                height={15}
                width={15}
                src="images/socials_svg/github.svg"
                alt="github icon"
              />
            </div>
            <p className={styles.link_text}>Github</p>
          </div>
          <div className={styles.link_container}>
            <div className={styles.link_image_container}>
             <FaExternalLinkAlt className={styles.redirect}/>
            </div>
            <p  className={styles.link_text}>Live</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
