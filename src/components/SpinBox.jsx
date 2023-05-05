import React from "react";
import { motion } from "framer-motion";
// import "../App.css";

    export const Spinner = () =>{

    return (
    <motion.div
      className="animated-bg"
      animate={{ scale: [100, 10, 1, 10] }}
      transition={{ duration: 10, repeat: Infinity }}
    />
  );
  }