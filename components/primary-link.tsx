import Link from "next/link";
import React from "react";

type TPrimaryLink = {
  title: string;
  href: string;
};

const PrimaryLink = ({ title, href }: TPrimaryLink) => {
  return (
    <Link
      href={href}
      className="z-20 rounded-sm border border-tertiary-400 bg-tertiary-400 py-2 px-5 font-heading text-lg text-white hover:border-tertiary-500 hover:bg-tertiary-500 sm:py-3 sm:px-6 sm:text-xl"
    >
      {title}
    </Link>
  );
};

export default PrimaryLink;
