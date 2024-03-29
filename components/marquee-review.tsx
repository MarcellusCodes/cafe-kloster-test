import { Section, Container, PrimaryLink } from "@/components/index";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

type TMarqueeReview = {
  title: string;
  caption: string;
  text: string;
  cta_title: string;
  cta_link: string;
  reviews: {
    id: string;
    name: string;
    image: {
      src: string;
      alt: string;
    };
    text: string;
    rating: number;
  }[];
};

const MarqueeReview = ({ props }: { props: TMarqueeReview }) => {
  return (
    <Section className="h-full bg-primary-900">
      <Container className="flex h-full flex-col items-start gap-6 lg:flex-row lg:gap-32">
        <div className="relative flex w-full flex-col items-start gap-6 lg:w-[40%]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 right-0 z-0 h-16 w-16 rotate-12 fill-current text-gray-300 text-opacity-10 lg:-top-12 lg:h-32 lg:w-32"
            viewBox="0 0 512 512"
          >
            <path d="M251.2 24.7c-1.2 1-5.7 7.6-10.2 14.8l-8.1 13-13.1 2.7C202 58.9 193.3 61.6 192 64c-1.4 2.6-1.3 7.3.3 9.2.6.8 7.2 5 14.6 9.4l13.3 7.9-.6 7c-1.9 21-1.9 23.3-.3 25.9 3.1 4.7 6.6 4.3 17.4-1.8 5.4-3 11.9-6.5 14.6-7.7l4.7-2.3 4.8 2.3c2.6 1.2 9.1 4.7 14.5 7.7 10.8 6.1 14.3 6.5 17.4 1.7 1.5-2.2 1.5-3.9.3-17.5-1.1-12.7-1-15.2.1-16 .8-.5 6.8-4.1 13.4-8 6.6-3.9 12.6-7.8 13.3-8.6 1.5-1.9 1.6-6.6.2-9.2-1.3-2.4-10-5.1-27.8-8.8l-13.1-2.7-8.1-13C262.1 25.2 260.1 23 256 23c-1.5 0-3.7.8-4.8 1.7zM262.5 56c3.9 6.6 6.8 10.3 8.5 10.9 1.4.6 6.7 1.8 11.8 2.7 5 .9 9.2 1.7 9.2 1.9 0 .1-3.4 2.4-7.5 5.1-4.4 2.9-7.9 6-8.6 7.5-1 2.5-.7 9.6.8 17.2l.5 2.8-9.1-4.5c-5-2.5-10.4-4.6-12.1-4.6-1.7 0-7.1 2.1-12.1 4.6l-9.1 4.5.6-2.8c1.4-7.2 1.7-16.2.7-18.1-.6-1.1-4.5-4.2-8.6-6.8-4.1-2.6-7.4-4.8-7.2-4.9.1-.1 4.3-1 9.2-1.9 13.4-2.6 13.3-2.5 20-13.6 3.3-5.5 6.2-10 6.5-10 .3 0 3.2 4.5 6.5 10zM72 67.3c-4.3 2.2-4.6 3.3-7.6 32.2-.5 4.9-.7 5.2-7.7 10.6-4 3.1-11.1 9.1-15.9 13.3-8.2 7.2-8.8 7.9-8.8 11.6 0 6.7 2.2 7.6 20.7 8.4 10.2.4 16.2 1.1 17 1.9.6.7 3.2 6.6 5.7 13.2 5.7 14.7 9 18.2 15 15.9.9-.4 4.5-4.7 7.9-9.8 3.4-5 7.8-11.2 9.7-13.9l3.5-4.7 17.3.2c16.5.1 17.4 0 19.5-2 3.8-3.9 2.8-7.5-5.7-20.7l-7.9-12 2.3-4c1.2-2.2 5.1-8.4 8.6-13.8 4-6.1 6.4-10.8 6.4-12.6 0-3.8-3.7-7.1-8.1-7.1-3.6 0-24.8 4.9-33.1 7.6l-4.7 1.5-9.8-5.9C79.1 66.8 75.7 65.4 72 67.3zm20.2 26.1c4.7 3 9.5 5.7 10.5 6 1 .3 6.5-.8 12.3-2.4 5.7-1.6 10.5-2.8 10.7-2.7.2.2-1.7 3.9-4.2 8.3-5.3 9.3-5.3 10 1.1 19.6 2.4 3.7 4.4 7 4.4 7.3 0 .3-4.8.5-10.6.5s-11.4.4-12.4 1c-1 .5-4.6 4.8-8.1 9.5s-6.6 8.2-7 7.7c-.4-.4-1.6-3.4-2.8-6.7-4.2-11.7-3.7-11.3-16.6-12.9l-9-1.2 6.5-4.9c12.8-9.8 12.6-9.5 13.5-22 .7-11.1 1-12.5 2.4-12.5.4 0 4.6 2.4 9.3 5.4zM427.4 70.6c-4.8 2.5-11.6 6.4-15 8.5l-6.2 4-8.8-2.6c-18-5.2-29.3-7.4-32.5-6.3-3.3 1.1-4.9 3.5-4.9 7.1 0 1.4 3.8 8.4 8.5 15.8s8.5 13.7 8.5 14.1c0 .4-3.5 6-7.7 12.5-8.4 12.9-9.4 16.6-5.6 20.5 2.1 2 3 2.1 19.5 2l17.3-.2 3.5 4.7c1.9 2.7 6.3 8.9 9.7 13.9 3.4 5.1 7 9.4 7.9 9.8 6.2 2.4 9.3-1.1 15.3-16.9l4.9-13 8.4-.7c4.6-.3 12-.6 16.4-.7 10.2-.1 13.4-2.1 13.4-8.1 0-3.5-.6-4.4-6.7-10-3.8-3.3-10.9-9.3-16-13.3l-9.2-7.2-.6-5.5c-2.1-20.9-3.4-28.3-5.1-30-3.7-3.5-5.8-3.3-15 1.6zm4.1 29.8c1.2 13.3.2 11.8 13.6 22.1l6.4 4.9-9 1.2c-12.9 1.6-12.4 1.2-16.6 12.9-1.2 3.3-2.4 6.3-2.8 6.7-.4.5-3.5-3-7-7.7s-7.1-9-8.1-9.5c-1-.6-6.6-1-12.4-1-5.8 0-10.6-.2-10.6-.5s2-3.6 4.4-7.3c6.4-9.6 6.4-10.3 1.1-19.6-2.5-4.4-4.4-8.1-4.2-8.3.2-.1 5 1.1 10.7 2.7 5.8 1.6 11.3 2.7 12.3 2.4 1-.3 5.7-3 10.5-6 4.8-2.9 9.2-5.2 9.7-5.1.6.2 1.5 5.7 2 12.1zM283.5 149.8c-8.3 3.9-12.6 13-14 29.2-3 36.6-18.5 72.1-41.5 95.1-9.4 9.4-18.8 15.6-30.2 19.7l-7.3 2.7-49 .3-49 .3-2.3 2.5-2.2 2.5v182l2.5 2.5 2.4 2.4 152.8-.2 152.8-.3 6.7-3.3c11.8-5.8 18.3-16.1 18.3-29.2 0-8.8-2-14.9-7.2-21.6l-3.4-4.5 3-3.5c8.5-9.6 10.8-23.7 5.8-35.5-.8-1.9-3.1-5.6-5.1-8.2l-3.7-4.8 3.2-3.7c5.4-6.2 7.3-11.6 7.4-21.2 0-7.3-.4-9.3-2.7-14.1-1.5-3-3.9-6.5-5.2-7.8l-2.5-2.3 4-5c12.3-15.6 7.1-38.1-10.9-47-4.6-2.3-5.4-2.3-45.9-2.8l-41.2-.5 4.5-9.9c2.5-5.5 5.8-14.3 7.2-19.5 2.3-8.5 2.6-11.6 2.6-27.1.1-14.9-.3-18.8-2.2-26.4-3.1-12.3-8.3-21.7-16.2-29.6-11.3-11.1-22.9-15.2-31.5-11.2zm11.7 15.8c4.5 2.3 11.3 8.9 14.7 14.3 5.5 8.5 7.4 18.3 7.5 37.1 0 15-.3 17.3-2.7 25-1.4 4.7-4.4 12.3-6.6 16.9-2.2 4.6-4.3 10.3-4.7 12.7-.8 5.7 1.6 12.4 5.7 15.9l3.1 2.5h42.1c38.2 0 42.5.2 45.6 1.8 10 5 10.6 18.6 1.2 24.9-3.4 2.3-3.4 2.3-45.3 2.3-34.8 0-42.4.2-44.7 1.5-3.2 1.6-4.1 3.3-4.1 7.4 0 3.9 2 6.1 6.5 7.1 2.2.5 21.5 1 42.8 1 43.7 0 43.7 0 48.4 7.1 5.2 7.9 3.4 18.9-4 24.1-3.2 2.3-3.6 2.3-45 2.8l-41.9.5-2.4 2.8c-3.2 3.8-3.1 7.2.5 10.8l2.9 2.9H355c44.7 0 44.6 0 49.7 6.7 2.7 3.5 4.1 11 2.9 15.7-.9 3.7-5.6 8.7-10.1 10.7-3.7 1.7-7.3 1.9-43.3 1.9-23.7 0-40.1.4-41.2 1-2.5 1.3-4.1 6.5-3 9.4 2.1 5.6 2.1 5.6 44.8 5.6 43.4 0 43.4 0 48.9 6.3 7.4 8.4 4.6 21.2-5.7 26.4l-4.4 2.3H187V312.3l4.8-.6c17.4-2 39.3-15.5 54.2-33.1 21.9-26.1 35.1-58.3 39.4-96.6 1.5-13 2.9-18 5.3-18 .8 0 2.8.7 4.5 1.6zM171 393v80h-67V313h67v80z" />
            <path d="M133.2 334.7c-.7.3-1.9 1.8-2.7 3.3-2.2 4.2-2.2 52.8 0 56.9 2.4 4.8 8.7 5.7 12.3 1.8 2.2-2.3 2.2-3 2.2-30.3 0-28 0-28.1-2.3-30.2-2.2-2.1-6.4-2.8-9.5-1.5z" />
          </svg>

          <h2 className="font-text text-xl font-semibold text-tertiary-300">
            {props.title}
          </h2>
          <h3 className="max-w-2xl font-title text-4xl text-white sm:text-6xl">
            {props.caption}
          </h3>
          <p className="mb-6 font-text text-xl text-gray-300 text-opacity-80">
            {props.text}
          </p>
          <PrimaryLink title={props.cta_title} href={props.cta_link} />
        </div>
        <div className="mt-6 w-full lg:absolute lg:right-0 lg:top-1/2 lg:mt-0 lg:w-[55%] lg:-translate-y-1/2">
          <Marquee
            className="overflow-hidden bg-transparent"
            gradient={false}
            pauseOnHover
            speed={50}
          >
            {props.reviews.map((review) => (
              <article
                key={review.id}
                className="mr-4 grid w-[250px] grid-cols-1 gap-2 rounded-sm border-2 border-gray-300 border-opacity-10 bg-gray-100 bg-opacity-[0.02] p-6  hover:border-tertiary-300 active:border-tertiary-300 sm:w-full sm:max-w-lg"
              >
                <div className="flex flex-row items-center gap-2">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full">
                    <Image
                      alt={review.image.alt}
                      src={review.image.src}
                      fill={true}
                      className="rounded-sm object-cover duration-300 group-hover:scale-110 group-active:scale-110"
                    />
                  </div>
                  <h3 className="font-heading text-2xl text-tertiary-300">
                    {review.name}
                  </h3>
                </div>
                <div className="col-span-2 flex flex-row items-center gap-2">
                  {[1, 2, 3, 4, 5].map((index) => (
                    <svg
                      key={index}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className={`h-5 w-5 fill-current ${
                        review.rating >= index
                          ? "text-yellow-300"
                          : "text-gray-300 text-opacity-25"
                      }`}
                    >
                      <path d="m1.327 12.4 3.56 2.6-1.352 4.187A3.178 3.178 0 0 0 4.719 22.8a3.177 3.177 0 0 0 3.8-.019L12 20.219l3.482 2.559a3.227 3.227 0 0 0 4.983-3.591L19.113 15l3.56-2.6a3.227 3.227 0 0 0-1.9-5.832H16.4l-1.327-4.136a3.227 3.227 0 0 0-6.146 0L7.6 6.568H3.231a3.227 3.227 0 0 0-1.9 5.832Z" />
                    </svg>
                  ))}
                </div>
                <p className="col-span-2 max-w-xs font-text text-lg text-gray-300 sm:max-w-lg sm:text-xl">
                  {review.text}
                </p>
              </article>
            ))}
          </Marquee>
        </div>
      </Container>
    </Section>
  );
};

export default MarqueeReview;
