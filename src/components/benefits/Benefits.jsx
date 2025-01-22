import React from 'react';
import styles from './benefits.module.css'; // Import the CSS module
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import  benifitsimg from '../../assets/images/OIP.jpg'
import { Autoplay, Pagination } from 'swiper/modules';
import location from '../../assets/images/ft-icon1.png'
import desk from '../../assets/images/ft-icon2.png'
import room from '../../assets/images/ft-icon3.png'
import parking from '../../assets/images/ft-icon4.png'
import pod from '../../assets/images/ft-icon5.png'
import cabin from '../../assets/images/ft-icon6.png'
import headingmargin from '../../assets/images/heading-margin.png'
const images = [
    benifitsimg,
    benifitsimg,
    benifitsimg,
    // Add more image paths here
  ];
const benefitsData = [ 
 
  {icons:desk,
  label:'Private cabin'}
  ,
  {icons:room,
    label:'Meeting Room'},

   

      {icons:pod,
        label:'Office Cabin'},

        {icons:cabin,
          label:'Custom Cabin'}
  
];

const BenefitItem = ({ icons, label }) => {
  return (
    <div className={styles.benefitItem}>
      <img className={styles.benefitIcon} src={icons} alt={label}/>
      <span className={styles.benefitLabel}>{label}</span>
    </div>
  );
};

const Benefits = () => {
  return (
    <div className={styles.benefitsSection}>
      <div className={styles.benefitsContent}>
        <div className={styles.label}><img src={headingmargin} alt='headingmargin'/> BENEFITS</div>
        <h1 className={styles.title}>We provide more than just a space</h1>
        <p className={styles.subtitle}>
          Private cabins with WiFi and whiteboards for focused work and meetings.
        </p>
        <div className={styles.benefitsGrid}>
          {benefitsData.map((benefit) => (
            <BenefitItem key={benefit.label} {...benefit} />
          ))}
        </div>
      </div>
      <div className={styles.imageSection}>
      <Swiper
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          loop={true}
          disableOnInteraction={true} // Disable manual sliding
          modules={[Autoplay,Pagination]} // Import and use Pagination module
        pagination={{ clickable: true }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt={`Benefit Image ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Benefits;