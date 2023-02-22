import { Section, Container, PrimaryLink } from "@/components/index";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import { motion } from "framer-motion";
import CountingNumbers from "./shared/counting-numbers";

type TContentFour = {
  id: string;
  title: string;
  caption: string;
  text: string;
  cta_title: string;
  cta_link: string;
};

const ContentFour = () => {
  return (
    <Section className="bg-secondary-50">
      <Container className="flex flex-col-reverse items-center gap-6 lg:flex-row lg:gap-12">
        <div className="h-[300px] w-full lg:h-[500px] lg:w-1/2">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            className="relative z-20 h-full w-full cursor-grab overflow-auto rounded-sm active:cursor-grabbing"
          >
            <SwiperSlide className="relative z-20 h-full w-full rounded-sm">
              <div className="full relative h-full w-full">
                <Image
                  alt="test"
                  src="/cta-bg-2.jpg"
                  fill={true}
                  className="rounded-sm object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="relative z-20 h-full w-full rounded-sm">
              <div className="full relative h-full w-full">
                <Image
                  alt="test"
                  src="/cta-bg-2.jpg"
                  fill={true}
                  className="rounded-sm object-cover"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="flex w-full flex-col items-start gap-6 lg:w-1/2">
          <h2 className="font-text text-xl font-semibold text-tertiary-300">
            Übersicht
          </h2>
          <p className="w-full font-heading text-4xl font-bold text-primary-900 sm:text-6xl">
            Eine kleine Information für unsere Gäste
          </p>
          <p className="z-10 font-text text-xl text-primary-900 text-opacity-80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
            pariatur incidunt. In quis dicta quos molestiae dolorum commodi.
            Omnis quasi, architecto hic incidunt, sapiente maiores accusantium
            eos voluptates maxime nobis distinctio, velit quis! Aspernatur
            voluptatem voluptatum quas, optio dolorem accusantium!
          </p>
          <ul className="flex flex-row flex-wrap items-center gap-6">
            <li className="flex flex-col items-start gap-1 font-heading text-xl text-primary-900 text-opacity-80">
              <span className=" flex flex-row items-center font-heading text-4xl text-primary-900">
                <CountingNumbers value={10000} />
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="-ml-2 h-10  w-10 fill-current text-tertiary-300"
                >
                  <path d="M17 11h-4V7a1 1 0 0 0-1-1 1 1 0 0 0-1 1v4H7a1 1 0 0 0-1 1 1 1 0 0 0 1 1h4v4a1 1 0 0 0 1 1 1 1 0 0 0 1-1v-4h4a1 1 0 0 0 1-1 1 1 0 0 0-1-1Z" />
                </motion.svg>
              </span>
              Zufriedende Kunden
            </li>
            <li className="flex flex-col items-start gap-1 font-heading text-xl text-primary-900 text-opacity-80">
              <span className=" flex flex-row items-center font-heading text-4xl text-primary-900">
                <CountingNumbers value={5000} />
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="-ml-2 h-10  w-10 fill-current text-tertiary-300"
                >
                  <path d="M17 11h-4V7a1 1 0 0 0-1-1 1 1 0 0 0-1 1v4H7a1 1 0 0 0-1 1 1 1 0 0 0 1 1h4v4a1 1 0 0 0 1 1 1 1 0 0 0 1-1v-4h4a1 1 0 0 0 1-1 1 1 0 0 0-1-1Z" />
                </motion.svg>
              </span>
              Zubereitete Getränke
            </li>
            <li className="flex flex-col items-start gap-1 font-heading text-xl text-primary-900 text-opacity-80">
              <motion.span
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                className=" flex flex-row items-center font-heading text-4xl text-primary-900"
              >
                <CountingNumbers value={15000} />
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="-ml-2 h-10  w-10 fill-current text-tertiary-300"
                >
                  <path d="M17 11h-4V7a1 1 0 0 0-1-1 1 1 0 0 0-1 1v4H7a1 1 0 0 0-1 1 1 1 0 0 0 1 1h4v4a1 1 0 0 0 1 1 1 1 0 0 0 1-1v-4h4a1 1 0 0 0 1-1 1 1 0 0 0-1-1Z" />
                </motion.svg>
              </motion.span>
              Essen Serviert
            </li>
          </ul>
          <PrimaryLink title="Speisekarte" href="/" />
        </div>
      </Container>
    </Section>
  );
};

export default ContentFour;
