import { motion } from "framer-motion";
import Lottie from "lottie-react";
//import coffeeAnimation from "./coffeeAnimation4.json";

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ y: 0, x: 0, scaleY: 1 }}
      animate={{ y: 0, x: 0, scaleY: 0, transformOrigin: "top" }}
      transition={{ duration: 1, delay: 2.5, ease: [0.87, 0, 0.13, 1] }}
      className="z-[100] h-screen w-full bg-primary-900"
      style={{
        position: "fixed",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <motion.h2
        initial={{
          opacity: 1,
          y: 0,
        }}
        animate={{
          opacity: [1, 0.5, 0],
          y: 150,
        }}
        transition={{ delay: 2.3, duration: 1, ease: "easeInOut" }}
        className="font-heading text-5xl font-bold text-tertiary-300"
      >
        Café Kloster
      </motion.h2>
      {/* <motion.div
        style={{ width: "250px", height: "250px" }}
        initial={{
          opacity: 1,
          y: 0,
        }}
        animate={{
          opacity: [1, 0.5, 0],
          y: -150,
        }}
        transition={{ delay: 2.3, duration: 1, ease: "easeInOut" }}
      >
        <Lottie animationData={coffeeAnimation} loop={true} />
      </motion.div> */}
    </motion.div>
  );
};

export default LoadingScreen;
