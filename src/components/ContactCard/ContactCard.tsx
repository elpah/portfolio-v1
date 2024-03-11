import { ReactNode } from 'react';
import styles from './contact-card.module.scss'

type CardProps= {
  cardName:string;
  cardtext:string;
  children: ReactNode;
}
export default function ContactCard({cardName,cardtext,children}:CardProps) {
  return (
    <div 
   
    className={styles.contact_card_container}>
        <div className={styles.image_container}>
            {children}
        </div>
        <div className={styles.info_container}>
            <h3 className={styles.info_header}>{cardName}</h3>
            <p className={styles.info_text}>{cardtext}</p>
        </div>
    </div>

  )
}
