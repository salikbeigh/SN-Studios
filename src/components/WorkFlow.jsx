import React from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import workflow from "../assets/workflow2.webp";
import { checklistItems } from "../constants";

const WorkFlow = () => {
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="mt-20" ref={ref}>
      <motion.h2
        className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide"
        initial={{ opacity: 0, y: -50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 0.8 }}
      >
        Empowering Your
        {""}{" "}
        <motion.span
          className="bg-gradient-to-r from-green-600 to-green-900 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Digital Journey
        </motion.span>
      </motion.h2>
      <div className="flex flex-wrap justify-center">
        <motion.div
          className="p-2 w-full lg:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8 }}
        >
          <img src={workflow || "/placeholder.svg"} alt="workflow" />
        </motion.div>
        <motion.div
          className="pt-12 w-full lg:w-1/2"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {checklistItems.map((item, index) => (
            <motion.div
              key={index}
              className="flex mb-12"
              variants={itemVariants}
            >
              <motion.div
                className="text-green-500 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <CheckCircle2 />
              </motion.div>
              <div>
                <motion.h5
                  className="mt-1 mb-2 text-xl"
                  variants={itemVariants}
                >
                  {item.title}
                </motion.h5>
                <motion.p
                  className="text-md text-neutral-500"
                  variants={itemVariants}
                >
                  {item.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default WorkFlow;
