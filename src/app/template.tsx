"use client";

import { motion } from "framer-motion";
import { AnimationProvider } from "../context/AnimationContext";
import { Layout } from "@/components";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <AnimationProvider>
      <Layout>
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 0, opacity: 0 }}
          transition={{ ease: "anticipate", duration: 0.75 }}
        >
          {children}
        </motion.div>
      </Layout>
    </AnimationProvider>
  );
}
