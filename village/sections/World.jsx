import { motion } from 'framer-motion';

import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >

      <TypingText title="| People on the World" textStyles="text-center" />
      <TitleText
        title={(
          <>Track friends around you and invite them to play together in the same
            world
          </>
        )}
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[600px] rounded-[32px]" // Adjust the height and add rounded styling
        style={{ overflow: 'hidden' }} // Hide overflow to make rounded corners visible
      >
        {/* Larger Google Maps iframe with zoom parameter */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d402.61008207624286!2d5.642415644600127!3d6.346216970204045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1040d3632c963461%3A0xbf9772a64ed9a5aa!2s20%20Murtala%20Muhammed%20Way%2C%20Avbiama%20300104%2C%20Benin%20City%2C%20Edo!5e0!3m2!1sen!2sng!4v1693576034473!5m2!1sen!2sng&zoom=14"
          width="100%" // Adjust the width to fit your design
          height="100%" // Adjust the height to fit your design
          style={{ border: 0, borderRadius: '32px' }} // Add rounded corners
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
