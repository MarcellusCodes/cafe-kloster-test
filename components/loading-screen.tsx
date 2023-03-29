import { motion } from "framer-motion";
import Lottie from "lottie-react";
import coffeeAnimation from "./coffeeAnimation4.json";
import cf1 from "./cf1.json";
import cf2 from "./cf2.json";

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ y: 0, x: 0, scaleY: 1 }}
      animate={{ y: 0, x: 0, scaleY: 0, transformOrigin: "top" }}
      transition={{ duration: 1, delay: 2.5, ease: [0.87, 0, 0.13, 1] }}
      className="fixed z-[100] flex h-screen w-full flex-col items-center justify-center gap-4 bg-primary-900"
    >
      <motion.h2
        /* initial={{
          opacity: 1,
          y: 0,
        }}
        animate={{
          opacity: [1, 0.5, 0],
          y: 150,
        }}
        transition={{ delay: 2.3, duration: 1, ease: "easeInOut" }} */
        className="font-heading text-5xl font-bold text-tertiary-300"
      >
        Café Kloster
      </motion.h2>
      <motion.div className="relative mt-6 h-3 w-[250px] rounded-sm bg-tertiary-100">
        <motion.div
          className="absolute top-0 left-0 h-full w-full"
          initial={{
            scaleX: 0,
            backgroundColor: "#f59745",
          }}
          animate={{
            backgroundColor: "#f59745",
            scaleX: 1,
            transformOrigin: "left",
          }}
          transition={{ duration: 2.3, ease: "easeInOut" }}
        ></motion.div>
      </motion.div>
      <span className="mt-6 font-heading text-lg text-gray-300">
        Kaffee wird zubereitet...
      </span>
    </motion.div>
  );
};

export default LoadingScreen;
