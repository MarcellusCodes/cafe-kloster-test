import React from "react";
import { Container, Section } from "@/components/index";

const Tab = () => {
  return (
    <Section className=" h-screen bg-secondary-50">
      <Container className="flex h-full flex-col items-start justify-evenly gap-12 lg:flex-row">
        <div className="relative flex w-full flex-col gap-6 lg:w-1/2">
          <h2 className="font-text text-xl font-semibold text-tertiary-300">
            Geschichten aus dem Bilderbuch
          </h2>
          <p className="max-w-2xl font-title text-4xl text-primary-900 sm:text-6xl ">
            Information über die Geschichte des Hauses
          </p>
        </div>
      </Container>
      <div className="absolute top-0 right-0 grid h-full w-[40%] grid-cols-12 grid-rows-12 gap-6">
        <div className="col-start-1 col-end-7 row-start-1 row-end-8 bg-red-600"></div>
        <div className="col-start-7 col-end-13 row-start-1 row-end-7 bg-green-600"></div>
        <div className="col-start-1 col-end-7 row-start-8 row-end-13 bg-purple-600"></div>
        <div className="col-start-7 col-end-13 row-start-7 row-end-13 bg-blue-600"></div>
      </div>
    </Section>
  );
};

export default Tab;
