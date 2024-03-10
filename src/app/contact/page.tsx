"use client";
import ContactCard from "@/components/ContactCard/ContactCard";
import styles from "./contact.module.scss";
import { motion } from "framer-motion";
import { FaPhone ,FaEnvelope, FaTelegram} from 'react-icons/fa';


export default function Contact() {
  const contactInfo = [
    { cardName: "Phone", cardText: "+31 62 499 165", cardIcon:<FaPhone className={styles.CardIcon}/>, cardLink: "" },
    { cardName: "Email", cardText: "obengelpachris@gmail.com", cardIcon:<FaEnvelope className={styles.CardIcon}/>, cardLink: "" },
    { cardName: "Telegram", cardText: "@paruah", cardIcon:<FaTelegram className={styles.CardIcon}/>, cardLink: "" },
  ];
  return (
    <main className={styles.main}>
      <motion.p
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className={styles.badge}
      >
        📞contact me
      </motion.p>

      <div className={styles.container}>
        <div className={styles.contact_info_container}>
          <motion.h2
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className={styles.contact_info_header}
          >
            Contact Information
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className={styles.contact_info_paragraph}
          >
            If you have any questions, thoughts, or simply want to
            reach out, feel free to use the form. I'm available to assist
            you with anything you require. Whether you have a specific project in mind, or just fancy a chat,
            don't hesitate to reach out. I'm eager to hear from you!
          </motion.p>
          <span className={styles.bar}></span>
          <div className={styles.contact_card_container}>
          {contactInfo.map((contact)=><ContactCard cardName={contact.cardName} cardtext={contact.cardText}>
          {contact.cardIcon}   </ContactCard>)}
         
          </div>
        </div>

        <div className={styles.contact_form_container}>
          <form className={styles.form} action="">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className={styles.inputContainer}
            >
              <label className={styles.label} htmlFor="name">
                Name
              </label>
              <input
                className={styles.input}
                type="text"
                placeholder="Your Name"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className={styles.inputContainer}
            >
              <label className={styles.label} htmlFor="email">
                Email
              </label>
              <input
                className={styles.input}
                type="text"
                placeholder="youremail@email.com"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className={styles.inputContainer}
            >
              <label className={styles.label} htmlFor="subject">
                Subject
              </label>
              <input
                className={styles.input}
                type="text"
                placeholder="Please enter a subject "
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className={styles.inputContainer}
            >
              <label className={styles.label} htmlFor="message">
                Message
              </label>
              <textarea
                className={styles.text_area}
                name="message"
                placeholder="Please enter a message"
              />
            </motion.div>
            <motion.button
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 1 }}
              className={styles.button}
              type="submit"
            >
              Submit
            </motion.button>
          </form>
        </div>
      </div>
    </main>
  );
}
