import { Section, Container, PrimaryLink } from "@/components/index";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import { motion } from "framer-motion";
import CountingNumbers from "./shared/counting-numbers";
import CountUp from "react-countup";

type TContentFive = {
  id: string;
  title: string;
  caption: string;
  text: string;
  cta_title: string;
  cta_link: string;
};

const ContentFive = () => {
  return (
    <Section className="bg-secondary-50">
      <Container className="relative flex flex-col  gap-6 lg:gap-12">
        <div className="flex flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-start gap-6">
            <h2 className="font-text text-xl font-semibold text-tertiary-300">
              Features
            </h2>
            <p className=" w-full font-heading text-4xl font-bold text-primary-900 sm:text-6xl">
              Unsere Vorteile für Sie
            </p>
            <p className="z-10 max-w-2xl font-text text-xl text-primary-900 text-opacity-80">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              commodi maiores eaque asperiores magnam illo. Eveniet consequatur
              exercitationem, repudiandae deserunt facere perspiciatis totam
              soluta porro officiis animi laudantium corrupti provident.
            </p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-1/3 w-1/3 fill-current stroke-gray-400/80 text-gray-300 text-opacity-80"
            viewBox="0 0 128 128"
          >
            <path d="M26.6 13.1c-6.4 1.5-10.3 4.5-12 9.2-2.4 6.7-2.7 11.1-1.6 18.3 3 19 15.9 31.5 31.9 31.3 9-.1 16.2-3.7 20.5-10.2 6.1-9.5 1.6-24.9-10.9-37.1-9.6-9.5-19.4-13.6-27.9-11.5zM40.8 18c7.8 4 17.4 14.1 21.5 22.7 5.4 11.7 3.5 20.6-5.4 25.1-4.3 2.1-4.7 2.1-9.6.7C34.7 62.7 19 40.1 19 25.6c0-5.9.8-7.1 6.7-9.2 5.7-2 8.4-1.7 15.1 1.6zM18.4 37.2C23 49.5 31.2 60.4 39.9 66.1c4.9 3.1 3.4 3.9-3 1.7-8.7-2.9-16-10.6-19.2-20-1.6-4.6-3.5-18.8-2.4-17.8.3.3 1.7 3.5 3.1 7.2z" />
            <path d="M28.4 21.1c.9 5.8 3.9 11.3 10.6 19.4 7.6 9.4 9.2 11.9 10.5 17.3.7 2.5 1.7 4.8 2.2 4.9 1.6.6 2.4-7.2 1.3-12.4-1.4-6-2.7-8.1-11-16.8-3.6-3.8-7.9-9.1-9.4-11.8-3.5-5.9-5.1-6.1-4.2-.6zM48 44.5c4 6.4 1.6 5.6-3.3-1.1-4.3-5.9-4.5-6.4-1.8-4.5 1.6 1.2 3.9 3.7 5.1 5.6zM59.4 45.1c.3 1.7.6 4.2.6 5.5 0 1.5.6 2.4 1.5 2.4 1.8 0 2-4.5.5-8.4-1.4-3.8-3.4-3.3-2.6.5zM59 57c0 .5.5 1 1 1 .6 0 1-.5 1-1 0-.6-.4-1-1-1-.5 0-1 .4-1 1zM88.6 27.7c-1.1 1.1-.6 2.3.9 2.3.8 0 1.5-.4 1.5-.9 0-1.3-1.6-2.2-2.4-1.4zM98 31.5c0 .8.5 1.5 1 1.5.6 0 1-.7 1-1.5s-.4-1.5-1-1.5c-.5 0-1 .7-1 1.5zM78.2 31.9c.2.7.7 1.2 1.1 1.2 1.2-.1.9-1.5-.3-2-.7-.2-1.1.2-.8.8zM103 38c0 .5.7 1 1.5 1s1.5-.5 1.5-1c0-.6-.7-1-1.5-1s-1.5.4-1.5 1zM91.7 38.6c-.8.8.1 2.4 1.4 2.4.5 0 .9-.7.9-1.5 0-1.5-1.2-2-2.3-.9zM83.2 45.1c.2.6.8 1 1.3 1s1.1-.4 1.3-1c.2-.6-.4-1.1-1.3-1.1s-1.5.5-1.3 1.1zM109.6 45.7c-1.1 1.1-.6 2.3.9 2.3.8 0 1.5-.4 1.5-.9 0-1.3-1.6-2.2-2.4-1.4zM91.7 46.6c-.8.8.1 2.4 1.4 2.4.5 0 .9-.7.9-1.5 0-1.5-1.2-2-2.3-.9zM100 52.5c0 .8.5 1.5 1 1.5.6 0 1-.7 1-1.5s-.4-1.5-1-1.5c-.5 0-1 .7-1 1.5zM93.5 57c-9.4 2.2-23.9 14.9-28.9 25.2-8.7 17.8-.4 32.3 19 33.6 6.2.4 8 .1 12.7-2.1 13.5-6.2 21.8-22.1 20.4-39-.3-3.9-1.4-8.2-2.4-10-3.4-5.7-13.5-9.5-20.8-7.7zm11.3 4c7.9 3.6 8 10.3.2 25.9-7 13.9-15.9 22.4-25.5 24.5-4.2.9-11.2-2.9-13.6-7.4-3.8-7.1-1.9-16 5.7-26.7C78.8 67.2 90.4 59 97.5 59c1.7 0 4.9.9 7.3 2zm9 19.8c-.9 16-11.2 29.5-24.3 31.7l-4 .7 5.5-4c3-2.2 7-5.8 8.8-8.1 4.5-5.7 11.9-19.7 12.7-24.4 1.2-6.1 1.8-4.2 1.3 4.1z" />
            <path d="M98.2 64.2C97 66 92.2 71.3 87.4 76 77.4 85.9 74 91.8 74 99.7c0 4.8 1.5 8.1 2.4 5.1C78.6 97.4 81 93.4 88.2 85c9.6-11.1 11-13.1 12.8-18.3 1.7-5.4-.1-6.9-2.8-2.5zM91 78c-1.7 2.2-3.6 4.2-4.1 4.6-.6.3-2.8 2.8-4.9 5.6-4 5-4.9 5.5-2.9 1.5 1-2 13.9-15.7 14.7-15.7.2 0-1.1 1.8-2.8 4zM93 95.5c0 .8.5 1.5 1 1.5.6 0 1-.7 1-1.5s-.4-1.5-1-1.5c-.5 0-1 .7-1 1.5zM88.1 100.6c-1.3 1.4-3.7 3.2-5.4 4-2.1 1.1-2.6 1.9-1.8 2.7.8.8 1.8.7 3.7-.4 3.5-1.8 8.4-6.4 8.4-7.8 0-1.9-2.4-1.2-4.9 1.5zM40.2 78.1c.2.6.8 1 1.3 1s1.1-.4 1.3-1c.2-.6-.4-1.1-1.3-1.1s-1.5.5-1.3 1.1zM47 83c0 .5.5 1 1 1 .6 0 1-.5 1-1 0-.6-.4-1-1-1-.5 0-1 .4-1 1zM30.7 85.6c-.8.8.1 2.4 1.4 2.4.5 0 .9-.7.9-1.5 0-1.5-1.2-2-2.3-.9zM52 87c0 .5.7 1 1.5 1s1.5-.5 1.5-1c0-.6-.7-1-1.5-1s-1.5.4-1.5 1zM37.7 89.6c-.8.8.1 2.4 1.4 2.4.5 0 .9-.7.9-1.5 0-1.5-1.2-2-2.3-.9zM44.6 94.7c-1.1 1.1-.6 2.3.9 2.3.8 0 1.5-.4 1.5-.9 0-1.3-1.6-2.2-2.4-1.4zM32 100c0 .5.7 1 1.5 1s1.5-.5 1.5-1c0-.6-.7-1-1.5-1s-1.5.4-1.5 1zM52 102c0 .5.5 1 1 1 .6 0 1-.5 1-1 0-.6-.4-1-1-1-.5 0-1 .4-1 1z" />
          </svg>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          <div className="flex flex-row items-start gap-3">
            <div className="rounded-sm border-2 border-gray-300 border-opacity-80 bg-gray-100/80 p-4 ">
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 507.506 507.506"
                xmlSpace="preserve"
                className="h-8 w-8 shrink-0 fill-current font-bold text-tertiary-300 "
              >
                <motion.path d="M163.865 436.934a54.228 54.228 0 0 1-38.4-15.915L9.369 304.966c-12.492-12.496-12.492-32.752 0-45.248 12.496-12.492 32.752-12.492 45.248 0l109.248 109.248L452.889 79.942c12.496-12.492 32.752-12.492 45.248 0 12.492 12.496 12.492 32.752 0 45.248L202.265 421.019a54.228 54.228 0 0 1-38.4 15.915z" />
              </motion.svg>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="font-heading text-3xl font-bold text-primary-900">
                Kostenloses W-Lan
              </h3>
              <p className="z-10 max-w-2xl font-text text-xl text-primary-900 text-opacity-80">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                commodi maiores eaque asperiores magnam illo.
              </p>
            </div>
          </div>
          <div className="flex flex-row items-start gap-3">
            <div className="rounded-sm border-2 border-gray-300 border-opacity-80 bg-gray-100/80 p-4 ">
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 507.506 507.506"
                xmlSpace="preserve"
                className="h-8 w-8 shrink-0 fill-current font-bold text-tertiary-300 "
              >
                <motion.path d="M163.865 436.934a54.228 54.228 0 0 1-38.4-15.915L9.369 304.966c-12.492-12.496-12.492-32.752 0-45.248 12.496-12.492 32.752-12.492 45.248 0l109.248 109.248L452.889 79.942c12.496-12.492 32.752-12.492 45.248 0 12.492 12.496 12.492 32.752 0 45.248L202.265 421.019a54.228 54.228 0 0 1-38.4 15.915z" />
              </motion.svg>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="font-heading text-3xl font-bold text-primary-900">
                Kostenloses W-Lan
              </h3>
              <p className="z-10 max-w-2xl font-text text-xl text-primary-900 text-opacity-80">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                commodi maiores eaque asperiores magnam illo.
              </p>
            </div>
          </div>
          <div className="flex flex-row items-start gap-3">
            <div className="rounded-sm border-2 border-gray-300 border-opacity-80 bg-gray-100/80 p-4 ">
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 507.506 507.506"
                xmlSpace="preserve"
                className="h-8 w-8 shrink-0 fill-current font-bold text-tertiary-300 "
              >
                <motion.path d="M163.865 436.934a54.228 54.228 0 0 1-38.4-15.915L9.369 304.966c-12.492-12.496-12.492-32.752 0-45.248 12.496-12.492 32.752-12.492 45.248 0l109.248 109.248L452.889 79.942c12.496-12.492 32.752-12.492 45.248 0 12.492 12.496 12.492 32.752 0 45.248L202.265 421.019a54.228 54.228 0 0 1-38.4 15.915z" />
              </motion.svg>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="font-heading text-3xl font-bold text-primary-900">
                Kostenloses W-Lan
              </h3>
              <p className="z-10 max-w-2xl font-text text-xl text-primary-900 text-opacity-80">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                commodi maiores eaque asperiores magnam illo.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default ContentFive;
