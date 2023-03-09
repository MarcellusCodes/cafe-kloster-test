import { Section, Container, PrimaryLink } from "@/components/index";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import {
  circOut,
  cubicBezier,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import CountingNumbers from "./shared/counting-numbers";
import CountUp from "react-countup";
import { useRef, useState } from "react";

type TContentFive = {
  id: string;
  title: string;
  caption: string;
  text: string;
  cta_title: string;
  cta_link: string;
};

const ContentSix = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [textArray, setTextArray] = useState<string[]>(
    textToArrays(
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima commodi maiores eaque asperiores magnam illo. Eveniet consequatur exercitationem, repudiandae deserunt facere perspiciatis totam soluta porro officiis animi laudantium corrupti provident. Eveniet consequatur exercitationem, repudiandae deserunt facere perspiciatis totam soluta porro officiis animi laudantium corrupti provident.",
    ),
  );

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["center center", "start end"],
  });

  const transformYImage = useTransform(scrollYProgress, [1, 0], ["0", "1"], {
    ease: cubicBezier(0.22, 0.61, 0.36, 1),
  });

  const blurImg = useTransform(
    scrollYProgress,
    [1, 0],
    [
      "polygon(0% 0%, 0% 100%, 25% 100%, 25% 25%, 75% 25%, 75% 75%, 25% 75%, 25% 100%, 100% 100%, 100% 0%)",
      "polygon(0% 0%, 0% 100%, 25% 100%, 25% 25%, 75% 25%, 50% 24%, 24% 23%, 25% 100%, 100% 100%, 100% 0%)",
    ],
    {
      ease: cubicBezier(0.19, 1, 0.22, 1),
    },
  );

  function textToArrays(text: string) {
    const words = text.split(" ");

    const arrays = [];

    for (let i = 0; i < words.length; i += 8) {
      const wordsSlice = words.slice(i, i + 8);

      const string = wordsSlice.join(" ");

      arrays.push(string);
    }

    return arrays;
  }
  return (
    <Section className="bg-primary-900">
      <Container className="relative flex flex-col items-center gap-6 lg:gap-12">
        <h2 className="text-left font-text text-xl font-semibold text-tertiary-300">
          Features
        </h2>
        <motion.p
          initial="initial"
          whileInView="animate"
          viewport={{ margin: "0px 0px -300px 0px", once: true }}
          variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
          className="z-10 flex  flex-col items-center gap-3 text-left font-heading text-3xl text-white sm:text-center sm:text-4xl"
        >
          {textArray.map((text, index) => (
            <motion.span
              variants={{
                initial: { y: 100, opacity: 0, rotate: 6 },
                animate: { y: 0, opacity: 1, rotate: 0 },
              }}
              transition={{ duration: 0.6, ease: [0.65, 0.05, 0.36, 1] }}
              key={index}
              className="inline-block"
            >
              {text}
            </motion.span>
          ))}
        </motion.p>
      </Container>
    </Section>
  );
};

export default ContentSix;
