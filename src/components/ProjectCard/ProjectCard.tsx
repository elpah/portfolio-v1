import React from "react";
import { ReactNode } from "react";
import styles from "./project-card.module.scss";
import { motion } from "framer-motion";

type ProjectCardProps = {
  projectName: string;
  projectDetails: string;
  children: ReactNode;
  projectSrc:string;
  x:number;
};

export default function ProjectCard({
  projectName,
  projectDetails,
  projectSrc,
  x,
  children,
}: ProjectCardProps) {
  return (
    <motion.div

       initial={{ opacity: 0, x: x }}
       animate={{ opacity: 1, x: 0, y: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 1 }}
     
       className={styles.card_container}>
      <div className={styles.details}>
        <p className={styles.featured}>Featured Project</p>
        <h2 className={styles.header}>{projectName}</h2>
        <div className={styles.about_project}>
          <p className={styles.about_project_text}>{projectDetails}</p>
        </div>
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
      </div>
      <div className={styles.image_container}>
        <img
          className={styles.project_image}
          src={`/images/project-images/${projectSrc}`}
          alt="image"
        />
      </div>
    </motion.div>
  );
}
