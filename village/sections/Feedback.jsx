'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { fadeIn, staggerContainer, zoomIn } from '../utils/motion';

const Feedback = () => (
  <section className={`${styles.paddings}`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
      >
        <div className="feedback-gradient" />
        <div>
          <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white">
            The Village
          </h4>
          <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
            20 Murtala Muhammed Way, Edo!
          </p>
        </div>

        <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white">
          “Choose The Village for an unparalleled experience; savor local culinary treasures in an elegant ambiance. Indulge in authenticity, where every bite tells a flavored story.”
        </p>
        
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative flex-1 flex justify-center items-center"
      >
        <img
          src="/skrrr.jpg"
          alt="planet-09"
          className="w-full h-auto max-h-[400px] object-cover rounded-[32px] object-top"
        />

        <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block hidden absolute -left-[10%] top-[3%]"
        >
          {/* <img
            src="/stamp.png"
            alt="stamp"
            className="w-[155px] h-[155px] object-contain"
          /> */}
        </motion.div>
      </motion.div>
    </motion.div>

    {/* About the CEO Section */}
    <div className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6 mt-12 mb-8`}>
      <div className="relative flex-1 flex justify-center items-center">
        <img
          src="/ray.jpg"
          alt="CEO"
          className="w-full h-auto max-h-[500px] object-cover rounded-[32px] object-top"
        />
      </div>
      <div
        className="flex-[0.8] lg:max-w-[700px] flex flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative mt-4"
      >
        <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white">
          About the CEO
        </h4>
        <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
          Rayfield Odigie
        </p>
        <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white">
          Rayfield Odigie is the driving force behind 'The Village Restaurant and Lounge,' set to launch soon. With deep roots in Nigerian cuisine and over a decade of experience in hospitality, Rayfield is on a mission to provide mouthwatering Nigerian dishes in a serene and elegant setting.
          <br /><br />
          Born and raised in Nigeria, Rayfield's passion for authentic Nigerian flavors led him to create 'The Village Restaurant and Lounge.' 
          As CEO, he brings a wealth of expertise to ensure top-notch services and unforgettable dining experiences.
          <br /><br />
          Rayfield envisions The Village Restaurant and Lounge as a cultural hub where tradition and innovation meet. Join him on this gastronomic journey to celebrate the vibrant flavors of Nigeria.
        </p>
      </div>
    </div>
  </section>
);

export default Feedback;
