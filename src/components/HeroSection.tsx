"use client";

import React from "react";
import dynamic from "next/dynamic";

const VantaBackground = dynamic(() => import("./VantaBackground"), {
  ssr: false,
});

import { LinkPreview } from "@/components/ui/link-preview";
import { kanit, anton, inter } from "@/utils/fonts";

const HeroSection = () => {
  return (
    <div className="relative h-screen w-full">
      <div className="absolute inset-0 z-0">
        <VantaBackground />
      </div>

      <div className="relative pt-10 z-10 w-full h-full flex flex-col justify-center items-center text-center px-4 max-[650px]:px-0">
        <h1
          className={`${kanit.className} text-white/75 uppercase px-2 font-bold text-5xl sm:text-5xl md:text-7xl lg:text-7xl xl:text-9xl`}
        >
          Medium hero title goes here
        </h1>
        <div className="bg-zinc-950 mt-10 sm:mt-20 md:mt-20 lg:mt-20 xl:mt-20 rounded-none sm:rounded-full md:rounded-full lg:rounded-full xl:rounded-full p-3 py-5 sm:p-5 md:p-5 lg:p-5 xl:p-5 sm:py-7 md:py-7 lg:py-7 xl:py-7 my-10 w-fit max-[650px]:w-full">
          <h2
            className={`${anton.className} text-white text-gradient-animation uppercase text-xs sm:text-sm md:text-sm lg:text-xl xl:text-3xl font-semibold max-[650px]:text-center`}
          >
            <LinkPreview
              className="font-bold bg-clip-text text-transparent"
              url="https://ui.aceternity.com"
            >
              5000+ clients{" "}
            </LinkPreview>
            &bull;{" "}
            <LinkPreview
              className="font-bold bg-clip-text text-transparent"
              url="https://ui.aceternity.com"
            >
              Trusted Worldwide
            </LinkPreview>{" "}
            &bull;{" "}
            <LinkPreview
              className="font-bold bg-clip-text text-transparent"
              url="https://ui.aceternity.com"
            >
              Award-Winning Support
            </LinkPreview>{" "}
            &bull;{" "}
            <LinkPreview
              className="font-bold bg-clip-text text-transparent"
              url="https://ui.aceternity.com"
            >
              Leading the Industry
            </LinkPreview>{" "}
            &bull;{" "}
            <LinkPreview
              className="font-bold bg-clip-text text-transparent"
              url="https://ui.aceternity.com"
            >
              Quality You Can Trust
            </LinkPreview>
          </h2>
        </div>

        <button
          className={`${inter.className} inline-flex uppercase font-bold h-10 sm:h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-4 sm:px-6 text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50`}
        >
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
