import React from "react";
import { motion, useInView } from "framer-motion";
import { features } from "../constants";

const FeatureSection = () => {
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
      className="relative mt-20 border-b border-neutral-800 min-h-[800px]"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.div className="text-center" variants={itemVariants}>
        <motion.span
          className="bg-neutral-900 text-green-600 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase inline-block"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Features
        </motion.span>
        <motion.h2
          className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking wide"
          variants={itemVariants}
        >
          Easily build
          <motion.span
            className="bg-gradient-to-r from-green-600 to-green-900 text-transparent bg-clip-text"
            variants={itemVariants}
          >
            {""} your online presence
          </motion.span>
        </motion.h2>
      </motion.div>
      <motion.div
        className="flex flex-wrap mt-10 lg:mt-20"
        variants={containerVariants}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="w-full sm:w-1/2 lg:w-1/3"
            variants={itemVariants}
          >
            <motion.div
              className="flex"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-green-800 justify-center items-center rounded-full"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {feature.icon}
              </motion.div>
              <div>
                <motion.h5
                  className="mt-1 mb-6 text-xl"
                  variants={itemVariants}
                >
                  {feature.text}
                </motion.h5>
                <motion.p
                  className="text-md p-2 mb-20 text-neutral-500"
                  variants={itemVariants}
                >
                  {feature.description}
                </motion.p>
                <motion.a
                  href="#"
                  className="text-green-600 flex items-center"
                  whileHover={{ x: 5 }}
                ></motion.a>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default FeatureSection;
