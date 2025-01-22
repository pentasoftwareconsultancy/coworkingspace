import React, { useEffect, useState } from 'react';
import styles from './Navbar.module.css';
import logo from '../../assets/images/coffice_logo.svg'; // Ensure you have a logo image in your project

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 3) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`${styles.navContainer} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.logo}>
                <img src={logo} alt="Logo" />
            </div>
            <div className={styles.navLinks}>
                <a href="#home" className={styles.navLink}>Home</a>
                <a href="#amenities" className={styles.navLink}>Amenities</a>
                <a href="#benefits" className={styles.navLink}>Benefits</a>
                <a href="#pricing" className={styles.navLink}>Pricing</a>
                <a href="#contact" className={styles.navLink}>Contact us</a>
            </div>
            <a href="#book" className={styles.bookNowBtn}>Book Now</a>
        </nav>
    );
};

export default Navbar;
