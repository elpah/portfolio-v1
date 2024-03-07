import React from "react";
import { ReactNode } from "react";
import styles from "./project-card.module.scss";


type ProjectCardProps =
{
  projectName:string;
  projectDetails:string;
  children: ReactNode;

}

const renderChildrenWithClass = (children: React.ReactNode) => {
  return React.Children.map(children, (child, index) => {
    return React.cloneElement(child as React.ReactElement<any>, {
      className: styles.tools_image,
      key: index
    });
  });
};

const ToolsUsed = ({ children }: ProjectCardProps) => {
  return (
    <div className={styles.tools_used}>
      {renderChildrenWithClass(children)}
    </div>
  );
};


export default function ProjectCard({projectName,projectDetails,children}:ProjectCardProps) {
  return (
    <div className={styles.card_container}>
    <div className={styles.details}>
      <p className={styles.featured}>Featured Project</p>
      <h2 className={styles.header}>{projectName}</h2>
      <div className={styles.about_project}>
        <p className={styles.about_project_text}>
         {projectDetails}
        </p>
      </div>
      <div className={styles.tools_used}>
        {/* {children} */}
       
        {renderChildrenWithClass()}
       
       
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
