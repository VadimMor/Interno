"use client"

import React, { useRef } from 'react';
import { useRouter } from 'next/navigation';

// Импорт компонентов
import MainButton from './MainButton';

// Импорт стилей
import styles from '@styles/ContactUs.module.scss';

// Импорт хуков
import { useInView } from '@/hooks/useInView';

export default function ContactUs() {
    const router = useRouter();
    const contactRef = useRef<HTMLElement | null>(null);

    const contactVisible = useInView(contactRef);

    return (
        <section className={styles.section} ref={contactRef}>
            <div className="container">
                <div className={`${styles.container} ${contactVisible ? styles.visible : ''}`}>
                    <h2 className={contactVisible ? styles.visible : ''}>Wanna join the interno?</h2>

                    <div className={`${styles.text} ${contactVisible ? styles.visible : ''}`}>It is a long established fact  will be distracted.</div>

                    <MainButton
                        style='color'
                        text='Contact With Us'
                        click={() => router.push('/contact')}
                    />
                </div>
            </div>
        </section>
    )
}