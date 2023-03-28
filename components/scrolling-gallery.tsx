import React, { useRef } from "react";
import { PrimaryLink, Section, Container } from "@/components/index";
import {
  cubicBezier,
  useScroll,
  useTransform,
  motion,
  useSpring,
} from "framer-motion";
import Image from "next/image";
import Balancer from "react-wrap-balancer";

const ScrollingGallery = () => {
  return (
    <Section className="bg-primary-900">
      <Container className="flex flex-col">
        <ImageSection index={0} />
        <ImageSection index={1} />
        <ImageSection index={2} />
      </Container>
    </Section>
  );
};

export default ScrollingGallery;

const ImageSection = ({ index }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["center end", "start start"],
  });

  const y = useTransform(scrollYProgress, [0, 0.7, 1], [300, 0, -300]);

  const yText = useTransform(scrollYProgress, [0, 0.7, 1], [-300, -50, 300]);

  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [0, 1, 0]);

  /* const clipPath = useTransform(
    scrollYProgress,
    [1, 0],
    ["inset(1% 1% 1% 1%)", "inset(25% 25% 25% 25%)"],
  ); */

  const scale = useTransform(scrollYProgress, [1, 0], [1, 0]);

  const springConfig = { stiffness: 60, damping: 15, mass: 1 };

  const ySpring = useSpring(y, springConfig);

  const yTextSpring = useSpring(yText, springConfig);
  const opacitySpring = useSpring(opacity, springConfig);

  const scaleSpring = useSpring(scale, springConfig);

  return (
    <>
      <div
        ref={containerRef}
        className={`relative flex h-screen w-full gap-6 ${
          index % 2 === 1
            ? "flex-col-reverse lg:flex-row-reverse"
            : "flex-col lg:flex-row"
        }  overflow-hidden`}
      >
        <motion.div
          style={{
            y: ySpring,
            opacity: opacitySpring,
          }}
          className={` relative h-full w-full lg:w-1/2`}
        >
          <Image
            src="/content_one-1.jpg"
            fill={true}
            alt="background illustration"
            className="objectfit rounded-sm"
          />
        </motion.div>
        <motion.div
          style={{ y: yTextSpring, opacity: opacitySpring }}
          className={`flex h-full w-full flex-col ${
            index % 2 === 1 ? "items-end text-right" : "items-start text-left"
          } items-start justify-center bg-transparent text-left lg:w-1/2`}
        >
          <h2 className="mb-6  font-text text-xl font-semibold text-tertiary-300">
            Lorem.
          </h2>
          <h3 className="mb-6 max-w-2xl font-title text-4xl text-white sm:text-6xl xl:text-8xl">
            <Balancer>Lorem, ipsum dolor.</Balancer>
          </h3>
          <p className="mb-6 font-text text-xl text-gray-300 text-opacity-80">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
            distinctio dolores laboriosam in cupiditate? Repellat tempora
            dolorum reprehenderit laborum possimus.
          </p>
        </motion.div>
      </div>
    </>
  );
};
