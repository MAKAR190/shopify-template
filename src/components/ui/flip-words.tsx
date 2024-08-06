// components/FlipWords.tsx
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useAnimation } from "@/context/AnimationContext";
import { cn } from "@/lib/utils";

export const FlipWords = ({
  words,
  className,
}: {
  words: string[];
  className?: string;
}) => {
  const { triggerAnimation } = useAnimation();
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    if (triggerAnimation) {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }
  }, [triggerAnimation, words.length]);

  const currentWord = words[currentWordIndex];

  return (
    <div className={cn("relative", className)} style={{ height: "2em" }}>
      <AnimatePresence initial={false}>
        <motion.div
          key={currentWord}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="absolute"
        >
          {currentWord.split("").map((letter, index) => (
            <motion.span
              key={currentWord + index}
              initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              className="inline-block text-gray-100"
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
