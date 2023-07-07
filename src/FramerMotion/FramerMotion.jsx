import React from "react";
import logo from "../logo192.png";
import "./framer.css";
import { motion } from "framer-motion";
const FramerMotion = () => {
  return (
    <motion.div
      initial={{ y: [0] }}
      transition={{ delay: 7, duration: 0.5 }}
      animate={{ y: [0, -721] }}
      className="animation-center"
    >
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 2 }}
        className="logo-div"
      >
        <img alt="logo" src={logo} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 5, delay: 2 }}
        className="framer-studio-div"
      >
        <h2>framer studio</h2>
      </motion.div>
    </motion.div>
  );
};

export default FramerMotion;
