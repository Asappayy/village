import { motion } from 'framer-motion';
import Image from 'next/image'; // Import next/image

import styles from '../styles';
import { newFeatures } from '../constants';
import { NewFeatures, TitleText, TypingText } from '../components';
import { planetVariants, staggerContainer, fadeIn } from '../utils/motion';

const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.95] flex justify-center flex-col"
      >
        <TypingText title="| The Village" />
        <TitleText title={<>Our Chef's Recommendation</>} />
        <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
          {newFeatures.map((feature) => (
            <NewFeatures key={feature.title} {...feature} />
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={planetVariants('right')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        {/* Replace img tag with next/image */}
        <Image
          src="/perfect.jpg"
          alt="get-started"
          width={90}
          height={90}
          layout="responsive" // Make the image responsive
          className="border rounded-lg object-contain"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
