import Link from "next/link";

type TPrimaryLink = {
  title: string;
  href: string;
};

const PrimaryLink = ({ title, href }: TPrimaryLink) => {
  return (
    <Link
      href={href}
      className="z-20 rounded-sm border border-tertiary-400 bg-tertiary-400 py-2 px-5 font-heading text-lg text-white hover:border-tertiary-500 hover:bg-tertiary-500 focus:ring-4 focus:ring-tertiary-300 sm:py-3 sm:px-6 sm:text-xl"
    >
      {title}
    </Link>
  );
};

export default PrimaryLink;
