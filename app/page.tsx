"use client"

import React, { useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

// Импорт компонентов
import MainButton from '@/components/MainButton';
import WorkCard from '@/components/Home/WorkCard';
import TestimonialCard from '@/components/Home/TestimonialCard';

// Импорт стилей
import styles from '@styles/Home.module.scss';

// Импорт изображений
import heroImg from '@assets/hero_back.jpg';
import aboutImg from '@assets/about.jpg';
import img01 from '@assets/01.svg';
import img02 from '@assets/02.svg';
import img03 from '@assets/03.svg';
import img04 from '@assets/04.svg';
import img05 from '@assets/05.svg';

// Импорт хуков
import { useInView } from '@/hooks/useInView';

export default function Home() {
  const router = useRouter();
  const heroRef = useRef<HTMLElement | null>(null);
  const workRef = useRef<HTMLElement | null>(null);
  const aboutRef = useRef<HTMLElement | null>(null);
  const testimonialRef = useRef<HTMLElement | null>(null);

  const heroVisible = useInView(heroRef);
  const workVisible = useInView(workRef);
  const aboutVisible = useInView(aboutRef);
  const testimonialVisible = useInView(testimonialRef);

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

      {/* Testimonial section */}
      <section className={styles.testimonial} ref={testimonialRef}>
        <div className="container">
          <div className={styles.testimonial_container}>
            <h2>What the People Thinks About Us</h2>

            <div className={styles.content}>
                <TestimonialCard
                  name="Nattasha Mith"
                  geo="Sydney, USA"
                  text="Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been."
                  keyCard={1}
                  testimonialVisible={testimonialVisible}
                />
                <TestimonialCard
                  name="Raymond Galario"
                  geo="Sydney, Australia"
                  text="Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been scrambled it to make a type book."
                  keyCard={2}
                  testimonialVisible={testimonialVisible}
                />
                <TestimonialCard
                  name="Benny Roll"
                  geo="Sydney, New York"
                  text="Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been scrambled."
                  keyCard={3}
                  testimonialVisible={testimonialVisible}
                />
            </div>
          </div>
        </div>
      </section>

      {/* Client section */}
      <section className={styles.client}>
        <div className="container">
          <div className={styles.client_container}>
            {
              (() => {
                const clientImages = [img01, img02, img03, img04, img05];
                const items = [];

                for (let i=0; i<5; i++) {
                  items.push(
                    <Image
                      src={clientImages[i]}
                      alt={`Client ${i}`}
                    />
                  )
                }
                return items;
              })()
            }
          </div>
        </div>
      </section>
    </>
  );
}
