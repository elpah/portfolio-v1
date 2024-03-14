import styles from "./footer.module.scss";
import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';


export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.socials}>
       <FaGithub className={styles.socials_image}/>
       <FaFacebook className={styles.socials_image}/>
       <FaLinkedin className={styles.socials_image}/>
       
      </div>
      <div className={styles.made_with}> Made with ❤️ using Nextjs</div>
      <div className={styles.name}> @El-PachrisObeng 2024</div>
    </footer>
  );
}
