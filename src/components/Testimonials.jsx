import React from "react";
import { motion, useInView } from "framer-motion";
import { testimonials } from "../constants";

const Testimonials = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { twice: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
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
    <div className="mt-20 tracking-wide" ref={ref}>
      <motion.h2
        className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.8 }}
      >
        What people are saying
      </motion.h2>
      <motion.div
        className="flex flex-wrap justify-center"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2"
            variants={itemVariants}
          >
            <motion.div
              className="bg-neutral rounded-md p-6 text-md border border-neutral-800 font-thin"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.2 * index, duration: 0.5 }}
              >
                {testimonial.text}
              </motion.p>
              <motion.div
                className="flex mt-8 items-start"
                initial={{ opacity: 0, x: -20 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                }
                transition={{ delay: 0.2 * index + 0.3, duration: 0.5 }}
              >
                <motion.img
                  className="w-12 h-12 mr-6 rounded-full border border-neutral-300"
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.user}
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                />
                <div>
                  <motion.h6
                    className="font-medium text-neutral-400"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.2 * index + 0.4, duration: 0.5 }}
                  >
                    {testimonial.user}
                  </motion.h6>
                  <motion.span
                    className="text-sm font-normal italic text-neutral-600 mt-1 block"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.2 * index + 0.5, duration: 0.5 }}
                  >
                    {testimonial.company}
                  </motion.span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Testimonials;
