import React, { useRef, useState } from "react";
import { Section, Container } from "@/components/index";
import Image from "next/image";
import {
  cubicBezier,
  useScroll,
  useTransform,
  motion,
  useSpring,
} from "framer-motion";
import Balancer from "react-wrap-balancer";
import Marquee from "react-fast-marquee";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

const GalleryTwo = () => {
  /* const containerRef = useRef<HTMLDivElement>(null);

  const firstSliderScroll = useScroll({
    target: containerRef,
    offset: ["start start", "center end"],
  });

  const secondSliderScroll = useScroll({
    target: containerRef2,
    offset: ["start start", "center end"],
  });

  const rotate = useTransform(
    firstSliderScroll.scrollYProgress,
    [1, 0],
    [-6, 0],
  );

  const opacity = useTransform(
    firstSliderScroll.scrollYProgress,
    [1, 0],
    [0, 1],
  );

  const x = useTransform(firstSliderScroll.scrollYProgress, [1, 0], [-250, 0]);

  const y = useTransform(firstSliderScroll.scrollYProgress, [1, 0], [-25, 0]);

  const springConfig = { stiffness: 60, damping: 15, mass: 1 };

  const rotateSpring = useSpring(rotate, springConfig);
  const ySpring = useSpring(y, springConfig);
  const opacitySpring = useSpring(opacity, springConfig);
  const xSpring = useSpring(x, springConfig);

  const rotate2 = useTransform(
    firstSliderScroll.scrollYProgress,
    [1, 0],
    [6, 0],
  );

  const y2 = useTransform(firstSliderScroll.scrollYProgress, [1, 0], [25, 0]);

  const rotateSpring2 = useSpring(rotate2, springConfig);
  const ySpring2 = useSpring(y2, springConfig); */

  const test = [0, 1, 2, 3, 4, 5, 6];

  return (
    <Section className="bg-primary-900">
      <div className="relative flex  flex-col gap-6 ">
        <div className="absolute top-0 left-0 h-full w-full">
          <Image
            src="/video-pattern-dark.svg"
            fill={true}
            alt="background illustration"
            className="object-cover"
          />
        </div>
        <Marquee
          className="overflow-hidden bg-transparent"
          gradient={false}
          pauseOnClick
          pauseOnHover={false}
          speed={50}
        >
          {test.map((item) => (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ margin: "0% 0% 0% -10%" }}
              transition={{
                type: "spring",
                stiffness: 60,
                damping: 15,
                mass: 1,
              }}
              style={{
                height: Math.floor(Math.random() * (600 - 200 + 1)) + 200,
                width: Math.floor(Math.random() * (400 - 200 + 1)) + 200,
              }}
              key={item}
              className="relative mr-6"
            >
              <Image
                src="/cta-bg-2_c.jpg"
                fill={true}
                alt="image"
                className="object-cover"
              />
            </motion.div>
          ))}
        </Marquee>
      </div>
    </Section>
  );
};

export default GalleryTwo;
