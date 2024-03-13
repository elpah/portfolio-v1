import { ReactNode } from "react";
import styles from "./contact-card.module.scss";
import Link from "next/link";

type CardProps = {
  cardName: string;
  cardtext: string;
  cardLink:string;
  children: ReactNode;
};
export default function ContactCard({
  cardName,
  cardtext,
  cardLink,
  children,
}: CardProps) {
  return (
    <Link href={cardLink}>
    <div className={styles.contact_card_container}>
      <div className={styles.image_container}>{children}</div>
      <div className={styles.info_container}>
        <h3 className={styles.info_header}>{cardName}</h3>
        <p className={styles.info_text}>{cardtext}</p>
      </div>
    </div>
    </Link>
  );
}
