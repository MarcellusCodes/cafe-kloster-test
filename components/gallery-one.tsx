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
    <Section className="h-full bg-secondary-50">
      <Container className="flex h-full flex-col items-center justify-evenly gap-12">
        <div className="w-full text-center">
          <h2 className="mb-6 font-text text-xl font-semibold text-tertiary-300">
            Wir
          </h2>
          <h3 className="max-w-2xl font-title text-4xl text-primary-900 sm:text-6xl xl:text-8xl">
            <Balancer>Über uns</Balancer>
          </h3>
        </div>

        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4">
          {test.map((item, index) => (
            <motion.figure
              initial={{
                y: -25,
                clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
              }}
              whileInView={{
                y: 0,
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
              }}
              transition={{
                duration: 0.3,
                ease: [0.645, 0.045, 0.355, 1],
                delay: index * 0.1,
              }}
              viewport={{ once: true, margin: "0px 0px -300px 0px" }}
              key={index}
              className="relative h-[300px] w-full cursor-pointer rounded-sm outline outline-4 outline-offset-8 outline-transparent duration-300 ease-out hover:outline-tertiary-300 active:outline-offset-4 lg:h-[500px]"
            >
              <Image
                alt="test"
                src="/cta-bg-2.jpg"
                fill={true}
                className="rounded-sm object-cover bg-blend-screen brightness-[.75]"
              />
              <figcaption
                className={`absolute ${
                  index % 3 === 0 && "top-1/2 -translate-y-1/2"
                } ${index % 3 === 1 && "top-4"} ${
                  index % 3 === 2 && "bottom-4"
                } left-4`}
              >
                <span className="font-heading text-lg text-tertiary-300">
                  23. Oktober 2022
                </span>
                <h3 className="font-heading text-3xl text-white">
                  Lorem ipsum dolor sit
                </h3>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default GalleryOne;
