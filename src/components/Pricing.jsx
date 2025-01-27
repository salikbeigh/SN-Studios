import React from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";

const Pricing = () => {
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
    <div className="mt-20" ref={ref}>
      <motion.h2
        className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.8 }}
      >
        Pricing
      </motion.h2>
      <motion.div
        className="flex flex-wrap"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {pricingOptions.map((option, index) => (
          <motion.div
            key={index}
            className="w-full sm:w-1/2 lg:w-1/3 p-2"
            variants={itemVariants}
          >
            <div className="flex flex-col p-10 border border-neutral-700 rounded-xl h-full">
              <p className="text-4xl mb-8">
                {option.title}

                {option.title === "Pro" && (
                  <motion.span
                    className="bg-gradient-to-r from-green-600 to-green-950 text-transparent bg-clip-text text-xl mb-4 ml-2"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    (Most Popular)
                  </motion.span>
                )}
              </p>
              <p className="mb-8 flex items-center space-x-2">
                <span className="text-lg text-neutral-400 tracking-tight">
                  Pay once
                </span>
                <span className="text-5xl mr-2">{option.price}</span>
              </p>
              <ul>
                {option.features.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    className="mt-8 flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                    }
                    transition={{ delay: 0.2 * featureIndex, duration: 0.5 }}
                  >
                    <CheckCircle2 />
                    <span className="ml-2">{feature}</span>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-auto">
                <motion.a
                  href="/"
                  className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-5 tracking-tight text-xl hover:bg-green-900 border border-green-900 rounded-lg transition duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Buy Now
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Pricing;
