import React from "react";
import styles from "./contactpopup.module.css";
import { BsCheckCircleFill } from "react-icons/bs";
import inox from '../assets/images/d4d6213847e3f0ce93f7ab1baa36d2ad3372c623.webp'
import kotak from '../assets/images/kotak.webp'
import razaropay from '../assets/images/razaropay.webp'
import doutnut from '../assets/images/doubtnut.webp'
import creadble from '../assets/images/creadable.webp'
import accio from '../assets/images/acciojob.webp'
import purple from '../assets/images/purple.webp'
import classplus from '../assets/images/classplus.webp'
import hb from '../assets/images/hb.webp'
import connectcontact from '../assets/images/connectcontact.png'
const ContactPopup = ({setShowPopup}) => {
    return (
        <div className={styles.container}>
            <div className={styles.leftSection}>
                <h1>Find Your Perfect Space Now!</h1>
                <p>Our space experts will provide customized quotes with detailed inventory as per your needs</p>

                <div className={styles.features}>
                    <div className={styles.featureItem}>
                       <i><BsCheckCircleFill/></i>
                        <span>Customized Space</span>
                    </div>
                    <div className={styles.featureItem}>
                    <i> <BsCheckCircleFill/></i>
                    <span>Prime Locations</span>
                    </div>
                    <div className={styles.featureItem}>
                    <i> <BsCheckCircleFill/></i>
                    <span>Expert Guided Tours</span>
                    </div>
                    <div className={styles.featureItem}>
                    <i> <BsCheckCircleFill/></i>
                    <span>Flexible Terms</span>
                    </div>
                </div>

                <div className={styles.companies}>
                    <h3>Trusted by top companies</h3>
                    <div className={styles.companyGrid}>
                        <img src={inox} alt="INOX" className={styles.companyLogo} />
                        <img src={kotak} alt="Kotak" className={styles.companyLogo} />
                        <img src={razaropay} alt="Razorpay" className={styles.companyLogo} />
                        <img src={doutnut} alt="Doughnut" className={styles.companyLogo} />
                        <img src={creadble} alt="Credable" className={styles.companyLogo} />
                        <img src={accio} alt="Accio Job" className={styles.companyLogo} />
                        <img src={purple} alt="Purple" className={styles.companyLogo} />
                        <img src={classplus} alt="Classplus" className={styles.companyLogo} />
                        <img src={hb} alt="HT Media" className={styles.companyLogo} />
                    </div>
                </div>
            </div>

            <div className={styles.rightSection}>
                <button className={styles.closeButton} onClick={()=>{setShowPopup(false)}}>&times;</button>
                <h2>Yes, I am Interested!</h2>
                <p>Fill your details for a customized quote</p>

                <form>
                    <div className={styles.formGroup}>
                        <input type="text" placeholder="Name*" required />
                    </div>
                    <div className={styles.formGroup}>
                        <input type="email" placeholder="Email*" required />
                    </div>
                    <div className={`${styles.formGroup} ${styles.phoneInput}`}>
                        <select>
                            <option>+91</option>
                        </select>
                        <input type="tel" placeholder="Phone*" required />
                    </div>
                    <div className={styles.formGroup}>
                        <select>
                            <option>Type Of Space</option>
                        </select>
                    </div>
                    <div className={styles.formGroup}>
                        <select>
                            <option>Select City*</option>
                        </select>
                    </div>
                    <button className={styles.submitcontactbutton} type="submit">Submit</button>
                </form>

                <div className={styles.expertContact}>
                    <img src={connectcontact} alt="Space Expert" />
                    <div className={styles.expertInfo}>
                        <p>Connect with our space expert</p>
                        <p>✉ hello@cofynd.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPopup;
