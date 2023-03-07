import { Section, Container } from "@/components/index";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { SetStateAction, useState, Dispatch } from "react";
import Balancer from "react-wrap-balancer";

type TAccordion = {
  index: number;
  expanded: boolean | number;
  setExpanded: Dispatch<SetStateAction<boolean | number>>;
  question: string;
  answer: string;
  theme: "light" | "dark";
};

const Accordion = ({
  index,
  expanded,
  setExpanded,
  question,
  answer,
  theme,
}: TAccordion) => {
  const isOpen = index === expanded;

  const handleOpen = () => {
    setExpanded(isOpen ? false : index);
  };
  return (
    <motion.li
      onClick={handleOpen}
      className={`grid w-full cursor-pointer grid-cols-2 grid-rows-1 items-center justify-between border-b-2 border-gray-300 border-opacity-80 pb-4 font-heading text-xl ${
        theme === "light" ? "text-primary-900" : "text-white"
      } `}
    >
      <span>{question}</span>
      <button className="place-self-end ">
        <motion.svg
          initial={{ rotate: 0 }}
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: [0.65, 0.05, 0.36, 1] }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="h-10 w-10 fill-current text-tertiary-400"
        >
          <path d="M17 11h-4V7a1 1 0 0 0-1-1 1 1 0 0 0-1 1v4H7a1 1 0 0 0-1 1 1 1 0 0 0 1 1h4v4a1 1 0 0 0 1 1 1 1 0 0 0 1-1v-4h4a1 1 0 0 0 1-1 1 1 0 0 0-1-1Z" />
        </motion.svg>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.p
            key={index}
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
            className={`col-span-2 font-text ${
              theme === "light" ? "text-primary-900" : "text-white"
            }  text-opacity-80`}
          >
            {answer}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.li>
  );
};

type TFaq = {
  id: string;
  title: string;
  caption: string;
  image: { src: string; alt: string };
  faqs: { id: string; question: string; answer: string }[];
  theme: "light" | "dark";
};

const Faq = ({ props }: { props: TFaq }) => {
  const [expanded, setExpanded] = useState<false | number>(false);

  return (
    <Section
      className={`${
        props.theme === "light" ? "bg-secondary-50" : "bg-primary-900"
      }`}
    >
      <Container className="flex flex-col gap-12 lg:flex-row">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className={`absolute top-12 right-12 h-16 w-16 fill-current text-gray-300 sm:left-1/3 sm:h-32 sm:w-32 ${
            props.theme === "light" ? "" : "text-opacity-10"
          } lg:scale-100`}
        >
          <path d="M161.3 9.5c-30.8 4.8-61.3 24.9-82.6 54.6-8.6 12.1-20.3 35.3-25 49.8-6.8 20.9-10.7 45.5-10.7 67.7 0 9.6 1.4 28.3 2.5 33.1l.5 2.3H25.5c-20.5 0-20.6 0-23 2.5-3.2 3.1-3.2 6.9 0 10l2.4 2.5h78.2l2.4-2.5c3.2-3.1 3.2-6.9 0-10-2.3-2.4-3.1-2.5-13.4-2.5H61.2l-.6-2.8c-1.3-5.9-2.6-22.2-2.6-32.3C57.9 92 115.8 19.1 183.9 23.3c17.2 1.1 34.8 7.3 50.3 17.8 11.8 8 26 23 35.2 36.9l3.4 5.1-5.9 8.6c-3.3 4.8-5.9 9.7-5.9 10.9 0 3.7 3.7 7.4 7.4 7.4s5.3-1.5 11.6-11c10.9-16.3 30.2-32 46.3-37.8 21.4-7.8 41.7-6.7 62.2 3.3 41 19.9 67.8 73.6 65.1 130.5-.3 7.4-.9 15.4-1.2 17.7l-.7 4.3H397v-2.8c0-4.7-3.8-18.9-6.9-25.6-1.6-3.5-6.5-11.8-10.9-18.4-15.3-22.7-18.1-30.7-22.9-63.2-.6-4.6-6.7-10.6-11.6-11.5-6.7-1.3-10.7.2-16.3 5.9-14.7 15.1-21.3 40.8-16.9 65.9 2.3 13.5 6.8 24.5 14.9 36.5 4 5.9 7.5 11.3 8 11.9.6 1-7.4 1.3-38.7 1.3h-39.5l-.7-2.3c-.4-1.2-.9-10.8-1.2-21.2-.6-21.2.8-34.9 5.2-50 1.4-4.7 2.5-9.6 2.5-10.8 0-3-3.9-6.7-7.1-6.7-6 0-8.6 5.3-13.1 26.9-2.3 11.2-3.6 46.3-2.1 57.3l1 6.8h-5.9c-3.2 0-5.8-.4-5.8-.9 0-.4-.7-4.6-1.5-9.2-3-17.3-7.6-27.7-21.5-48.3-10.4-15.6-15.9-26.5-19.4-38.8-2.6-9.1-5.6-24.4-5.6-28.8 0-11.7-9.4-20.2-20.7-18.5-4.2.6-5.6 1.4-11.4 7.4-7.8 8.1-14.5 20.8-18.1 34.1-1.9 7.3-2.2 10.9-2.2 25 .1 14.5.4 17.7 2.7 26.2 3.5 13.3 8.8 24.1 19.1 39.1l8.7 12.7h-46.2l-2.4 2.5c-3.2 3.1-3.2 6.9 0 10l2.4 2.5h394.2l2.4-2.5c3.2-3.1 3.2-6.9 0-10-2.4-2.5-2.5-2.5-22.5-2.5h-20l.7-7.3c1.5-14.3.8-40.4-1.5-53.4-6-33.9-20.4-62.7-42.2-84.3-22.1-21.9-47.3-32.2-75-30.7-22.5 1.2-40.6 9.1-62.6 27.2l-3.2 2.6-7-9.4c-8.9-11.8-24.4-26.7-35.4-34.1C216.4 11.5 189 5.2 161.3 9.5zm4.2 79.7c.2 1.3 1 6.1 1.6 10.8 1.3 10.4 5.9 28.7 9.3 37 3.5 8.7 8.3 16.8 18 31.2 4.6 6.8 9.5 14.6 11 17.5 2.9 5.9 7 19.5 7.9 26.5l.7 4.8h-37.7l-4.3-7.3c-2.4-3.9-7.2-11.3-10.7-16.2-7.8-10.9-12.5-20.5-15.5-31.7-3.3-12-3.2-33.8 0-45.3 2.7-9.3 7.9-19.7 12.9-25.4 3.9-4.6 6-5.2 6.8-1.9zm177.8 31.5c3.3 22.3 8.4 35.2 21.5 55 10 15.1 12.6 20.1 15.2 29.4 3.5 12.8 4.4 11.9-13 11.9-8.4 0-15-.4-15-.9s-3.9-6.7-8.7-13.8c-13.3-19.8-16.8-28.7-18-45.8-1-15.1 3.4-31.2 11.6-42.3 1.7-2.3 3.5-4.2 3.9-4.2.5 0 1.6 4.8 2.5 10.7zM150.6 246.1c-3.2 2.5-3.7 8.6-.8 11.2 2.5 2.3 8.5 2.2 10.5-.1 2.7-3 2.2-8.7-.9-11.1-1.5-1.2-3.4-2.1-4.4-2.1-1 0-2.9.9-4.4 2.1zM277.4 246.3c-5.2 4.5-2.5 12.7 4.3 12.7 7 0 10.1-8.6 4.7-12.9-3.4-2.7-5.7-2.6-9 .2zM89.2 250.1c-5.4 2-6.5 10.2-1.9 13.4 4.8 3.4 11.7-.1 11.7-5.9 0-5.9-4.6-9.4-9.8-7.5zM357 250.3c-4 2-5.6 5.8-4.1 9.5 2.6 6.3 11.3 6.2 13.5-.1 2.2-6.1-3.9-12.1-9.4-9.4zM176.5 267.5c-6 5.9-.1 15.6 7.6 12.5 5.8-2.4 6-11.3.3-13.9-3.7-1.6-5.2-1.4-7.9 1.4zM226 274.3c-7.6 3.8-3.3 16 5 14.2 6.7-1.5 8-10.9 2-14-3.5-1.8-3.8-1.8-7-.2zM315.1 274.1c-6.7 2.6-6.9 11.1-.2 13.8 5.9 2.5 11.7-3.4 9.5-9.7-1.1-3.2-6-5.3-9.3-4.1zM145.5 289.5c-6 5.9-.1 15.6 7.6 12.5 5.8-2.4 6-11.3.3-13.9-3.7-1.6-5.2-1.4-7.9 1.4zM265.3 288c-4.5 1.8-5.5 7.2-2.2 11.4 4.1 5.2 12.9 2.3 12.9-4.3 0-5.4-5.7-9.2-10.7-7.1zM195.2 305c-3 2.8-2.9 8 .1 10.8 4.9 4.6 12.1 1.4 12.1-5.3 0-6.6-7.4-9.9-12.2-5.5zM102.1 308.6c-1.2 1.5-2.1 3.8-2.1 5.1 0 3.2 4.2 7.3 7.5 7.3 3.5 0 7.5-4.2 7.5-7.8 0-6.7-8.8-9.9-12.9-4.6zM348.9 317.9c-1.7 1.3-2.3 2.9-2.3 5.6 0 6.8 7.7 10 12.2 5.2 6.5-6.9-2.5-16.8-9.9-10.8zM147 329.3c-4.9 2.5-5.2 10.2-.5 13.3 3.4 2.2 8.1 1 10-2.6 2.1-4.1 1.9-5.8-1.4-9.1-3.3-3.2-4.4-3.5-8.1-1.6zM295.3 329c-2.6 1.1-4.3 4-4.3 7.4 0 6.3 8.9 9 12.9 4 1.2-1.5 2.1-3.7 2.1-4.9 0-4.9-5.9-8.5-10.7-6.5zM245.6 336.3c-5.1 5.1-2.2 12.7 4.8 12.7 4.6 0 8-4.1 7.2-8.5-.8-3.8-2.3-5.3-6.3-6.1-2.6-.5-3.7-.1-5.7 1.9zM188.5 354.5c-4.1 4-3.2 9.9 1.8 12 5.5 2.3 10.7-1.4 10.7-7.6 0-2.8-4.4-6.9-7.5-6.9-1.4 0-3.7 1.1-5 2.5zM150.6 382.1c-2 1.6-2.6 2.9-2.6 5.9 0 3 .6 4.3 2.6 5.9 1.5 1.2 3.4 2.1 4.4 2.1 1 0 2.9-.9 4.4-2.1 2-1.6 2.6-2.9 2.6-5.9 0-3-.6-4.3-2.6-5.9-1.5-1.2-3.4-2.1-4.4-2.1-1 0-2.9.9-4.4 2.1zM312.5 382.5c-3 3-3.2 6.4-.4 9.9 4.1 5.3 12.9 2.1 12.9-4.6 0-3.6-4-7.8-7.5-7.8-1.4 0-3.7 1.1-5 2.5zM263.1 383.6c-1.2 1.5-2.1 3.8-2.1 5.1 0 3.2 4.2 7.3 7.5 7.3 3.5 0 7.5-4.2 7.5-7.8 0-6.5-8.9-9.7-12.9-4.6zM216.5 416.5c-3 3-3.2 6.4-.4 9.9 4.1 5.2 12.9 2 12.9-4.8 0-3.4-4.1-7.6-7.5-7.6-1.4 0-3.7 1.1-5 2.5zM308 432.7c-5.2 1.9-6.9 9.3-3 12.8 2.6 2.3 7.4 2.3 10 0 5.3-4.8-.3-15.2-7-12.8zM126 435c-3 3-2.4 8.6 1.2 11.3 6.4 4.8 14.9-3.7 10.1-10.1-2.7-3.6-8.3-4.2-11.3-1.2zM173 446c-4.8 4.8-.2 13.9 6.3 12.6 6.2-1.2 8.5-7 4.6-12-2.6-3.3-7.9-3.6-10.9-.6zM251.2 445.6c-3.3 2.3-3.1 8.6.4 11.3 1.5 1.2 3.4 2.1 4.4 2.1 3.4 0 7-3.9 7-7.6 0-6.3-6.5-9.5-11.8-5.8zM224.2 491.3c-2.9 3.1-2.8 7.2.3 10.2 3.1 3.2 6.9 3.2 10 0 3-3 3.2-6.4.4-9.9-2.7-3.4-7.7-3.6-10.7-.3z" />
        </svg>
        <div className="flex w-full flex-col items-start gap-6 lg:w-[66.6%]">
          <h2 className="font-text text-xl font-semibold text-tertiary-300">
            {props.title}
          </h2>

          <p
            className={` font-title text-4xl ${
              props.theme === "light" ? "text-primary-900" : "text-white"
            }  sm:text-6xl xl:text-8xl`}
          >
            <Balancer>{props.caption}</Balancer>
          </p>
        </div>
        <motion.div className="h-full w-full lg:w-1/3">
          <motion.ul className="flex w-full flex-col gap-4">
            {props.faqs.map((faq, index) => (
              <Accordion
                key={index}
                index={index}
                expanded={expanded}
                setExpanded={setExpanded}
                question={faq.question}
                answer={faq.answer}
                theme={props.theme}
              />
            ))}
          </motion.ul>
        </motion.div>
      </Container>
    </Section>
  );
};

export default Faq;
