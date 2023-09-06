import Image from 'next/image'; // Import next/image
import styles from '../styles';

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <div className={`${styles.innerWidth} mx-auto flex flex-col`}>
      <div className="flex justify-center items-center flex-col relative z-10">
        <h1 className={styles.heroHeading}>Original</h1>
        <div className="flex flex-row justify-center items-center">
          <h1 className={styles.heroHeading}>Fla</h1>
          {/* Apply the skewed 'V' effect */}
          <h1
            className={styles.heroHeading}
            style={{
              transform: 'skewX(-20deg)', // Adjust the skew value as needed
              display: 'inline-block',
              margin: '0',
            }}
          >
            V
          </h1>
          <h1 className={styles.heroHeading}>ors</h1>
        </div>
      </div>

      <div className="relative w-full md:-mt-[20px] -mt-[12px]">
        <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />
        <Image
          src="/meat.jpg"
          alt="hero_cover"
          width={1000} // Set your desired width
          height={500} // Set your desired height
          loading="eager"
          layout="responsive" // Optimize for responsiveness
          objectFit="cover" // Use object-fit: cover
          className="rounded-tl-[140px] z-9 relative"
        />
        <a href="#explore">
          <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
            {/* Use next/image for this image as well */}
            {/* <Image
              src="/stamp.png"
              alt="stamp"
              width={155}
              height={155}
              layout="fixed"
            /> */}
          </div>
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
