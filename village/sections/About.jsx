import { motion } from 'framer-motion';
import Image from 'next/image'; // Import next/image
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About The Village" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">The Village</span> is an indigenous restaurant where tradition meets sophistication. Immerse yourself in the authenticity of Nigeria's finest dishes, from aromatic jollof rice to savory suya. Our elegant ambiance pays tribute to the roots of Nigerian culture while providing a modern dining experience. With each bite, you taste the legacy of generations. Join us in celebrating Nigeria's rich culinary heritage, only at
        <span className="font-extrabold text-white">
          "The Village."
        </span>{' '}
        Indulge in the{' '}
        <span className="font-extrabold text-white">artistry of pounded yam and egusi soup, savoring flavors that bind communities. At "The Village,"</span>
      </motion.p>

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="w-[18px] h-[28px] mt-[28px]"
      >
        <Image
          src="/arrow-down.svg"
          alt="arrow down"
          width={18}
          height={28}
          layout="fixed"
          loading="eager" 
          className="object-contain"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default About;
