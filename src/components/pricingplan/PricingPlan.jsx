// PricingPlans.jsx
import React from 'react';
import styles from './pricingplan.module.css';
import headingmargin from '../../assets/images/heading-margin.png'

const PricingPlan = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.mainTitle}><img src={headingmargin} alt="headingmargin" />PRICING PLANS</h1>

            <div className={styles.offerBanner}>
                <span className={styles.offerIcon}>✓</span>
                Available Offer<br/>
                <div className={styles.offerText}>10 Day Pass - ₹2000 (10% off)</div>
            </div>

            <div className={styles.pricingCards}>
                {/* Daily Plan */}
                <div className={styles.pricingCard}>
                    <h2>Daily Plan</h2>
                    <div className={styles.price}>
                        <span className={styles.currency}>₹</span>
                        <span className={styles.amount}>250</span>
                        <span className={styles.period}>Per day</span>
                    </div>
                    <ul className={styles.features}>
                        <li>High Speed Internet</li>
                        <li>Full Day Access</li>
                        <li>Car/Bike Parking</li>
                        <li>Work Desk & Chair</li>
                    </ul>
                    <button className={styles.getStarted}>GET STARTED</button>
                </div>

                {/* Monthly Plan */}
                <div className={`${styles.pricingCard} ${styles.featured}`}>
                    <h2>Monthly Plan</h2>
                    <div className={styles.price}>
                        <span className={styles.currency}>₹</span>
                        <span className={styles.amount}>4999</span>
                        <span className={styles.period}>Per seat</span>
                    </div>
                    <ul className={styles.features}>
                        <li>High Speed Internet</li>
                        <li>Full Day Access</li>
                        <li>Car/Bike Parking</li>
                        <li>Work Desk & Chair</li>
                        <li>Meeting Room Access</li>
                    </ul>
                    <button className={styles.getStarted}>GET STARTED</button>
                </div>

                {/* Private Pod */}
                <div className={styles.pricingCard}>
                    <h2>Private Pod</h2>
                    <div className={styles.price}>
                        <span className={styles.currency}>₹</span>
                        <span className={styles.amount}>6999</span>
                        <span className={styles.period}>Per seat</span>
                    </div>
                    <ul className={styles.features}>
                        <li>High Speed Internet</li>
                        <li>Full Day Access</li>
                        <li>Car/Bike Parking</li>
                        <li>Work Desk & Chair</li>
                        <li>30Hrs Meeting Room Access</li>
                    </ul>
                    <button className={styles.getStarted}>GET STARTED</button>
                </div>
            </div>
        </div>
    );
};

export default PricingPlan;
