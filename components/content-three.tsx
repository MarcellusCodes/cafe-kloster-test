import React from "react";
import { Section, Container } from "@/components/index";
import Image from "next/image";

const ContentThree = () => {
  return (
    <Section className="h-full bg-primary-900">
      <Container className="flex h-full flex-col gap-12">
        <div className="flex flex-col items-start gap-6">
          <h2 className="font-text text-xl font-semibold text-tertiary-300">
            Wir legen Wert auf Qualität
          </h2>
          <p className="mb-6 w-full font-heading text-4xl font-bold text-white sm:text-6xl">
            Unser Versprechen
          </p>
        </div>
        <div className="flex flex-row gap-12">
          <div className="w-1/2"></div>
          <div className="w-1/2"></div>
        </div>
      </Container>
    </Section>
  );
};

export default ContentThree;
