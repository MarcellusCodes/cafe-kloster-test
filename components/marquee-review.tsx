import { Section, Container, PrimaryLink } from "@/components/index";
import Image from "next/image";
import Marquee from "react-fast-marquee";

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
        <div className="flex w-full flex-col items-start gap-6 lg:w-[40%]">
          <h2 className="font-text text-xl font-semibold text-tertiary-300">
            {props.title}
          </h2>
          <p className="max-w-2xl font-title text-4xl text-white sm:text-6xl">
            {props.caption}
          </p>
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
