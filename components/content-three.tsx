import React from "react";
import { Section, Container, PrimaryLink } from "@/components/index";
import Image from "next/image";

const ContentThree = () => {
  return (
    <Section className="h-full bg-secondary-50">
      <Container className="flex h-full flex-col items-start gap-12 lg:flex-row">
        <div className="relative flex w-full flex-col items-start gap-6 lg:w-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 right-0 h-16 w-16 fill-current text-gray-300 text-opacity-80 sm:h-32 sm:w-32"
            viewBox="0 0 128 128"
          >
            <path d="M26.6 13.1c-6.4 1.5-10.3 4.5-12 9.2-2.4 6.7-2.7 11.1-1.6 18.3 3 19 15.9 31.5 31.9 31.3 9-.1 16.2-3.7 20.5-10.2 6.1-9.5 1.6-24.9-10.9-37.1-9.6-9.5-19.4-13.6-27.9-11.5zM40.8 18c7.8 4 17.4 14.1 21.5 22.7 5.4 11.7 3.5 20.6-5.4 25.1-4.3 2.1-4.7 2.1-9.6.7C34.7 62.7 19 40.1 19 25.6c0-5.9.8-7.1 6.7-9.2 5.7-2 8.4-1.7 15.1 1.6zM18.4 37.2C23 49.5 31.2 60.4 39.9 66.1c4.9 3.1 3.4 3.9-3 1.7-8.7-2.9-16-10.6-19.2-20-1.6-4.6-3.5-18.8-2.4-17.8.3.3 1.7 3.5 3.1 7.2z" />
            <path d="M28.4 21.1c.9 5.8 3.9 11.3 10.6 19.4 7.6 9.4 9.2 11.9 10.5 17.3.7 2.5 1.7 4.8 2.2 4.9 1.6.6 2.4-7.2 1.3-12.4-1.4-6-2.7-8.1-11-16.8-3.6-3.8-7.9-9.1-9.4-11.8-3.5-5.9-5.1-6.1-4.2-.6zM48 44.5c4 6.4 1.6 5.6-3.3-1.1-4.3-5.9-4.5-6.4-1.8-4.5 1.6 1.2 3.9 3.7 5.1 5.6zM59.4 45.1c.3 1.7.6 4.2.6 5.5 0 1.5.6 2.4 1.5 2.4 1.8 0 2-4.5.5-8.4-1.4-3.8-3.4-3.3-2.6.5zM59 57c0 .5.5 1 1 1 .6 0 1-.5 1-1 0-.6-.4-1-1-1-.5 0-1 .4-1 1zM88.6 27.7c-1.1 1.1-.6 2.3.9 2.3.8 0 1.5-.4 1.5-.9 0-1.3-1.6-2.2-2.4-1.4zM98 31.5c0 .8.5 1.5 1 1.5.6 0 1-.7 1-1.5s-.4-1.5-1-1.5c-.5 0-1 .7-1 1.5zM78.2 31.9c.2.7.7 1.2 1.1 1.2 1.2-.1.9-1.5-.3-2-.7-.2-1.1.2-.8.8zM103 38c0 .5.7 1 1.5 1s1.5-.5 1.5-1c0-.6-.7-1-1.5-1s-1.5.4-1.5 1zM91.7 38.6c-.8.8.1 2.4 1.4 2.4.5 0 .9-.7.9-1.5 0-1.5-1.2-2-2.3-.9zM83.2 45.1c.2.6.8 1 1.3 1s1.1-.4 1.3-1c.2-.6-.4-1.1-1.3-1.1s-1.5.5-1.3 1.1zM109.6 45.7c-1.1 1.1-.6 2.3.9 2.3.8 0 1.5-.4 1.5-.9 0-1.3-1.6-2.2-2.4-1.4zM91.7 46.6c-.8.8.1 2.4 1.4 2.4.5 0 .9-.7.9-1.5 0-1.5-1.2-2-2.3-.9zM100 52.5c0 .8.5 1.5 1 1.5.6 0 1-.7 1-1.5s-.4-1.5-1-1.5c-.5 0-1 .7-1 1.5zM93.5 57c-9.4 2.2-23.9 14.9-28.9 25.2-8.7 17.8-.4 32.3 19 33.6 6.2.4 8 .1 12.7-2.1 13.5-6.2 21.8-22.1 20.4-39-.3-3.9-1.4-8.2-2.4-10-3.4-5.7-13.5-9.5-20.8-7.7zm11.3 4c7.9 3.6 8 10.3.2 25.9-7 13.9-15.9 22.4-25.5 24.5-4.2.9-11.2-2.9-13.6-7.4-3.8-7.1-1.9-16 5.7-26.7C78.8 67.2 90.4 59 97.5 59c1.7 0 4.9.9 7.3 2zm9 19.8c-.9 16-11.2 29.5-24.3 31.7l-4 .7 5.5-4c3-2.2 7-5.8 8.8-8.1 4.5-5.7 11.9-19.7 12.7-24.4 1.2-6.1 1.8-4.2 1.3 4.1z" />
            <path d="M98.2 64.2C97 66 92.2 71.3 87.4 76 77.4 85.9 74 91.8 74 99.7c0 4.8 1.5 8.1 2.4 5.1C78.6 97.4 81 93.4 88.2 85c9.6-11.1 11-13.1 12.8-18.3 1.7-5.4-.1-6.9-2.8-2.5zM91 78c-1.7 2.2-3.6 4.2-4.1 4.6-.6.3-2.8 2.8-4.9 5.6-4 5-4.9 5.5-2.9 1.5 1-2 13.9-15.7 14.7-15.7.2 0-1.1 1.8-2.8 4zM93 95.5c0 .8.5 1.5 1 1.5.6 0 1-.7 1-1.5s-.4-1.5-1-1.5c-.5 0-1 .7-1 1.5zM88.1 100.6c-1.3 1.4-3.7 3.2-5.4 4-2.1 1.1-2.6 1.9-1.8 2.7.8.8 1.8.7 3.7-.4 3.5-1.8 8.4-6.4 8.4-7.8 0-1.9-2.4-1.2-4.9 1.5zM40.2 78.1c.2.6.8 1 1.3 1s1.1-.4 1.3-1c.2-.6-.4-1.1-1.3-1.1s-1.5.5-1.3 1.1zM47 83c0 .5.5 1 1 1 .6 0 1-.5 1-1 0-.6-.4-1-1-1-.5 0-1 .4-1 1zM30.7 85.6c-.8.8.1 2.4 1.4 2.4.5 0 .9-.7.9-1.5 0-1.5-1.2-2-2.3-.9zM52 87c0 .5.7 1 1.5 1s1.5-.5 1.5-1c0-.6-.7-1-1.5-1s-1.5.4-1.5 1zM37.7 89.6c-.8.8.1 2.4 1.4 2.4.5 0 .9-.7.9-1.5 0-1.5-1.2-2-2.3-.9zM44.6 94.7c-1.1 1.1-.6 2.3.9 2.3.8 0 1.5-.4 1.5-.9 0-1.3-1.6-2.2-2.4-1.4zM32 100c0 .5.7 1 1.5 1s1.5-.5 1.5-1c0-.6-.7-1-1.5-1s-1.5.4-1.5 1zM52 102c0 .5.5 1 1 1 .6 0 1-.5 1-1 0-.6-.4-1-1-1-.5 0-1 .4-1 1z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            className="absolute bottom-10 right-1/4 h-16 w-16 -translate-y-1/2 rotate-12 fill-current text-gray-300 text-opacity-80 sm:h-32 sm:w-32"
          >
            <path d="M59.6 2.2c-2.2 3.2-2 8.9.6 14.3 2 4 2.1 4.9.9 8.1-1 2.6-1 3.9-.2 4.7 1.8 1.8 4.3-1.5 4.8-6.6.4-3.6.1-5.3-1.7-8.2-2.1-3.5-2.2-4.1-.8-11.9.5-2.8-1.8-3.1-3.6-.4zM46.6 15.2c-2.2 3.1-2 9.7.4 13.3 2.3 3.4 2.5 6.3.8 10-.9 2-.9 2.8.1 3.8 1 .9 1.6.7 3.2-1.2 2.6-3.1 2.5-10-.1-14.3-2.1-3.5-2.6-8.3-1-9.3 1.5-.9 1.2-4.5-.4-4.5-.8 0-2.2 1-3 2.2zM71.4 16.5c-1.7 4.2-1.2 8 1.8 13.2 1.9 3.1 1.9 3.8.8 7.3-2 6 1.3 8.1 3.9 2.4 1.7-3.7 1.3-7.5-1-11.8-1.4-2.6-1.9-5-1.6-7 .3-1.7.7-4 .9-5.1.2-1.2-.3-2.1-1.5-2.3-1.2-.2-2.2.7-3.3 3.3zM38.8 48c-10.2 1.3-17.3 3.1-21.5 5.4l-3.8 2.2.1 8c.2 8.9 2.2 15.4 7.8 24.7 3.8 6.2 3.9 5.9-3.8 7.2-6.7 1.1-14.6 4.6-16.2 7-2.4 3.7-1 7.8 4.2 12.4 20.9 18.4 96.4 16.7 111-2.4 4.3-5.7 3-10.2-3.9-13.7l-2.8-1.4L115 95c12.6-5.9 16.4-17.5 9.4-28.3-2.6-3.9-10.7-8.7-15-8.7-1.1 0-2.9-1-4-2.1-4.7-5.3-17.2-7.9-41.4-8.4-10.2-.2-21.5 0-25.2.5zm49.1 5.5c8.4 1.6 14.1 3.8 14.1 5.4 0 .4-1 1.2-2.2 1.8-1.7.7-2.9.6-4.5-.4-4-2.6-18.2-4.4-35.4-4.4-17.6 0-27.9 1.2-33.8 3.8-4.1 1.8-6 1.8-8-.3-1.3-1.2-1-1.6 2.2-2.9 12.8-5.3 47.2-6.8 67.6-3zm-6.6 7.6c4 .6 7.6 1.5 8.1 1.9 1.5 1.5-10.5 2.5-28.9 2.5-19 0-32.3-1.1-30.9-2.5 2.6-2.6 38.4-3.9 51.7-1.9zm35.4 4c3.7 2.3 7.2 8.5 7.3 12.9 0 3.6-3.3 8.5-7.7 11.4-4.3 2.8-14 6.2-20.4 7.2l-4.4.7 2.3-2.6c1.3-1.4 4.5-3 7-3.7 7.4-1.8 14.1-5.1 16.2-7.8 4.7-5.9 1.2-13.9-7.1-16.4-2.8-.8-3.9-1.7-3.9-3.1 0-1.7.5-1.9 3.5-1.4 2 .3 5.2 1.6 7.2 2.8zM101 70.4c-1.7 8.4-6.7 17.4-13.1 23.9-16.3 16.3-40.5 16.3-56.5-.1-6.2-6.3-12-17.3-13.1-24.7-.6-4.5-.5-4.8 1.3-4.1 10.6 4.2 47.5 6 65.2 3.2 5.6-.9 11.6-2.2 13.4-2.9 1.8-.8 3.5-1.3 3.6-1.1.2.1-.1 2.7-.8 5.8zm13.2 3.9c2.6 4.1-.2 7.7-8.1 10.8-7 2.6-7.4 2.5-5.3-1.9 1.1-2 2.5-5.5 3.2-7.7.7-2.2 1.5-4.3 1.7-4.7.5-1 7.5 1.9 8.5 3.5zm-81.3 26.9 4.2 3.3-2.8.9c-3.8 1.2-6.3 3.5-6.3 5.9 0 1.7-.5 1.9-4.7 1.2-6.8-1-16.9-4.3-18.3-5.9-.9-1.2-.4-1.8 2.8-3.5 3.4-1.8 15.1-4.8 19.3-5 .8-.1 3.4 1.4 5.8 3.1zm77.8 1.4c2 1.1 3.8 2.4 4 3 .5 1.5-5.9 4.3-13.9 5.9-8 1.7-10.1 1.9-9.4.6 1.2-1.8-.8-4.4-4.8-6.2-4.6-2-4.4-2.2 5.9-4.3 8.3-1.7 13.1-1.5 18.2 1zm-57.5 7.5c5.9 1.1 7.9 1.1 16-.5 8.2-1.5 9.9-1.6 13.8-.4 4.2 1.3 4.4 1.5 2.4 2.6-4.2 2.2-16.7 3.4-30.4 2.9-18.5-.7-26.8-3.2-18.7-5.6 3.6-1.1 7.1-.9 16.9 1zM25 117.2c15.5 2.7 65.5 1.5 78.5-1.8 1.4-.3 1.3-.1-.6 1-4.4 2.5-18 5.5-30.8 6.7-19 1.8-43.2-1-55.1-6.5-1.9-.9-2.6-1.4-1.5-1.1 1.1.2 5.4 1 9.5 1.7z" />
            <path d="M24.2 74.7c.4 2.1 3.3 2.5 3.3.3 0-.8-.8-1.6-1.8-1.8-1.4-.3-1.8.1-1.5 1.5zM27 82.1C27 84.5 38.1 96 40.4 96c3.5 0 2.3-2.4-4.4-9-3.9-3.8-7.5-7-8-7-.6 0-1 .9-1 2.1z" />
          </svg>
          <h2 className="font-text text-xl font-semibold text-tertiary-300">
            Wir legen Wert auf Qualität
          </h2>
          <p className=" w-full font-heading text-4xl font-bold text-primary-900 sm:text-6xl">
            Unser Versprechen
          </p>
          <p className="z-10 font-text text-xl text-primary-900 text-opacity-80">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt,
            voluptatum? Ut veniam eligendi quia. Officiis corrupti nihil
            accusantium, quae, ex nesciunt quam quos omnis quisquam sint optio
            distinctio nam excepturi sed commodi, totam cum error iste explicabo
            odio sit voluptatibus. Obcaecati, minima? Voluptate laudantium
            mollitia sed repudiandae nobis ab placeat provident voluptas
            perferendis eum et porro fuga modi minima fugiat delectus
            reprehenderit rerum, amet totam quia hic eos. Quod vitae, sapiente
            iste illum saepe minus voluptatibus quaerat placeat porro dolor
            asperiores aliquam laudantium, nostrum nisi? Velit aliquid hic quis
            voluptatem explicabo voluptates eligendi omnis ab aspernatur
            blanditiis, praesentium ut alias.
          </p>
          <ul className="z-10 mb-3 flex flex-col items-start gap-3">
            <li className="flex flex-row items-center gap-2 font-heading text-lg text-primary-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 507.506 507.506"
                xmlSpace="preserve"
                className="h-5 w-5 shrink-0 fill-current font-bold text-tertiary-300"
              >
                <path d="M163.865 436.934a54.228 54.228 0 0 1-38.4-15.915L9.369 304.966c-12.492-12.496-12.492-32.752 0-45.248 12.496-12.492 32.752-12.492 45.248 0l109.248 109.248L452.889 79.942c12.496-12.492 32.752-12.492 45.248 0 12.492 12.496 12.492 32.752 0 45.248L202.265 421.019a54.228 54.228 0 0 1-38.4 15.915z" />
              </svg>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
              adipisci.
            </li>
            <li className="flex flex-row items-center gap-2 font-heading text-lg text-primary-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 507.506 507.506"
                xmlSpace="preserve"
                className="h-5 w-5 shrink-0 fill-current font-bold text-tertiary-300"
              >
                <path d="M163.865 436.934a54.228 54.228 0 0 1-38.4-15.915L9.369 304.966c-12.492-12.496-12.492-32.752 0-45.248 12.496-12.492 32.752-12.492 45.248 0l109.248 109.248L452.889 79.942c12.496-12.492 32.752-12.492 45.248 0 12.492 12.496 12.492 32.752 0 45.248L202.265 421.019a54.228 54.228 0 0 1-38.4 15.915z" />
              </svg>
              Lorem, ipsum dolor sit amet consectetur adipisicing.
            </li>
            <li className="flex flex-row items-center gap-2 font-heading text-lg text-primary-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 507.506 507.506"
                xmlSpace="preserve"
                className="h-5 w-5 shrink-0 fill-current font-bold text-tertiary-300"
              >
                <path d="M163.865 436.934a54.228 54.228 0 0 1-38.4-15.915L9.369 304.966c-12.492-12.496-12.492-32.752 0-45.248 12.496-12.492 32.752-12.492 45.248 0l109.248 109.248L452.889 79.942c12.496-12.492 32.752-12.492 45.248 0 12.492 12.496 12.492 32.752 0 45.248L202.265 421.019a54.228 54.228 0 0 1-38.4 15.915z" />
              </svg>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit
            </li>
          </ul>
          <PrimaryLink href="/" title="Speisekarte" />
        </div>
        <div className="group relative grid h-[700px] w-full grid-cols-12 grid-rows-12 gap-6 lg:w-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            className="absolute top-0 right-0  h-32 w-32 -rotate-12  scale-50 fill-current text-gray-300 sm:scale-100"
          >
            <path d="M9.5 2.3C7.9 4.7 8 5.1 9.9 9.5c1.1 2.6 3.5 6.5 5.2 8.6l3.2 4-1.7 7.2C13.9 41 13 49.7 13 64c0 14.3.9 23 3.6 34.6l1.6 7.2-3.9 5.3c-5.5 7.4-6.8 11.5-4.7 14.7 1.3 2.1 2.1 2.3 5.1 1.9 2-.4 5.4-1.8 7.6-3.3l4-2.6 7.1 2.1c18.2 5.4 43 5.4 61.2 0l7.1-2.1 3.9 2.6c10 6.6 16.6 3.1 12.3-6.4-1-2.3-3.3-6-5-8.2l-3.2-3.9 1.7-7.2C114.1 87 115 78.3 115 64c0-14.3-.9-23-3.6-34.7l-1.7-7.2 3.2-4c1.7-2.1 4.1-6 5.2-8.6 1.9-4.4 2-4.8.4-7.2-1.5-2.2-2.2-2.4-5.2-2-2 .4-5.4 1.8-7.6 3.3l-4 2.6-7.1-2.1c-18.7-5.5-42.5-5.5-61.2 0l-7.1 2.1-4-2.6C20.1 2.1 16.7.7 14.7.3c-3-.4-3.7-.2-5.2 2zm7.8 3.4c1.8.9 4.4 2.5 5.8 3.6 2.7 1.9 2.7 1.9 8-.1C40.1 6 49.8 4.6 64 4.6S87.9 6 96.9 9.2c5.3 2 5.3 2 8 .1 3.7-2.8 9.2-5.5 9.8-4.9 1.2 1.2-1 5.9-5.3 11.1l-4.5 5.6 2.1 8.2c5 19.5 5 49.9-.1 69.5l-2.1 8.4 2.5 2.6c3.8 4.1 7.7 10.3 7.7 12.3 0 1.6-.4 1.7-2.7.8-1.6-.5-4.4-2.1-6.4-3.5l-3.7-2.5-5.8 1.9c-10.6 3.6-17.7 4.6-32.4 4.6s-21.8-1-32.4-4.6l-5.8-1.9-3.7 2.5c-2 1.4-4.8 3-6.3 3.5-2.4.9-2.8.8-2.8-.8 0-2 3.9-8.2 7.7-12.2l2.5-2.7-2.1-8.3c-3.9-16-5-34.8-3.1-52.4.6-5 2-12.8 3.1-17.4l2.1-8.3-2.5-2.7C16.8 14 13 7.9 13 5.9c0-2.3.3-2.3 4.3-.2z" />
            <path d="M39.5 12.5c-3.3.8-6.5 1.4-7.1 1.4-1.3.1-3.4 4.5-3.4 7.1 0 2.8 2.8 2.5 4.2-.4 1.3-2.9 6.9-4.5 18.7-5.5 5.8-.5 7.6-1 7.6-2.1 0-2.1-11.9-2.3-20-.5zM64.4 12.1c-.8 1.4 1.1 3.3 2.5 2.5.6-.4 1.1-1.4 1.1-2.2 0-1.6-2.6-1.9-3.6-.3zM72.2 35.1c-4 1.2-12.2 9.3-12.2 12 0 3.1 3.3 2.2 5.7-1.6 2.3-3.5 5.7-5.7 10.6-6.9 3.4-.8 3.4-.3-.3 5.9-2.1 3.6-3 6.3-3 9.5s.9 5.9 3 9.5c3.9 6.5 3.9 10.7 0 16.5-3.9 5.8-4.1 10.7-.5 11.6 3.7.9 10.7-1.3 14.8-4.7 8.5-7 12.3-24.1 7.8-35.9-4.9-13.1-14.7-19.1-25.9-15.9zm15.2 7c1.5 1.2 3.9 4.4 5.3 7.2 2.3 4.4 2.7 6.5 2.8 13.7 0 7.6-.3 9.1-3 14-3.3 6.1-8.3 10-12.7 10h-2.9l1.8-3.1c4.2-7.3 4.6-8.5 4.5-12.6 0-3.1-.9-5.8-3.1-9.2-4-6.1-4-10.2-.1-16 1.7-2.4 3-4.8 3-5.3 0-1.4 1.6-.9 4.4 1.3z" />
            <path d="M40.1 48c-8.3 2-12.5 8.2-11.8 17.7 1.5 21.3 29.6 34.4 41 19.1 2.8-3.7 3.3-11.4 1.3-17.6C66.5 54.9 51.4 45.4 40.1 48zm13.4 6.4c5.1 2.3 9.3 6.4 12 11.5 1.8 3.5 2.8 9.5 2.1 11.9-.6 1.8-.9 1.8-5.9.6-5.9-1.6-9.7-5.1-9.7-9.2C52 63 46.6 58 38.5 56.5l-4-.7 2.4-1.9c3.3-2.7 10.3-2.5 16.6.5zm-13.7 6.9c3.9 1 5 1.8 6.4 4.7 1 1.9 2 4.8 2.3 6.4.9 4.2 5.6 8.3 10.9 9.7 2.5.6 4.6 1.5 4.6 2 0 2.9-10.7 3.9-16.4 1.5-5.1-2.1-10.7-7.6-13.2-13.1-3.1-6.6-3.2-14.7-.2-12.9.5.3 3 1.1 5.6 1.7zM28.4 110.5c-.9 2.1.4 3 8.6 5.6 8.1 2.6 33.5 3.8 44.7 2 10.1-1.5 18.5-4.8 18.1-6.9-.4-2-1.2-1.9-10.3.9-6.2 2-9.2 2.2-25.5 2.2-18.3 0-23.8-.7-33.2-4.8-1.2-.5-2-.2-2.4 1z" />
          </svg>
          <div className="z-10 col-start-3 col-end-10 row-start-3 row-end-11 rounded-sm outline outline-8 outline-offset-8 outline-transparent  duration-300  ease-out hover:z-20 hover:scale-[1.1!important] hover:outline-tertiary-300 active:z-20 active:scale-[1.1!important] active:outline-tertiary-300 sm:col-start-4 ">
            <div className="relative h-full w-full rounded-sm ">
              <Image
                alt="test"
                src="/content_one-3.jpg"
                fill={true}
                className="rounded-sm object-cover"
              />
            </div>
          </div>
          <div className="col-start-1 col-end-5 row-start-1 row-end-5 rounded-sm outline outline-4 outline-offset-8 outline-transparent  duration-300  ease-out hover:z-20 hover:scale-[1.1!important] hover:outline-tertiary-300 active:z-20 active:scale-[1.1!important] active:outline-tertiary-300 sm:col-start-2 ">
            <div className="relative h-full w-full">
              <Image
                alt="test"
                src="/content_one-1.jpg"
                fill={true}
                className="rounded-sm object-cover"
              />
            </div>
          </div>
          <div className="col-start-1 col-end-4 row-start-7 row-end-10 rounded-sm outline outline-4 outline-offset-8  outline-transparent  duration-300 ease-out hover:z-20 hover:scale-[1.1!important] hover:outline-tertiary-300 active:z-20 active:scale-[1.1!important] active:outline-tertiary-300">
            <div className="relative h-full w-full">
              <Image
                alt="test"
                src="/content_one-2.jpg"
                fill={true}
                className="rounded-sm object-cover"
              />
            </div>
          </div>
          <div className="col-start-9 col-end-13 row-start-4 row-end-7 rounded-sm outline outline-4 outline-offset-8 outline-transparent duration-300  ease-out  hover:z-20 hover:scale-[1.1!important] hover:outline-tertiary-300 active:z-20 active:scale-[1.1!important] active:outline-tertiary-300 sm:col-start-10 sm:col-end-12 ">
            <div className="relative h-full w-full">
              <Image
                alt="test"
                src="/content_one-5.jpg"
                fill={true}
                className="rounded-sm object-cover"
              />
            </div>
          </div>
          <div className="z-10 col-start-7 col-end-13 row-start-8 row-end-13 rounded-sm outline outline-4 outline-offset-8 outline-transparent  duration-300  ease-out hover:z-20 hover:scale-[1.1!important] hover:outline-tertiary-300 active:z-20 active:scale-[1.1!important] active:outline-tertiary-300 sm:col-start-8 ">
            <div className="relative h-full w-full">
              <Image
                alt="test"
                src="/content_one-5.jpg"
                fill={true}
                className="rounded-sm object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default ContentThree;
