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

const GalleryOne = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const containerRef2 = useRef<HTMLDivElement>(null);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [swiperInstance2, setSwiperInstance2] = useState(null);

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
  const ySpring2 = useSpring(y2, springConfig);

  const test = [0, 1, 2, 3, 4, 5, 6];
  /* bg-[url('/video-pattern-dark.svg')] bg-repeat */

  return (
    <Section className="bg-primary-900">
      <div className="relative flex  flex-col gap-6 ">
        <Image
          src="/video-pattern-dark.svg"
          fill={true}
          alt="background illustration"
          className="object-cover"
        />
        <motion.div
          ref={containerRef}
          style={{ opacity: opacitySpring, x: xSpring }}
          className="relative h-[200px] w-full lg:h-[300px]"
        >
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            spaceBetween={24}
            slidesPerView={1}
            onSlideChange={() => {
              swiperInstance?.slidePrev();
              swiperInstance2?.slideNext();
            }}
            breakpoints={{
              450: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              900: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1000: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            className="absolute top-0 left-0 h-full w-full"
          >
            <SwiperSlide className="relative">
              <Image
                alt="test"
                src="/header-image.jpg"
                fill={true}
                className="rounded-sm object-cover"
              />
            </SwiperSlide>
            <SwiperSlide className="relative">
              <Image
                alt="test"
                src="/header-preview-2.jpg"
                fill={true}
                className="rounded-sm object-cover"
              />
            </SwiperSlide>
            <SwiperSlide className="relative">
              <Image
                alt="test"
                src="/cta-bg-2.jpg"
                fill={true}
                className="rounded-sm object-cover"
              />
            </SwiperSlide>
            <SwiperSlide className="relative">
              <Image
                alt="test"
                src="/cta-bg.jpg"
                fill={true}
                className="rounded-sm object-cover"
              />
            </SwiperSlide>
            <SwiperSlide className="relative">
              <Image
                alt="test"
                src="/cta-bg-2.jpg"
                fill={true}
                className="rounded-sm object-cover"
              />
            </SwiperSlide>
          </Swiper>
        </motion.div>
        <motion.div
          style={{ opacity: opacitySpring }}
          className="relative h-[200px] w-full lg:h-[300px]"
        >
          <Swiper
            slidesPerView={2}
            spaceBetween={24}
            loop={true}
            breakpoints={{
              450: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
              900: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
              1000: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
            onSwiper={(swiper) => setSwiperInstance(swiper)}
            className="absolute top-0 left-0 h-full w-full"
          >
            <SwiperSlide className="relative">
              <Image
                alt="test"
                src="/header-image.jpg"
                fill={true}
                className="rounded-sm object-cover"
              />
            </SwiperSlide>
            <SwiperSlide className="relative">
              <Image
                alt="test"
                src="/header-preview-2.jpg"
                fill={true}
                className="rounded-sm object-cover"
              />
            </SwiperSlide>
            <SwiperSlide className="relative">
              <Image
                alt="test"
                src="/cta-bg-2.jpg"
                fill={true}
                className="rounded-sm object-cover"
              />
            </SwiperSlide>
            <SwiperSlide className="relative">
              <Image
                alt="test"
                src="/cta-bg.jpg"
                fill={true}
                className="rounded-sm object-cover"
              />
            </SwiperSlide>
            <SwiperSlide className="relative">
              <Image
                alt="test"
                src="/cta-bg-2.jpg"
                fill={true}
                className="rounded-sm object-cover"
              />
            </SwiperSlide>
            <SwiperSlide className="relative">
              <Image
                alt="test"
                src="/header-image.jpg"
                fill={true}
                className="rounded-sm object-cover"
              />
            </SwiperSlide>
            <SwiperSlide className="relative">
              <Image
                alt="test"
                src="/header-preview-2.jpg"
                fill={true}
                className="rounded-sm object-cover"
              />
            </SwiperSlide>
            <SwiperSlide className="relative">
              <Image
                alt="test"
                src="/cta-bg-2.jpg"
                fill={true}
                className="rounded-sm object-cover"
              />
            </SwiperSlide>
            <SwiperSlide className="relative">
              <Image
                alt="test"
                src="/cta-bg.jpg"
                fill={true}
                className="rounded-sm object-cover"
              />
            </SwiperSlide>
            <SwiperSlide className="relative">
              <Image
                alt="test"
                src="/cta-bg-2.jpg"
                fill={true}
                className="rounded-sm object-cover"
              />
            </SwiperSlide>
          </Swiper>
        </motion.div>
        <div className="relative h-[200px] w-full lg:h-[300px]">
          <Swiper
            onSwiper={(swiper) => setSwiperInstance2(swiper)}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            breakpoints={{
              450: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              900: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1000: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            className="absolute top-0 left-0 h-full w-full"
          >
            <SwiperSlide className="relative">
              <Image
                alt="test"
                src="/header-image.jpg"
                fill={true}
                className="rounded-sm object-cover"
              />
            </SwiperSlide>
            <SwiperSlide className="relative">
              <Image
                alt="test"
                src="/header-preview-2.jpg"
                fill={true}
                className="rounded-sm object-cover"
              />
            </SwiperSlide>
            <SwiperSlide className="relative">
              <Image
                alt="test"
                src="/cta-bg-2.jpg"
                fill={true}
                className="rounded-sm object-cover"
              />
            </SwiperSlide>
            <SwiperSlide className="relative">
              <Image
                alt="test"
                src="/cta-bg.jpg"
                fill={true}
                className="rounded-sm object-cover"
              />
            </SwiperSlide>
            <SwiperSlide className="relative">
              <Image
                alt="test"
                src="/cta-bg-2.jpg"
                fill={true}
                className="rounded-sm object-cover"
              />
            </SwiperSlide>
            <SwiperSlide className="relative">
              <Image
                alt="test"
                src="/cta-bg-2.jpg"
                fill={true}
                className="rounded-sm object-cover"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </Section>
  );
};

export default GalleryOne;
