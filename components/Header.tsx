"use client"

import React, { useState, useRef, useEffect, KeyboardEvent } from "react";
import Link from "next/link";

import styles from '@/styles/Header.module.scss';

export default function Header() {
    const logoText = "Interno";
    const [isSearchActive, setIsSearchActive] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const searchRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    // Открытие поиска 
    const handleSearchClick = () => {
        setIsSearchActive(true);
    };

    // Закрытие поиска при клике вне области поиска
    const handleClickOutside = (event: MouseEvent) => {
        if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
            setIsSearchActive(false);
        }
    };

    // Обработка нажатия Enter для отправки текста из поиска
    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && searchQuery.trim()) {
            alert(`Вы ищете: "${searchQuery}"`);
            setIsSearchActive(false);
            setSearchQuery("");
        }
    };

    useEffect(() => {
        // Автофокус при поле ввода
        if (isSearchActive && inputRef.current) {
            inputRef.current.focus();
        }

        // Обработка кликов по документу и очистка хука
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isSearchActive]);

    return(
        <header>
            <div className="container">
                <div className={styles.header_container}>
                    {/* Logo */}
                    <Link href={"/"} className={styles.logo}>
                        <span className={`icon-Logo ${styles.icon}`} />
                        <span className={styles.text}>
                            {logoText.split('').map((letter, index) => (
                                <span key={index}>{letter}</span>
                            ))}
                        </span>
                    </Link>

                    {/* Menu container */}
                    <div className={styles.content}>
                        {/* Menu */}
                        <nav>
                            <Link href={'/'} className={styles.link}>Home</Link>
                            <Link href={'/pages'} className={styles.link}>Pages</Link>
                            <Link href={'/services'} className={styles.link}>Services</Link>
                            <Link href={'/project'} className={styles.link}>Project</Link>
                            <Link href={'/blog'} className={styles.link}>Blog</Link>
                            <Link href={'/contact'} className={styles.link}>Contact</Link>
                        </nav>

                        {/* Search */}
                        <div 
                            ref={searchRef}
                            className={`${styles.search} ${isSearchActive ? styles.active : ''}`} 
                            onClick={handleSearchClick}
                        >
                            <span className={`icon-search ${styles.icon}`} />
                            <input
                                ref={inputRef}
                                type="text"
                                placeholder="Search"
                                className={styles.search_input}
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)} // Обновление состояния
                                onKeyDown={handleKeyDown} // Обработка нажатия клавиш
                            />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}