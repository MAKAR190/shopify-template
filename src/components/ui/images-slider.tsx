import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAnimation } from "@/context/AnimationContext";
import { BackgroundGradient } from "../ui/background-gradient";
import { cn } from "@/lib/utils";

export const ImagesSlider = ({
  images,
  children,
  overlay = true,
  overlayClassName,
  className,
  direction = "up",
}: {
  images: string[];
  children: React.ReactNode;
  overlay?: React.ReactNode;
  overlayClassName?: string;
  className?: string;
  direction?: "up" | "down";
}) => {
  const { triggerAnimation } = useAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<string[]>([]);

  useEffect(() => {
    loadImages();
  }, []);

  const loadImages = () => {
    const loadPromises = images.map((image) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = image;
        img.onload = () => resolve(image);
        img.onerror = reject;
      });
    });

    Promise.all(loadPromises)
      .then((loadedImages) => {
        setLoadedImages(loadedImages as string[]);
      })
      .catch((error) => console.error("Failed to load images", error));
  };

  useEffect(() => {
    if (triggerAnimation) {
      handleNext();
    }
  }, [triggerAnimation]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };

  const slideVariants = {
    initial: {
      scale: 0,
      opacity: 0,
      rotateX: 45,
    },
    visible: {
      scale: 1,
      rotateX: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.645, 0.045, 0.355, 1.0],
      },
    },
    upExit: {
      opacity: 1,
      y: "-150%",
      transition: {
        duration: 1,
      },
    },
    downExit: {
      opacity: 1,
      y: "150%",
      transition: {
        duration: 1,
      },
    },
  };

  const areImagesLoaded = loadedImages.length > 0;

  return (
    <BackgroundGradient>
      <div
        className={cn(
          "overflow-hidden h-full w-full relative flex items-center justify-center z-0",
          className
        )}
        style={{
          perspective: "1000px",
        }}
      >
        {areImagesLoaded && children}
        {areImagesLoaded && overlay && (
          <div className={cn("absolute inset-0 z-auto", overlayClassName)} />
        )}

        {areImagesLoaded && (
          <AnimatePresence>
            <motion.img
              key={currentIndex}
              src={loadedImages[currentIndex]}
              initial="initial"
              animate="visible"
              exit={direction === "up" ? "upExit" : "downExit"}
              variants={slideVariants}
              className="image max-[1023px]:h-[500px] max-[1023px]:w-[500px] max-[1023px]:my-0 max-[600px]:w-[80%] max-[600px]:h-auto h-auto w-full max-w-[80%] mx-auto my-auto absolute inset-0 object-cover object-center"
            />
          </AnimatePresence>
        )}
      </div>
    </BackgroundGradient>
  );
};
