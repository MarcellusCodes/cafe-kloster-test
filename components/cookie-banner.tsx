import { useState, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  const handleBanner = () => {
    localStorage.setItem("cookie", "true");
    setShowBanner(false);
  };

  useEffect(() => {
    const cookie = localStorage.getItem("cookie");
    if (cookie !== "true") {
      setShowBanner(true);
    }
  }, []);

  return (
    <AnimatePresence initial={false}>
      {showBanner && (
        <motion.div
          initial="collapsed"
          animate="open"
          exit="collapsed"
          variants={{
            open: { opacity: 1 },
            collapsed: { opacity: 0 },
          }}
          transition={{
            duration: 0.3,
            ease: [0.65, 0.05, 0.36, 1],
          }}
          className={`fixed left-1/2 bottom-[76px] z-50 flex w-full -translate-x-1/2 flex-col items-center gap-3 rounded-sm border-2 border-gray-300 bg-white p-4 shadow-lg sm:left-6 sm:w-[300px] sm:-translate-x-0`}
        >
          <div className="relative top-0 h-[64px] w-[64px]">
            <Image
              src="/cookies.png"
              alt="keks"
              fill={true}
              className="object-cover"
            />
          </div>
          <p className=" text-center font-text text-lg">
            Wir kümmern uns um Ihre Daten und würden gerne Cookies verwenden, um
            Ihre Erfahrung zu verbessern.
          </p>
          <button
            onClick={handleBanner}
            className="z-20 rounded-sm border border-tertiary-400 bg-tertiary-400 py-1 px-4 font-heading text-lg text-white hover:border-tertiary-500 hover:bg-tertiary-500"
          >
            Bestätigen
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
