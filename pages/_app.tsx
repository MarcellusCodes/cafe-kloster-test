
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { Provider as RWBProvider } from "react-wrap-balancer";
import cx from "classnames";
import localFont from "@next/font/local";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/grid";
import { FirstLoadingScreen } from "@/components/index";

const helveticaNeue = localFont({
  src: "../styles/Helvetica-Neue.otf",
  variable: "--font-hn",
});

const helveticaNeueMedium = localFont({
  src: "../styles/Helvetica-Neue-Medium.otf",
  variable: "--font-hnm",
});

const helveticaNeueBold = localFont({
  src: "../styles/Helvetica-Neue-Bold.otf",
  variable: "--font-hnb",
});

export default function MyApp({
  Component,
  pageProps: { ...pageProps },
}: AppProps) {
  

  
  return (
    <>
      <div>
        <RWBProvider>
          <div
            className={cx(
              helveticaNeue.variable,
              helveticaNeueMedium.variable,
              helveticaNeueBold.variable,
            )}
          >
            <FirstLoadingScreen />
            <Component {...pageProps} />
          </div>
        </RWBProvider>
        <Analytics />
      </div>
    </>
  );
}
