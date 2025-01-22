import React from 'react';
import styles from './meetingrooms.module.css'; // Import the CSS module
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import  benifitsimg from '../../assets/images/OIP.jpg'
import { Autoplay, Pagination } from 'swiper/modules';
import ac from '../../assets/images/ac_icon.png'
import seat from '../../assets/images/6-8seat-icon.png'
import hdmi from '../../assets/images/hdmi_icon.png'
import mbpsic from '../../assets/images/mbps_icon.png'
import park from '../../assets/images/parking_icon.png'
import meet from '../../assets/images/meet-cabin-icon.png'
const images = [
    benifitsimg,
    benifitsimg,
    benifitsimg,
    // Add more image paths here
  ];
const benefitsData = [ 
  {
  icons:mbpsic,
 label:'300 MBPS Internet'}
  ,
  {icons:ac,
  label:'Air Conditioned'}
  ,
  {icons:park,
    label:'Ambient Parking'},

    {icons:seat,
      label:'6-8 Seats'},

      {icons:hdmi,
        label:'Smart TV with HDMI'},

        {icons:meet,
          label:'Perfect for Team Meet'}
  
];

const MeetingRoomsItem = ({ icons, label }) => {
  return (
    <div className={styles.benefitItem}>
      <img className={styles.benefitIcon} src={icons} alt={label}/>
      <span className={styles.benefitLabel}>{label}</span>
    </div>
  );
};

const MeetingRooms = () => {
  return (
    <div className={styles.benefitsSection}>
      <div className={styles.benefitsContent}>
        
        <h1 className={styles.title}>Meeting Room</h1>
       <hr />
        <div className={styles.benefitsGrid}>
          {benefitsData.map((benefit) => (
            <MeetingRoomsItem key={benefit.label} {...benefit} />
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

export default MeetingRooms;