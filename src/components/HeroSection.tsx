"use client";

import React from "react";
import { FlipWords } from "./ui/flip-words";
import { LampContainer } from "./ui/lamp";
import { ImagesSlider } from "./ui/images-slider";

const HeroSection = () => {
  const words = ["better", "cute", "beautiful", "modern"];
  const images = ["/card-image.png", "/card-image.png", "/card-image.png"];
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen max-[1023px]:hidden w-full">
        <LampContainer>
          <div className="flex justify-center items-center h-full px-4">
            <div className="xl:text-7xl lg:text-6xl text-4xl mx-auto flex flex-col font-normal text-neutral-400 text-center lg:text-left">
              Are you a fan of
              <FlipWords words={words} /> <br />
            </div>
          </div>
        </LampContainer>
        <ImagesSlider images={images}>
          <></>
        </ImagesSlider>
      </div>
      <div className="hidden max-[1023px]:grid max-[1023px]:grid-cols-1 w-full h-full mt-16">
        <LampContainer>
          <div className="flex justify-center items-center w-full h-full px-4 pt-28">
            <div className="text-4xl mx-auto grid grid-cols-1 items-center font-normal text-neutral-400 text-center lg:text-left">
              Are you a fan of
              <FlipWords className="justify-center flex" words={words} />
            </div>
          </div>
          <ImagesSlider className="w-full h-full" images={images}>
            <div className="max-[1023px]:h-[75%] max-[600px]:h-[50%] p-64 w-screen"/>

          </ImagesSlider>
        </LampContainer>
      </div>
    </>
  );
};

export default HeroSection;
