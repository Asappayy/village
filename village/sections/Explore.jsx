import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image'; // Import next/image

import styles from '../styles';
import { exploreWorlds } from '../constants';
import { staggerContainer } from '../utils/motion';
import { ExploreCard, TitleText, TypingText } from '../components';

const Explore = () => {
  const [active, setActive] = useState('world-2');

  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| The Village" textStyles="text-center" />
        <TitleText
          title={<>Choose From The Flexibility Of <br className="md:block hidden" /> Our Dishes</>}
          textStyles="text-center"
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            >
              {/* Replace img tags with next/image */}
              <Image
                src={world.imageSrc}
                alt={world.name}
                width={500} // Set your desired width
                height={300} // Set your desired height
                layout="responsive" // Make the image responsive
                className="object-cover rounded-md"
              />
            </ExploreCard>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
