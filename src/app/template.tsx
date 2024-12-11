"use client";

import { motion } from "framer-motion";
import { Layout } from "@/components";
import dynamic from "next/dynamic";
const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <Layout>
      <AnimatedCursor
        color="0, 0, 0"
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={1.7}
        outerAlpha={0.2}
        innerStyle={{
          backgroundColor: "rgb(196, 113, 237)",
        }}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 0, opacity: 0 }}
        transition={{ ease: "anticipate", duration: 0.75 }}
      >
        {children}
      </motion.div>
    </Layout>
  );
}
