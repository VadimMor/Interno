"use client"

import Link from "next/link";

// Импорт стилей
import styles from '@styles/WorkCard.module.scss';

interface WorkCardProps {
    title: string;
    text: string;
    link: string;
    visible: boolean;
}

export default function WorkCard({title, text, link, visible}: WorkCardProps) {
    return (
        <div className={`${styles.content} ${visible ? styles.active : ''}`}>
            <h4>{title}</h4>
            <div className={styles.text}>{text}</div>
            <Link href={`/${link}`} className={styles.link} title={title}>
                <span className={styles.link_text}>Read more</span>
                <span className={`icon-arrow-right ${styles.icon}`} />
            </Link>
        </div>
    )
}