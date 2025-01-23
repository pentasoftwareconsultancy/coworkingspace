import React, { useEffect, useState } from 'react';
import styles from './Navbar.module.css';
import logo from '../../assets/images/coffice_logo.svg'; // Ensure you have a logo image in your project
import { Link } from 'react-router-dom';

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
                <Link to="/" className={styles.navLink}>Home</Link>
                <Link to="/amenities" className={styles.navLink}>Amenities</Link>
                <Link to="/benefits" className={styles.navLink}>Benefits</Link>
                <Link to="/pricing" className={styles.navLink}>Pricing</Link>
                <Link to="/contact" className={styles.navLink}>Contact us</Link>
            </div>
            <a href="#book" className={styles.bookNowBtn}>Book Now</a>
        </nav>
    );
};

export default Navbar;
