"use client"

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

// Импорт компонентов
import MainButton from '@/components/MainButton';

// Импорт стилей
import styles from '@styles/Home.module.scss';

// Импорт изображений
import heroImg from '@assets/hero_back.jpg';

export default function Home() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    console.log(!sectionRef.current)
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 } // Процент видимости секции для срабатывания
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Hero section */}
      <section className={styles.hero} ref={sectionRef}>
        <div className="container">
          <div className={styles.hero_container}>
            <h1 className={`${visible ? styles.visible : ''}`}>Let Your Home Be Unique</h1>
            <div className={`${styles.text} ${visible ? styles.visible : ''}`}>
              There are many variations of the passages of lorem Ipsum fromavailable,variations of the passages.
            </div>
            <div className={`${styles.btn} ${visible ? styles.visible : ''}`}>
              <MainButton
                style='default'
                text='Get Started'
                click={() => {}}
              />
            </div>
          </div>
        </div>

        <Image
          src={heroImg}
          alt="Background"
          fill
          style={{
            objectFit: 'cover',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: '-1'
          }}
          priority
        />
      </section>
    </>
  );
}
