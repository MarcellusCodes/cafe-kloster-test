import { Section, Container, PrimaryLink } from "@/components/index";
import {
  cubicBezier,
  useScroll,
  useTransform,
  motion,
  useSpring,
} from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

type TCallToActionImage = {
  id: string;
  title: string;
  caption: string;
  cta_title: string;
  cta_link: string;
  image: { src: string; alt: string };
};

const CallToActionImage = ({ props }: { props: TCallToActionImage }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const transformYImage = useTransform(scrollYProgress, [1, 0], ["0%", "25%"], {
    ease: cubicBezier(0.22, 0.61, 0.36, 1),
  });

  return (
    <Section className="w-full">
      <motion.div
        ref={containerRef}
        style={{ backgroundPositionY: transformYImage }}
        className="absolute top-0 left-0 h-full w-full overflow-hidden bg-opacity-10 bg-[url('/cta-bg-2.jpg')] py-10 px-6 bg-blend-overlay brightness-50"
      ></motion.div>
      {/* <Image
        src={props.image.src}
        fill={true}
        className=" bg-primary-900 object-cover bg-blend-overlay brightness-[.25]"
        alt={props.image.alt}
      /> */}
      <Container className="relative flex flex-col items-start justify-center gap-6 ">
        <h2 className="font-text text-xl font-semibold text-tertiary-300">
          {props.title}
        </h2>
        <p className="w-full font-heading text-4xl font-bold uppercase text-white sm:text-6xl">
          {props.caption}
        </p>
        <PrimaryLink title={props.cta_title} href={props.cta_link} />
      </Container>
    </Section>
  );
};

export default CallToActionImage;
