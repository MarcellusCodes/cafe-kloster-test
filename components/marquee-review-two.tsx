import React, { useEffect, useLayoutEffect, useState } from "react";
import { Container, Section } from "@/components/index";
import Image from "next/image";
import * as Tabs from "@radix-ui/react-tabs";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import Balancer from "react-wrap-balancer";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const reviews = [
  {
    id: "test",
    name: "Joshua",
    image: {
      src: "/content_one-1.jpg",
      alt: "test",
    },
    text: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    rating: 4,
  },
  {
    id: "test",
    name: "Joshua",
    image: {
      src: "/content_one-5.jpg",
      alt: "test",
    },
    text: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    rating: 4,
  },
  {
    id: "test",
    name: "Tester",
    image: {
      src: "/content_one-2.jpg",
      alt: "test",
    },
    text: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    rating: 5,
  },
  {
    id: "test",
    name: "Joshua",
    image: {
      src: "/content_one-3.jpg",
      alt: "test",
    },
    text: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    rating: 4,
  },
  {
    id: "test",
    name: "Joshua",
    image: {
      src: "/content_one-4.jpg",
      alt: "test",
    },
    text: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    rating: 2,
  },
  {
    id: "test",
    name: "Tester",
    image: {
      src: "/content_one-2.jpg",
      alt: "test",
    },
    text: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    rating: 5,
  },
  {
    id: "test",
    name: "Joshua",
    image: {
      src: "/content_one-3.jpg",
      alt: "test",
    },
    text: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    rating: 4,
  },
  {
    id: "test",
    name: "Joshua",
    image: {
      src: "/content_one-4.jpg",
      alt: "test",
    },
    text: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    rating: 2,
  },
  {
    id: "test",
    name: "Tester",
    image: {
      src: "/content_one-2.jpg",
      alt: "test",
    },
    text: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    rating: 5,
  },
  {
    id: "test",
    name: "Joshua",
    image: {
      src: "/content_one-3.jpg",
      alt: "test",
    },
    text: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    rating: 4,
  },
  {
    id: "test",
    name: "Joshua",
    image: {
      src: "/content_one-4.jpg",
      alt: "test",
    },
    text: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    rating: 2,
  },
  {
    id: "test",
    name: "Tester",
    image: {
      src: "/content_one-2.jpg",
      alt: "test",
    },
    text: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    rating: 5,
  },
  {
    id: "test",
    name: "Joshua",
    image: {
      src: "/content_one-3.jpg",
      alt: "test",
    },
    text: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    rating: 4,
  },
  {
    id: "test",
    name: "Joshua",
    image: {
      src: "/content_one-4.jpg",
      alt: "test",
    },
    text: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    rating: 2,
  },
];

const MasonryReview = ({ props }) => {
  return (
    <Section className="overflow-hidden bg-primary-900">
      <Container className="relative flex w-full flex-col justify-center gap-6">
        <h2 className="relative z-20 text-left font-text text-xl font-semibold text-tertiary-300">
          Rezensionen
        </h2>
        <motion.p className="mb-6 w-full text-left font-heading text-4xl font-bold uppercase text-white sm:text-6xl">
          Was unsere Kunden sagen
        </motion.p>
        <div className="relative">
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 450: 2, 900: 3, 1280: 4 }}
          >
            <Masonry gutter="24px">
              {reviews.map((review) => (
                <motion.article
                  initial={{
                    y: -25,
                    clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
                  }}
                  whileInView={{
                    y: 0,
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                  }}
                  transition={{
                    stiffness: 60,
                    damping: 15,
                    mass: 1,
                    type: "spring",
                  }}
                  viewport={{ once: true, margin: "0px 0px -300px 0px" }}
                  key={review.id}
                  className="mr-4 grid w-full grid-cols-1 gap-2 rounded-sm border-2 border-gray-300 border-opacity-10 bg-gray-100 bg-opacity-[0.02] p-6  hover:border-tertiary-300 active:border-tertiary-300"
                >
                  <div className="flex flex-row items-center gap-2 ">
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
                </motion.article>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </Container>
    </Section>
  );
};

export default MasonryReview;
