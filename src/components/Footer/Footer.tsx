import Link from "next/link";
import styles from "./footer.module.scss";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <div className={styles.footer_cover}>
      <footer className={styles.container}>
        <div className={styles.socials}>
          <Link href="https://github.com/elpah" target="_blank">
            <FaGithub className={styles.socials_image} />
          </Link>
          <Link href="https://www.facebook.com/elpahh/" target="_blank">
            <FaFacebook className={styles.socials_image} />
          </Link>
          <Link href="https://www.linkedin.com/in/elpachris/" target="_blank">
            <FaLinkedin className={styles.socials_image} />
          </Link>
        </div>
        <div className={styles.made_with}> Made with ❤️ using Nextjs</div>
        <div className={styles.name}> @El-PachrisObeng 2024</div>
      </footer>
    </div>
  );
}
