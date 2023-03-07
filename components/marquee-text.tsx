import Marquee from "react-fast-marquee";

type TMarqueeText = {
  text: string;
  theme: "light" | "dark";
};

const MarqueeText = ({ props }: { props: TMarqueeText }) => {
  return (
    <Marquee
      className={`overflow-hidden  ${
        props.theme === "light" && "bg-tertiary-400"
      } ${props.theme === "dark" && "bg-primary-900"}`}
      gradient={false}
      pauseOnHover
      speed={50}
    >
      <p
        className={`py-6 font-heading text-4xl ${
          props.theme === "light" && "text-primary-900"
        } ${
          props.theme === "dark" && "text-tertiary-300"
        } text-3xl sm:text-5xl`}
      >
        {props.text}
      </p>
    </Marquee>
  );
};

export default MarqueeText;
