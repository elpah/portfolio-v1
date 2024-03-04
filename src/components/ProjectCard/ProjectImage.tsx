import styles from "./project-image.module.scss";
export default function ProjectImage() {
  return (
      <div className={styles.image_container}>
        <img
          className={styles.project_image}
          src="/images/project-images/imagetest.png"
          alt="image"
        />
      </div>
  );
}
