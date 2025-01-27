import React from "react";
import video1 from "../assets/video3.mp4";
import video2 from "../assets/video4.mp4";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Info } from "lucide-react";

const HeroSection = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { twice: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center mt-6 lg:mt-20"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.h1
        className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide"
        variants={itemVariants}
      >
        SN Studios build solution
        <motion.span
          className="bg-gradient-to-r from-green-600 to-green-900 text-transparent bg-clip-text"
          variants={itemVariants}
        >
          {""} for businesses
        </motion.span>
      </motion.h1>
      <motion.p
        className="mt-10 text-lg text-center text-neutral-500 max-w-4xl"
        variants={itemVariants}
      >
        Transform your business vision into reality with our innovative
        solutions. Create stunning websites, impactful portfolios, and engaging
        landing pages effortlessly. Empower your brand to stand out and
        captivate your audience—start building your success story today!
      </motion.p>
      <motion.div className="flex justify-center my-10" variants={itemVariants}>
        <motion.a
          href="/#"
          className="bg-gradient-to-r from-green-600 to-green-900 py-3 px-3 mx-3 rounded-md flex items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Start Building <ArrowRight className="ml-2" size={18} />
        </motion.a>
        <motion.a
          href="/#"
          className="py-3 px-4 mx-3 rounded-md border flex items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Learn More <Info className="ml-2" size={18} />
        </motion.a>
      </motion.div>
      <motion.div className="flex mt-10 justify-center" variants={itemVariants}>
        <motion.video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-range-700 shadow-green-500 mx-2 my-4"
          whileHover={{ scale: 1.02 }}
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag
        </motion.video>

        <motion.video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-range-700 shadow-green-500 mx-2 my-4"
          whileHover={{ scale: 1.02 }}
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag
        </motion.video>
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;
