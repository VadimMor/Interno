"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Импорт стилей
import styles from '@styles/Home/BlogCard.module.scss';

interface BlogCardProps {
    img: string;
    title: string;
    tags: string[];
    date: string;
    link: string;
    visible: boolean;
    altStyle?: boolean;
}

export default function BlogCard({img, title, tags, date, link, visible, altStyle}: BlogCardProps) {
    

    return (
        <Link
            href={link}
            title={title}
            className={`${styles.card} ${altStyle ? styles.alt : ''} ${visible ? styles.visible : ''}`}
        >
            <div className={styles.img}>
                <Image
                    src={img}
                    alt={title}
                    fill
                    style={{
                        transform: "translate(-50%, -50%) scale(1.7)",
                        top: "50%",
                        left: "50%"
                    }}
                />
            </div>

            <h3>
                {title.split('\n').map((line, index) => (
                    <React.Fragment key={index}>
                        {line}
                        <br />
                    </React.Fragment>
                ))}
            </h3>

            <div className={styles.content}>
                <div className={styles.date}>
                    {`${new Date(date).getDate()} ${new Date(date).toLocaleString('en', { month: 'long' })}, ${new Date(date).getFullYear()}`}
                </div>
                <div className={styles.icon}>
                    <span className='icon-keyboard_arrow_right' />
                </div>
            </div>
        </Link>
    )
}