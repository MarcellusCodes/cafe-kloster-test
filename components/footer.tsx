import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const navItems = [
  {
    id: 1,
    name: "Home",
    link: "/",
    icon: (
      <path d="m23.121 9.069-7.585-7.586a5.008 5.008 0 0 0-7.072 0L.879 9.069A2.978 2.978 0 0 0 0 11.19v9.817a3 3 0 0 0 3 3h18a3 3 0 0 0 3-3V11.19a2.978 2.978 0 0 0-.879-2.121ZM15 22.007H9v-3.934a3 3 0 0 1 6 0Zm7-1a1 1 0 0 1-1 1h-4v-3.934a5 5 0 0 0-10 0v3.934H3a1 1 0 0 1-1-1V11.19a1.008 1.008 0 0 1 .293-.707L9.878 2.9a3.008 3.008 0 0 1 4.244 0l7.585 7.586a1.008 1.008 0 0 1 .293.704Z" />
    ),
  },
  {
    id: 2,
    name: "Anfahrt",
    link: "/anfahrt",
    icon: (
      <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm0-6a2 2 0 1 1-2 2 2 2 0 0 1 2-2Zm8.66 3.157-.719-.239A8 8 0 0 0 12 0a7.993 7.993 0 0 0-7.914 9.092 5.045 5.045 0 0 0-2.548 1.3A4.946 4.946 0 0 0 0 14v4.075a5.013 5.013 0 0 0 3.6 4.8l2.87.9A4.981 4.981 0 0 0 7.959 24a5.076 5.076 0 0 0 1.355-.186l5.78-1.71a2.987 2.987 0 0 1 1.573 0l2.387.8A4 4 0 0 0 24 19.021v-5.149a5.015 5.015 0 0 0-3.34-4.716ZM7.758 3.762a5.987 5.987 0 0 1 8.484 0 6.037 6.037 0 0 1 .011 8.5L12.7 15.717a.992.992 0 0 1-1.389 0l-3.553-3.44a6.04 6.04 0 0 1 0-8.515ZM22 19.021a1.991 1.991 0 0 1-.764 1.572 1.969 1.969 0 0 1-1.626.395l-2.345-.788a5.023 5.023 0 0 0-2.717-.016l-5.784 1.708a3 3 0 0 1-1.694-.029l-2.894-.9A3.013 3.013 0 0 1 2 18.075V14a2.964 2.964 0 0 1 .92-2.163 3.024 3.024 0 0 1 1.669-.806A8.021 8.021 0 0 0 6.354 13.7l3.567 3.453a2.983 2.983 0 0 0 4.174 0l3.563-3.463a7.962 7.962 0 0 0 1.813-2.821l.537.178A3.006 3.006 0 0 1 22 13.872Z" />
    ),
  },
  {
    id: 3,
    name: "Öffnungszeiten",
    link: "/öffnungszeiten",
    icon: (
      <path d="M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12Zm0-22C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2Zm2.5 14.33a.999.999 0 0 0 .366-1.366L13 11.732V6a1 1 0 1 0-2 0v6c0 .176.046.348.134.5l2 3.464a1 1 0 0 0 1.366.366Z" />
    ),
  },
  {
    id: 4,
    name: "Kontakt",
    link: "/kontakt",
    icon: (
      <path d="M19 1H5a5.006 5.006 0 0 0-5 5v12a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5V6a5.006 5.006 0 0 0-5-5ZM5 3h14a3 3 0 0 1 2.78 1.887l-7.658 7.659a3.007 3.007 0 0 1-4.244 0L2.22 4.887A3 3 0 0 1 5 3Zm14 18H5a3 3 0 0 1-3-3V7.5l6.464 6.46a5.007 5.007 0 0 0 7.072 0L22 7.5V18a3 3 0 0 1-3 3Z" />
    ),
  },
  {
    id: 5,
    name: "Über",
    link: "/ueber-uns",
    icon: (
      <g data-name="01 align center">
        <path d="M12 24a12 12 0 1 1 12-12 12.013 12.013 0 0 1-12 12Zm0-22a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Z" />
        <path d="M14 19h-2v-7h-2v-2h2a2 2 0 0 1 2 2Z" />
        <circle cx={12} cy={6.5} r={1.5} />
      </g>
    ),
  },
  {
    id: 6,
    name: "RoWe",
    link: "/rowe",
    icon: (
      <path d="M12 16a4 4 0 1 1 4-4 4 4 0 0 1-4 4Zm0-6a2 2 0 1 0 2 2 2 2 0 0 0-2-2Zm6 13a6 6 0 0 0-12 0 1 1 0 0 0 2 0 4 4 0 0 1 8 0 1 1 0 0 0 2 0Zm0-15a4 4 0 1 1 4-4 4 4 0 0 1-4 4Zm0-6a2 2 0 1 0 2 2 2 2 0 0 0-2-2Zm6 13a6.006 6.006 0 0 0-6-6 1 1 0 0 0 0 2 4 4 0 0 1 4 4 1 1 0 0 0 2 0ZM6 8a4 4 0 1 1 4-4 4 4 0 0 1-4 4Zm0-6a2 2 0 1 0 2 2 2 2 0 0 0-2-2ZM2 15a4 4 0 0 1 4-4 1 1 0 0 0 0-2 6.006 6.006 0 0 0-6 6 1 1 0 0 0 2 0Z" />
    ),
  },
];

const Footer = () => {
  const [focused, setFocused] = useState<number | null>(null);

  return (
    <motion.footer
      layout
      className="fixed bottom-0 left-0 z-30 inline-block w-full overflow-hidden rounded-sm bg-tertiary-400 px-4"
    >
      <ul
        onMouseLeave={() => setFocused(null)}
        className="flex h-full w-full flex-row items-center justify-start gap-12 overflow-x-auto py-1 lg:justify-center"
      >
        {navItems.map((item) => (
          <motion.li
            onFocus={() => setFocused(item.id)}
            onMouseEnter={() => setFocused(item.id)}
            key={item.id}
            layout
            initial="initial"
            whileHover="animate"
            animate="initial"
            className="group relative flex h-full items-center text-primary-900/80"
          >
            {focused === item.id ? (
              <motion.div
                transition={{
                  layout: {
                    duration: 0.6,
                    ease: [0.77, 0, 0.18, 1],
                  },
                }}
                className="rounded-xs absolute top-0 left-0 z-0  inline-block h-full w-full bg-primary-900/20"
                layoutId="highlight"
              />
            ) : null}
            <Link
              href={item.link}
              className="ease-[0.77, 0, 0.18, 1] z-10 flex flex-row items-center gap-2 px-8 py-2 font-heading text-2xl duration-300 group-hover:text-white"
            >
              <motion.svg
                layout
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 fill-current"
              >
                {item.icon}
              </motion.svg>
              <motion.span layout className="text-lg">
                {item.name}
              </motion.span>
            </Link>
          </motion.li>
        ))}
      </ul>
    </motion.footer>
  );
};

export default Footer;
