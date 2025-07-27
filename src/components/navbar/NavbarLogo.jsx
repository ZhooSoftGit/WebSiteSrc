import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NavbarLogo = () => {
  return (
    <Link to="/" className="flex items-center">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-teal-800 bg-clip-text text-transparent"
      >
        Zhoosoft
      </motion.div>
    </Link>
  );
};

export default NavbarLogo;