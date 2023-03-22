import { Section, Container } from "@/components/index";
import Image from "next/image";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { motion } from "framer-motion";

type TMasonryGallery = {
  title: string;
  caption: string;
  images: {
    id: string;
    alt: string;
    src: string;
    caption: string;
  }[];
};

const MasonryGallery = ({ props }: { props: TMasonryGallery }) => {
  return (
    <Section className="bg-secondary-50">
      <Container className="flex flex-col gap-12">
        <div className="flex flex-col items-start gap-6">
          <h2 className="font-text text-xl font-semibold text-tertiary-300">
            {props.title}
          </h2>
          <p className="mb-6 w-full font-heading text-4xl font-bold text-primary-900 sm:text-6xl">
            {props.caption}
          </p>
        </div>
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 450: 2, 900: 3, 1280: 4 }}
        >
          <Masonry gutter="24px">
            {props.images.map((image) => (
              <motion.figure
                style={{
                  height: Math.floor(Math.random() * (500 - 200 + 1)) + 200,
                }}
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
                key={image.id}
                className="shadow-main group  relative inline-block w-full overflow-hidden rounded-sm outline outline-4 outline-offset-8 outline-transparent duration-300 hover:z-20 hover:scale-110 hover:shadow-xl hover:outline-tertiary-300 active:z-20 active:scale-110  active:border-tertiary-300 active:outline-tertiary-300"
              >
                <div className="absolute top-0 left-0 z-10 h-full w-full bg-primary-900/60 opacity-0 duration-300 group-hover:opacity-100 group-active:opacity-100"></div>
                <Image
                  alt={image.alt}
                  src={image.src}
                  fill={true}
                  className="rounded-sm object-cover duration-300 group-hover:scale-110  group-active:scale-110"
                />
                <figcaption className="absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-0 rotate-6 font-heading text-xl text-secondary-50 opacity-0 transition-all duration-300 group-hover:-translate-y-1/2 group-hover:rotate-0 group-hover:opacity-100 group-active:-translate-y-1/2 group-active:opacity-100">
                  {image.caption}
                </figcaption>
              </motion.figure>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </Container>
    </Section>
  );
};

export default MasonryGallery;
