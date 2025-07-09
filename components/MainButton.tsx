"use client"

// Импорт стилей
import styles from '@styles/MainButton.module.scss';

interface MainButtonProps {
    style: 'default' | 'large' | 'color';
    text: string;
    click: () => void;
}

export default function MainButton({ style, text, click }: MainButtonProps) {
    return (
        <button
            className={
                `${styles.button} ${style === 'default' ?
                                    styles.default :
                                    style === 'large' ?
                                        styles.large : styles.color}
                `
            }
            onClick={click}
        >
            <span>{text}</span>
            <span className={`icon-arrow-right ${styles.icon}`}></span>
        </button>
    )
}