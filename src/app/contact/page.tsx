"use client";
import ContactCard from "@/components/ContactCard/ContactCard";
import { FieldValues, useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaTelegram } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import styles from "./contact.module.scss";
import { ToastContainer, toast } from 'react-toastify';


export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const notify = () => toast('Hello world!', {
    position: 'top-center' ,
    autoClose: 2000,
    className: 'custom-toast',
  });
  const contactInfo = [
    {
      cardName: "Phone",
      cardText: "+31 62 499 165",
      cardIcon: <FaPhone className={styles.CardIcon} />,
      cardLink: "",
    },
    {
      cardName: "Email",
      cardText: "obengelpachris@gmail.com",
      cardIcon: <FaEnvelope className={styles.CardIcon} />,
      cardLink: "",
    },
    {
      cardName: "Telegram",
      cardText: "@paruah",
      cardIcon: <FaTelegram className={styles.CardIcon} />,
      cardLink: "",
    },
  ];

  async function onSubmit(data: FieldValues) {
    try {
      await emailjs.send("service_hu5emdb", "template_cgezxxo", data, "uZUcPqeRan5awHad7");
      reset();
      notify();
    } catch (error) {
      console.error("Submission failed:", error);
    }
  }
  
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
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className={styles.contact_info_container}
        >
          <h2 className={styles.contact_info_header}>Contact Information</h2>
          <p className={styles.contact_info_paragraph}>
            If you have any questions, thoughts, or simply want to reach out,
            feel free to use the form. I'm available to assist you with anything
            you require. Whether you have a specific project in mind, or just
            fancy a chat, don't hesitate to reach out. I'm eager to hear from
            you!
          </p>
          <span className={styles.bar}></span>
          <div className={styles.contact_card_container}>
            {contactInfo.map((contact, index) => (
              <ContactCard
                key={index}
                cardName={contact.cardName}
                cardtext={contact.cardText}
              >
                {contact.cardIcon}
              </ContactCard>
            ))}
          </div>
        </motion.div>

        <div className={styles.contact_form_container}>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
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
                {...register("name", {
                  required: true,
                })}
              />
              {errors.name?.type === "required" && (
                <p className={styles.error}>The name field is required</p>
              )}
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
                {...register("email", {
                  required: true,
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "invalid format",
                  },
                })}
                className={styles.input}
                type="text"
                placeholder="youremail@email.com"
              />
              {errors.email?.type === "required" && (
                <p className={styles.error}>The email field is required</p>
              )}
              {errors.email?.type === "pattern" && (
                <p className={styles.error}>Invalid email format</p>
              )}
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
                {...register("subject")}
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
                // type="message"
                placeholder="Please enter a message"
                {...register("message", {
                  required: true,
                  minLength: 5,
                })}
              />
              {errors.message?.type === "required" && (
                <p className={styles.error}>The message field is required</p>
              )}
              {errors.message?.type === "minLength" && (
                <p className={styles.error}>
                  Minimum lenght should be 5 characters
                </p>
              )}
            </motion.div>
            <motion.button
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 1 }}
              className={styles.button}
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </motion.button>
          </form>
        </div>
      </div>
    </main>
  );
}
