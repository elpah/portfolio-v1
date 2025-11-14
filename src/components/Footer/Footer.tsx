import Link from "next/link";
import styles from "./footer.module.scss";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import { useMediaQuery } from "@custom-react-hooks/all";

export default function Footer() {
  const isMobile = useMediaQuery("(max-width: 767px)");

  return (
    <div className={styles.footer_cover}>
      <footer className={styles.container}>
        {!isMobile && (
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
        )}
        <div className={styles.made_with}> Made with ❤️ using Nextjs</div>
        {!isMobile && <div className={styles.name}> @El-PachrisObeng 2024</div>}
      </footer>
    </div>
  );
}
