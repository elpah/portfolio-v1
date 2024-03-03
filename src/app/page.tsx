import Image from "next/image";
import styles from "./page.module.css";
import Badge from "@/components/Badge/Badge";

export default function Home() {
  return (
    <div className={styles.main_container}>
      <div className={styles.image_container}>
        <Image
          className={styles.image}
          src="/images/pp.jpg"
          alt="cartoon-image"
          width={100}
          height={100}
        />
      </div>
      <div className={styles.intro_container}>
        <Badge text="👋🏽 Hello Real World..."/>
        <h2 className={styles.intro_name}>El-Pachris Obeng,</h2>
        <p className={styles.intro_sentence}>
          A fullstack Javascript developer dedicated to crafting elegant,
          responsive and user-friendly web applications.
        </p>
        <div className={styles.cv_container}>
          <div className={styles.cv_container_2}>
            <div> Download CV</div>
            <Image
              height={20}
              width={20}
              src="/images/download-icon.svg"
              alt="download icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
