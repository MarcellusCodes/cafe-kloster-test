import { Section, Container, PrimaryLink } from "@/components/index";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import {
  circOut,
  cubicBezier,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import CountingNumbers from "./shared/counting-numbers";
import CountUp from "react-countup";
import { useRef } from "react";

type TContentFive = {
  id: string;
  title: string;
  caption: string;
  text: string;
  cta_title: string;
  cta_link: string;
};

const ContentFive = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["center center", "start end"],
  });

  const transformYImage = useTransform(scrollYProgress, [1, 0], ["0", "1"], {
    ease: cubicBezier(0.22, 0.61, 0.36, 1),
  });

  const blurImg = useTransform(
    scrollYProgress,
    [1, 0],
    [
      "polygon(0% 0%, 0% 100%, 25% 100%, 25% 25%, 75% 25%, 75% 75%, 25% 75%, 25% 100%, 100% 100%, 100% 0%)",
      "polygon(0% 0%, 0% 100%, 25% 100%, 25% 25%, 75% 25%, 50% 24%, 24% 23%, 25% 100%, 100% 100%, 100% 0%)",
    ],
    {
      ease: cubicBezier(0.19, 1, 0.22, 1),
    },
  );
  return (
    <Section className="bg-secondary-50">
      <Container className="relative flex flex-col  gap-6 lg:gap-12">
        <div
          ref={containerRef}
          className="flex flex-row items-center justify-between gap-6"
        >
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
          <motion.div
            
            className={`relative h-[500px] w-1/2 `}
          >
            <Image
              alt="test"
              src="/header-preview-2.jpg"
              fill={true}
              className="rounded-sm object-cover"
            />
          </motion.div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          <div className="flex flex-row items-start gap-3">
            <div className="rounded-sm border-2 border-primary-900 bg-tertiary-400 p-4 ">
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 507.506 507.506"
                xmlSpace="preserve"
                className="h-8 w-8 shrink-0 fill-current font-bold text-white "
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
            <motion.div className="rounded-sm border-2 border-primary-900 bg-tertiary-400 p-4">
              <motion.svg
                transition={{
                  ease: "easeOut",
                  delay: 5,
                  duration: 0.6,
                }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 507.506 507.506"
                xmlSpace="preserve"
                className="h-8 w-8 shrink-0 fill-current font-bold text-white"
              >
                <motion.path d="M163.865 436.934a54.228 54.228 0 0 1-38.4-15.915L9.369 304.966c-12.492-12.496-12.492-32.752 0-45.248 12.496-12.492 32.752-12.492 45.248 0l109.248 109.248L452.889 79.942c12.496-12.492 32.752-12.492 45.248 0 12.492 12.496 12.492 32.752 0 45.248L202.265 421.019a54.228 54.228 0 0 1-38.4 15.915z" />
              </motion.svg>
            </motion.div>
            <div className="flex flex-col gap-3">
              <h3 className="font-heading text-3xl font-bold text-primary-900">
                WC im Haus
              </h3>
              <p className="z-10 max-w-2xl font-text text-xl text-primary-900 text-opacity-80">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                commodi maiores eaque asperiores magnam illo.
              </p>
            </div>
          </div>
          <div className="flex flex-row items-start gap-3">
            <div className="rounded-sm border-2 border-primary-900 bg-tertiary-400 p-4 ">
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 507.506 507.506"
                xmlSpace="preserve"
                className="h-8 w-8 shrink-0 fill-current font-bold text-white "
              >
                <motion.path d="M163.865 436.934a54.228 54.228 0 0 1-38.4-15.915L9.369 304.966c-12.492-12.496-12.492-32.752 0-45.248 12.496-12.492 32.752-12.492 45.248 0l109.248 109.248L452.889 79.942c12.496-12.492 32.752-12.492 45.248 0 12.492 12.496 12.492 32.752 0 45.248L202.265 421.019a54.228 54.228 0 0 1-38.4 15.915z" />
              </motion.svg>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="font-heading text-3xl font-bold text-primary-900">
                Gartenanlage mit Spielplatz
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
