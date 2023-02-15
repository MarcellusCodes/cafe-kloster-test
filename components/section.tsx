import React from "react";

type TSection = {
  className?: string;
  children: React.ReactNode;
};

const Section = ({ className, children }: TSection) => {
  return (
    <section className={`${className} relative py-10 px-6 sm:py-20`}>
      {children}
    </section>
  );
};

export default Section;
