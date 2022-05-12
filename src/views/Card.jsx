import React from "react";
import { motion } from "framer-motion";

const Card = ({ children }) => {
  return <motion.div className="card">{children}</motion.div>;
};

export default Card;
