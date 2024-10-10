import React from "react";
import { ReactNode } from "react";
import styles from "./project-card.module.scss";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";

type ProjectCardProps = {
  projectName: string;
  projectDetails: string;
  children: ReactNode;
  projectSrc: string;
  x: number;
  liveLink:string;
  githubLink:string;
};

export default function ProjectCard({
  projectName,
  projectDetails,
  projectSrc,
  x,
  liveLink,
  githubLink,
  children,
}: ProjectCardProps) {
  return (
  <Link href={liveLink} target="_blank"> 
    <motion.div
      initial={{ opacity: 0, x: x }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 1 }}
      className={styles.card_container}
      
    >
      <div className={styles.details}>
        <p className={styles.featured}>Featured Project</p>
        <h2 className={styles.header}>{projectName}</h2>
        <div className={styles.about_project}>
          <p className={styles.about_project_text}>{projectDetails}</p>
        </div>
        <div className={styles.tools_redirect_container}>
          <div className={styles.tools_used}>
            {React.Children.map(children, (child, index) => {
              if (React.isValidElement(child) && child.type === "img") {
                return React.cloneElement(child, {
                  className: `${child.props.className || ""} ${
                    styles.tools_image
                  }`,
                  key: index,
                } as React.HTMLProps<HTMLImageElement>);
              }
              return child;
            })}
          </div>
          <div className={styles.redirect_icon_container}>
           <Link  target="_blank" href={liveLink}><FaExternalLinkAlt className={styles.icon} /></Link>
           <Link  target="_blank" href={githubLink}><img className={styles.github_icon} src="images/skills_png/github-3.svg" alt="" /></Link>
          </div>
        </div>
      </div>
      <div className={styles.image_container}>
        <img
          className={styles.project_image}
          src={`/images/project-images/${projectSrc}`}
          alt="image"
        />
      </div>
    </motion.div>
    </Link>
  );
}
