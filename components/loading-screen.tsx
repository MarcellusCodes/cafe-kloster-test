import { motion } from "framer-motion";

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ y: 0, x: 0, width: 0 }}
      animate={{ y: 0, x: 0, width: "100%", transformOrigin: "left" }}
      transition={{ duration: 1, delay: 3, ease: "easeInOut" }}
      className="z-50"
      style={{
        backgroundColor: "red",
        width: "100%",
        height: "100%",
        position: "absolute",
      }}
    ></motion.div>
  );
};

export default LoadingScreen;
