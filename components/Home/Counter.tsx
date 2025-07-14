"use client"

import styles from '@styles/Counter.module.scss';

interface CounterProps {
    title: string;
    text: string;
    visible: boolean;
}

export default function Counter({title, text, visible}: CounterProps) {
    return (
        <div className={`${styles.block} ${visible ? styles.visible : ''}`}>
            <div className={styles.title}>{title}</div>
            <div className={styles.text}>{text}</div>
        </div>
    )
}