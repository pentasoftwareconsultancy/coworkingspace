import React from "react";
import styles from "./SeatingPlansAndFeatures.module.css";
import workspaceListings from '../assets/data/workspacelisting'
import { useParams } from "react-router-dom";
import pricetag from '../assets/images/pricetag.svg'
import time from '../assets/images/rest-zone.svg'
import avatar from '../assets/images/avatar.jpg'
import inox from '../assets/images/d4d6213847e3f0ce93f7ab1baa36d2ad3372c623.webp'
import kotak from '../assets/images/kotak.webp'
import razaropay from '../assets/images/razaropay.webp'
import doutnut from '../assets/images/doubtnut.webp'
import creadble from '../assets/images/creadable.webp'
import accio from '../assets/images/acciojob.webp'
import purple from '../assets/images/purple.webp'
import classplus from '../assets/images/classplus.webp'
import hb from '../assets/images/hb.webp'
const SeatingPlansAndFeatures = () => {
    
    const {id}=useParams()
    const data=workspaceListings[id]
    
  return (
    <div className={styles.seatingfeaturecontainer}>

<div className={styles.card}>
      <div className={styles.header}>
        <h1 className={styles.title}>{data.title}</h1>
        <div className={styles.ratingLocation}>
          <span className={styles.rating}>
            ⭐ 4.2
          </span>
          <span className={styles.location}>
            {data.location}
          </span>
          <span className={styles.trust}>
            Trusted by CoFynd Users
          </span>
        </div>
        <div className={styles.price}>
          <span>Starting</span>
          <h2>{data.price}</h2>
        </div>
      </div>

      <div className={styles.imageGrid}>
        <div className={styles.mainImage}>
          <img
            src={data.image?.[0]}
            alt="Main"
            className={styles.image}
          />
          <span className={styles.peopleChoice}>👑 People Choice</span>
        </div>
        <div className={styles.gridImages}>
          <img src={data.image[0]} alt="Grid 1" className={styles.image} />
          <img src={data.image[1]} alt="Grid 2" className={styles.image} />
          </div>
          <div className={styles.moreImages}>
            <img src={data.image[0]} alt="Grid 4" className={styles.image} />
            <button className={styles.viewPhotos}>View All Photos</button>
          </div>
        
      </div>
    </div>
      {/* Seating Plans Section */}
      <div className={styles.awifscontainer}>
        <div>
      <section>
        <h1 className={styles.heading}>Seating Plans</h1>

        <div className={styles.seatingPlan}>
          <img src={data.image[0]} alt="Hot Desk" className={styles.planImage} />
          <div className={styles.planDetails}>
            <div className={styles.planInfo}>
              <h2 className={styles.planTitle}>Hot Desk</h2>
              <p className={styles.planDescription}>
                Floating desk within the community area with limited facilities
              </p>
            </div>
            <div className={styles.priceSection}>
              <div className={styles.price}>₹5,000/<span>seat</span></div>
              <button className={styles.enquireBtn}>Enquire Now</button>
            </div>
          </div>
        </div>

        <div className={styles.seatingPlan}>
          <img src={data.image[1]} alt="Dedicated Desk" className={styles.planImage} />
          <div className={styles.planDetails}>
            <div className={styles.planInfo}>
              <h2 className={styles.planTitle}>Dedicated Desk</h2>
              <p className={styles.planDescription}>
                Fixed workspace in a Coworking Office with all amenities
              </p>
              <div className={styles.seatingCapacity}>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                </svg>
                Seating: 1 - 100+ Seats
              </div>
            </div>
            <div className={styles.priceSection}>
              <div className={styles.price}>₹11,000/<span>seat</span></div>
              <button className={styles.enquireBtn}>Enquire Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section>
        <div className={styles.privateCabin}>
          <img src={data.image[2]} alt="Private Cabin" className={styles.cabinImage} />
          <div className={styles.cabinDetails}>
            <div className={styles.cabinInfo}>
              <h2>Private Cabin</h2>
              <p className={styles.cabinDescription}>
                Ready to move fully furnished private office with all amenities
              </p>
              <p className={styles.seatingInfo}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                </svg>
                Seating : 4, 6, 8, 10+ (Customization Available)
              </p>
            </div>
            <div>
              <div className={styles.price}>₹13,000/<span>seat</span></div>
              <button className={styles.enquireBtn}>Enquire Now</button>
            </div>
          </div>
        </div>

        <p className={styles.priceNote}>
          *Prices mentioned above are starting prices & as per availability
        </p>

        <div className={styles.upgradeSection}>
          <h2>Upgrade your office with CoFynd</h2>
          <div className={styles.cardsContainer}>
            <div className={styles.card}>
              <img src={data.image[0]} alt="Managed Office Space" className={styles.cardImage} />
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>Managed Office Space</h3>
                <p className={styles.cardDescription}>
                  An end-to-end office space solution customized to your needs including sourcing, design, building and
                  operations
                </p>
                <button className={styles.enquireBtn}>Enquire Now</button>
              </div>
            </div>
            <div className={styles.card}>
              <img src={data.image[1]} alt="Enterprise Solutions" className={styles.cardImage} />
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>Enterprise Solutions</h3>
                <p className={styles.cardDescription}>
                  Fully equipped offices for larger teams with flexibility to scale and customize your office in prime
                  locations & LEED certified buildings
                </p>
                <button className={styles.enquireBtn}>Enquire Now</button>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.whyBook}>
          <h2>Why book coworking space with CoFynd?</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureItem}>
              <img src={pricetag} alt="Price Tag" />
              Exclusive Pricing & Zero Booking fee
            </div>
            <div className={styles.featureItem}>
              <img src={pricetag} alt="Tour" />
              Guided Office Space Tours
            </div>
            <div className={styles.featureItem}>
              <img src={pricetag} alt="Verified" />
              Verified Spaces and Trusted Operators
            </div>
            <div className={styles.featureItem}>
              <img src={pricetag} alt="Manager" />
              Dedicated Relationship Manager
            </div>
          </div>
        </div>

        <button className={styles.floatingEnquire}>Enquire Now</button>
      </section>


     
      <div className={styles.mainContent}>
        <div className={styles.header}>
          <div>
            <h1 className={styles.title}>Awfis</h1>
            <div className={styles.location}>
              <span className={styles.rating}>★ 4.2</span>
              <span>Viman Nagar, Pune</span>
              <span className={styles.trusted}>👥 Trusted by CoFynd Users</span>
            </div>
          </div>
          <div className={styles.price}>
            <div>Starting</div>
            <div>₹11,000/month</div>
          </div>
        </div>

        <div className={styles.description}>
          Awfis Viman Nagar is located in the prime commercial district of Pune.
          It boasts of 430 workspaces and 5 meeting rooms. The seating plan
          comprises Hot Desks, Dedicated Desks, and Premium Private Cabins.{" "}
          <div className={styles.seeMore}>See More</div>
        </div>

        <div className={styles.officeTiming}>
          <h2>Office Timing</h2>
          <div className={styles.timingGrid}>
            <div className={styles.timingCard}>
            <img src={time} alt="time" />
              Mon - Fri
              <div>08:00 AM to 08:00 PM</div>
            </div>
            <div className={styles.timingCard}>
            <img src={time} alt="time1" />
              Sat
              <div>08:00 AM to 08:00 PM</div>
            </div>
            <div className={styles.timingCard}>
            <img src={time} alt="time2" />
              Sun
              <div>Closed</div>
            </div>
          </div>
        </div>

        <div className={styles.amenities}>
          <h2>Amenities</h2>
          <div className={styles.amenitiesGrid}>
            {[
              { icon: "fas fa-wifi", text: "High Speed WiFi" },
              { icon: "fas fa-print", text: "Printer" },
            ].map((item, idx) => (
              <div key={idx} className={styles.amenityItem}>
                <i className={item.icon}></i> {item.text}
              </div>
            ))}
          </div>
        </div>
      </div>

      </div>
      <div className={styles.sidebar}>
  <div className={styles.enquiryForm}>
    <h2>Interested in this Property</h2>
    <p>Fill your details for a customized quote</p>
    <form>
      <div className={styles.formGroup}>
        <input type="text" placeholder="Name*" className={styles.input} />
      </div>
      <div className={styles.formGroup}>
        <input type="email" placeholder="Email*" className={styles.input} />
      </div>
      <div className={`${styles.formGroup} ${styles.phoneInput}`}>
        <select className={styles.select}>
          <option>+91</option>
        </select>
        <input type="tel" placeholder="Phone*" className={styles.input} />
      </div>
      <div className={styles.formGroup}>
        <select className={styles.select}>
          <option>Type</option>
        </select>
      </div>
      <div className={styles.formGroup}>
        <select className={styles.select}>
          <option>No. Of Seats</option>
        </select>
      </div>
      <div className={styles.buttonGroup}>
        <button className={styles.enquireBtn}>Enquire Now</button>
        <button className={styles.visitBtn}>Book Site Visit</button>
      </div>
    </form>

    <div className={styles.expertContact}>
      <img
        src={avatar}
        alt="Expert"
        className={styles.expertImage}
      />
      <div>
        <div>Connect with our space expert</div>
        <div>✉ hello@cofynd.com</div>
      </div>
    </div>
    <div className={styles.trustedCompanies}>
    <h3>Trusted by Top Companies</h3>
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

  
</div>

    </div>

    </div>
  );
};

export default SeatingPlansAndFeatures;
