"use client"

import React, { useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

// Импорт компонентов
import MainButton from '@/components/MainButton';

// Импорт стилей
import styles from '@styles/Home.module.scss';

// Импорт изображений
import heroImg from '@assets/hero_back.jpg';
import WorkCard from '@/components/Home/WorkCard';

import { useInView } from '@/hooks/useInView';

export default function Home() {
  const router = useRouter();
  const heroRef = useRef<HTMLElement | null>(null);
  const workRef = useRef<HTMLElement | null>(null);

  const heroVisible = useInView(heroRef);
  const workVisible = useInView(workRef);

  return (
    <>
      {/* Hero section */}
      <section className={styles.hero} ref={heroRef}>
        <div className="container">
          <div className={styles.hero_container}>
            <h1 className={`${heroVisible  ? styles.visible : ''}`}>Let Your Home Be Unique</h1>
            <div className={`${styles.text} ${heroVisible  ? styles.visible : ''}`}>
              There are many variations of the passages of lorem Ipsum fromavailable,variations of the passages.
            </div>
            <div className={`${styles.btn} ${heroVisible  ? styles.visible : ''}`}>
              <MainButton
                style='default'
                text='Get Started'
                click={() => router.push('/services')}
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

      <section className={styles.work} ref={workRef}>
        <div className="container">
          <div className={styles.work_container}>
            <WorkCard
              title="Project Plan"
              text="There are many variations of the passages of lorem Ipsum from available, majority."
              link="project"
              visible={workVisible}
            />
            <WorkCard
              title="Interior Work"
              text="There are many variations of the passages of lorem Ipsum from available, majority."
              link="project"
              visible={workVisible}
            />
            <WorkCard
              title="Realization"
              text="There are many variations of the passages of lorem Ipsum from available, majority."
              link="project"
              visible={workVisible}
            />
          </div>
        </div>
      </section>
    </>
  );
}
