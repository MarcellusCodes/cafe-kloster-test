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
                key={image.id}
                className="group relative inline-block w-full rounded-sm border-2 border-transparent hover:border-tertiary-300"
              >
                <div className="absolute top-0 left-0 z-10 h-full w-full bg-primary-900/60 opacity-0 duration-300 group-hover:opacity-100"></div>
                <Image
                  alt={image.alt}
                  src={image.src}
                  fill={true}
                  className="rounded-sm object-cover"
                />
                <figcaption className="absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-0 font-heading text-xl text-secondary-50 opacity-0 transition-all duration-300 group-hover:-translate-y-1/2 group-hover:opacity-100">
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
