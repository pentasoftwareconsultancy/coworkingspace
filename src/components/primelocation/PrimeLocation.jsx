import React from "react";
import styles from "./primelocation.module.css";
import chai from '../../assets/images/chai-img.png'
import recreation from '../../assets/images/recreation-zone-img.png'
import library from '../../assets/images/library-img.png'
import cafie from '../../assets/images/cafe-img.png'
import chakan from '../../assets/images/address-img1.png'
import saudagar from '../../assets/images/address-img2.png'
const PrimeLocation = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.sectionTitle}>@ Two Prime Locations</h1>

      {/* Amenities Section */}
      <div className={styles.primeloccontent}>
      <div className={styles.amenitiesGrid}>
        <div className={styles.amenityCard}>
          <img
            src={chai}
            alt="Chai Coffee Area"
            className={styles.amenityImage}
          />
          <div className={styles.amenityTitle}>Chai, Coffee, Mocha</div>
        </div>
        <div className={styles.amenityCard}>
          <img
            src={recreation}
            alt="Recreation Zone"
            className={styles.amenityImage}
          />
          <div className={styles.amenityTitle}>Recreation Zone</div>
        </div>
        <div className={styles.amenityCard}>
          <img
            src={library}
            alt="Library"
            className={styles.amenityImage}
          />
          <div className={styles.amenityTitle}>Complementary Library</div>
        </div>
        <div className={styles.amenityCard}>
          <img
            src={cafie}
            alt="Cafeteria"
            className={styles.amenityImage}
          />
          <div className={styles.amenityTitle}>Cafeteria</div>
        </div>
      </div>

      {/* Locations Section */}
      <div className={styles.locationsGrid}>
        <div className={styles.locationCard}>
          <img
            src={chakan}
            alt="Chakan Location"
            className={styles.locationImage}
          />
          
        </div>
        <div className={styles.locationCard}>
          <img
            src={saudagar}
            alt="Pimple Saudagar Location"
            className={styles.locationImage}
          />
          
        </div>
      </div>
      </div>
    </div>
  );
};

export default PrimeLocation;
