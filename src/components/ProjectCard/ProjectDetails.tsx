import styles from "./project-details.module.scss";
export default function ProjectDetails() {
  return (
    <div className={styles.details}>
      <p className={styles.featured}>Featured Project</p>
      <h2 className={styles.header}>Elpatronics</h2>
      <div className={styles.about_project}>
        <p className={styles.about_project_text}>
          A non commercial ecommerce website that demonstrates the online
          shopping process. Inluding features like signup, signin, paypal or
          visa checkout, find order and email confirmations.
        </p>
      </div>
      <div className={styles.tools_used}>
        <img
          className={styles.tools_image}
          src="/images/skills_png/c.svg"
          alt="c"
        />
        <img
          className={styles.tools_image}
          src="/images/skills_png/c.svg"
          alt="c"
        />
        <img
          className={styles.tools_image}
          src="/images/skills_png/c.svg"
          alt="c"
        />
        <img
          className={styles.tools_image}
          src="/images/skills_png/c.svg"
          alt="c"
        />
      </div>
    </div>
  );
}
