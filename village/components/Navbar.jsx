import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from '../styles';
import { navVariants } from '../utils/motion';
import { AiOutlineClose } from 'react-icons/ai'; // Import the close icon

const Dropdown = ({ menuItems, toggleDropdown }) => (
  <div className="fixed top-0 left-0 w-full h-full bg-primary-black text-white flex flex-col justify-center items-center z-50">
    <ul>
      {menuItems.map((item, index) => (
        <li
          key={index}
          className="py-4 px-4 hover:bg-purple-700 text-center text-xl font-semibold"
        >
          {item}
        </li>
      ))}
    </ul>
    <button
      onClick={toggleDropdown}
      className="py-2 px-4 mt-8 text-red-500 hover:text-red-700 text-xl"
    >
      Close <AiOutlineClose className="inline-block ml-2 text-xl" /> {/* Previous close button */}
    </button>
    <button
      onClick={toggleDropdown}
      className="absolute top-2 right-2 text-red-500 hover:text-red-700 text-2xl" // Increase text size
      style={{ transform: 'translateX(-50%)' }} // Shift it to align with menu.svg
    >
      <AiOutlineClose className="inline-block ml-2 text-xl" /> {/* New close button */}
    </button>
  </div>
);

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const menuItems = [
    'About The CEO',
    'Dishes Sold',
    'Find Us',
  ];

  return (
    <div className="relative">
      <div className="absolute w-full h-full inset-0 gradient-02" />

      <motion.nav
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className={`${styles.xPaddings} py-8 relative z-40`}
      >
        <div className={`${styles.innerWidth} mx-auto flex items-center justify-between relative`}>
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
          <div className="flex items-center gap-8 relative">
            <button onClick={toggleDropdown}>
              {isDropdownOpen ? (
                <div className="text-xl">
                  <AiOutlineClose /> {/* Previous close button */}
                </div>
              ) : (
                <Image
                  src="/menu.svg"
                  alt="menu"
                  width={24}
                  height={24}
                  layout="fixed"
                  loading="eager"
                  className="object-contain z-24"
                />
              )}
            </button>
            {isDropdownOpen && (
              <Dropdown menuItems={menuItems} toggleDropdown={toggleDropdown} />
            )}
          </div>
        </div>
      </motion.nav>

      <div className="homepage-content" style={{ position: 'relative', zIndex: 1 }}>
        {/* Add your homepage content here */}
      </div>
    </div>
  );
};

export default Navbar;
