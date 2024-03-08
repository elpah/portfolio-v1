import React from "react";
import { ReactNode } from "react";
import styles from "./project-card.module.scss";

type ProjectCardProps = {
  projectName: string;
  projectDetails: string;
  children: ReactNode;
};

export default function ProjectCard({
  projectName,
  projectDetails,
  children,
}: ProjectCardProps) {

  const imageChildren = React.Children.toArray(children).filter(
    (child) => React.isValidElement(child) && child.type === 'img'
  );

  return (
    <div className={styles.card_container}>
      <div className={styles.details}>
        <p className={styles.featured}>Featured Project</p>
        <h2 className={styles.header}>{projectName}</h2>
        <div className={styles.about_project}>
          <p className={styles.about_project_text}>{projectDetails}</p>
        </div>
        <div className={styles.tools_used}>
       {React.Children.map(children, (child, index) => {
            if (React.isValidElement(child) && child.type === 'img') {
              return React.cloneElement(child, {
                className: `${child.props.className || ''} ${styles.tools_image}`,
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
          src="/images/project-images/imagetest.png"
          alt="image"
        />
      </div>
    </div>
  );
}
