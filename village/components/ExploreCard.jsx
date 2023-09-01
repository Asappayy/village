'use client';

import { motion } from 'framer-motion';
import React, { useState } from 'react'; // Import useState
import styles from '../styles';
import { fadeIn } from '../utils/motion';

const ExploreCard = ({ id, imgUrl, title, index, active, handleClick }) => {
  // Create a click counter for each card
  const [clickCount, setClickCount] = useState(0);

  // Function to open the WhatsApp link
  const openWhatsAppLink = () => {
    const whatsappNumber = '09151820000';
    const whatsappMessage = "Hello, I'd like to order " + title;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  // Function to handle card clicks
  const handleCardClick = () => {
    // If the card is not active and it's the first click, enlarge the image
    if (active !== id && clickCount === 0) {
      handleClick(id);
    } else if (clickCount === 1) {
      // If it's the second click, open the WhatsApp link
      openWhatsAppLink();
    }
    // Increment the click count
    setClickCount(clickCount + 1);
  };

  return (
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className={`relative ${
        active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
      } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
      onClick={handleCardClick}
    >
      <img
        src={imgUrl}
        alt="planet-04"
        className="absolute w-full h-full object-cover rounded-[24px]"
      />
      {active !== id ? (
        <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
          {title}
        </h3>
      ) : (
        <div className="absolute bottom-0 p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
          <div
            className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]`}
          >
            <img
              src="/headset.svg"
              alt="headset"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
          <p className="font-normal text-[16px] leading-[20.16px] text-white uppercase">
            The Village
          </p>
          <p className="font-normal text-[16px] leading-[20.16px] text-white lowercase">
            Click To Order
          </p>
          <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white">
            {title}
          </h2>
        </div>
      )}
    </motion.div>
  );
};

export default ExploreCard;
