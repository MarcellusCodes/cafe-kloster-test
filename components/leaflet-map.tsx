import { useState, useRef } from "react";
import { Section } from "@/components/index";

import { AnimatePresence, motion, useInView } from "framer-motion";
import dynamic from "next/dynamic";

const DynamicMapbox = dynamic(() => import("./mapbox-map"), {
  loading: () => <p>Loading...</p>,
});

const LeafletMap = () => {
  const [showPopup, setShowPopup] = useState(true);
  const handleShowPopup = () => {
    setShowPopup(!showPopup);
  };
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px 400px 0px" });

  return (
    <>
      <Section className="relative h-[500px] w-full overflow-y-hidden">
        <div ref={ref} className="absolute top-0 left-0 h-full w-full">
          {isInView && <DynamicMapbox />}
        </div>
        <motion.div className=" absolute top-[10px] right-3 z-20 flex w-[225px] flex-col items-start rounded-sm border-2 border-gray-300 bg-white p-2 px-4 lg:left-16">
          <div className="flex w-full flex-row items-center justify-between">
            <h3 className="font-title text-xl text-primary-900">Kontakt</h3>
            <button onClick={handleShowPopup} className="self-end">
              <motion.svg
                initial={{ rotate: 0 }}
                animate={{ rotate: showPopup ? 45 : 0 }}
                transition={{ duration: 0.3, ease: [0.65, 0.05, 0.36, 1] }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-10 w-10 fill-current text-primary-900"
              >
                <path d="M17 11h-4V7a1 1 0 0 0-1-1 1 1 0 0 0-1 1v4H7a1 1 0 0 0-1 1 1 1 0 0 0 1 1h4v4a1 1 0 0 0 1 1 1 1 0 0 0 1-1v-4h4a1 1 0 0 0 1-1 1 1 0 0 0-1-1Z" />
              </motion.svg>
            </button>
          </div>
          <AnimatePresence initial={false}>
            {showPopup && (
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
                className="flex h-full w-full flex-col items-start justify-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  data-name="Layer 1"
                  viewBox="0 0 24 24"
                  className="mb-3 h-12 w-12 fill-current text-tertiary-300"
                >
                  <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm0-6a2 2 0 1 1-2 2 2 2 0 0 1 2-2Zm8.66 3.157-.719-.239A8 8 0 0 0 12 0a7.993 7.993 0 0 0-7.914 9.092 5.045 5.045 0 0 0-2.548 1.3A4.946 4.946 0 0 0 0 14v4.075a5.013 5.013 0 0 0 3.6 4.8l2.87.9A4.981 4.981 0 0 0 7.959 24a5.076 5.076 0 0 0 1.355-.186l5.78-1.71a2.987 2.987 0 0 1 1.573 0l2.387.8A4 4 0 0 0 24 19.021v-5.149a5.015 5.015 0 0 0-3.34-4.716ZM7.758 3.762a5.987 5.987 0 0 1 8.484 0 6.037 6.037 0 0 1 .011 8.5L12.7 15.717a.992.992 0 0 1-1.389 0l-3.553-3.44a6.04 6.04 0 0 1 0-8.515ZM22 19.021a1.991 1.991 0 0 1-.764 1.572 1.969 1.969 0 0 1-1.626.395l-2.345-.788a5.023 5.023 0 0 0-2.717-.016l-5.784 1.708a3 3 0 0 1-1.694-.029l-2.894-.9A3.013 3.013 0 0 1 2 18.075V14a2.964 2.964 0 0 1 .92-2.163 3.024 3.024 0 0 1 1.669-.806A8.021 8.021 0 0 0 6.354 13.7l3.567 3.453a2.983 2.983 0 0 0 4.174 0l3.563-3.463a7.962 7.962 0 0 0 1.813-2.821l.537.178A3.006 3.006 0 0 1 22 13.872Z" />
                </svg>
                <h3 className="font-title text-3xl text-primary-900">
                  Finde Uns
                </h3>
                <ul className="font-text text-xl text-primary-900">
                  <li>Klosterhof 6</li>
                  <li>18055 Rostock</li>
                  <li>Deutschland</li>
                </ul>
                <a
                  aria-label="Link to Google Maps Routing for Café Kloster"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.google.com/maps/place/Caf%C3%A9+Kloster/@54.0872563,12.1307776,17z/data=!3m1!4b1!4m6!3m5!1s0x47ac575480da14f1:0x14609f90cc0c9161!8m2!3d54.0872532!4d12.1329663!16s%2Fg%2F12qhj2qm8"
                  className="group relative grid h-10 w-10 place-items-center self-end rounded-full bg-tertiary-300 duration-300 hover:scale-110 hover:bg-tertiary-400 active:scale-110 active:bg-tertiary-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="absolute top-1/2 left-1/2 h-10 w-10 -translate-x-[2rem] -translate-y-1/2 fill-current text-primary-900 duration-300 group-hover:-translate-x-1/2 group-active:-translate-x-1/2"
                  >
                    <path d="M18 12a2 2 0 0 0-.59-1.4l-4.29-4.3a1 1 0 0 0-1.41 0 1 1 0 0 0 0 1.42L15 11H5a1 1 0 0 0 0 2h10l-3.29 3.29a1 1 0 0 0 1.41 1.42l4.29-4.3A2 2 0 0 0 18 12Z" />
                  </svg>
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </Section>
    </>
  );
};

export default LeafletMap;
