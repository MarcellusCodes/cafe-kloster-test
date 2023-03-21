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

const Feature = ({ props, index }: { props: TFeature; index: number }) => {
  return (
    <motion.div
      transition={{
        type: "spring",
        stiffness: 60,
        damping: 15,
        mass: 1,
        delay: index * 0.1,
      }}
      variants={{
        initial: {
          y: -25,
          clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
        },
        animate: {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          y: 0,
        },
      }}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "0px 0px -300px 0px" }}
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
          viewport={{ once: true }}
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 128 128"
          className="absolute -top-12 left-1/3 h-32 w-32 rotate-6 scale-50 fill-current text-gray-300 text-opacity-80 sm:scale-100 lg:top-0"
        >
          <path d="M2 2C0 4 0 5.3 0 64s0 60 2 62c1.5 1.5 3.3 2 7.3 2 9.9 0 9.1 4.4 9.7-53.7l.5-50.8h25l.3 9.4.3 9.3-5.4 5.7C30 58.1 26 67.7 26 81.1c0 13.9 4.7 24.7 14.8 34.1 18.4 17 44.9 17.1 63.3.1C114.3 105.8 119 95 119 81.1c0-13.4-4-23-13.7-33.2l-5.4-5.7.3-9.3.3-9.4 12-.3c10.8-.2 12.2-.4 13.8-2.3 2.2-2.7 2.2-7.1 0-9.8-1.8-2.1-2.2-2.1-54.2-2.4l-52.5-.2-.8-3C17.7 1.3 15.5 0 9.3 0 5.3 0 3.5.5 2 2zm12.5 62v59.5l-3.8.3C3.6 124.4 4 128 4 64.1c0-44.7.3-58 1.2-58.9.7-.7 3-1.2 5.3-1l4 .3V64zm109-48v2.5l-52.2.3L19 19v-6l52.3.2 52.2.3V16zM55 30.3c0 6.9-.2 7.4-2.5 8.5-1.4.7-2.8 1.2-3 1.2-.8 0-.6-15.6.2-16.3.3-.4 1.7-.7 3-.7 2.2 0 2.3.3 2.3 7.3zm30-1v6.3l-6.4-.9c-4.1-.7-8.6-.7-12.5 0l-6.1 1V23h25v6.3zm11 2.2c0 4.7-.2 8.5-.5 8.5-.2 0-1.6-.5-3-1.2-2.3-1.1-2.5-1.6-2.5-8.5V23h6v8.5zM86.7 41c10.6 3.7 19.4 11.9 24.7 22.9 2.9 6.1 3.1 7.4 3.1 17.1 0 9.7-.2 11-3.2 17.3-8.8 18.6-28.3 28.6-47.3 24.3-13.7-3.1-24.2-11.5-30.3-24.4-3-6.2-3.2-7.5-3.2-17.3 0-10.1.1-10.8 3.8-18.1C44.1 42.9 65.9 33.9 86.7 41z" />
          <path d="M56.2 55.2c-3.8 5-3.9 5.8-.7 9.6 2.4 2.9 2.4 3 .6 4.6-2.3 2.1-3.1 4.9-2 6.7.7 1.1 1.7.5 4.4-2.6 4-4.6 4.2-6.3 1.5-9.8-2.5-3.1-2.5-3.1.1-6.7 2-2.6 2.1-6 .1-6-.4 0-2.2 1.9-4 4.2zM68.3 52.7c-.3 1-1.4 2.6-2.5 3.6-2.4 2.3-2.3 5.9.2 8.2 1.1 1 2 2.3 2 3 0 .7-.9 2-2 3s-2 2.6-2 3.6c0 3.3 2.1 3.2 5-.2 3.5-4.1 3.9-8.8 1-11.4l-2-1.8 2.1-2.3c2.2-2.3 2.3-6.4.2-7.2-.7-.2-1.6.5-2 1.5zM77.8 54.4c-3.3 4.2-3.5 7.4-.7 11l2.1 2.7-2.1 2.1c-2.3 2.1-2.5 6.3-.4 6.3 1.8 0 6.3-6.6 6.3-9.2 0-1.3-.9-3.1-2-4-2.5-2.2-2.5-3.5 0-5.8 2.1-1.9 2.4-5.6.5-6.2-.5-.2-2.2 1.3-3.7 3.1z" />
          <path d="M44.3 68.5c-5.5 3.4-6.7 7-5.3 16 2 12.5 6.1 18.9 14.8 23.2 5 2.5 6.8 2.8 14.7 2.7 10.4-.1 14.5-1.5 20.8-7.3 2.3-2.2 6.1-4.4 8.3-5 7.8-2.1 12.1-7.4 10.9-13.3-.7-3-4.8-5.8-8.5-5.8-1.4 0-2-.6-2-2.3 0-3-2.5-6.4-6-8.2-6.3-3.3-8.5-.2-2.5 3.4 4.9 2.9 5.5 4.9 2 7.7-4.2 3.3-13 5.4-22.8 5.4-10.4 0-17.5-1.4-21.9-4.4-4.6-3-4.8-6-.6-8.2 4.7-2.4 5.8-3.4 5.1-5-.7-2-2.2-1.8-7 1.1zm59.1 16.1c.9.8 1.6 1.9 1.6 2.4 0 1.6-4.4 5.8-6.7 6.5-2.6.7-2.8.2-1.2-6.1 1.2-4.8 3.4-5.8 6.3-2.8zM60.9 89c9 1.2 21.4-.2 27.9-3l4.2-1.9v2.2c0 3.1-4.3 11.8-7.1 14.4-4.3 3.9-9.8 5.7-17.9 5.6-8.1-.1-12.9-1.6-17.2-5.6-3-2.8-6.2-8.7-7.2-13.4l-.7-3.2 5.1 2c2.9 1.1 8.7 2.4 12.9 2.9z" />
        </svg>

        <div
          ref={containerRef}
          className="z-10 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center"
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
        <motion.div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {props.features.map((feature, index) => (
            <Feature index={index} key={feature.id} props={feature} />
          ))}
        </motion.div>
      </Container>
    </Section>
  );
};

export default ContentFive;
