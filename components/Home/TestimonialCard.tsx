"use client"

import Image from 'next/image';

// Импорт стилей
import styles from '@styles/TestimonialCard.module.scss';

interface TestimonialCardProps {
    name: string;
    geo: string;
    text: string;
    img?: string;
    keyCard?: number;
    testimonialVisible: boolean;
}

export default function TestimonialCard({name, geo, text, img, keyCard, testimonialVisible} : TestimonialCardProps) {
    return (
        <div className={`${styles.card} ${testimonialVisible ? styles.visible : ''}`} data-key={keyCard}>
            <div className={styles.info}>
                <div className={styles.img}>
                    {
                        img ?
                            (<Image
                                src={img}
                                alt="About image"
                                fill
                                style={{
                                    objectFit: "cover",
                                    zIndex: '1'
                                }}
                            />) : ''
                    }
                </div>
                <div className={styles.content}>
                    <div className={styles.name}>{name}</div>
                    <div className={styles.geo}>{geo}</div>
                </div>
            </div>

            <div className={styles.text}>
                {text}
            </div>
        </div>
    )
}