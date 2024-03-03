

import styles from './badge.module.scss'

type BadgeProps = {
    text:string;
    className?:string;
}
export default function Badge({text,className}:BadgeProps) {
  return (
    <p className={`${styles.badge} ${className}`}>{text}</p>
  )
}
