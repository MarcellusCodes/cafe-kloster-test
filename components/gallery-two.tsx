import React, { useRef, useState } from "react";
import { Section, Container } from "@/components/index";
import Image from "next/image";
import { cubicBezier, useScroll, useTransform, motion } from "framer-motion";
import Balancer from "react-wrap-balancer";
import Marquee from "react-fast-marquee";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

const GalleryOne = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [swiperInstance2, setSwiperInstance2] = useState(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["center center", "start end"],
  });

  const test = [0, 1, 2, 3, 4, 5, 6];

  return (
    <Section className=" h-full bg-secondary-50">
      <Container className=" flex h-full flex-col items-center justify-evenly gap-12">
        <div className=" text-left">
          <h2 className="mb-6 font-text text-xl font-semibold text-tertiary-300">
            Wir
          </h2>
          <h3 className="max-w-2xl font-title text-4xl text-primary-900 sm:text-6xl xl:text-8xl">
            <Balancer>Über uns</Balancer>
          </h3>
        </div>
      </Container>
      <div className="relative mt-12 h-[300px] w-full">
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          spaceBetween={24}
          slidesPerView={3}
          loop={true}
          onSlideChange={() => {
            swiperInstance?.slidePrev();
            swiperInstance2?.slideNext();
          }}
          className="absolute top-0 left-0 h-full w-full"
        >
          <SwiperSlide className=" bg-green-600">Slide 1</SwiperSlide>
          <SwiperSlide className="bg-red-600">Slide 2</SwiperSlide>
          <SwiperSlide className="bg-orange-600">Slide 3</SwiperSlide>
          <SwiperSlide className="bg-purple-600">Slide 4</SwiperSlide>
          <SwiperSlide className="bg-orange-600">Slide 3</SwiperSlide>
          <SwiperSlide className="bg-purple-600">Slide 4</SwiperSlide>
        </Swiper>
      </div>
      <div className="relative mt-6 h-[300px] w-full">
        <Swiper
          slidesPerView={4}
          spaceBetween={24}
          initialSlide={5}
          loop={true}
          onSwiper={(swiper) => setSwiperInstance(swiper)}
          className="absolute top-0 left-0 h-full w-full"
        >
          <SwiperSlide className=" bg-green-600">Slide 1</SwiperSlide>
          <SwiperSlide className="bg-red-600">Slide 2</SwiperSlide>
          <SwiperSlide className="bg-orange-600">Slide 3</SwiperSlide>
          <SwiperSlide className="bg-purple-600">Slide 4</SwiperSlide>
          <SwiperSlide className="bg-purple-600">Slide 4</SwiperSlide>
          <SwiperSlide className="bg-purple-600">Slide 4</SwiperSlide>
          <SwiperSlide className="bg-purple-600">Slide 4</SwiperSlide>
        </Swiper>
      </div>
      <div className="relative mt-6 h-[300px] w-full">
        <Swiper
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          onSwiper={(swiper) => setSwiperInstance2(swiper)}
          spaceBetween={24}
          slidesPerView={3}
          loop={true}
          className="absolute top-0 left-0 h-full w-full"
        >
          <SwiperSlide className=" bg-green-600">Slide 1</SwiperSlide>
          <SwiperSlide className="bg-red-600">Slide 2</SwiperSlide>
          <SwiperSlide className="bg-orange-600">Slide 3</SwiperSlide>
          <SwiperSlide className="bg-purple-600">Slide 4</SwiperSlide>
          <SwiperSlide className="bg-orange-600">Slide 3</SwiperSlide>
          <SwiperSlide className="bg-purple-600">Slide 4</SwiperSlide>
        </Swiper>
      </div>
    </Section>
  );
};

export default GalleryOne;
