import React from "react";
import { Container, Section } from "@/components/index";

const Tab = () => {
  return (
    <Section className="h-full bg-secondary-50">
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
    </Section>
  );
};

export default Tab;
