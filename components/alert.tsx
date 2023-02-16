import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Alert = () => {
  const [active, setActive] = useState(true);

  const handleActive = () => {
    setActive(false);
  };
  return (
    <AnimatePresence initial={false}>
      {active && (
        <motion.div
          initial="collapsed"
          animate="open"
          exit="collapsed"
          variants={{
            open: { opacity: 1, height: "auto" },
            collapsed: { opacity: 0, height: 0 },
          }}
          transition={{
            duration: 0.3,
            ease: [0.65, 0.05, 0.36, 1],
          }}
          className="flex w-full flex-row items-center justify-between bg-tertiary-100 p-4"
        >
          <div className="flex flex-row items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-6 w-6 shrink-0 fill-current text-tertiary-600"
            >
              <path d="M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0Zm0 22a10 10 0 1 1 10-10 10.011 10.011 0 0 1-10 10Z" />
              <path d="M12 5a1 1 0 0 0-1 1v8a1 1 0 0 0 2 0V6a1 1 0 0 0-1-1Z" />
              <rect x={11} y={17} width={2} height={2} rx={1} />
            </svg>
            <p className=" font-heading text-xl text-tertiary-600">
              Wichtig: Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Reprehenderit, pariatur!
            </p>
          </div>

          <button onClick={handleActive}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-6 w-6 shrink-0 fill-current text-primary-900"
            >
              <path d="M18 6a1 1 0 0 0-1.414 0L12 10.586 7.414 6A1 1 0 0 0 6 6a1 1 0 0 0 0 1.414L10.586 12 6 16.586A1 1 0 0 0 6 18a1 1 0 0 0 1.414 0L12 13.414 16.586 18A1 1 0 0 0 18 18a1 1 0 0 0 0-1.414L13.414 12 18 7.414A1 1 0 0 0 18 6Z" />
            </svg>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Alert;
