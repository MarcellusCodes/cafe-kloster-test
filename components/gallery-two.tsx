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
    <Section className="overflow-hidden bg-primary-900 ">
      <div className="flex flex-col gap-6 bg-[url('/video-pattern-dark.svg')] bg-repeat">
        <div className="relative h-[200px] w-full lg:h-[300px]">
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            spaceBetween={24}
            slidesPerView={3}
            onSlideChange={() => {
              swiperInstance?.slidePrev();
              swiperInstance2?.slideNext();
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
        </div>
        <div className="relative h-[200px] w-full lg:h-[300px]">
          <Swiper
            slidesPerView={4}
            spaceBetween={24}
            loop={true}
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
        </div>
        <div className="relative h-[200px] w-full lg:h-[300px]">
          <Swiper
            onSwiper={(swiper) => setSwiperInstance2(swiper)}
            spaceBetween={24}
            slidesPerView={3}
            loop={true}
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
