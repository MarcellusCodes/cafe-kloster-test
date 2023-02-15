import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="container mx-auto flex flex-row items-center justify-between py-4">
      <Link href="/">
        <div className="flex flex-row items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            className="h-8 w-8 fill-current text-tertiary-300 text-opacity-80"
          >
            <path d="M20 10h-.115A3.1 3.1 0 0 0 17 6H3c-5.451.372-2 8.651-.589 10.912A6.877 6.877 0 0 0 8.216 20h3.567a6.875 6.875 0 0 0 5.742-3H20c4.814-.093 5.759-7.178 0-7Zm-8.217 8H8.216a4.881 4.881 0 0 1-4.131-2.179C3.541 15.3.494 8 3 8h14a.973.973 0 0 1 .729.325 1.028 1.028 0 0 1 .261.8c-.563 4.259-1.622 8.686-6.207 8.875ZM20 15h-1.412a16.82 16.82 0 0 0 .954-3c1.209-.081 2.546.216 2.458 1.143A1.984 1.984 0 0 1 20 15ZM9.025 3V1a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0Zm4 0V1a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0Zm-8 0V1a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0ZM20 23a1 1 0 0 1-1 1H1a1 1 0 0 1 0-2h18a1 1 0 0 1 1 1Z" />
          </svg>
          <span className="font-heading text-2xl text-tertiary-300">
            Café Kloster
          </span>
        </div>
      </Link>
      <div className="hidden sm:block">
        <ul className="flex flex-row items-center gap-8">
          <li className="flex flex-row items-center space-x-2 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
              viewBox="0 0 24 24"
              className="h-6 w-6 fill-current"
            >
              <path d="M13 1a1 1 0 0 1 1-1 10.011 10.011 0 0 1 10 10 1 1 0 0 1-2 0 8.009 8.009 0 0 0-8-8 1 1 0 0 1-1-1Zm1 5a4 4 0 0 1 4 4 1 1 0 0 0 2 0 6.006 6.006 0 0 0-6-6 1 1 0 0 0 0 2Zm9.093 10.739a3.1 3.1 0 0 1 0 4.378l-.91 1.049c-8.19 7.841-28.12-12.084-20.4-20.3l1.15-1a3.081 3.081 0 0 1 4.327.04c.031.031 1.884 2.438 1.884 2.438a3.1 3.1 0 0 1-.007 4.282L7.979 9.082a12.781 12.781 0 0 0 6.931 6.945l1.465-1.165a3.1 3.1 0 0 1 4.281-.006s2.406 1.852 2.437 1.883Zm-1.376 1.454s-2.393-1.841-2.424-1.872a1.1 1.1 0 0 0-1.549 0c-.027.028-2.044 1.635-2.044 1.635a1 1 0 0 1-.979.152A15.009 15.009 0 0 1 5.9 9.3a1 1 0 0 1 .145-1s1.607-2.018 1.634-2.044a1.1 1.1 0 0 0 0-1.549c-.031-.03-1.872-2.425-1.872-2.425a1.1 1.1 0 0 0-1.51.039l-1.15 1C-2.495 10.105 14.776 26.418 20.721 20.8l.911-1.05a1.121 1.121 0 0 0 .085-1.557Z" />
            </svg>
            <span>(0381) 827563</span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
