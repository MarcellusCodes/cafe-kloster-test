import { Section, Container } from "@/components/index";
import {
  circOut,
  cubicBezier,
  easeInOut,
  motion,
  useAnimationControls,
  useInView,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

type TVideo = {
  id: string;
  src: string;
  theme: "light" | "dark";
};

const Video = ({ props }: { props: TVideo }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["center center", "center end"],
  });

  const scale = useTransform(scrollYProgress, [1, 0], [1, 1.5], {
    ease: easeInOut,
  });

  const y = useTransform(scrollYProgress, [1, 0], ["-25%", "0%"], {
    ease: easeInOut,
  });

  const opacity = useTransform(scrollYProgress, [1, 0.5], [0, 1]);

  const clipPath = useTransform(
    scrollYProgress,
    [1, 0],
    ["inset(25% 25% 25% 25%)", "inset(0 0 0 0)"],
    {
      ease: easeInOut,
    },
  );

  const springConfig = { stiffness: 60, damping: 15, mass: 1 };

  const clipPathSpring = useSpring(clipPath, springConfig);
  const clipPathScale = useSpring(scale, springConfig);
  const ySpring = useSpring(y, springConfig);
  const opacitySpring = useSpring(opacity, springConfig);

  return (
    <Section
      className={`overflow-hidden  ${
        props.theme === "light" ? "bg-secondary-50" : "bg-primary-900"
      }`}
    >
      <div className={` ${props.theme === "light" ? "" : "hidden"}`}>
        <Image
          src="/video-pattern-light.svg"
          fill={true}
          alt="background illustration"
          className="object-cover"
        />
      </div>
      <div className={` ${props.theme === "light" ? "hidden" : ""}`}>
        <Image
          src="/video-pattern-dark.svg"
          fill={true}
          alt="background illustration"
          className="object-cover"
        />
      </div>
      <div ref={containerRef} className="relative">
        <Container className="flex h-full flex-col gap-12 lg:gap-0">
          <motion.video
            transition={{
              duration: 0.3,
              ease: cubicBezier(0.87, 0, 0.13, 1),
            }}
            style={{ scale: clipPathScale, clipPath, opacity: opacitySpring }}
            playsInline
            autoPlay
            muted
            loop
            className="inline-block aspect-video w-full rounded-md"
          >
            <source src={props.src} />
          </motion.video>
        </Container>
      </div>
    </Section>
  );
};

export default Video;
