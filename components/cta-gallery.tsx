import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Balancer from "react-wrap-balancer";
import { PrimaryLink, Section } from "@/components/index";
import * as ScrollArea from "@radix-ui/react-scroll-area";

const Slide = ({
  isActive,
  props,
  index,
}: {
  isActive: boolean;
  props: TSlider;
  index: number;
}) => {
  const [showMore, setShowMore] = useState(true);
  const [showText, setShowText] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
    setShowText(!showText);
  };

  return (
    <motion.div
      transition={{
        duration: 0.6,
        ease: [0.86, 0, 0.07, 1],
        delay: index * 0.1,
      }}
      viewport={{ once: true, margin: "0px 0px -300px 0px" }}
      className="flex h-full w-full flex-col items-start rounded-sm border-2 bg-white p-3"
      initial={{ borderColor: "#feeed6", x: 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      animate={{
        borderColor: isActive ? "#f9bc78" : "#feeed6",
      }}
    >
      <motion.div className="relative inline-block h-[50%] w-full shrink-0">
        <Image
          alt={props.alt}
          src={props.src}
          fill={true}
          className="rounded-sm object-cover"
        />
      </motion.div>
      <AnimatePresence mode="wait" initial={false}>
        {showText && (
          <motion.div
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: {
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.3,
                  duration: 0.3,
                  ease: [0.65, 0.05, 0.36, 1],
                },
              },
              collapsed: {
                opacity: 0,
                y: 100,
                transition: {
                  duration: 0.3,
                  ease: [0.65, 0.05, 0.36, 1],
                },
              },
            }}
            transition={{
              duration: 0.3,
              ease: [0.65, 0.05, 0.36, 1],
            }}
            className="h-1/2 w-full "
          >
            <ScrollArea.Root className="h-full w-full overflow-hidden rounded bg-white">
              <ScrollArea.Viewport className="relative h-full w-full rounded">
                <button
                  onClick={handleShowMore}
                  className="absolute top-2 right-4 z-50"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-6 w-6 shrink-0 fill-current text-primary-900"
                  >
                    <path d="M18 6a1 1 0 0 0-1.414 0L12 10.586 7.414 6A1 1 0 0 0 6 6a1 1 0 0 0 0 1.414L10.586 12 6 16.586A1 1 0 0 0 6 18a1 1 0 0 0 1.414 0L12 13.414 16.586 18A1 1 0 0 0 18 18a1 1 0 0 0 0-1.414L13.414 12 18 7.414A1 1 0 0 0 18 6Z" />
                  </svg>
                </button>
                <div className="pr-4 pt-6">
                  <p className="font-text text-xl text-secondary-900/80">
                    {props.text}
                  </p>
                </div>
              </ScrollArea.Viewport>
              <ScrollArea.Scrollbar
                className="flex touch-none select-none bg-blackA6 p-0.5 transition-colors duration-[160ms] ease-out hover:bg-blackA8 data-[orientation=horizontal]:h-2.5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col"
                orientation="vertical"
              >
                <ScrollArea.Thumb className="relative flex-1 rounded-[10px] bg-mauve10 before:absolute before:top-1/2 before:left-1/2 before:h-full before:min-h-[44px] before:w-full before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2 before:content-['']" />
              </ScrollArea.Scrollbar>
              <ScrollArea.Scrollbar
                className="flex touch-none select-none bg-blackA6 p-0.5 transition-colors duration-[160ms] ease-out hover:bg-blackA8 data-[orientation=horizontal]:h-2.5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col"
                orientation="horizontal"
              >
                <ScrollArea.Thumb className="relative flex-1 rounded-[10px] bg-mauve10 before:absolute before:top-1/2 before:left-1/2 before:h-full before:min-h-[44px] before:w-full before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2 before:content-['']" />
              </ScrollArea.Scrollbar>
              <ScrollArea.Corner className="bg-blackA8" />
            </ScrollArea.Root>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence initial={false}>
        {showMore && (
          <motion.div
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: {
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.4,
                  duration: 0.3,
                  ease: [0.65, 0.05, 0.36, 1],
                },
              },
              collapsed: {
                transition: {
                  duration: 0.3,
                  ease: [0.65, 0.05, 0.36, 1],
                },
                opacity: 0,
                y: 100,
              },
            }}
            transition={{
              duration: 0.3,
              ease: [0.65, 0.05, 0.36, 1],
            }}
            layout
            className="mt-6 flex flex-col items-start gap-3"
          >
            <span className="flex items-center gap-2 font-heading text-primary-900/80">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 fill-current text-tertiary-300"
              >
                <path d="M8 12H6c-1.103 0-2 .897-2 2v2c0 1.103.897 2 2 2h2c1.103 0 2-.897 2-2v-2c0-1.103-.897-2-2-2Zm-2 4v-2h2v2H6ZM19 2h-1V1a1 1 0 1 0-2 0v1H8V1a1 1 0 1 0-2 0v1H5C2.243 2 0 4.243 0 7v12c0 2.757 2.243 5 5 5h14c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5ZM5 4h14c1.654 0 3 1.346 3 3v1H2V7c0-1.654 1.346-3 3-3Zm14 18H5c-1.654 0-3-1.346-3-3v-9h20v9c0 1.654-1.346 3-3 3Z" />
              </svg>
              24.10.2023
            </span>
            <h3 className="font-heading text-3xl text-primary-900">
              {props.title}
            </h3>
            <p className="line-clamp font-text  text-xl text-secondary-900/80">
              {props.text}
            </p>
            <motion.button
              onClick={handleShowMore}
              className="font-heading text-lg text-tertiary-300 hover:bg-tertiary-100 "
            >
              Mehr Erfahren
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

type TSlider = {
  id: string;
  src: string;
  alt: string;
  date: Date;
  title: string;
  text: string;
};

type TCtaGallery = {
  id: string;
  title: string;
  caption: string;
  cta_link: string;
  cta_title: string;
  slides: {
    id: string;
    src: string;
    alt: string;
    date: Date;
    title: string;
    text: string;
  }[];
};

const CtaGallery = ({ props }: { props: TCtaGallery }) => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  return (
    <Section className="bg-secondary-50 pb-32 xl:pb-20">
      <div className="container z-0 mx-auto flex h-full w-full flex-col items-start gap-12 py-2 lg:flex-row">
        <div className="relative z-20 flex w-full flex-col items-start lg:w-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -top-12 right-0 h-32 w-32 scale-50 fill-current text-gray-300 text-opacity-80 sm:scale-100 lg:top-0"
          >
            <path d="M88.1 14.7c-3.9 1.9-7.1 6.6-7.1 10.4 0 3.1 3.4 8.4 7.2 11.2 1.4 1.1 4.9 2.2 7.6 2.5C108.9 40 117 30.2 111 20.4c-4.1-6.5-15.5-9.3-22.9-5.7zm16.4 3.2c3.3 1.9 7.3 8.7 5.8 10.2-.5.5-2.5-.2-4.8-1.9-3.2-2.1-5.1-2.7-9.5-2.7-3 0-7 .4-8.7.8-4 1-4.4-.6-1.2-4.7 3.7-4.7 11.8-5.5 18.4-1.7zm0 10.8c4.1 2.6 4.3 2.9 2.8 4.5-4.7 5.2-17.4 3.8-21.7-2.4-2.2-3.1-2-3.8 1.2-3.9 1.5 0 3.6-.4 4.7-.9 3.1-1.4 8.2-.4 13 2.7zM30.9 16.9c-4.5 1.5-7.9 4.3-10.4 8.6-7 11.8 1.8 23.7 13.9 19.1 15-5.7 16.8-26.3 2.5-28.1-1.9-.2-4.6 0-6 .4zm9.6 3.5c1.8 1.3 1.6 1.6-3.8 4.2-6.1 2.8-8.2 5.1-10.7 11.7-1.8 4.7-3 5.1-4.8 1.4C17.7 30.4 26.1 19 35.1 19c1.9 0 4.4.6 5.4 1.4zm1.2 15.5c-2.8 4.2-7.9 7.1-12.6 7.1-3.4 0-3.7-.6-1.6-3.4.8-1.1 1.5-2.7 1.5-3.7 0-2.9 4.1-7 9.4-9.3l5.1-2.3.3 4c.2 2.9-.3 4.9-2.1 7.6zM58.8 32.9c-3 2.6-3.3 3.5-3.3 8.3 0 9.8 7.5 17.3 17.3 17.3 4.8 0 5.7-.3 8.3-3.3 5-5.5 3.8-14.2-2.8-20.4-6-5.7-14.4-6.5-19.5-1.9zm13.8 1c7.1 3.2 10.9 11 8.3 17.2l-1.3 3.2-1.8-2.3c-1-1.2-1.8-2.8-1.8-3.5 0-2.6-5.5-7.8-10.7-10.1-5.8-2.6-6.4-3.6-3-5.2 3.2-1.6 5.7-1.4 10.3.7zM68 42.5c1.4.7 3.9 3.9 5.7 7.4l3.2 6.1h-4.2C64.8 56 58 49.4 58 41.8V38l3.8 1.6c2 .9 4.8 2.2 6.2 2.9zM31.1 53.3c-6.3 3.2-8.1 10.6-4.6 18.1 2.7 5.7 7.6 8.9 14.3 9.4 6.8.5 10.3-1.7 12.2-7.4C56.8 62 41.4 48 31.1 53.3zM44.8 58c3.7 2.7 6.2 7.6 6.2 11.9 0 1.7-.2 3.1-.4 3.1-1.6 0-11.4-5.1-12.7-6.6-1.4-1.7-4.9-9.5-4.9-11.1 0-1.4 9 .6 11.8 2.7zm-11.1 6c2.5 4.9 3.5 5.9 9 8.5 3.5 1.6 6.3 3.3 6.3 3.6 0 1.5-6.2 3.1-9.5 2.5-8.6-1.7-15.1-12.8-11.4-19.8 1.3-2.5 2.1-1.8 5.6 5.2zM91.4 60.4c-3 3-3.4 4-3.4 8.5 0 6.6 1.8 10.8 6.3 14.8 9.8 8.6 21.7 2.3 20.5-10.8-.8-8.4-8.4-15.9-16.1-15.9-3.1 0-4.6.7-7.3 3.4zm14.3 1.4c5 3.2 8.1 11.4 6.3 16.8l-1.2 3.4-4.8-4.1c-5.3-4.5-6.6-7-7.3-14.1-.4-4.7-.4-4.8 2.2-4.1 1.4.3 3.6 1.3 4.8 2.1zm-9.2 3.9c.8 6.5 3.2 10.9 7.1 13.3 5.3 3.4 5.4 6 .1 6-4.4 0-9.3-3.5-11.6-8.4-2.5-5-2.6-8.6-.6-12.6 2.3-4.5 4.3-3.8 5 1.7zM69.5 80.4c-10.3 4.6-12.4 19.4-4 27.6 8.5 8.2 20.5.9 20.5-12.5 0-10.9-8.6-18.7-16.5-15.1zm4.5 2.1c0 .2-.9 2.7-2 5.5-2.5 6.4-2.5 8.9.1 15.1 2.4 5.6 2.1 6.7-1.8 5.3-8.5-3-9.9-19.6-1.9-24.5 2.9-1.8 5.6-2.5 5.6-1.4zm6.4 3.5c4.8 5.8 4.4 15-.9 20-1.4 1.3-2.6 2.2-2.8 1.9-1.6-2.5-3.1-8.4-3-12.4 0-4.9 2.1-12.5 3.5-12.5.3 0 1.8 1.4 3.2 3zM23.5 87.7C16.8 91.2 13 97.2 13 104.1c0 3.3.6 4.7 3.4 7.5s4.2 3.4 7.5 3.4c9.8 0 18.1-8.3 18.1-18.1 0-3.3-.6-4.7-3.4-7.5S34.5 86 30.9 86c-2.4.1-5.7.8-7.4 1.7zm10.4 1.4c1.7.6 3.1 1.5 3.1 2s-2.1 1.9-4.7 3c-6.1 2.6-8.9 5.3-10.4 9.8-2.2 6.8-4.1 7.8-5.8 3-2.6-7.6 4.7-17.5 14-18.8.3-.1 2 .4 3.8 1zm5.2 11.7c-1.8 6.6-11.1 13.3-16.3 11.7-1.5-.5-1.5-.9.4-5.3 2.6-6.1 5.7-9.2 11-11.2s6.4-.9 4.9 4.8z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -bottom-20 right-12 h-44 w-44 rotate-12  scale-50 fill-current text-gray-300 text-opacity-80 sm:scale-100 lg:bottom-0"
          >
            <path d="M42.5 5.9c-3.6 2.1-8.1 7.2-9 10.1-.3 1.1-1.1 2-1.6 2s-2.6 1.5-4.7 3.4c-2 1.9-5.1 3.6-6.7 3.8-3 .3-3 .4-3 6.3v6h79L58 37l-38.5-.5v-10l43.9-.3c31.6-.1 44.3.1 45.2.9 1.5 1.2 1.9 5.6.8 8.3-.4 1.1-2 1.7-4.8 1.8-3.6.1-3.7.2-.8.5 1.7.2 3.2.5 3.2.6 0 .1.7 5.1 1.5 11.2 1.8 13.6 1.9 27.8.3 45.8-1.1 13.1-.7 19.5 1.6 24.7.5 1.3-2 1.6-18.6 1.9-24.1.4-31.5.4-55.6 0-16.6-.3-19.1-.6-18.6-1.9 2.4-5.3 2.7-11.5 1.4-26.8-1.2-14.7-1-29.8.5-47.2.9-9.9-1.2-2.1-2.4 8.8-1.4 13.2-1.3 24.6.3 40 1.3 12.1.9 18.7-1.3 24.6-.7 1.6-.9 3.2-.5 3.5.8.8 96.5.8 97 0 .2-.4-.3-2.6-1.1-5-2-5.6-2.1-11.6-.5-27.9 1.3-13.9.9-30.2-1.1-43.3-.8-5.2-.8-7.5.1-9.1.6-1.2 1-4.4.8-7.2-.3-4.3-.6-4.9-2.7-5.2-1.3-.2-3.5-1.7-4.8-3.2-2.6-3.1-8.3-5.5-11.4-4.7-1.3.4-1.9 0-1.9-1.1 0-2.8-3.8-8.1-7.2-10.2-4.3-2.6-11.3-2.6-15.6 0l-3.3 2L60 6c-5.1-2.6-13.4-2.7-17.5-.1zm31.3 2.3c1.4 1.4 1.6 4.4.3 5.2-2.6 1.7-6-2.6-4-5 1.4-1.7 2.2-1.7 3.7-.2zm-22.3 2.2c0 1.1-.6 2.1-1.4 2.4-.9.3-1.1-.1-.6-1.7.5-1.6.3-2-.9-1.5-.9.3-1.6 1.3-1.6 2.1s-.5 1.1-1 .8c-.7-.4-.6-1.3.1-2.6 1.3-2.6 5.4-2.2 5.4.5zm33.3 5.4c.2 1.2-.1 2.2-.7 2.2s-1.1-.7-1.1-1.5-.5-1.5-1.1-1.5c-.7 0-.9 1-.5 2.5.8 3-1 3.4-1.9.5-.8-2.5 1.2-5.2 3.4-4.8.9.2 1.7 1.3 1.9 2.6zM59 14.4c0 .2.3 1.1.6 1.9.8 2.2-2.5 5.1-4.2 3.6-1.5-1.2-1.9-4.1-.7-5.2.7-.8 4.3-1 4.3-.3zm11.5 5.8c-.8 2-3.3 3.1-4.8 2.1-.6-.4-.2-1 1.1-1.4 2.9-1.1 2.9-3.2 0-2.4-2.2.6-2.3.6-.3-1 1.6-1.3 2.1-1.3 3.2-.2.8.7 1.1 2.1.8 2.9zm-30.9-.6c0 .9.5 1.9 1.3 2.2 1 .3 1.2 0 .8-1.1-.3-.9-.2-1.9.2-2.2 1.6-.9 2.2 2.8.7 4.3-1.2 1.2-1.7 1.1-3.5-.7-1.2-1.2-1.9-2.6-1.6-3.1 1-1.6 2.3-1.2 2.1.6zm52.2 2.6c1.9 1.9 1.4 2.9-.9 1.6-1.7-1.1-2.3-1.1-2.6 0-.3.6-.9 1-1.3.7-1.4-.9 0-3.5 1.9-3.5.9 0 2.2.5 2.9 1.2z" />
            <path d="M71.2 10.2c.2.6 1 1.4 1.6 1.6.7.2 1-.2.6-1.2-.7-1.8-2.8-2.2-2.2-.4zM56 17.6c0 .8.5 1.2 1 .9.6-.3 1-1 1-1.6 0-.5-.4-.9-1-.9-.5 0-1 .7-1 1.6zM54.3 53.6c-2.3.8-6.5 3.5-9.1 5.9-15.5 13.9-11.5 38.3 7.6 47.2 10.3 4.8 25 1.8 32.4-6.6C97.6 86 94 64.3 77.9 55.6c-6.5-3.6-16.9-4.5-23.6-2zm28 12C90.9 74.2 80.8 96 68.2 96c-1.9 0-3.5.6-3.8 1.4-.3.8-1.9 1.9-3.5 2.5-10.1 3.5-23.1-12-19.9-23.8 1.9-7.3 8.6-9.2 15.4-4.6l3.7 2.5 1.9-2.2c1.1-1.3 1.9-2.6 2-3 0-.4 1.9-1.8 4.3-3.2 5.6-3.4 10.6-3.4 14 0z" />
            <path d="M68.9 67.3c-7.2 4.8-11.1 14.3-8.8 21.2 2.8 8.1 10.3 8.1 17.8 0 6.2-6.7 7.8-16.8 3.5-21.6-2.4-2.6-8.3-2.5-12.5.4zm5.3 4c-3.5 3.6-3.9 5.2-1.7 8.1.8 1.1 1.5 2.9 1.5 4.1 0 2.5-6.5 9.2-7.4 7.7-.3-.6.7-2 2.4-3.2 3.4-2.4 3.7-4.7 1.4-9.1-1.8-3.6-1.2-6.2 2.3-8.9 4-3.2 5-2.3 1.5 1.3zM50.5 76c3.8 3.9 3.9 4.1 2.6 7.3-2.4 6-2.4 6.4 1.2 10.4 2 2.1 3.9 3.4 4.3 3 .5-.4-.6-2.1-2.4-3.8-3.6-3.3-3.8-4.3-1.7-7.9 2.2-3.9 1.8-6-2.1-9.6-5-4.8-6.6-4.2-1.9.6zM6 61c3.9 2.1 5 2.4 5 1.2 0-1.1-4.6-3.2-6.8-3.2-1 .1-.3.9 1.8 2zM119.5 61.7c-3.9 2.1-1.6 2.9 2.4.8 1.7-.8 3.1-1.8 3.1-2 0-1-2.6-.4-5.5 1.2zM6.2 82.8c-1.8 1-3 2.1-2.6 2.5.8.8 6.4-2 6.4-3.3 0-1.2.2-1.3-3.8.8zM117 82.8c0 .5 1.6 1.6 3.5 2.5 4.2 2 4.7.4.5-1.8-3.3-1.7-4-1.8-4-.7z" />
          </svg>

          <h2 className="mb-6 font-text text-xl font-semibold text-tertiary-300">
            {props.title}
          </h2>
          <h3 className="mb-12 max-w-2xl font-title text-4xl text-primary-900 sm:text-6xl xl:text-8xl">
            <Balancer>{props.caption}</Balancer>
          </h3>
          <PrimaryLink title={props.cta_title} href={props.cta_link} />
        </div>
        <div className="relative z-20 h-[500px] w-full bg-secondary-50 lg:absolute lg:-right-16 lg:top-0 lg:h-full lg:w-1/2 lg:bg-white">
          <div className="absolute top-0 left-0 h-[500px] w-full lg:-left-16 lg:top-1/2 lg:-translate-y-1/2">
            <Swiper
              spaceBetween={25}
              slidesPerView={1}
              onSwiper={(swiper) => setSwiperInstance(swiper)}
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
              className="relative z-20 h-full w-full cursor-grab  overflow-auto  rounded-sm active:cursor-grabbing"
            >
              {props.slides.map((slide, index) => (
                <SwiperSlide key={slide.id} className="z-20 h-full w-full">
                  {({ isActive }) => (
                    <Slide isActive={isActive} props={slide} index={index} />
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="absolute left-0 -bottom-20 flex flex-row items-center gap-8 lg:-left-16 lg:-bottom-4 xl:bottom-20">
            <button
              className="group relative grid h-10 w-10  place-items-center rounded-full bg-tertiary-300 duration-300 hover:scale-110 hover:bg-tertiary-400 active:scale-110 active:bg-tertiary-400"
              onClick={() => {
                swiperInstance.slidePrev();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="absolute top-1/2 left-1/2 h-10 w-10 -translate-x-[.5rem] -translate-y-1/2 fill-current  text-primary-900 duration-300 group-hover:-translate-x-1/2 group-active:-translate-x-1/2"
              >
                <path d="M19 11H9l3.29-3.29a1 1 0 0 0 0-1.42 1 1 0 0 0-1.41 0l-4.29 4.3A2 2 0 0 0 6 12a2 2 0 0 0 .59 1.4l4.29 4.3a1 1 0 1 0 1.41-1.42L9 13h10a1 1 0 0 0 0-2Z" />
              </svg>
            </button>
            <button
              className="group relative grid h-10 w-10  place-items-center rounded-full bg-tertiary-300 duration-300 hover:scale-110 hover:bg-tertiary-400 active:scale-110 active:bg-tertiary-400"
              onClick={() => {
                swiperInstance.slideNext();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="absolute top-1/2 left-1/2 h-10 w-10 -translate-x-[2rem] -translate-y-1/2 fill-current  text-primary-900 duration-300 group-hover:-translate-x-1/2 group-active:-translate-x-1/2"
              >
                <path d="M18 12a2 2 0 0 0-.59-1.4l-4.29-4.3a1 1 0 0 0-1.41 0 1 1 0 0 0 0 1.42L15 11H5a1 1 0 0 0 0 2h10l-3.29 3.29a1 1 0 0 0 1.41 1.42l4.29-4.3A2 2 0 0 0 18 12Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default CtaGallery;
