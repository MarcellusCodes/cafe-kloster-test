import { Section, Container } from "@/components/index";
import { motion, useAnimationControls, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

type TBox = {
  id: string;
  alt: string;
  src: string;
  title: string;
  text: string;
};

const Box = ({ props, index }: { props: TBox; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -400px 0px" });
  const TBorderControl = useAnimationControls();
  const RBorderControl = useAnimationControls();
  const BBorderControl = useAnimationControls();
  const LBorderControl = useAnimationControls();
  const ImageControl = useAnimationControls();

  async function borderSequence() {
    TBorderControl.start({ scaleX: 1, transformOrigin: "left" });
    RBorderControl.start({ scaleY: 1, transformOrigin: "top" });
    BBorderControl.start({ scaleX: 1, transformOrigin: "right" });
    await LBorderControl.start({ scaleY: 1, transformOrigin: "bottom" });
    return await ImageControl.start({
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
    });
  }

  useEffect(() => {
    if (isInView) {
      borderSequence();
    }
  }, [isInView]);

  return (
    <div
      ref={ref}
      key={props.id}
      className={`flex flex-col-reverse items-center lg:mb-0 lg:gap-12  ${
        index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      <div className="relative mt-6 grid h-[400px] w-full place-items-center rounded-sm border-gray-300 border-opacity-10 bg-primary-900  md:h-[700px] lg:mt-0 lg:w-1/2">
        <Image
          src="/content-2-pattern.svg"
          fill={true}
          alt="background illustration"
          className="object-cover opacity-80"
        />
        <motion.div
          initial={{ scaleY: 0 }}
          animate={LBorderControl}
          transition={{
            ease: [0.87, 0, 0.13, 1],
            duration: 1,
          }}
          className="absolute top-0 left-0 z-20 h-full border-l-2 border-gray-300 border-opacity-10 "
        ></motion.div>
        <motion.div
          initial={{ scaleY: 0 }}
          animate={RBorderControl}
          transition={{
            ease: [0.87, 0, 0.13, 1],
            duration: 1,
          }}
          className="absolute top-0 right-0 z-20 h-full border-r-2 border-gray-300 border-opacity-10"
        ></motion.div>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={TBorderControl}
          transition={{ ease: [0.87, 0, 0.13, 1], duration: 1 }}
          className="absolute top-0 left-0 z-20 w-full border-t-2 border-gray-300 border-opacity-10"
        ></motion.div>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={BBorderControl}
          transition={{
            ease: [0.87, 0, 0.13, 1],
            duration: 1,
          }}
          className="absolute bottom-0 left-0 z-20 w-full border-b-2 border-gray-300 border-opacity-10"
        ></motion.div>
        <motion.div
          initial={{
            clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
          }}
          animate={ImageControl}
          transition={{ ease: [0.87, 0, 0.13, 1], duration: 0.6 }}
          className="relative h-[80%] w-[80%]"
        >
          <Image
            alt={props.alt}
            src={props.src}
            fill={true}
            className="rounded-xs object-cover"
          />
        </motion.div>
      </div>
      <div className="relative flex h-full w-full flex-col items-start gap-6 p-4 lg:w-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -top-32 left-0 h-32 w-32 fill-current text-gray-300 text-opacity-10"
          viewBox="0 0 128 128"
        >
          <path d="M26.6 13.1c-6.4 1.5-10.3 4.5-12 9.2-2.4 6.7-2.7 11.1-1.6 18.3 3 19 15.9 31.5 31.9 31.3 9-.1 16.2-3.7 20.5-10.2 6.1-9.5 1.6-24.9-10.9-37.1-9.6-9.5-19.4-13.6-27.9-11.5zM40.8 18c7.8 4 17.4 14.1 21.5 22.7 5.4 11.7 3.5 20.6-5.4 25.1-4.3 2.1-4.7 2.1-9.6.7C34.7 62.7 19 40.1 19 25.6c0-5.9.8-7.1 6.7-9.2 5.7-2 8.4-1.7 15.1 1.6zM18.4 37.2C23 49.5 31.2 60.4 39.9 66.1c4.9 3.1 3.4 3.9-3 1.7-8.7-2.9-16-10.6-19.2-20-1.6-4.6-3.5-18.8-2.4-17.8.3.3 1.7 3.5 3.1 7.2z" />
          <path d="M28.4 21.1c.9 5.8 3.9 11.3 10.6 19.4 7.6 9.4 9.2 11.9 10.5 17.3.7 2.5 1.7 4.8 2.2 4.9 1.6.6 2.4-7.2 1.3-12.4-1.4-6-2.7-8.1-11-16.8-3.6-3.8-7.9-9.1-9.4-11.8-3.5-5.9-5.1-6.1-4.2-.6zM48 44.5c4 6.4 1.6 5.6-3.3-1.1-4.3-5.9-4.5-6.4-1.8-4.5 1.6 1.2 3.9 3.7 5.1 5.6zM59.4 45.1c.3 1.7.6 4.2.6 5.5 0 1.5.6 2.4 1.5 2.4 1.8 0 2-4.5.5-8.4-1.4-3.8-3.4-3.3-2.6.5zM59 57c0 .5.5 1 1 1 .6 0 1-.5 1-1 0-.6-.4-1-1-1-.5 0-1 .4-1 1zM88.6 27.7c-1.1 1.1-.6 2.3.9 2.3.8 0 1.5-.4 1.5-.9 0-1.3-1.6-2.2-2.4-1.4zM98 31.5c0 .8.5 1.5 1 1.5.6 0 1-.7 1-1.5s-.4-1.5-1-1.5c-.5 0-1 .7-1 1.5zM78.2 31.9c.2.7.7 1.2 1.1 1.2 1.2-.1.9-1.5-.3-2-.7-.2-1.1.2-.8.8zM103 38c0 .5.7 1 1.5 1s1.5-.5 1.5-1c0-.6-.7-1-1.5-1s-1.5.4-1.5 1zM91.7 38.6c-.8.8.1 2.4 1.4 2.4.5 0 .9-.7.9-1.5 0-1.5-1.2-2-2.3-.9zM83.2 45.1c.2.6.8 1 1.3 1s1.1-.4 1.3-1c.2-.6-.4-1.1-1.3-1.1s-1.5.5-1.3 1.1zM109.6 45.7c-1.1 1.1-.6 2.3.9 2.3.8 0 1.5-.4 1.5-.9 0-1.3-1.6-2.2-2.4-1.4zM91.7 46.6c-.8.8.1 2.4 1.4 2.4.5 0 .9-.7.9-1.5 0-1.5-1.2-2-2.3-.9zM100 52.5c0 .8.5 1.5 1 1.5.6 0 1-.7 1-1.5s-.4-1.5-1-1.5c-.5 0-1 .7-1 1.5zM93.5 57c-9.4 2.2-23.9 14.9-28.9 25.2-8.7 17.8-.4 32.3 19 33.6 6.2.4 8 .1 12.7-2.1 13.5-6.2 21.8-22.1 20.4-39-.3-3.9-1.4-8.2-2.4-10-3.4-5.7-13.5-9.5-20.8-7.7zm11.3 4c7.9 3.6 8 10.3.2 25.9-7 13.9-15.9 22.4-25.5 24.5-4.2.9-11.2-2.9-13.6-7.4-3.8-7.1-1.9-16 5.7-26.7C78.8 67.2 90.4 59 97.5 59c1.7 0 4.9.9 7.3 2zm9 19.8c-.9 16-11.2 29.5-24.3 31.7l-4 .7 5.5-4c3-2.2 7-5.8 8.8-8.1 4.5-5.7 11.9-19.7 12.7-24.4 1.2-6.1 1.8-4.2 1.3 4.1z" />
          <path d="M98.2 64.2C97 66 92.2 71.3 87.4 76 77.4 85.9 74 91.8 74 99.7c0 4.8 1.5 8.1 2.4 5.1C78.6 97.4 81 93.4 88.2 85c9.6-11.1 11-13.1 12.8-18.3 1.7-5.4-.1-6.9-2.8-2.5zM91 78c-1.7 2.2-3.6 4.2-4.1 4.6-.6.3-2.8 2.8-4.9 5.6-4 5-4.9 5.5-2.9 1.5 1-2 13.9-15.7 14.7-15.7.2 0-1.1 1.8-2.8 4zM93 95.5c0 .8.5 1.5 1 1.5.6 0 1-.7 1-1.5s-.4-1.5-1-1.5c-.5 0-1 .7-1 1.5zM88.1 100.6c-1.3 1.4-3.7 3.2-5.4 4-2.1 1.1-2.6 1.9-1.8 2.7.8.8 1.8.7 3.7-.4 3.5-1.8 8.4-6.4 8.4-7.8 0-1.9-2.4-1.2-4.9 1.5zM40.2 78.1c.2.6.8 1 1.3 1s1.1-.4 1.3-1c.2-.6-.4-1.1-1.3-1.1s-1.5.5-1.3 1.1zM47 83c0 .5.5 1 1 1 .6 0 1-.5 1-1 0-.6-.4-1-1-1-.5 0-1 .4-1 1zM30.7 85.6c-.8.8.1 2.4 1.4 2.4.5 0 .9-.7.9-1.5 0-1.5-1.2-2-2.3-.9zM52 87c0 .5.7 1 1.5 1s1.5-.5 1.5-1c0-.6-.7-1-1.5-1s-1.5.4-1.5 1zM37.7 89.6c-.8.8.1 2.4 1.4 2.4.5 0 .9-.7.9-1.5 0-1.5-1.2-2-2.3-.9zM44.6 94.7c-1.1 1.1-.6 2.3.9 2.3.8 0 1.5-.4 1.5-.9 0-1.3-1.6-2.2-2.4-1.4zM32 100c0 .5.7 1 1.5 1s1.5-.5 1.5-1c0-.6-.7-1-1.5-1s-1.5.4-1.5 1zM52 102c0 .5.5 1 1 1 .6 0 1-.5 1-1 0-.6-.4-1-1-1-.5 0-1 .4-1 1z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 128 128"
          className="absolute -bottom-12 right-1/4 h-32 w-32 -translate-y-1/2 rotate-12 fill-current text-gray-300 text-opacity-10 lg:-bottom-52"
        >
          <path d="M59.6 2.2c-2.2 3.2-2 8.9.6 14.3 2 4 2.1 4.9.9 8.1-1 2.6-1 3.9-.2 4.7 1.8 1.8 4.3-1.5 4.8-6.6.4-3.6.1-5.3-1.7-8.2-2.1-3.5-2.2-4.1-.8-11.9.5-2.8-1.8-3.1-3.6-.4zM46.6 15.2c-2.2 3.1-2 9.7.4 13.3 2.3 3.4 2.5 6.3.8 10-.9 2-.9 2.8.1 3.8 1 .9 1.6.7 3.2-1.2 2.6-3.1 2.5-10-.1-14.3-2.1-3.5-2.6-8.3-1-9.3 1.5-.9 1.2-4.5-.4-4.5-.8 0-2.2 1-3 2.2zM71.4 16.5c-1.7 4.2-1.2 8 1.8 13.2 1.9 3.1 1.9 3.8.8 7.3-2 6 1.3 8.1 3.9 2.4 1.7-3.7 1.3-7.5-1-11.8-1.4-2.6-1.9-5-1.6-7 .3-1.7.7-4 .9-5.1.2-1.2-.3-2.1-1.5-2.3-1.2-.2-2.2.7-3.3 3.3zM38.8 48c-10.2 1.3-17.3 3.1-21.5 5.4l-3.8 2.2.1 8c.2 8.9 2.2 15.4 7.8 24.7 3.8 6.2 3.9 5.9-3.8 7.2-6.7 1.1-14.6 4.6-16.2 7-2.4 3.7-1 7.8 4.2 12.4 20.9 18.4 96.4 16.7 111-2.4 4.3-5.7 3-10.2-3.9-13.7l-2.8-1.4L115 95c12.6-5.9 16.4-17.5 9.4-28.3-2.6-3.9-10.7-8.7-15-8.7-1.1 0-2.9-1-4-2.1-4.7-5.3-17.2-7.9-41.4-8.4-10.2-.2-21.5 0-25.2.5zm49.1 5.5c8.4 1.6 14.1 3.8 14.1 5.4 0 .4-1 1.2-2.2 1.8-1.7.7-2.9.6-4.5-.4-4-2.6-18.2-4.4-35.4-4.4-17.6 0-27.9 1.2-33.8 3.8-4.1 1.8-6 1.8-8-.3-1.3-1.2-1-1.6 2.2-2.9 12.8-5.3 47.2-6.8 67.6-3zm-6.6 7.6c4 .6 7.6 1.5 8.1 1.9 1.5 1.5-10.5 2.5-28.9 2.5-19 0-32.3-1.1-30.9-2.5 2.6-2.6 38.4-3.9 51.7-1.9zm35.4 4c3.7 2.3 7.2 8.5 7.3 12.9 0 3.6-3.3 8.5-7.7 11.4-4.3 2.8-14 6.2-20.4 7.2l-4.4.7 2.3-2.6c1.3-1.4 4.5-3 7-3.7 7.4-1.8 14.1-5.1 16.2-7.8 4.7-5.9 1.2-13.9-7.1-16.4-2.8-.8-3.9-1.7-3.9-3.1 0-1.7.5-1.9 3.5-1.4 2 .3 5.2 1.6 7.2 2.8zM101 70.4c-1.7 8.4-6.7 17.4-13.1 23.9-16.3 16.3-40.5 16.3-56.5-.1-6.2-6.3-12-17.3-13.1-24.7-.6-4.5-.5-4.8 1.3-4.1 10.6 4.2 47.5 6 65.2 3.2 5.6-.9 11.6-2.2 13.4-2.9 1.8-.8 3.5-1.3 3.6-1.1.2.1-.1 2.7-.8 5.8zm13.2 3.9c2.6 4.1-.2 7.7-8.1 10.8-7 2.6-7.4 2.5-5.3-1.9 1.1-2 2.5-5.5 3.2-7.7.7-2.2 1.5-4.3 1.7-4.7.5-1 7.5 1.9 8.5 3.5zm-81.3 26.9 4.2 3.3-2.8.9c-3.8 1.2-6.3 3.5-6.3 5.9 0 1.7-.5 1.9-4.7 1.2-6.8-1-16.9-4.3-18.3-5.9-.9-1.2-.4-1.8 2.8-3.5 3.4-1.8 15.1-4.8 19.3-5 .8-.1 3.4 1.4 5.8 3.1zm77.8 1.4c2 1.1 3.8 2.4 4 3 .5 1.5-5.9 4.3-13.9 5.9-8 1.7-10.1 1.9-9.4.6 1.2-1.8-.8-4.4-4.8-6.2-4.6-2-4.4-2.2 5.9-4.3 8.3-1.7 13.1-1.5 18.2 1zm-57.5 7.5c5.9 1.1 7.9 1.1 16-.5 8.2-1.5 9.9-1.6 13.8-.4 4.2 1.3 4.4 1.5 2.4 2.6-4.2 2.2-16.7 3.4-30.4 2.9-18.5-.7-26.8-3.2-18.7-5.6 3.6-1.1 7.1-.9 16.9 1zM25 117.2c15.5 2.7 65.5 1.5 78.5-1.8 1.4-.3 1.3-.1-.6 1-4.4 2.5-18 5.5-30.8 6.7-19 1.8-43.2-1-55.1-6.5-1.9-.9-2.6-1.4-1.5-1.1 1.1.2 5.4 1 9.5 1.7z" />
          <path d="M24.2 74.7c.4 2.1 3.3 2.5 3.3.3 0-.8-.8-1.6-1.8-1.8-1.4-.3-1.8.1-1.5 1.5zM27 82.1C27 84.5 38.1 96 40.4 96c3.5 0 2.3-2.4-4.4-9-3.9-3.8-7.5-7-8-7-.6 0-1 .9-1 2.1z" />
        </svg>
        <h3 className="font-heading text-3xl font-bold text-white sm:text-5xl">
          {props.title}
        </h3>
        <p className="z-10 max-w-xl  font-text text-xl text-white text-opacity-80">
          {props.text}
        </p>
      </div>
    </div>
  );
};

type TContentTwo = {
  title: string;
  caption: string;
  boxes: {
    id: string;
    alt: string;
    src: string;
    title: string;
    text: string;
    index: number;
  }[];
};

const ContentTwo = ({ props }: { props: TContentTwo }) => {
  return (
    <Section className="h-full bg-primary-900">
      <Container className="flex h-full flex-col gap-12 lg:gap-0">
        <div className="flex flex-col items-start gap-6 lg:mb-12">
          <h2 className="font-text text-xl font-semibold text-tertiary-300">
            {props.title}
          </h2>
          <p className=" w-full font-heading text-4xl font-bold text-white sm:text-6xl">
            {props.caption}
          </p>
        </div>
        {props.boxes.map((box, index) => (
          <Box key={box.id} props={box} index={index} />
        ))}
      </Container>
    </Section>
  );
};

export default ContentTwo;
