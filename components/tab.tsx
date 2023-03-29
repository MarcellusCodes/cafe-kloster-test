import React, { useState } from "react";
import { Container, Section } from "@/components/index";
import Image from "next/image";
import * as Tabs from "@radix-ui/react-tabs";
import { AnimatePresence, motion } from "framer-motion";
import * as ScrollArea from "@radix-ui/react-scroll-area";

type TTab = {
  id: string;
  title: string;
  caption: string;
  tabs: {
    id: string;
    title: string;
    image: { src: string; alt: string };
    heading: string;
    text: string;
  }[];
  images: {
    id: string;
    src: string;
    alt: string;
  }[];
};

const imageColumns = [
  "col-start-1 col-end-7 row-start-1 row-end-8",
  "col-start-7 col-end-13 row-start-1 row-end-7",
  "col-start-1 col-end-7 row-start-8 row-end-13",
  "col-start-7 col-end-13 row-start-7 row-end-13",
];

const Tab = ({ props }: { props: TTab }) => {
  const [focused, setFocused] = useState<string | null>(
    props.tabs && props.tabs[0].id,
  );
  return (
    <Section className=" overflow-y-hidden bg-secondary-50">
      <Container className="flex h-full w-full flex-col items-start gap-12">
        <div className="relative flex w-full flex-col gap-6 lg:w-[60%] lg:pr-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -top-12 right-0 h-32 w-32 scale-50 fill-current text-gray-300 text-opacity-80 sm:scale-100 lg:top-0"
          >
            <path d="M88.1 14.7c-3.9 1.9-7.1 6.6-7.1 10.4 0 3.1 3.4 8.4 7.2 11.2 1.4 1.1 4.9 2.2 7.6 2.5C108.9 40 117 30.2 111 20.4c-4.1-6.5-15.5-9.3-22.9-5.7zm16.4 3.2c3.3 1.9 7.3 8.7 5.8 10.2-.5.5-2.5-.2-4.8-1.9-3.2-2.1-5.1-2.7-9.5-2.7-3 0-7 .4-8.7.8-4 1-4.4-.6-1.2-4.7 3.7-4.7 11.8-5.5 18.4-1.7zm0 10.8c4.1 2.6 4.3 2.9 2.8 4.5-4.7 5.2-17.4 3.8-21.7-2.4-2.2-3.1-2-3.8 1.2-3.9 1.5 0 3.6-.4 4.7-.9 3.1-1.4 8.2-.4 13 2.7zM30.9 16.9c-4.5 1.5-7.9 4.3-10.4 8.6-7 11.8 1.8 23.7 13.9 19.1 15-5.7 16.8-26.3 2.5-28.1-1.9-.2-4.6 0-6 .4zm9.6 3.5c1.8 1.3 1.6 1.6-3.8 4.2-6.1 2.8-8.2 5.1-10.7 11.7-1.8 4.7-3 5.1-4.8 1.4C17.7 30.4 26.1 19 35.1 19c1.9 0 4.4.6 5.4 1.4zm1.2 15.5c-2.8 4.2-7.9 7.1-12.6 7.1-3.4 0-3.7-.6-1.6-3.4.8-1.1 1.5-2.7 1.5-3.7 0-2.9 4.1-7 9.4-9.3l5.1-2.3.3 4c.2 2.9-.3 4.9-2.1 7.6zM58.8 32.9c-3 2.6-3.3 3.5-3.3 8.3 0 9.8 7.5 17.3 17.3 17.3 4.8 0 5.7-.3 8.3-3.3 5-5.5 3.8-14.2-2.8-20.4-6-5.7-14.4-6.5-19.5-1.9zm13.8 1c7.1 3.2 10.9 11 8.3 17.2l-1.3 3.2-1.8-2.3c-1-1.2-1.8-2.8-1.8-3.5 0-2.6-5.5-7.8-10.7-10.1-5.8-2.6-6.4-3.6-3-5.2 3.2-1.6 5.7-1.4 10.3.7zM68 42.5c1.4.7 3.9 3.9 5.7 7.4l3.2 6.1h-4.2C64.8 56 58 49.4 58 41.8V38l3.8 1.6c2 .9 4.8 2.2 6.2 2.9zM31.1 53.3c-6.3 3.2-8.1 10.6-4.6 18.1 2.7 5.7 7.6 8.9 14.3 9.4 6.8.5 10.3-1.7 12.2-7.4C56.8 62 41.4 48 31.1 53.3zM44.8 58c3.7 2.7 6.2 7.6 6.2 11.9 0 1.7-.2 3.1-.4 3.1-1.6 0-11.4-5.1-12.7-6.6-1.4-1.7-4.9-9.5-4.9-11.1 0-1.4 9 .6 11.8 2.7zm-11.1 6c2.5 4.9 3.5 5.9 9 8.5 3.5 1.6 6.3 3.3 6.3 3.6 0 1.5-6.2 3.1-9.5 2.5-8.6-1.7-15.1-12.8-11.4-19.8 1.3-2.5 2.1-1.8 5.6 5.2zM91.4 60.4c-3 3-3.4 4-3.4 8.5 0 6.6 1.8 10.8 6.3 14.8 9.8 8.6 21.7 2.3 20.5-10.8-.8-8.4-8.4-15.9-16.1-15.9-3.1 0-4.6.7-7.3 3.4zm14.3 1.4c5 3.2 8.1 11.4 6.3 16.8l-1.2 3.4-4.8-4.1c-5.3-4.5-6.6-7-7.3-14.1-.4-4.7-.4-4.8 2.2-4.1 1.4.3 3.6 1.3 4.8 2.1zm-9.2 3.9c.8 6.5 3.2 10.9 7.1 13.3 5.3 3.4 5.4 6 .1 6-4.4 0-9.3-3.5-11.6-8.4-2.5-5-2.6-8.6-.6-12.6 2.3-4.5 4.3-3.8 5 1.7zM69.5 80.4c-10.3 4.6-12.4 19.4-4 27.6 8.5 8.2 20.5.9 20.5-12.5 0-10.9-8.6-18.7-16.5-15.1zm4.5 2.1c0 .2-.9 2.7-2 5.5-2.5 6.4-2.5 8.9.1 15.1 2.4 5.6 2.1 6.7-1.8 5.3-8.5-3-9.9-19.6-1.9-24.5 2.9-1.8 5.6-2.5 5.6-1.4zm6.4 3.5c4.8 5.8 4.4 15-.9 20-1.4 1.3-2.6 2.2-2.8 1.9-1.6-2.5-3.1-8.4-3-12.4 0-4.9 2.1-12.5 3.5-12.5.3 0 1.8 1.4 3.2 3zM23.5 87.7C16.8 91.2 13 97.2 13 104.1c0 3.3.6 4.7 3.4 7.5s4.2 3.4 7.5 3.4c9.8 0 18.1-8.3 18.1-18.1 0-3.3-.6-4.7-3.4-7.5S34.5 86 30.9 86c-2.4.1-5.7.8-7.4 1.7zm10.4 1.4c1.7.6 3.1 1.5 3.1 2s-2.1 1.9-4.7 3c-6.1 2.6-8.9 5.3-10.4 9.8-2.2 6.8-4.1 7.8-5.8 3-2.6-7.6 4.7-17.5 14-18.8.3-.1 2 .4 3.8 1zm5.2 11.7c-1.8 6.6-11.1 13.3-16.3 11.7-1.5-.5-1.5-.9.4-5.3 2.6-6.1 5.7-9.2 11-11.2s6.4-.9 4.9 4.8z" />
          </svg>
          <h2 className="font-text text-xl font-semibold text-tertiary-300">
            {props.title}
          </h2>
          <p className="max-w-2xl font-title text-4xl text-primary-900 sm:text-6xl ">
            {props.caption}
          </p>
          <Tabs.Root
            className="relative mt-6 flex  w-full flex-col items-start justify-between gap-6 sm:max-h-[650px] sm:flex-row sm:gap-16"
            defaultValue={props.tabs[0].id}
          >
            <motion.div className="absolute top-0 left-0 h-[2px] w-full bg-gray-300 sm:h-full sm:w-[2px]" />
            <ScrollArea.Root className="w-full shrink-0 overflow-hidden sm:h-[650px] sm:w-auto">
              <ScrollArea.Viewport className="relative h-full w-full rounded">
                <Tabs.List
                  className="flex shrink-0 flex-row items-start gap-12 py-10 sm:flex-col sm:py-0 sm:pl-10 sm:pr-10"
                  aria-label="Wähle eine Kategorie aus"
                >
                  {props.tabs.map((tab) => (
                    <Tabs.Trigger
                      key={1}
                      onClick={() => {
                        setFocused(tab.id);
                      }}
                      className={`relative font-heading text-2xl  text-opacity-80 hover:text-tertiary-300 ${
                        focused === tab.id
                          ? "text-tertiary-300"
                          : "text-primary-900"
                      }`}
                      value={tab.title}
                    >
                      {focused === tab.id ? (
                        <motion.div
                          transition={{
                            duration: 0.6,
                            layout: {
                              duration: 0.6,
                              ease: [0.77, 0, 0.18, 1],
                            },
                          }}
                          className="rounded-xs z-100 absolute left-0 -top-8  rounded-full sm:-left-8 sm:top-0"
                          layoutId="tab-icon"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            data-name="Layer 1"
                            viewBox="0 0 24 24"
                            className="h-6 w-6 fill-current text-tertiary-300"
                          >
                            <path d="M13.025 3V1a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0Zm-3 1a1 1 0 0 0 1-1V1a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1Zm-4 0a1 1 0 0 0 1-1V1a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1ZM24 13.143A3.983 3.983 0 0 1 20 17h-2.475a6.875 6.875 0 0 1-5.742 3H8.216a6.877 6.877 0 0 1-5.808-3.088C.992 14.653-2.453 6.371 3 6h14a3.1 3.1 0 0 1 2.882 4C22.353 10 24 11.205 24 13.143Zm-2 0c.088-.927-1.25-1.224-2.458-1.143a16.82 16.82 0 0 1-.954 3H20a1.984 1.984 0 0 0 2-1.857ZM19 22H1a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2Z" />
                          </svg>
                        </motion.div>
                      ) : null}
                      {tab.title}
                    </Tabs.Trigger>
                  ))}
                </Tabs.List>
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
            <AnimatePresence mode="wait">
              {props.tabs.map((tab) =>
                focused === tab.id ? (
                  <motion.div
                    className="w-full"
                    key={tab.id}
                    initial={{ y: -25, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 25, opacity: 0 }}
                    transition={{ duration: 0.6, ease: [0.77, 0, 0.18, 1] }}
                  >
                    <Tabs.Content
                      forceMount={true}
                      className="flex flex-col gap-6"
                      value={tab.title}
                    >
                      <div className="shadow-main relative h-[300px]">
                        <Image
                          alt={tab.image.alt}
                          src={tab.image.src}
                          fill={true}
                          className="rounded-sm object-cover"
                        />
                      </div>
                      <h3 className="font-heading text-3xl font-bold text-primary-900 sm:text-5xl">
                        {tab.heading}
                      </h3>
                      <ScrollArea.Root className="h-[250px] overflow-hidden pr-4">
                        <ScrollArea.Viewport className="relative h-full w-full">
                          <p className="z-10 font-text text-xl text-primary-900">
                            {tab.text}
                          </p>
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
                    </Tabs.Content>
                  </motion.div>
                ) : null,
              )}
            </AnimatePresence>
          </Tabs.Root>
        </div>
      </Container>
      <div className="mt-12 grid h-[600px] w-full grid-cols-12 grid-rows-12 gap-3 lg:absolute lg:top-0 lg:right-0 lg:mt-0 lg:h-full lg:w-[40%] lg:gap-6">
        {props.images.map((image, index) => (
          <motion.div
            key={image.id}
            initial={{ y: index === 0 || 1 ? -50 : 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 60, damping: 15, mass: 1 }}
            viewport={{ margin: "0px 0px -300px 0px", once: true }}
            className={`shadow-main relative ${imageColumns[index]}`}
          >
            <Image
              alt={image.alt}
              src={image.src}
              fill={true}
              className="rounded-sm object-cover"
            />
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Tab;
