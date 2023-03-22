import React, { useRef } from "react";
import { Section, Container } from "@/components/index";
import Image from "next/image";
import { cubicBezier, useScroll, useTransform, motion } from "framer-motion";
import Balancer from "react-wrap-balancer";

const GalleryOne = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["center center", "start end"],
  });

  const test = [0, 1, 2, 3, 4, 5, 6];

  return (
    <Section className=" h-full bg-secondary-50">
      <Container className=" flex h-full flex-col items-center justify-evenly gap-12">
        <div className="w-full text-left">
          <h2 className="mb-6 font-text text-xl font-semibold text-tertiary-300">
            Wir
          </h2>
          <h3 className="max-w-2xl font-title text-4xl text-primary-900 sm:text-6xl xl:text-8xl">
            <Balancer>Über uns</Balancer>
          </h3>
        </div>

        <div className="relative grid w-full grid-cols-1 gap-6 bg-secondary-50  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <Image
            src="/video-pattern-light.svg"
            fill={true}
            alt="background illustration"
            className="object-cover"
          />
          {test.map((item, index) => (
            <GalleryImage key={item} index={index} />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default GalleryOne;

const GalleryImage = ({ index }: { index: number }) => {
  return (
    <motion.figure
      initial={{
        y: -25,
        clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
      }}
      whileInView={{
        y: 0,
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        transition: {
          duration: 0.3,
          ease: [0.645, 0.045, 0.355, 1],
          delay: index * 0.1,
        },
      }}
      whileHover="hover"
      viewport={{ once: true, margin: "0px 0px -300px 0px" }}
      key={index}
      className="group relative h-[300px] w-full cursor-pointer rounded-sm outline outline-4 outline-offset-8 outline-transparent duration-300 ease-out hover:outline-tertiary-300 active:outline-offset-4 lg:h-[500px]"
    >
      <Image
        alt="test"
        src="/cta-bg-2.jpg"
        fill={true}
        className="rounded-sm object-cover bg-blend-screen brightness-[.6] duration-300 group-hover:scale-110 group-hover:brightness-100"
      />
      <motion.figcaption
        variants={{ hover: { y: 25, opacity: 0, rotate: 3 } }}
        animate={{ y: index % 3 === 0 ? "-50%" : 0 }}
        transition={{
          duration: 0.3,
          ease: [0.645, 0.045, 0.355, 1],
        }}
        className={`absolute  rounded-sm p-2 ${index % 3 === 0 && "top-1/2"} ${
          index % 3 === 1 && "top-4"
        } ${index % 3 === 2 && "bottom-4"} left-4`}
      >
        <span className="font-heading text-lg text-tertiary-300">
          23. Oktober 2022
        </span>
        <h3 className="font-heading text-3xl text-white">
          Lorem ipsum dolor sit
        </h3>
      </motion.figcaption>
    </motion.figure>
  );
};
