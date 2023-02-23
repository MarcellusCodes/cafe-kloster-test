import React from "react";
import { Section, Container } from "@/components/index";
import Image from "next/image";

const contentOneImgGrid = [
  "lg:col-start-9 col-start-7 col-end-13 row-start-2 row-end-12 z-20",
  "lg:col-start-7 col-start-5 col-end-9 lg:col-end-10 row-start-4 row-end-10 z-30",
  "col-start-1 col-end-5 lg:col-start-4 lg:col-end-7 row-start-1 row-end-6",
  "lg:col-start-2 lg:col-end-7 col-start-1 col-end-5 row-start-6 row-end-10",
  "lg:col-start-4 lg:col-end-9 col-start-1 col-end-7 row-start-10 row-end-13",
  " lg:col-start-7 lg:col-end-12 col-start-5 col-end-12 row-start-1 row-end-4 z-10",
];

type TContentOne = {
  id: string;
  title: string;
  caption: string;
  images: {
    id: string;
    alt: string;
    src: string;
  }[];
  content_title: string;
  content_text: string;
  content_caption: string;
};

const ContentOne = ({ props }: { props: TContentOne }) => {
  return (
    <Section className="h-full bg-secondary-50">
      <Container className="flex h-full flex-col items-start justify-evenly gap-12 lg:flex-row">
        <div className="relative flex w-full flex-col gap-6 lg:w-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            className="absolute top-0 right-0  h-32 w-32 -rotate-12 scale-75 fill-current text-gray-300 sm:scale-100"
          >
            <path d="M9.5 2.3C7.9 4.7 8 5.1 9.9 9.5c1.1 2.6 3.5 6.5 5.2 8.6l3.2 4-1.7 7.2C13.9 41 13 49.7 13 64c0 14.3.9 23 3.6 34.6l1.6 7.2-3.9 5.3c-5.5 7.4-6.8 11.5-4.7 14.7 1.3 2.1 2.1 2.3 5.1 1.9 2-.4 5.4-1.8 7.6-3.3l4-2.6 7.1 2.1c18.2 5.4 43 5.4 61.2 0l7.1-2.1 3.9 2.6c10 6.6 16.6 3.1 12.3-6.4-1-2.3-3.3-6-5-8.2l-3.2-3.9 1.7-7.2C114.1 87 115 78.3 115 64c0-14.3-.9-23-3.6-34.7l-1.7-7.2 3.2-4c1.7-2.1 4.1-6 5.2-8.6 1.9-4.4 2-4.8.4-7.2-1.5-2.2-2.2-2.4-5.2-2-2 .4-5.4 1.8-7.6 3.3l-4 2.6-7.1-2.1c-18.7-5.5-42.5-5.5-61.2 0l-7.1 2.1-4-2.6C20.1 2.1 16.7.7 14.7.3c-3-.4-3.7-.2-5.2 2zm7.8 3.4c1.8.9 4.4 2.5 5.8 3.6 2.7 1.9 2.7 1.9 8-.1C40.1 6 49.8 4.6 64 4.6S87.9 6 96.9 9.2c5.3 2 5.3 2 8 .1 3.7-2.8 9.2-5.5 9.8-4.9 1.2 1.2-1 5.9-5.3 11.1l-4.5 5.6 2.1 8.2c5 19.5 5 49.9-.1 69.5l-2.1 8.4 2.5 2.6c3.8 4.1 7.7 10.3 7.7 12.3 0 1.6-.4 1.7-2.7.8-1.6-.5-4.4-2.1-6.4-3.5l-3.7-2.5-5.8 1.9c-10.6 3.6-17.7 4.6-32.4 4.6s-21.8-1-32.4-4.6l-5.8-1.9-3.7 2.5c-2 1.4-4.8 3-6.3 3.5-2.4.9-2.8.8-2.8-.8 0-2 3.9-8.2 7.7-12.2l2.5-2.7-2.1-8.3c-3.9-16-5-34.8-3.1-52.4.6-5 2-12.8 3.1-17.4l2.1-8.3-2.5-2.7C16.8 14 13 7.9 13 5.9c0-2.3.3-2.3 4.3-.2z" />
            <path d="M39.5 12.5c-3.3.8-6.5 1.4-7.1 1.4-1.3.1-3.4 4.5-3.4 7.1 0 2.8 2.8 2.5 4.2-.4 1.3-2.9 6.9-4.5 18.7-5.5 5.8-.5 7.6-1 7.6-2.1 0-2.1-11.9-2.3-20-.5zM64.4 12.1c-.8 1.4 1.1 3.3 2.5 2.5.6-.4 1.1-1.4 1.1-2.2 0-1.6-2.6-1.9-3.6-.3zM72.2 35.1c-4 1.2-12.2 9.3-12.2 12 0 3.1 3.3 2.2 5.7-1.6 2.3-3.5 5.7-5.7 10.6-6.9 3.4-.8 3.4-.3-.3 5.9-2.1 3.6-3 6.3-3 9.5s.9 5.9 3 9.5c3.9 6.5 3.9 10.7 0 16.5-3.9 5.8-4.1 10.7-.5 11.6 3.7.9 10.7-1.3 14.8-4.7 8.5-7 12.3-24.1 7.8-35.9-4.9-13.1-14.7-19.1-25.9-15.9zm15.2 7c1.5 1.2 3.9 4.4 5.3 7.2 2.3 4.4 2.7 6.5 2.8 13.7 0 7.6-.3 9.1-3 14-3.3 6.1-8.3 10-12.7 10h-2.9l1.8-3.1c4.2-7.3 4.6-8.5 4.5-12.6 0-3.1-.9-5.8-3.1-9.2-4-6.1-4-10.2-.1-16 1.7-2.4 3-4.8 3-5.3 0-1.4 1.6-.9 4.4 1.3z" />
            <path d="M40.1 48c-8.3 2-12.5 8.2-11.8 17.7 1.5 21.3 29.6 34.4 41 19.1 2.8-3.7 3.3-11.4 1.3-17.6C66.5 54.9 51.4 45.4 40.1 48zm13.4 6.4c5.1 2.3 9.3 6.4 12 11.5 1.8 3.5 2.8 9.5 2.1 11.9-.6 1.8-.9 1.8-5.9.6-5.9-1.6-9.7-5.1-9.7-9.2C52 63 46.6 58 38.5 56.5l-4-.7 2.4-1.9c3.3-2.7 10.3-2.5 16.6.5zm-13.7 6.9c3.9 1 5 1.8 6.4 4.7 1 1.9 2 4.8 2.3 6.4.9 4.2 5.6 8.3 10.9 9.7 2.5.6 4.6 1.5 4.6 2 0 2.9-10.7 3.9-16.4 1.5-5.1-2.1-10.7-7.6-13.2-13.1-3.1-6.6-3.2-14.7-.2-12.9.5.3 3 1.1 5.6 1.7zM28.4 110.5c-.9 2.1.4 3 8.6 5.6 8.1 2.6 33.5 3.8 44.7 2 10.1-1.5 18.5-4.8 18.1-6.9-.4-2-1.2-1.9-10.3.9-6.2 2-9.2 2.2-25.5 2.2-18.3 0-23.8-.7-33.2-4.8-1.2-.5-2-.2-2.4 1z" />
          </svg>
          <h2 className="font-text text-xl font-semibold text-tertiary-300">
            {props.title}
          </h2>
          <p className="max-w-2xl font-title text-4xl text-primary-900 sm:text-6xl ">
            {props.caption}
          </p>

          <div className=" group relative mt-12 grid h-[600px] w-full grid-cols-12 grid-rows-12 gap-1">
            {props.images.map((image, index) => (
              <div
                key={image.id}
                className={`relative ${contentOneImgGrid[index]}  rounded-sm outline outline-4  outline-offset-8  outline-transparent duration-300 ease-out hover:z-50 hover:scale-[1.1!important] hover:outline-tertiary-300 active:z-50 active:scale-[1.1!important] active:outline-tertiary-300`}
              >
                <Image
                  alt={image.alt}
                  src={image.src}
                  fill={true}
                  className="rounded-sm object-cover"
                />
              </div>
            ))}
          </div>
          <div className="mt-6 hidden h-[3px] w-full self-end bg-tertiary-300 bg-opacity-80 lg:block" />
        </div>
        <div className="h-[3px] w-full self-center bg-tertiary-300 bg-opacity-80 lg:h-[25rem] lg:w-[3px]" />
        <div className="relative flex h-full w-full flex-col items-start justify-end gap-6 lg:w-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            className="absolute top-0 right-0 z-0 h-16 w-16 rotate-12 fill-current text-gray-300 text-opacity-80 sm:-top-12 sm:h-32 sm:w-32"
          >
            <path d="M44.4 1.9c-1.7 1-4.1 3.2-5.3 4.7-2.1 2.7-2.2 3.7-2 15.6.2 7 0 13-.4 13.4-1.3 1.4-.7 7.2 1.1 9.3.9 1.2 2.8 2.7 4.1 3.4 1.4.7 2.8 2.5 3.2 4.1.5 1.6 2.2 4.6 3.9 6.8 5.1 6.4 4.4 7.3-10.8 13.3C17 80.9 16.1 82.4 16 107.6c0 15.3.2 17.3 1.8 18.7 1.6 1.5 4.7 1.7 22.6 1.7 19.2 0 20.7-.1 20.4-1.8-.3-1.5-1.9-1.7-13.1-2l-12.7-.3v-8.1c0-7.2.3-8.6 3.2-13.6 2.9-5 3.2-5.3 4-3.3.7 1.9 1.4 2.2 5.5 1.9 4.6-.3 4.8-.4 5.1-3.6l.3-3.2h11C74.8 94 75 94 75 96.3c0 1.3.5 2.8 1.2 3.5 1.8 1.8 8.5 1.5 9.6-.4.8-1.4 1.5-.9 4.1 2.9 2.9 4.2 3.1 5.2 3.1 13.1v8.5l-12.7.3c-11.2.3-12.8.5-13.1 2-.3 1.7 1.2 1.8 20.6 1.8 19 0 21-.2 22.5-1.8 1.4-1.6 1.7-4.4 1.7-18.8-.1-24.9-1.1-26.5-22.2-34.9-15.2-6-15.9-6.9-10.8-13.3 1.7-2.2 3.4-5.2 3.9-6.8.4-1.6 1.8-3.4 3.2-4.1 5.7-2.9 7.5-8.9 4.2-13.9-.9-1.4-1.7-4.2-1.7-6.2-.1-2.7-.6-3.8-1.8-4-1.4-.3-1.8.4-1.8 3.2 0 5.6-4 6-5.9.5-1.2-3.4-3.6-3.8-5.1-.8-2 3.6-7 4.9-19.4 4.9C40.3 32 40 31.8 40 21.4c0-4.1.6-9 1.4-10.8C43.8 4.7 45.9 4 60 4c6.9 0 13 .4 13.5.8.6.4 1.7 2 2.5 3.7 1 2 2.6 3.2 4.4 3.5 2.8.5 3.9 1.6 5 5.4.5 1.5.9 1.6 2.1.6.8-.7 1.5-1.9 1.5-2.7 0-2.2-5.6-7.3-7.9-7.3-1.2 0-2.1-.6-2.1-1.5s-1.1-2.7-2.5-4C74.2.1 73.6 0 60.8 0 49.5 0 47 .3 44.4 1.9zM80 42.6c0 6.8-.4 8.6-2.3 11.5-7.1 10.6-20.3 10.6-27.4 0-1.9-2.8-2.3-4.7-2.3-11.2V35h10.8c8.6 0 11.3-.4 13.7-1.8 2.8-1.7 3.2-1.8 5.2-.3 2 1.4 2.2 2.5 2.3 9.7zM44 40c0 4.8-.1 5-2 4-2.3-1.2-2.7-5.9-.8-7.8C43.4 34 44 34.9 44 40zm42.8-3.8c1.9 1.9 1.5 6.6-.8 7.8-1.9 1-2 .8-2-4 0-5.1.6-6 2.8-3.8zM72 66.9c0 .8.7 2.2 1.6 3.2 1.5 1.6 1.3 1.9-1.8 3.5-4.5 2.4-11.7 2.3-15.7-.2-2.8-1.8-3-2.2-1.7-3.4.9-.7 1.6-2 1.6-2.9 0-1.4 1.3-1.6 8-1.6 6.3 0 8 .3 8 1.4zM49 84.5c0 10.4-.2 12.5-1.5 12.5-1.2 0-1.5-2-1.5-11.9 0-11.2.2-12.2 2.8-13 .1-.1.2 5.5.2 12.4zm33.8.8C83.1 96.5 83 97 81 97c-1.9 0-2-.6-2-12.1 0-10.9.2-12 1.8-11.7 1.5.3 1.7 1.8 2 12.1zm-42.1 5.6c-2.1 2.5-9.7 15.8-9.7 17 0 .7-2.2 1.1-5.5 1.1H20v-9.5c0-14 1.8-16.7 14.1-21.4l7.4-2.9.3 7c.2 4.9-.1 7.5-1.1 8.7zM75 83v7H53v-6.6c0-6.4.1-6.6 2.3-5.9 4.4 1.5 14.1 1.6 16.7.1 1.4-.8 2.6-1.4 2.8-1.5.1-.1.2 3 .2 6.9zm20-4.5c11.1 4.4 13 7.3 13 21v9.5h-5.5c-3.9 0-5.5-.4-5.5-1.3 0-.7-2.5-5.1-5.5-9.7-5.3-8.1-5.5-8.6-5.5-15.2 0-7.9-.1-7.9 9-4.3zM31 118v6H20v-12h11v6zm77 0v6H97v-12h11v6z" />
            <path d="M60.1 101.4c-5.6 3.1-6.7 10.7-2.3 15.8 2.2 2.3 3.7 3.1 6.2 3.1 4.3 0 9-4.9 9-9.4 0-4.1-2.3-8.3-5.5-9.7-3.2-1.5-4.4-1.5-7.4.2zm8.9 9.1c0 1.7-.3 3.5-.7 3.8-.7.8-3.3-5.8-3.3-8.7 0-1.8.1-1.8 2-.1 1.2 1.1 2 3.1 2 5zm-6 4.9c0 1.8-.1 1.8-2 .1-1.9-1.8-2.8-7.4-1.3-8.8.7-.8 3.3 5.8 3.3 8.7z" />
          </svg>
          <h3 className="font-heading text-3xl font-bold text-primary-900 sm:text-5xl">
            {props.content_title}
          </h3>
          <p className="z-10 font-text text-xl text-primary-900">
            {props.content_text}
          </p>
          <p className="z-10 font-heading text-lg text-primary-900 text-opacity-60">
            {props.content_caption}
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            className="absolute bottom-0 right-0 z-0  h-16 w-16 fill-current text-gray-300 text-opacity-80 sm:-bottom-32 sm:left-0 sm:h-32 sm:w-32 "
          >
            <path d="M18 2c0 2 4.5 5 7.5 5 2.6 0 1.6-2.9-1.7-5C19.6-.5 18-.5 18 2zM70.2 2.1C65.5 4.4 60 10.4 60 13.2c0 3 2.5 2 5.8-2.1 3-3.7 11.4-8.2 12.8-6.8.4.3-.8 3-2.5 6-4.2 7.3-4.2 12.6-.1 19 3.9 6.3 3.9 10.8 0 16.6-1.8 2.7-3 5.7-3 7.7 0 2.7.4 3.3 2.8 3.8 8.6 1.9 19.3-6.5 22.8-18C105.5 16.3 88-6.7 70.2 2.1zM89 9.8c7.6 8.1 9.1 22.8 3.3 33.4-3.1 5.7-8.4 9.8-12.6 9.8h-2.8l3-5.3c4.5-7.9 4.6-13.2.1-19.8-3.9-5.8-3.9-9.7.3-16.5C82 8.5 83.9 6 84.4 6c.5 0 2.6 1.7 4.6 3.8zM104.3 2c-3.4 2.1-4.4 5-1.8 5 3 0 7.5-3 7.5-5 0-2.5-1.6-2.5-5.7 0z" />
            <path d="M38.7 14.4c-8.1 3-11.2 8.1-10.4 17.2 1.1 13.9 13.4 25.5 27.1 25.6 12.8.1 19.6-10.6 15.2-24C66.2 20 49.8 10.3 38.7 14.4zm13.7 5C57 21.3 62.8 26.6 65 31c3.7 7.2 3.8 16 .2 14.1-.9-.4-3.3-1.1-5.3-1.5-4.5-.8-6.5-3-7.7-8.4-1.7-7.6-5.3-11-12.9-12.7-1.8-.3-3.3-1.1-3.3-1.5 0-3 10.6-4 16.4-1.6zm-7.2 10.3c1 .9 2.1 3.3 2.4 5.4 1.2 7.5 5.5 11.6 13.7 13.4 3.4.7 3.5 1.8.2 3.3-4.1 1.9-10.2 1.4-15.3-1.2-5.8-3-9.5-6.8-12.1-12.6-1.9-4.2-2.8-11-1.6-12.2.9-.9 10.7 2.1 12.7 3.9zM11.2 27.7c.5 2.6 9.1 2.6 9.6 0 .3-1.4-.4-1.7-4.8-1.7-4.4 0-5.1.3-4.8 1.7zM107.2 27.7c.3 1.4 1.3 1.8 4.8 1.8s4.5-.4 4.8-1.8c.3-1.4-.4-1.7-4.8-1.7-4.4 0-5.1.3-4.8 1.7zM21.3 50c-3.5 2.1-4.4 5-1.7 5s7.4-3.3 7.4-5.2c0-2.3-1.7-2.3-5.7.2zM101 49.8c0 1.9 4.7 5.2 7.4 5.2s1.8-2.9-1.6-5c-4.1-2.5-5.8-2.5-5.8-.2zM2.6 56.1c-1.4 1.1-2.6 3-2.6 4.1 0 1.1 2.4 7.3 5.2 13.7 4.6 10.1 6.3 12.6 13 19.7l7.8 8.1v11c0 7.1.4 11.3 1.2 12.1.8.8 5.6 1.2 15 1.2 16.4 0 15.8.5 15.8-13 0-8.3-.2-9.3-2.4-11.3-1.8-1.7-2.4-3.6-2.8-7.9-.6-7.9-3.9-12.5-11.9-16.8-3.5-1.8-8-4.5-9.9-6-4.5-3.5-7.1-4.3-10.4-3-2.7 1-2.8.8-5.7-5.5-3.9-8.7-7.2-10.4-12.3-6.4zm9.5 10.6c3.1 6.8 5.5 10.3 10.7 15.5C26.4 86 30 89 30.7 89c3.2 0 2-2.8-4.1-8.9-3.6-3.6-6.6-7-6.6-7.4 0-1.9 5.7-.3 9.9 2.7 2.5 1.8 6.9 4.5 9.7 5.9 6 3 9.4 8.6 9.4 15.5v4.2H31.5l-9-9.3c-8.2-8.4-9.4-10.3-13.8-20.1-3.6-8.4-4.5-11.2-3.6-12.2.6-.8 1.6-1.4 2.1-1.4s2.7 3.9 4.9 8.7zM53 113.5v8.5H30v-17h23v8.5z" />
            <path d="M45.3 112.6c-.3.9 0 2 .8 2.5 1.7 1.1 2.1 1.1 3.8 0 1.9-1.2.6-4.1-1.9-4.1-1.1 0-2.3.7-2.7 1.6zM117.7 55.1c-1 .6-3 3.7-4.4 6.9l-2.5 5.8-4.7-.2c-3.8-.1-5.4.5-8.6 3-2.2 1.7-6.9 4.6-10.4 6.4-8 4.3-11.3 8.9-11.9 16.8-.4 4.3-1 6.2-2.8 7.9-2.2 2-2.4 3-2.4 11.3 0 13.5-.6 13 15.8 13 9.4 0 14.2-.4 15-1.2.8-.8 1.2-5 1.2-12.1v-11l7.8-8.1c6.7-7.1 8.4-9.6 13-19.7 2.8-6.4 5.2-12.6 5.2-13.7 0-2.3-4.4-6.2-6.9-6.2-.9 0-2.4.5-3.4 1.1zm1.6 16.4c-4.3 9.9-5.6 11.8-13.7 20.2l-8.9 9.3H79v-4.2c0-6.9 3.4-12.5 9.4-15.5 2.8-1.4 7.2-4.1 9.7-5.9 4.1-3 9.9-4.6 9.9-2.7 0 .3-3 3.7-6.6 7.4-6 6.3-7.2 8.9-4.1 8.9.7 0 4.3-3 7.9-6.8 5.1-5 7.6-8.7 10.3-14.7 4-8.6 5.3-10.1 7.3-8.1 1 1 .4 3.3-3.5 12.1zm-21.3 42v8.5H75v-17h23v8.5z" />
            <path d="M77.3 112.6c-.3.9 0 2 .8 2.5 1.7 1.1 2.1 1.1 3.8 0 1.9-1.2.6-4.1-1.9-4.1-1.1 0-2.3.7-2.7 1.6z" />
          </svg>
        </div>
      </Container>
    </Section>
  );
};

export default ContentOne;
