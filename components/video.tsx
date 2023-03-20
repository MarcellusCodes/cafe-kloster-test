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
    offset: ["end center", "center end"],
  });

  const scale = useTransform(scrollYProgress, [1, 0], [1, 1.5], {
    ease: easeInOut,
  });

  const clipPath = useTransform(
    scrollYProgress,
    [1, 0],
    ["circle(2.5% at 50% 50%)", "circle(70.7% at 50% 50%)"],
    {
      ease: easeInOut,
    },
  );

  return (
    <Section
      className={`overflow-hidden ${
        props.theme === "light" ? "bg-secondary-50" : "bg-primary-900"
      }`}
    >
      <div ref={containerRef} className="relative">
        <Container className="flex h-full flex-col gap-12 lg:gap-0">
          <motion.video
            transition={{
              duration: 0.3,
              ease: cubicBezier(0.87, 0, 0.13, 1),
            }}
            style={{ scale, clipPath }}
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
