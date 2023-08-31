import { motion } from 'framer-motion';
import Image from 'next/image'; // Import next/image

import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div
      className={`${styles.innerWidth} mx-auto flex items-center justify-between`}
    >
      <div className="flex items-center gap-4">
        <Image
          src="/villagee.png"
          alt="logo"
          width={60}
          height={60}
          layout="fixed"
          className="object-contain filter brightness-0 invert grayscale"
        />
      </div>
      <div className="flex items-center gap-2">
        <Image
          src="/village-text.png"
          alt="logo-text"
          width={250}
          height={250}
          layout="fixed"
          className="object-contain filter brightness-0 invert grayscale"
        />
      </div>
      <div className="flex items-center gap-8">
        <Image
          src="/menu.svg"
          alt="menu"
          width={24}
          height={24}
          layout="fixed"
          loading="eager" 
          className="object-contain"
        />
      </div>
    </div>
  </motion.nav>
);

export default Navbar;
