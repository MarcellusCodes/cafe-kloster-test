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

type TFeature = {
  id: string;
  title: string;
  caption: string;
};

const Feature = ({ props }: { props: TFeature }) => {
  return (
    <motion.div
      transition={{
        duration: 0.6,
        ease: [0.87, 0, 0.13, 1],
      }}
      variants={{
        initial: {
          x: -25,
          clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
        },
        animate: { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", x: 0 },
      }}
      className="flex flex-row items-start gap-3"
    >
      <motion.div className="rounded-sm border-2 border-primary-900 bg-tertiary-400 p-4">
        <motion.svg
          transition={{ duration: 0.6, ease: [0.87, 0, 0.13, 1] }}
          initial="initial"
          whileInView="animate"
          variants={{
            initial: { scale: 0 },
            animate: { scale: [0, 1.2, 1] },
          }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 507.506 507.506"
          xmlSpace="preserve"
          className="h-6 w-6 shrink-0 fill-current font-bold text-white sm:h-8 sm:w-8"
        >
          <motion.path d="M163.865 436.934a54.228 54.228 0 0 1-38.4-15.915L9.369 304.966c-12.492-12.496-12.492-32.752 0-45.248 12.496-12.492 32.752-12.492 45.248 0l109.248 109.248L452.889 79.942c12.496-12.492 32.752-12.492 45.248 0 12.492 12.496 12.492 32.752 0 45.248L202.265 421.019a54.228 54.228 0 0 1-38.4 15.915z" />
        </motion.svg>
      </motion.div>
      <div className="flex flex-col gap-3">
        <h3 className="font-heading text-2xl font-bold text-primary-900 sm:text-3xl">
          {props.title}
        </h3>
        <p className="z-10 max-w-2xl font-text text-xl text-primary-900 text-opacity-80">
          {props.caption}
        </p>
      </div>
    </motion.div>
  );
};

type TContentFive = {
  id: string;
  title: string;
  caption: string;
  text: string;
  cta_title: string;
  cta_link: string;
  image: { src: string; alt: string };
  features: {
    id: string;
    title: string;
    caption: string;
  }[];
};

const ContentFive = ({ props }: { props: TContentFive }) => {
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
    <Section className=" bg-secondary-50">
      <Container className="relative flex flex-col  gap-6 lg:gap-12">
        <div
          ref={containerRef}
          className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center"
        >
          <div className="flex flex-col items-start gap-6">
            <h2 className="font-text text-xl font-semibold text-tertiary-300">
              {props.title}
            </h2>
            <p className=" w-full font-heading text-4xl font-bold text-primary-900 sm:text-6xl">
              {props.caption}
            </p>
            <p className="z-10 max-w-2xl font-text text-xl text-primary-900 text-opacity-80">
              {props.text}
            </p>
          </div>
          <motion.div className="relative h-[300px] w-full lg:h-[500px] lg:w-1/2">
            <Image
              alt={props.image.alt}
              src={props.image.src}
              fill={true}
              className="rounded-sm object-cover"
            />
          </motion.div>
        </div>
        <motion.div
          variants={{
            animate: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          viewport={{ once: true, margin: "0px 0px -300px 0px" }}
          initial="initial"
          whileInView="animate"
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3"
        >
          {props.features.map((feature, index) => (
            <Feature index={index} key={feature.id} props={feature} />
          ))}
        </motion.div>
      </Container>
    </Section>
  );
};

export default ContentFive;
