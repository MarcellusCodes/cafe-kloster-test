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
          <div
            key={image.id}
            className={`shadow-main relative ${imageColumns[index]}`}
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
    </Section>
  );
};

export default Tab;
