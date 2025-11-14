"use client";
import ContactCard from "@/components/ContactCard/ContactCard";
import { FieldValues, useForm } from "react-hook-form";
import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import styles from "./contact.module.scss";
import { ToastContainer, toast } from "react-toastify";
import { useMediaQuery } from "@custom-react-hooks/all";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "react-toastify/dist/ReactToastify.css";
import Footer from "@/components/Footer/Footer";

export default function Contactpage() {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const threshold = isMobile ? 0.2 : 0.5;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const notify = () => {
    toast.success("Message successfully sent", {});
  };

  const { ref: headerRef, inView: headerInView } = useInView({
    triggerOnce: true,
    threshold: threshold,
  });

  const { ref: formRef, inView: formInView } = useInView({
    triggerOnce: true,
    threshold: threshold,
  });

  const { ref: cardRef, inView: cardInView } = useInView({
    triggerOnce: true,
    threshold: threshold,
  });
  
  const contactInfo = [
    {
      cardName: "Linkedin",
      cardText: "El-Pachris Obeng",
      cardIcon: <FaLinkedin className={styles.CardIcon} />,
      cardLink: "https://www.linkedin.com/in/elpachris/",
    },
    {
      cardName: "Email",
      cardText: "obengelpachris@gmail.com",
      cardIcon: <FaEnvelope className={styles.CardIcon} />,
      cardLink: "mailto:obengelpachris@gmail.com",
    },
    {
      cardName: "Github",
      cardText: "@elpah",
      cardIcon: <FaGithub className={styles.CardIcon} />,
      cardLink: "https://github.com/elpah",
    },
  ];

  async function onSubmit(data: FieldValues) {
    try {
      await emailjs
        .send("service_hu5emdb", "template_cgezxxo", data, "uZUcPqeRan5awHad7")
        .then(() => {
          reset();
          notify();
        });
    } catch (error) {
      console.error("Submission failed:", error);
    }
  }

  return (
    <>
      <section className={styles.main} id="contact">
        <motion.p
          ref={headerRef}
          initial={{ opacity: 0, y: 50 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className={styles.badge}
        >
          📞contact me...
        </motion.p>

        <div className={styles.container}>
          <motion.div
            ref={cardRef}
            initial={{
              opacity: 0,
              x: isMobile ? 0 : -50,
              y: isMobile ? 50 : 0,
            }}
            animate={
              cardInView
                ? { opacity: 1, x: 0, y: 0 }
                : { opacity: 0, x: isMobile ? 0 : -50, y: isMobile ? 50 : 0 }
            }
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
            className={styles.contact_info_container}
          >
            <h2 className={styles.contact_info_header}>Contact Information</h2>
            <p className={styles.contact_info_paragraph}>
              If you have any questions, thoughts, or simply want to reach out,
              feel free to use the form. I&apos;m available to assist you with
              anything you require. Whether you have a specific project in mind,
              or just fancy a chat, don&apos;t hesitate to reach out. I&apos;m
              eager to hear from you!
            </p>
            <span className={styles.bar}></span>
            <div className={styles.contact_card_container}>
              {contactInfo.map((contact, index) => (
                <ContactCard
                  key={index}
                  cardName={contact.cardName}
                  cardtext={contact.cardText}
                  cardLink={contact.cardLink}
                >
                  {contact.cardIcon}
                </ContactCard>
              ))}
            </div>
          </motion.div>

          <motion.div
            ref={formRef}
            initial={{ opacity: 0, x: isMobile ? 0 : 50, y: isMobile ? 50 : 0 }}
            animate={
              formInView
                ? { opacity: 1, x: 0, y: 0 }
                : { opacity: 0, x: isMobile ? 0 : 50, y: isMobile ? 50 : 0 }
            }
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
            className={styles.contact_form_container}
          >
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
              <div className={styles.inputContainer}>
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
              </div>
              <div className={styles.inputContainer}>
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
              </div>
              <div className={styles.inputContainer}>
                <label className={styles.label} htmlFor="subject">
                  Subject
                </label>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Please enter a subject "
                  {...register("subject")}
                />
              </div>
              <div className={styles.inputContainer}>
                <label className={styles.label} htmlFor="message">
                  Message
                </label>
                <textarea
                  className={styles.text_area}
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
              </div>
              <button
                className={styles.button}
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </form>
          </motion.div>
        </div>

        <ToastContainer
          position="bottom-right"
          autoClose={1000}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable={false}
          theme="colored"
          toastStyle={{
            fontSize: "14px",
          }}
        />
      </section>
      <Footer />
    </>
  );
}
