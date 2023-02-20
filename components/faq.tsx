import { Section, Container } from "@/components/index";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { SetStateAction, useState, Dispatch } from "react";

type TAccordion = {
  index: number;
  expanded: boolean | number;
  setExpanded: Dispatch<SetStateAction<boolean | number>>;
  question: string;
  answer: string;
};

const Accordion = ({
  index,
  expanded,
  setExpanded,
  question,
  answer,
}: TAccordion) => {
  const isOpen = index === expanded;

  const handleOpen = () => {
    setExpanded(isOpen ? false : index);
  };
  return (
    <motion.li className="grid w-full  grid-cols-2 grid-rows-1 items-center justify-between border-b-2 border-gray-300 border-opacity-80 font-heading text-xl text-white">
      <span>{question}</span>
      <button onClick={handleOpen} className="place-self-end ">
        <motion.svg
          initial={{ rotate: 0 }}
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: [0.65, 0.05, 0.36, 1] }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="h-10 w-10  fill-current text-tertiary-400"
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
            className="col-span-2 font-text text-white text-opacity-80"
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
};

const Faq = ({ props }: { props: TFaq }) => {
  const [expanded, setExpanded] = useState<false | number>(false);

  return (
    <Section className="bg-primary-900">
      <Container className="flex flex-row gap-12">
        <div className="flex w-full flex-col items-start gap-6 lg:w-1/2">
          <h2 className="font-text text-xl font-semibold text-tertiary-300">
            Häufig gestellte Fragen
          </h2>
          <p className="max-w-2xl font-title text-4xl text-white sm:text-6xl">
            FAQ
          </p>

          <motion.ul className="flex w-full flex-col gap-6">
            {props.faqs.map((faq, index) => (
              <Accordion
                key={index}
                index={index}
                expanded={expanded}
                setExpanded={setExpanded}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </motion.ul>
        </div>
        <motion.div className="hidden h-full lg:block lg:w-1/2">
          <motion.div className="absolute right-0 top-0 h-full w-1/2">
            <Image
              alt={props.image.alt}
              src={props.image.src}
              fill={true}
              className="rounded-sm object-cover"
            />
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
};

export default Faq;
