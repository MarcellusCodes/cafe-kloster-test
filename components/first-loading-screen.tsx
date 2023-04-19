import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const CoffeeAnimation = dynamic(() => import("./lottie-coffee-animation"), {
  loading: () => <span></span>,
});

const FirstLoadingScreen = () => {
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
        }}*/
        transition={{ delay: 2.3, duration: 1, ease: "easeInOut" }}
        className="font-heading text-5xl font-bold text-tertiary-300"
      >
        Café Kloster
      </motion.h2>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1, delay: 1.6, ease: [0.87, 0, 0.13, 1] }}
        className=" h-[300px] w-[300px]"
      >
        <CoffeeAnimation />
      </motion.div>
    </motion.div>
  );
};

export default FirstLoadingScreen;
