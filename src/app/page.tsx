import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.links_container}>
        <Image
          src="/images/socials/github.png"
          alt="github"
          height={60}
          width={60}
          priority
        />
        <Image
          src="/images/socials/linkedin.png"
          alt="linkedin"
          height={60}
          width={60}
          priority
        />
        <Image
          src="/images/socials/x.png"
          alt="x"
          height={60}
          width={60}
          priority
        />
        <Image
          src="/images/socials/email.png"
          alt="email"
          height={60}
          width={60}
          priority
        />
      </div>
      <div className={styles.image_container}>
        <img src="" alt="cartoon-image" />
      </div>
      <div className={styles.intro_container}>
        <p>Hello Real World 👋🏽</p>
        <h1>I am EL-Pachris Obeng</h1>
        <p>
          Passionate Software Engineer with a focus on React, dedicated to
          crafting elegant and user-friendly web applications.
        </p>
        <div className={styles.cv_container}>
          <p>Download CV</p>
          <p>V</p>
        </div>
      </div>
    </main>
  );
}
