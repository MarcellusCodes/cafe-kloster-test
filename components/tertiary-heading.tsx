import React from "react";
import { Container, PrimaryLink, Navbar } from "@/components/index";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

const TertiaryHeading = () => {
  return (
    <header className="relative h-screen w-full bg-primary-900 py-10 sm:py-20">
      <Container className="flex h-full flex-col items-start gap-6">
        <h2 className="font-text text-xl font-semibold text-tertiary-300">
          Wir sind für sie da
        </h2>
        <p className="mb-6 w-full font-heading text-4xl font-bold uppercase text-white sm:text-8xl">
          Öffnungszeiten
        </p>
        <PrimaryLink title={"Speisekarte"} href="/" />
        <div className="absolute top-0 right-0 h-full w-full">
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            breakpoints={{
              450: {
                slidesPerView: 1.5,
                spaceBetween: 50,
              },
              900: {
                slidesPerView: 2.5,
                spaceBetween: 50,
              },
              1000: {
                slidesPerView: 1.5,
                spaceBetween: 50,
              },
              1250: {
                slidesPerView: 2.5,
                spaceBetween: 50,
              },
            }}
            className=" h-full w-full cursor-grab overflow-auto  rounded-sm  p-6 active:cursor-grabbing"
          >
            <SwiperSlide className="z-20 h-full w-[100%!important]">
              <div className="relative  h-full w-full">
                <Image
                  alt="tertiary layout image"
                  src="/header-preview-2.jpg"
                  fill={true}
                  className="rounded-sm object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="z-20 h-full w-[100%!important]">
              <div className="relative  h-full w-full">
                <Image
                  alt="tertiary layout image"
                  src="/header-preview-2.jpg"
                  fill={true}
                  className="rounded-sm object-cover"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </Container>
    </header>
  );
};

export default TertiaryHeading;
