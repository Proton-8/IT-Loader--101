import { motion } from "framer-motion";

function Background() {
  return (
    <motion.div
      className="background"
      animate={{ rotate: 360 }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
    />
  );
}

export default Background;
