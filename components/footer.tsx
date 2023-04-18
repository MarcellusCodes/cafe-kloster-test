import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import * as ScrollArea from "@radix-ui/react-scroll-area";

const navItems = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "Anfahrt",
    link: "/anfahrt",
  },
  {
    id: 3,
    name: "Öffnungszeiten",
    link: "/öffnungszeiten",
  },
  {
    id: 4,
    name: "Kontakt",
    link: "/kontakt",
  },
  {
    id: 5,
    name: "Über",
    link: "/ueber-uns",
  },
  {
    id: 6,
    name: "RoWe",
    link: "/rowe",
  },
];

const Footer = () => {
  const [focused, setFocused] = useState<number | null>(null);

  return (
    <motion.footer
      layout
      className="fixed bottom-0 left-0 z-30 inline-block w-full overflow-hidden rounded-sm bg-tertiary-400 px-4"
    >
      <ScrollArea.Root className=" overflow-hidden ">
        <ScrollArea.Viewport className="h-full w-full rounded">
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
                        stiffness: 60,
                        damping: 15,
                        mass: 1,
                        type: "spring",
                      },
                    }}
                    className="rounded-xs absolute top-0 left-0 z-0  inline-block h-full w-full bg-tertiary-500"
                    layoutId="highlight"
                  />
                ) : null}
                <Link
                  href={item.link}
                  className="ease-[0.77, 0, 0.18, 1] z-10 flex flex-row items-center gap-2 px-8 py-2 font-heading text-2xl duration-300 group-hover:text-white"
                >
                  <motion.span layout className="text-lg">
                    {item.name}
                  </motion.span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar
          className="flex touch-none  select-none bg-primary-900/10 p-0.5 transition-colors duration-[160ms] ease-out  data-[orientation=horizontal]:h-2.5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col"
          orientation="horizontal"
        >
          <ScrollArea.Thumb className="relative flex-1 rounded-[10px] bg-primary-900 before:absolute before:top-1/2 before:left-1/2 before:h-full before:min-h-[44px] before:w-full before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2 before:content-[''] " />
        </ScrollArea.Scrollbar>
        <ScrollArea.Corner className="bg-blackA8" />
      </ScrollArea.Root>
    </motion.footer>
  );
};

export default Footer;
