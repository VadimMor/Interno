"use client"

import Link from 'next/link';

// Импорт стилей
import styles from '@styles/Footer.module.scss';

export default function Footer() {
    const logoText = "Interno";

    return (
        <footer>
            <div className="container">
                <div className={styles.footer_container}>
                    <div className={styles.info}>
                        {/* Logo */}
                        <Link href={"/"} className={styles.logo} title="Home">
                            <span className={`icon-Logo ${styles.icon}`} />
                            <span className={styles.logo_text}>
                                {logoText.split('').map((letter, index) => (
                                    <span key={index}>{letter}</span>
                                ))}
                            </span>
                        </Link>

                        <div className={styles.text}>It is a long established fact that a reader will be distracted lookings.</div>
                    </div>

                    <div className={styles.pages}>
                        <h3>Pages</h3>

                        <Link href="/about-us" title='About Us'>About Us</Link>
                        <Link href="/projects" title='Our Projects'>Our Projects</Link>
                        <Link href="/team" title='Our Team'>Our Team</Link>
                        <Link href="/contact" title='Contact Us'>Contact Us</Link>
                        <Link href="/services" title='Bedroom'>Services</Link>
                    </div>

                    <div className={styles.services}>
                        <h3>Services</h3>

                        <Link href="/kitchan" title='Kitchan'>Kitchan</Link>
                        <Link href="/living-area" title='Living Area'>Living Area</Link>
                        <Link href="/bathroom" title='Bathroom'>Bathroom</Link>
                        <Link href="/dinning-hall" title='Dinning Hall'>Dinning Hall</Link>
                        <Link href="/bedroom" title='Bedroom'>Bedroom</Link>
                    </div>

                    <div className={styles.contact}>
                        <h3>Contact</h3>

                        <a
                            href="https://www.google.com/maps/search/?api=1&query=55+East+Birchwood+Ave,+Brooklyn,+New+York+11201"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            55 East Birchwood Ave. Brooklyn, New York 11201
                        </a>

                        <a href="mailto:contact@interno.com">contact@interno.com</a>

                        <a href="tel:+11234567890">(123) 456 - 7890</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}