import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { Provider as RWBProvider } from "react-wrap-balancer";
import cx from "classnames";
import localFont from "@next/font/local";
import { AnimatePresence, motion } from "framer-motion";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/grid";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { LoadingScreen } from "@/components/index";

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
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleRouteChange = () => {
      setLoading(true);
    };

    const handleRouteChangeComplete = () => {
      setLoading(false);
    };

    router.events.on("routeChangeStart", handleRouteChange);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
    };
  }, [router.events]);
  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loading"
            initial={{ y: 0, x: 0 }}
            animate={{ y: 0, x: 0, transformOrigin: "top" }}
            exit={{ y: 0, x: 0, display: "none", transformOrigin: "top" }}
            transition={{ type: "spring", stiffness: 60, damping: 15, mass: 1 }}
            className={cx(
              helveticaNeue.variable,
              helveticaNeueMedium.variable,
              helveticaNeueBold.variable,
              "z-100 fixed z-[100] flex h-screen w-full",
            )}
          >
            <LoadingScreen />
          </motion.div>
        )}{" "}
        <motion.div>
          <RWBProvider>
            <div
              className={cx(
                helveticaNeue.variable,
                helveticaNeueMedium.variable,
                helveticaNeueBold.variable,
              )}
            >
              <Component {...pageProps} />
            </div>
          </RWBProvider>
          <Analytics />
        </motion.div>
      </AnimatePresence>
    </>
  );
}
