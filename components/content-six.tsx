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
import { useRef } from "react";

type TContentFive = {
  id: string;
  title: string;
  caption: string;
  text: string;
  cta_title: string;
  cta_link: string;
};

const ContentFive = () => {
  const containerRef = useRef<HTMLDivElement>(null);

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
  return (
    <Section className="bg-primary-900">
      <Container className="relative flex flex-col items-center gap-6 lg:gap-12">
        <h2 className="font-text text-xl font-semibold text-tertiary-300">
          Features
        </h2>
        <p className="z-10 max-w-2xl font-heading text-3xl text-white text-opacity-80">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
          commodi maiores eaque asperiores magnam illo. Eveniet consequatur
          exercitationem, repudiandae deserunt facere perspiciatis totam soluta
          porro officiis animi laudantium corrupti provident.
        </p>
      </Container>
    </Section>
  );
};

export default ContentFive;
