import React, { useEffect } from "react";
import { Section } from "@/components/index";
import dynamic from "next/dynamic";
import Map from "@/components/Map/Map";
import { motion } from "framer-motion";

const DEFAULT_CENTER = [54.08726, 12.13295];

const LeafletMap = () => {
  return (
    <Section className="relative h-[500px] w-full overflow-y-hidden">
      <Map
        className="absolute top-0 left-0 z-10 h-full w-full"
        center={DEFAULT_CENTER}
        zoom={17}
      >
        {({ TileLayer }) => (
          <>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
          </>
        )}
      </Map>
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1, transformOrigin: "top" }}
        transition={{ delay: 3, duration: 1, ease: "easeInOut" }}
        className="absolute top-12  left-12 z-20 h-[350px] w-[250px] rounded-sm  border-2 border-tertiary-300 bg-primary-900/80 p-4"
      >
        <h3 className="font-heading text-3xl text-tertiary-300">Find Us</h3>
      </motion.div>
    </Section>
  );
};

export default LeafletMap;
