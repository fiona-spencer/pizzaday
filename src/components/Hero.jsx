import { motion } from "framer-motion";
import { styles } from "../styles"; // Ensure this is used if needed
import { ComputersCanvas } from "./canvas"; // Remove if not used

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className="relative w-full h-full flex justify-center items-center">
        {/* Image with relative positioning to act as a container */}
        <img
          src="src/assets/hero-background.avif"
          alt="Hero background"
          className="w-full h-full object-cover" // Ensures the image covers the container
        />

        {/* Animated overlay */}
        <a
          href="#about"
          className="absolute flex flex-col items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          <div className="pt-[100px] pb-[10px] items-center flex">
            <img
              src="src/assets/hero-picture.webp"
              alt="Hero picture"
              className="w-auto h-auto " // Adjust size and margin as needed
            />
            <img
              src="src/assets/hero-pizza.webp"
              alt="Hero picture"
              className="w-[2000px] h-auto " // Adjust size and margin as needed
            />
          </div>

          <div className="w-[35px] h-[64px] squared-3xl border-4 border-red-600 flex justify-center items-start">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 squared-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
