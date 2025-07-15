"use client"

import React, { useRef } from 'react';
import { usePathname } from 'next/navigation'
import Link from 'next/link';
import Image from 'next/image';

// импорт стилей
import styles from '@styles/Hero.module.scss';

// Импорт хуков
import { useInView } from '@/hooks/useInView';
import { Noto_Sans_Syloti_Nagri } from 'next/font/google';

interface HeroProps {
    title: string;
    img: string;
}

export default function Hero({ title, img }: HeroProps) {
    const pathname = usePathname();
    const heroRef = useRef<HTMLElement | null>(null);

    const heroVisible = useInView(heroRef);

    // Убираем пустые строки
    const pathParts = pathname.split("/").filter(part => part);

    const breadcrumbs = pathParts.map((part, index) => {
        const href = "/" + pathParts.slice(0, index + 1).join("/");

        // Преобразуем "text-text" -> "Text Text"
        const label = decodeURIComponent(
            part
                .split("-")
                .join(" ")
        );

        return (
            <span key={href}>
                <span className={styles.slash}>&nbsp;/&nbsp;</span>
                <Link
                    href={href}
                    title={label}
                    className={styles.link}
                >
                    {label}
                </Link>
            </span>
        );
    });

    return (
        <section className={styles.hero} ref={heroRef}>
            <div className="container">
                <div className={`${styles.hero_container} ${heroVisible ? styles.visible : ''}`}>
                    <h2>{title}</h2>

                    <div className={styles.links}>
                        <Link href="/" title='Home' className={styles.link}>Home</Link>
                        {breadcrumbs}
                    </div>
                </div>
            </div>

            <div className={styles.hero_bg}>
                <Image
                    src={img}
                    alt="Background"
                    fill    
                    quality={100}
                    priority
                    sizes="100vw"
                    style={{ objectFit: 'cover' }}
                />
            </div>

        </section>
    )
}