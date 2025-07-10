"use client"

import React, { useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

// Импорт компонентов
import MainButton from '@/components/MainButton';
import WorkCard from '@/components/Home/WorkCard';

// Импорт стилей
import styles from '@styles/Home.module.scss';

// Импорт изображений
import heroImg from '@assets/hero_back.jpg';
import aboutImg from '@assets/about.jpg';

import { useInView } from '@/hooks/useInView';

export default function Home() {
  const router = useRouter();
  const heroRef = useRef<HTMLElement | null>(null);
  const workRef = useRef<HTMLElement | null>(null);
  const aboutRef = useRef<HTMLElement | null>(null);

  const heroVisible = useInView(heroRef);
  const workVisible = useInView(workRef);
  const aboutVisible = useInView(aboutRef);

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

      {/* Work section */}
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

      {/* About section */}
      <section className={styles.about} ref={aboutRef}>
        <div className="container">
          <div className={styles.about_container}>
            <div className={styles.content}>
              <h2 className={aboutVisible ? styles.visible : ''}>We Create The Art Of Stylish Living Stylishly</h2>

              <div className={`${aboutVisible ? styles.visible : ''} ${styles.text}`}>It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using that it has a more-or-less normal.</div>
              
              <a href='tel:012345678' className={`${styles.contact} ${aboutVisible ? styles.visible : ''}`}>
                <div className={styles.icon}>
                  <span className={`icon-phone`}/>
                </div>
                <div className={styles.data}>
                  <span className={styles.phone}>012345678</span>
                  <span className={styles.call}>Call Us Anytime</span>
                </div>
              </a>

              <div className={`${styles.btn} ${aboutVisible  ? styles.visible : ''}`}>
                <MainButton 
                  style='default'
                  text='Get Free Estimate'
                  click={() => router.push('/contact')}
                />
              </div>
            </div>

            <div className={`${styles.image} ${aboutVisible ? styles.visible : ''}`}>
              <Image
                src={aboutImg}
                alt="About image"
                fill
                style={{
                  objectFit: "cover",
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  zIndex: '1'
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
