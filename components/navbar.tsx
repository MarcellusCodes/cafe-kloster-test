import Link from "next/link";
import * as Popover from "@radix-ui/react-popover";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

type TNavbar = {
  id: string;
  theme: string;
};

const Navbar = ({ props }: { props: TNavbar }) => {
  const [openPhone, setOpenPhone] = useState(false);

  const handleShowPhone = () => {
    setOpenPhone(!openPhone);
  };

  return (
    <nav
      className={`w-full  border-secondary-200 px-6 ${
        props.theme === "light" ? " bg-secondary-50" : " bg-primary-900"
      }`}
    >
      <div className="container mx-auto flex flex-row items-center justify-between py-4">
        <Link href="/">
          <div className="flex flex-row items-center gap-2">
            <span
              className={`font-heading text-2xl font-bold ${
                props.theme === "light"
                  ? "text-primary-900"
                  : "text-tertiary-300"
              }`}
            >
              Café Kloster
            </span>
          </div>
        </Link>
        <div className="">
          <ul className="flex flex-row items-center gap-8">
            <li
              className={`flex 
             flex-row items-center space-x-2 sm:hidden ${
               props.theme === "light" ? "text-primary-900/80" : "text-gray-400"
             }`}
            >
              <Popover.Root>
                <Popover.Trigger asChild>
                  <button
                    aria-label="show phone number"
                    onClick={handleShowPhone}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      data-name="Layer 1"
                      viewBox="0 0 24 24"
                      className="h-6 w-6 fill-current"
                    >
                      <path d="M13 1a1 1 0 0 1 1-1 10.011 10.011 0 0 1 10 10 1 1 0 0 1-2 0 8.009 8.009 0 0 0-8-8 1 1 0 0 1-1-1Zm1 5a4 4 0 0 1 4 4 1 1 0 0 0 2 0 6.006 6.006 0 0 0-6-6 1 1 0 0 0 0 2Zm9.093 10.739a3.1 3.1 0 0 1 0 4.378l-.91 1.049c-8.19 7.841-28.12-12.084-20.4-20.3l1.15-1a3.081 3.081 0 0 1 4.327.04c.031.031 1.884 2.438 1.884 2.438a3.1 3.1 0 0 1-.007 4.282L7.979 9.082a12.781 12.781 0 0 0 6.931 6.945l1.465-1.165a3.1 3.1 0 0 1 4.281-.006s2.406 1.852 2.437 1.883Zm-1.376 1.454s-2.393-1.841-2.424-1.872a1.1 1.1 0 0 0-1.549 0c-.027.028-2.044 1.635-2.044 1.635a1 1 0 0 1-.979.152A15.009 15.009 0 0 1 5.9 9.3a1 1 0 0 1 .145-1s1.607-2.018 1.634-2.044a1.1 1.1 0 0 0 0-1.549c-.031-.03-1.872-2.425-1.872-2.425a1.1 1.1 0 0 0-1.51.039l-1.15 1C-2.495 10.105 14.776 26.418 20.721 20.8l.911-1.05a1.121 1.121 0 0 0 .085-1.557Z" />
                    </svg>
                  </button>
                </Popover.Trigger>
                <AnimatePresence>
                  {openPhone && (
                    <Popover.Portal forceMount>
                      <Popover.Content
                        className="data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade w-[260px] rounded-sm border-2 border-gray-300 bg-white p-4 shadow-lg"
                        sideOffset={5}
                        asChild
                      >
                        <motion.div
                          initial="collapsed"
                          animate="open"
                          exit="collapsed"
                          variants={{
                            open: {
                              opacity: 1,
                            },
                            collapsed: { opacity: 0 },
                          }}
                          transition={{
                            duration: 0.3,
                            ease: [0.65, 0.05, 0.36, 1],
                          }}
                        >
                          <span>(0381) 827563</span>
                          <Popover.Close
                            onClick={handleShowPhone}
                            className="absolute top-[5px] right-[5px] "
                            aria-label="Close"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              className="h-6 w-6 shrink-0 fill-current text-primary-900"
                            >
                              <path d="M18 6a1 1 0 0 0-1.414 0L12 10.586 7.414 6A1 1 0 0 0 6 6a1 1 0 0 0 0 1.414L10.586 12 6 16.586A1 1 0 0 0 6 18a1 1 0 0 0 1.414 0L12 13.414 16.586 18A1 1 0 0 0 18 18a1 1 0 0 0 0-1.414L13.414 12 18 7.414A1 1 0 0 0 18 6Z" />
                            </svg>
                          </Popover.Close>
                          <Popover.Arrow className="fill-white" />
                        </motion.div>
                      </Popover.Content>
                    </Popover.Portal>
                  )}
                </AnimatePresence>
              </Popover.Root>
            </li>
            <li
              className={` hidden flex-row items-center space-x-2 sm:flex  ${
                props.theme === "light"
                  ? "text-primary-900/80"
                  : "text-gray-400"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
                viewBox="0 0 24 24"
                className="h-6 w-6 fill-current"
              >
                <path d="M13 1a1 1 0 0 1 1-1 10.011 10.011 0 0 1 10 10 1 1 0 0 1-2 0 8.009 8.009 0 0 0-8-8 1 1 0 0 1-1-1Zm1 5a4 4 0 0 1 4 4 1 1 0 0 0 2 0 6.006 6.006 0 0 0-6-6 1 1 0 0 0 0 2Zm9.093 10.739a3.1 3.1 0 0 1 0 4.378l-.91 1.049c-8.19 7.841-28.12-12.084-20.4-20.3l1.15-1a3.081 3.081 0 0 1 4.327.04c.031.031 1.884 2.438 1.884 2.438a3.1 3.1 0 0 1-.007 4.282L7.979 9.082a12.781 12.781 0 0 0 6.931 6.945l1.465-1.165a3.1 3.1 0 0 1 4.281-.006s2.406 1.852 2.437 1.883Zm-1.376 1.454s-2.393-1.841-2.424-1.872a1.1 1.1 0 0 0-1.549 0c-.027.028-2.044 1.635-2.044 1.635a1 1 0 0 1-.979.152A15.009 15.009 0 0 1 5.9 9.3a1 1 0 0 1 .145-1s1.607-2.018 1.634-2.044a1.1 1.1 0 0 0 0-1.549c-.031-.03-1.872-2.425-1.872-2.425a1.1 1.1 0 0 0-1.51.039l-1.15 1C-2.495 10.105 14.776 26.418 20.721 20.8l.911-1.05a1.121 1.121 0 0 0 .085-1.557Z" />
              </svg>
              <span>(0381) 827563</span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
