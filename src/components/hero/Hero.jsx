import React, { useState } from 'react';
import styles from './Hero.module.css';
import heroimage from '../../assets/images/hero_img.png'
import contacticon from '../../assets/images/phone-animation.gif'
import ContactPopup from '../../pages/ContactPopup';

const Hero = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
      setShowPopup(!showPopup);
  };
  return (
    <div className={styles.heroContainer}>
      <h1 className={styles.title}>
        Experience The Fun Of Co-Working Only At <span className={styles.price}>99/-</span>
      </h1>
      <p className={styles.subtitle}>Join a Thriving Community</p>
      <div className={styles.cta}>
        <button className={styles.bookButton}>Book Now</button>
        <span className={styles.orText}>OR</span>
        <a href="tel:+919179748353" className={styles.callLink}>
          Call +91 9179748353
        </a>
      </div>
      <div className={styles.container}>
      {/* Replace the src attribute with the actual image URL */}
      <img src={heroimage} alt="Co-working space 1" className={styles.image} />

      </div>
      <div class={styles.contactIcon} onClick={togglePopup}>
        <img src={contacticon} alt="Contact Icon"/>
    </div>


    {showPopup && (
                <div className={styles.overlay} >
                    <div className={styles.popup}>
                        <ContactPopup setShowPopup={setShowPopup} />
                    </div>
                </div>
            )}



    </div>
  );
};

export default Hero;
