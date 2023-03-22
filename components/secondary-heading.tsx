import React, { useEffect, useRef, useState } from "react";
import { Section, Container } from "@/components/index";
import Balancer from "react-wrap-balancer";
import Image from "next/image";
import {
  useScroll,
  motion,
  useTransform,
  useSpring,
  cubicBezier,
  circOut,
  useInView,
  easeOut,
  easeIn,
} from "framer-motion";

type TSecondaryHeading = {
  id: string;
  title: string;
  caption: string;
  image: { src: string; alt: string };
  theme: "light" | "dark";
};

const SecondaryHeading = ({ props }: { props: TSecondaryHeading }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["end start", "start end"],
  });

  const transformYImage = useTransform(
    scrollYProgress,
    [1, 0],
    ["0%", "-25%"],
    {
      ease: cubicBezier(0.22, 0.61, 0.36, 1),
    },
  );

  const scaleImage = useTransform(scrollYProgress, [1, 0], [1, 1.5], {
    ease: circOut,
  });

  const rotateSvg = useTransform(scrollYProgress, [1, 0], [-360, 360], {
    ease: cubicBezier(0.6, -0.28, 0.74, 0.05),
  });

  return (
    <div ref={containerRef} className="relative overflow-hidden">
      <Section
        className={`scrollbar-hide overflow-y-hidden  ${
          props.theme === "light" ? "bg-primary-50" : "bg-primary-900"
        }`}
      >
        <Container className="scrollbar-hide relative flex h-full w-full flex-col items-center">
          <motion.svg
            style={{ rotate: rotateSvg }}
            xmlns="http://www.w3.org/2000/svg"
            className={`absolute -top-4 right-0 h-16 w-16 fill-current text-gray-300 sm:h-32 sm:w-32 ${
              props.theme === "light" ? "" : "text-opacity-10"
            }`}
            viewBox="0 0 512 512"
          >
            <path d="M260 .6c-10.2 1.9-14.1 6-11.5 12.1 1.7 4.1 4.3 4.8 12.2 3.3 18.5-3.5 34.7 4.1 40.4 19 3 7.6 3 19.1.1 28.5-5.8 18.8-21.9 35.7-41 43.3-5.7 2.2-8.3 2.6-17.7 2.6-10.1.1-11.5-.1-16.7-2.7-6.7-3.3-11.1-8-14.7-15.7-3.5-7.6-3.5-19.3-.1-29.9 2.6-8 9.7-19.6 15.4-25.1 4-3.8 6.6-8 6.6-10.5 0-2.8-4.6-6.5-8.2-6.5-2.6 0-4.2 1-8.6 5.7-14.9 15.8-22.5 33.4-22.4 52.3.1 23.5 13 40.8 34.7 46.6 6.7 1.8 20.5 1.7 28.5-.2 20.9-4.8 42.4-22 52.9-42.3 20.7-40 2.2-79.2-37.9-80.6-5.2-.2-10.6-.2-12 .1z" />
            <path d="M277.9 25.9c-6.9 2.2-13.4 6.6-18.7 12.7-5.4 6-7.9 11.4-10.7 22.9-1.3 5.2-3.3 10.8-4.5 12.5-3.7 5.1-10.3 10-15.7 11.6-3 .9-5.7 2.4-6.3 3.4-3.2 6 1.3 12.7 7.8 11.6 9.7-1.5 23.2-11.7 28.5-21.5 1.5-2.6 3.6-8.9 4.8-13.9 1.2-5.3 3.2-10.9 4.9-13.6 3.3-5.2 9.7-10.2 14.9-11.6 6-1.6 8.1-3.6 8.1-7.9 0-6.7-4.6-8.9-13.1-6.2zM108.3 51.5c-8.9 2.4-15.5 6.5-23.4 14.4C72.7 78 65.8 94.6 64.4 114.7c-1.2 17 4.2 36.7 13.6 50 19.3 27.6 52.1 31.7 74.8 9.2 15.1-15 22-34.1 20.9-58.8-.6-14.5-2.5-22-9-34.6-4.8-9.3-15.3-20.4-23.3-24.7-10.3-5.5-22.5-7.1-33.1-4.3zM133.9 69c31.4 16.8 34.1 75.1 4.5 97.8-9 6.9-21.8 8.5-31.9 3.8-11-5-20.9-18.2-25.1-33.7-2.4-8.6-2.4-26.1-.1-34.9 3.5-13.3 12.3-26.5 21.3-32.1 9.7-5.9 21.2-6.3 31.3-.9z" />
            <path d="M112 73c-4.9 5.3-7.3 13.2-7.3 24 0 11.2 1.1 14.7 8.6 26.8 4.9 8.1 5.2 9 5.6 16.3.3 6.7-.1 8.6-2.3 13.5-1.4 3.1-2.6 6.7-2.6 8 0 3.5 3.4 6.4 7.4 6.4 2.8 0 4-.7 6.1-3.5 8.7-11.3 8.5-33.8-.2-46.6-6.2-9-7.7-12.9-7.7-20.5-.1-5.9.4-8.2 2.8-13.2 2.6-5.4 2.8-6.4 1.7-9-1.2-2.9-4.7-5.2-7.7-5.2-.9 0-2.9 1.4-4.4 3zM377.7 65.5c-22.9 4.4-41.2 17-49.4 34.1-8.8 18.4-5.2 38 9.8 53.2 15 15.1 34.1 22 58.8 20.9 20.7-.8 36.9-7.4 49.6-20.2 7.8-7.8 11.7-14.2 14-23 4.2-16.4-.6-31.8-14.4-45.6-12.7-12.7-29.6-19.6-50.4-20.4-6.5-.3-13 .1-18 1zm32.8 16c14.5 3.7 27.9 13.6 33.2 24.3 2.3 4.7 2.8 7 2.8 13.2 0 6.5-.5 8.5-3.3 14.2-5.7 11.7-18.7 20.8-34.8 24.4-11.4 2.5-28.4 1.6-38.4-2.1-22.1-8.2-33.8-23.8-31-41.2 2.8-17 20.5-30.8 44.5-34.7 5.2-.8 20.7.3 27 1.9z" />
            <path d="M406.2 105c-5.3 1.1-12.7 4.6-20.6 9.7-5.3 3.4-6.7 3.8-13.7 4.2-6.7.3-8.6-.1-13.5-2.3-3.1-1.4-6.7-2.6-8-2.6-3.5 0-6.4 3.4-6.4 7.4 0 4.4 4.4 8 13.1 10.7 12.2 3.8 27.4 1.7 37.3-5 8.7-6 12.7-7.5 20.2-7.5 5.9-.1 8.2.4 13.2 2.8 5.4 2.6 6.4 2.8 9 1.7 3.8-1.6 5.7-5.7 4.3-9.3-2.7-7.1-22.1-12.5-34.9-9.8zM39.5 194.1c-28.3 4.7-44.6 31-37.9 61.2 7.8 35.1 41.4 63.1 75.4 63 23.4-.1 40.8-13.1 46.6-34.8 1.8-6.6 1.7-20.5-.1-28.3-7-29.7-34.3-55.4-64.5-60.8-8.4-1.5-12.2-1.6-19.5-.3zM64.2 211c13.7 4.2 29.2 16.6 37 29.5 13.8 22.8 11.2 47.8-6 58.2-31.6 18.9-83.5-20.4-79.8-60.5 2.1-23.5 23.2-35.2 48.8-27.2z" />
            <path d="M26.8 222.7c-2.5 3-2.8 5-1.2 10.5 2.1 7 6.5 13.8 12.5 19.2 6.3 5.7 11.6 8.2 23.4 11.1 5.2 1.3 10.8 3.3 12.5 4.5 5.1 3.7 10 10.3 11.6 15.7.9 3 2.4 5.7 3.4 6.3 6 3.2 12.7-1.3 11.6-7.8-1.5-9.6-11.2-22.6-21.1-28.3-2.7-1.6-9.2-3.8-14.2-5-5.4-1.3-11.2-3.3-13.8-5-5.3-3.4-10.1-9.7-11.6-15.3-1.5-5.7-3.5-7.6-7.9-7.6-2.3 0-4.3.7-5.2 1.7zM424.2 194.5c-14.3 3.2-25.2 11.3-31.5 23.2-20 38.4 14.1 92.9 62.7 100.3 26.4 4 50.3-11.8 55.5-36.8 4.7-22.7-7.3-52-28.6-69.4-17.6-14.5-40.6-21.3-58.1-17.3zm27.7 16.8c12.4 4.1 26.7 15.4 34.9 27.7 15.7 23.7 12.5 51.4-7.2 61-21.8 10.5-53.8-3.3-69.6-30-10-17-10.7-37.3-1.7-49.2 9-11.7 25.7-15.4 43.6-9.5z" />
            <path d="M413 223.2c-1.7 1.8-2.1 3.2-1.7 6 1.3 9.8 11.5 23.7 21.6 29.1 2.6 1.5 8.9 3.6 13.9 4.8 5.3 1.2 10.9 3.2 13.6 4.9 5.4 3.5 10.2 9.8 11.7 15.4 1.5 5.7 3.5 7.6 7.9 7.6 6.4 0 8.7-4.4 6.4-12.2-2.1-7-6.5-13.8-12.5-19.2-6.3-5.7-11.6-8.2-23.4-11.1-5.2-1.3-10.8-3.3-12.5-4.5-5.1-3.7-10-10.3-11.6-15.7-.9-3-2.4-5.7-3.4-6.3-3.2-1.7-7.8-1.2-10 1.2zM369.9 329.7c-8.5 4.3-18 14.6-23.4 25.6-6.8 13.9-8 19.5-8 37.7 0 13.5.3 16.5 2.3 23 4 12.5 9.8 22.7 17.7 30.5 13.4 13.4 28.7 18.2 44.8 14 9.4-2.4 15.7-6.3 23.8-14.5 8.7-8.8 14.5-19.1 18.1-32.5 3-11.2 3-30.6-.1-42-4.5-17-14.4-31.8-26.6-40-6.9-4.5-10.9-4.9-14.2-1.1-4 4.7-2.8 7.8 5.2 13.2 6.9 4.5 11.3 9.7 15.8 18.2 5.3 10 7.1 17.9 7.1 30.7 0 17.9-4.8 31.4-15 42.5-7.7 8.3-14.5 11.5-24.4 11.5-6.1 0-8.6-.5-13.3-2.7-11.7-5.5-21.7-19.5-25.3-35.4-2.4-11.1-1.6-28.4 1.8-38.2 4.4-12.2 12.2-22.3 21.6-27.9 6.4-3.8 7.1-10.8 1.2-13.8-3.6-1.9-2.6-2-9.1 1.2zM103.1 339c-14.8 3.1-28.2 10.1-37.6 19.5-7.8 7.8-11.7 14.2-14 23-5 19.2 3.8 40 22.3 52.7 7.7 5.3 14.2 3.3 14.2-4.3 0-3.5-.5-4.2-5.2-7.7-12.6-9.3-17.3-17.4-17.3-29.7 0-7.2.3-8.6 3.4-14.3 6.2-11.4 19.3-20.3 34.7-23.8 11.2-2.5 28.4-1.6 38.4 1.9 14.2 5 25.7 15.1 29.6 25.8 2.5 6.9 2.1 16.7-1 23.4-4.9 10.7-18.5 21-33.1 24.9-3.3.9-11.1 1.9-17.3 2.3-10.5.6-11.4.8-13.2 3.1-2.6 3.2-2.5 5.5.3 8.8 3 3.4 9.6 4.1 22.3 2.4 17.8-2.3 33.1-9.4 43.9-20.4 28.9-29.4 14.1-71.6-30-85.6-5.5-1.7-10-2.3-21.5-2.5-8-.2-16.5 0-18.9.5z" />
            <path d="M384.5 347.4c-4.2 5.5-6.5 13.5-6.5 22.4 0 9.4 2 16.8 6.5 23.8 6.8 10.6 7.9 13.4 7.9 21 .1 5.9-.4 8.2-2.8 13.2-2.6 5.4-2.8 6.4-1.7 9 1.7 4.1 6 5.8 9.7 4 3.8-1.8 8.2-10.5 9.6-19.1 1.9-11.9-.8-22-9.9-36.1-3.4-5.3-3.8-6.7-4.2-13.7-.3-6.7.1-8.6 2.3-13.5 1.4-3.1 2.6-6.7 2.6-8 0-3.5-3.4-6.4-7.4-6.4-2.8 0-4 .7-6.1 3.4zM127.3 379.9c-2.8 1.1-7.1 3.2-9.5 4.9-8.9 6.1-12.9 7.6-20.4 7.6-5.9.1-8.2-.4-13.2-2.8-5.4-2.6-6.4-2.8-9-1.7-4.1 1.7-5.8 6-4 9.7 2.8 6 18.7 11.2 30.1 9.9 8-.9 12.6-2.7 22.5-8.8 8.1-4.9 9-5.2 16.3-5.6 6.7-.3 8.6.1 13.5 2.3 3.1 1.4 6.7 2.6 8 2.6 3.5 0 6.4-3.4 6.4-7.4 0-4.3-4-7.7-12.4-10.6-7.4-2.7-21-2.7-28.3-.1zM254.7 388.6c-18.3 4.4-37 18-48.1 34.8-19.3 29.2-17.2 61.7 5.1 78.7 34 25.9 93.6-3.6 104.9-51.9 2.2-9.3 2-23.1-.4-30.9-4.9-15.5-17.9-27.7-33.3-31.2-6.2-1.5-21.3-1.2-28.2.5zm31.5 16.7c6.7 3.3 11.1 8 14.7 15.7 2.1 4.5 2.5 7 2.5 14 0 11.5-2.6 19.5-9.9 31-19.1 29.8-57.7 40.3-76.3 20.9-11.3-11.7-11.5-33-.5-51.9 4.8-8.2 15.9-19.4 24.2-24.4 10.4-6.3 18.9-8.7 30.1-8.3 8.1.2 10.5.7 15.2 3z" />
            <path d="M275.9 413.4c-7.1 2.9-10.2 5.1-16.3 11.5-5.6 6.1-8.8 12.8-11.1 23.3-2.7 12.6-10 21.2-19.9 23.9-5.7 1.5-7.6 3.5-7.6 7.9 0 3.7 1.7 6 5.3 7.3 2.5.9 13.1-2.8 18.3-6.3 5.4-3.8 11.7-11 14.4-16.6 1.2-2.4 3.2-8.7 4.5-13.9 1.3-5.2 3.3-10.8 4.5-12.5 3.5-4.9 10.3-10.1 14.8-11.3 5.8-1.5 8.2-4 8.2-8.2 0-4.1-3.2-7.5-6.9-7.5-1.4 0-5.1 1.1-8.2 2.4z" />
          </motion.svg>
          <h2 className="mb-6 text-center font-text  text-xl font-semibold text-tertiary-300">
            {props.title}
          </h2>
          <p
            className={`mb-12 text-center font-title text-4xl  ${
              props.theme === "light" ? "text-primary-900" : "text-white"
            } sm:text-6xl xl:text-8xl`}
          >
            <Balancer>{props.caption}</Balancer>
          </p>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 60,
              damping: 15,
              mass: 1,
            }}
            style={{ y: transformYImage, scale: scaleImage }}
            className=" relative inline-block h-[300px] w-full sm:mt-12 lg:h-[500px]"
          >
            <Image
              alt={props.image.alt}
              fill={true}
              src={props.image.src}
              priority={true}
              quality={100}
              loading="eager"
              className="rounded-sm object-cover"
            />
          </motion.div>
        </Container>
      </Section>
    </div>
  );
};

export default SecondaryHeading;
