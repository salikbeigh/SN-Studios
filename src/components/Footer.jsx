import React from "react";
import { resourcesLinks, platformLinks, communityLinks } from "../constants";
import { motion, useInView } from "framer-motion";

const Footer = () => {
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
    <motion.footer
      ref={ref}
      className="mt-20 border-t py-10 border-neutral-700"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.div
        className="grid grid-cols-2 lg:grid-cols-3 gap-4"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <h3 className="text-md font-semibold mb-4 ">Resources</h3>
          <ul className="space-y-2">
            {resourcesLinks.map((link, index) => (
              <motion.li key={index} variants={itemVariants}>
                <a
                  className="text-neutral-300 hover:text-white"
                  href={link.href}
                >
                  {link.text}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
        <motion.div variants={itemVariants}>
          <h3 className="text-md font-semibold mb-4 ">Platform</h3>
          <ul className="space-y-2">
            {platformLinks.map((link, index) => (
              <motion.li key={index} variants={itemVariants}>
                <a
                  className="text-neutral-300 hover:text-white"
                  href={link.href}
                >
                  {link.text}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
        <motion.div variants={itemVariants}>
          <h3 className="text-md font-semibold mb-4 ">Community</h3>
          <ul className="space-y-2">
            {communityLinks.map((link, index) => (
              <motion.li key={index} variants={itemVariants}>
                <a
                  className="text-neutral-300 hover:text-white"
                  href={link.href}
                >
                  {link.text}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
