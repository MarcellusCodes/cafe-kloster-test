import { motion } from "framer-motion";

const LoadingScreen = () => {
  return (
    <motion.div
      initial="collapsed"
      animate="open"
      variants={{
        collapsed: { opacity: 1, height: "100%" },
        open: { opacity: 0, height: 0 },
      }}
      transition={{
        duration: 1,
        delay: 2,
        ease: [0.65, 0.05, 0.36, 1],
      }}
      className="z-50"
      style={{
        backgroundColor: "red",
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
      }}
    ></motion.div>
  );
};

export default LoadingScreen;
