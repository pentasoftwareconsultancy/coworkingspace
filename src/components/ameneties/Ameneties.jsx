import React, { useState } from 'react';
import styles from './ameneties.module.css';
import headingmargin from '../../assets/images/heading-margin.png'
import hubcamber from '../../assets/images/HUB_Canberra_190421159056-scaled.jpg'
const Ameneties = () => {
    const [activeTab, setActiveTab] = useState('Private Cabin');

    const renderContent = () => {
        switch (activeTab) {
            case 'Private Cabin':
                return <PrivateCabins/>;
            case 'Team Cabin':
                return <TeamCabins />;
            case 'Meeting Room':
                return <MeetingroomCabins />;
            case 'Private Pod':
                return <PrivatePod />;
            default:
                return null;
        }
    };

    return (
        <div className={styles.container}>
            <header className={styles.amenitiesHeader}>
               
                <h1><img src={headingmargin} alt='headingmargin'/> AMENITIES</h1>
            </header>

            <div className={styles.tabs}>
                {['Private Cabin', 'Team Cabin', 'Meeting Room', 'Private Pod'].map((tab) => (
                    <button
                        key={tab}
                        className={`${styles.tab} ${activeTab === tab ? styles.active : ''}`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <div className={styles.contentWrapper}>{renderContent()}</div>
        </div>
    );
};


const PrivateCabins = () => {
    return (
        <div className={styles.contentGrid}>
            <div className={styles.imageContainer}>
                <img
                    src={hubcamber}
                    alt="Private cabin with desk and chair"
                    
                />
            </div>
            <div className={styles.amentiesfeatures}>
                <div className={styles.amentiesfeature}>
                    <h2>Versatile Accommodations:</h2>
                    <p>Suitable for any group size, from small teams to large conferences.</p>
                </div>

                <div className={styles.amentiesfeature}>
                    <h2>Seamless Booking:</h2>
                    <p>Book hassle-free with real-time availability on our website.</p>
                </div>

                <div className={styles.amentiesfeature}>
                    <h2>Professional Environment:</h2>
                    <p>Tailored to meet all your business needs for maximum productivity.</p>
                </div>

                <button className={styles.bookButton}>Book For Your Start-Up Now</button>
            </div>
        </div>
    );
};

const TeamCabins = () => {
    return (
        <div className={styles.contentGrid}>
            <div className={styles.imageContainer}>
                <img
                    src={hubcamber}
                    alt="Private cabin with desk and chair"
                    
                />
            </div>
            <div className={styles.amentiesfeatures}>
            <div class={styles.amentiesfeature}>
                    <h2>Dedicated Private Spaces:</h2>
                    <p>Ergonomic furniture, natural lighting, and advanced tech for efficient teamwork.</p>
                </div>

                <div class={styles.amentiesfeature}>
                    <h2>Comprehensive Amenities:</h2>
                    <p>Internet, outlets, and whiteboards cater to your team's work and brainstorming needs.</p>
                </div>

                <div class={styles.amentiesfeature}>
                    <h2>Confidential and Productive:</h2>
                    <p>Soundproof walls ensure privacy, fostering a focused environment.</p>
                </div>


                <button className={styles.bookButton}>Book For Your Start-Up Now</button>
            </div>
        </div>
    );
};


const MeetingroomCabins = () => {
    return (
        <div className={styles.contentGrid}>
            <div className={styles.imageContainer}>
                <img
                    src={hubcamber}
                    alt="Private cabin with desk and chair"
                    
                />
            </div>
            <div className={styles.amentiesfeatures}>
                <div className={styles.amentiesfeature}>
                <h2>Fully Equipped with the Latest Technology:</h2>
                    <p>HD projectors, video conferencing, and sound systems ensure smooth meetings.</p>

                </div>

                <div className={styles.amentiesfeature}>
                <h2>Comfortable and Professional Environment:</h2>
                    <p>Professional decor and ergonomic furniture provide a pleasant, impressive atmosphere.</p>

                </div>

                <div className={styles.amentiesfeature}>
                <h2>Interactive Brainstorming Tools:</h2>
                    <p>Whiteboards and flip charts for interactive brainstorming sessions.</p>

                </div>

                <button className={styles.bookButton}>Book For Your Start-Up Now</button>
            </div>
        </div>
    );
};


const PrivatePod = () => {
    return (
        <div className={styles.contentGrid}>
            <div className={styles.imageContainer}>
                <img
                    src={hubcamber}
                    alt="Private cabin with desk and chair"
                    
                />
            </div>
            <div className={styles.amentiesfeatures}>
                <div className={styles.amentiesfeature}>
                <h2>Quiet and Focused Workspace:</h2>
                    <p>Soundproofing provides privacy and focus.</p>

                </div>

                <div className={styles.amentiesfeature}>
                <h2>Ergonomic Comfort:</h2>
                    <p>Includes seating, adjustable desks, and climate control for peak productivity.</p>
                </div>


            

                <button className={styles.bookButton}>Book For Your Start-Up Now</button>
            </div>
        </div>
    );
};


export default Ameneties;