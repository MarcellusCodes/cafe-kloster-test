import Link from "next/link";

type TSecondaryLink = {
  title: string;
  href: string;
};

const SecondaryLink = ({ title, href }: TSecondaryLink) => {
  return (
    <Link
      href={href}
      className="z-20 rounded-sm border border-primary-900 bg-primary-900 py-2 px-5 font-heading text-lg text-white hover:border-primary-800 hover:bg-primary-800 focus:ring-4 focus:ring-primary-500 sm:py-3 sm:px-6 sm:text-xl"
    >
      {title}
    </Link>
  );
};

export default SecondaryLink;
