import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/SN.logo-Photoroom-removebg-preview.png";
import { navItems } from "../constants";

const NavBar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const handleToggle = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.nav
      className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80"
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <motion.div
            className="flex items-center flex-shrink-0"
            variants={itemVariants}
          >
            <img
              className="h-14 w-14 mr-2"
              src={logo || "/placeholder.svg"}
              alt="Logo"
            />
            <span className="text-xl tracking-tight">SN Studios</span>
          </motion.div>
          <motion.ul
            className="hidden lg:flex ml-14 space-x-12"
            variants={navVariants}
          >
            {navItems.map((item, index) => (
              <motion.li key={index} variants={itemVariants}>
                <motion.a
                  className="hover:text-green-300 hover:border-b border-green-700/80 transition-colors duration-300"
                  href={item.href}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.a>
              </motion.li>
            ))}
          </motion.ul>
          <motion.div
            className="hidden lg:flex justify-center space-x-12 items-center"
            variants={navVariants}
          >
            <motion.a
              href="/#"
              className="py-2 px-3 border rounded-md transition-colors duration-300 hover:bg-green-700/20"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Sign In
            </motion.a>
            <motion.a
              href="/#"
              className="bg-gradient-to-r from-green-600 to-green-900 py-2 px-3 border rounded-md transition-opacity duration-300 hover:opacity-90"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Create an account
            </motion.a>
          </motion.div>
          <motion.div
            className="lg:hidden md:flex flex-col justify-end"
            variants={itemVariants}
          >
            <motion.button
              onClick={handleToggle}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {mobileDrawerOpen ? <X /> : <Menu />}
            </motion.button>
          </motion.div>
        </div>
        <AnimatePresence>
          {mobileDrawerOpen && (
            <motion.div
              className="fixed right-0 top-0 z-20 bg-neutral-900 w-full h-full p-12 flex flex-col justify-center items-center lg:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <motion.ul
                className="space-y-4"
                variants={navVariants}
                initial="hidden"
                animate="visible"
              >
                {navItems.map((item, index) => (
                  <motion.li key={index} variants={itemVariants}>
                    <motion.a
                      href={item.href}
                      className="text-xl hover:text-green-300 transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.label}
                    </motion.a>
                  </motion.li>
                ))}
              </motion.ul>
              <motion.div
                className="flex space-x-6 mt-5"
                variants={navVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.a
                  href="/#"
                  className="py-2 px-3 border rounded-md transition-colors duration-300 hover:bg-green-700/20"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Sign In
                </motion.a>
                <motion.a
                  href="/#"
                  className="bg-gradient-to-r from-green-600 to-green-900 py-2 px-3 rounded-md transition-opacity duration-300 hover:opacity-90"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Create an account
                </motion.a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default NavBar;
