import { Section, Container, PrimaryLink } from "@/components/index";
import Image from "next/image";

type TCallToActionImage = {
  id: string;
  title: string;
  caption: string;
  cta_title: string;
  cta_link: string;
  image: { src: string; alt: string };
};

const CallToActionImage = ({ props }: { props: TCallToActionImage }) => {
  return (
    <Section className="w-full">
      <Image
        src={props.image.src}
        fill={true}
        className="bg-primary-900 object-cover bg-blend-overlay brightness-[.25]"
        alt={props.image.alt}
      />
      <Container className="relative flex flex-col items-start justify-center gap-6 ">
        <h2 className="font-text text-xl font-semibold text-tertiary-300">
          {props.title}
        </h2>
        <p className=" w-full font-heading text-4xl font-bold uppercase text-white sm:text-6xl">
          {props.caption}
        </p>
        <PrimaryLink title={props.cta_title} href={props.cta_link} />
      </Container>
    </Section>
  );
};

export default CallToActionImage;
