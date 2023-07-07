import React from "react";
import logo from "../logo192.png";
import "./framer-motion.module.css";
import { motion } from "framer-motion";
const FramerMotion = () => {
  return (
    <div className="animation-center">
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
        transition={{ duration: 5 }}
        className="framer-studio-div"
      >
        <h2>framer studio</h2>
      </motion.div>
    </div>
  );
};

export default FramerMotion;
