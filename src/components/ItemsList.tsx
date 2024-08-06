"use client";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";

const ItemsList = () => {
  const productListRef = useRef<HTMLDivElement>(null);
  const product = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  useEffect(() => {
    const checkScrollLimit = () => {
      if (productListRef.current) {
        const list = productListRef.current;
        const left = list.scrollLeft;
        const width = list.clientWidth;
        const scrollWidth = list.scrollWidth;

        const newCanScrollLeft = left > 0;
        const newCanScrollRight = left + width < scrollWidth - 10;

        setCanScrollLeft(newCanScrollLeft);
        setCanScrollRight(newCanScrollRight);
      }
    };

    checkScrollLimit();

    const productListElement = productListRef.current;
    if (productListElement) {
      productListElement.addEventListener("scroll", checkScrollLimit);
      return () => {
        productListElement.removeEventListener("scroll", checkScrollLimit);
      };
    }
  }, [canScrollLeft, canScrollRight]);

  const scrollByAmount = (amount: number) => {
    if (productListRef.current) {
      productListRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  return (
    <section
      id="bestsellers"
      className="mt-10 product-list-container overflow-hidden whitespace-nowrap w-full"
    >
      <div className="flex flex-col w-full justify-start ml-14 max-[600px]:text-center max-[600px]:ml-0 ">
        <TextGenerateEffect
          duration={2}
          filter={false}
          words={`Our Bestsellers`}
        />
      </div>
      <div
        ref={productListRef}
        id="product-list"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        className="product-list-container relative overflow-auto whitespace-nowrap w-full py-20"
      >
        <div className="product-list inline-flex w-full xl:px-8 lg:px-8 md:px-6 sm:px-0">
          <div ref={product} className="ml-5">
            <BackgroundGradient
              rounded
              className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-zinc-900"
            >
              <Image
                src={`/card-image.png`}
                alt="jordans"
                height="400"
                width="400"
                className="object-contain"
              />
              <p className="text-base sm:text-xl mt-4 mb-2 text-neutral-200">
                Air Jordan 4 Retro Reimagined
              </p>

              <p className="text-sm text-neutral-400 whitespace-normal">
                The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
                February 17, 2024. Your best opportunity to get these right now
                is by entering raffles and waiting for the official releases.
              </p>
              <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 mt-4 text-xs font-bold bg-zinc-800">
                <span>Buy now </span>
                <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                  $100
                </span>
              </button>
            </BackgroundGradient>
          </div>
          <div ref={product} className="mx-5">
            <BackgroundGradient
              rounded
              className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-zinc-900"
            >
              <Image
                src={`/card-image.png`}
                alt="jordans"
                height="400"
                width="400"
                className="object-contain"
              />
              <p className="text-base sm:text-xl mt-4 mb-2 text-neutral-200">
                Air Jordan 4 Retro Reimagined
              </p>

              <p className="text-sm text-neutral-400 whitespace-normal">
                The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
                February 17, 2024. Your best opportunity to get these right now
                is by entering raffles and waiting for the official releases.
              </p>
              <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 mt-4 text-xs font-bold bg-zinc-800">
                <span>Buy now </span>
                <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                  $100
                </span>
              </button>
            </BackgroundGradient>
          </div>
          <div ref={product} className="mx-5">
            <BackgroundGradient
              rounded
              className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-zinc-900"
            >
              <Image
                src={`/card-image.png`}
                alt="jordans"
                height="400"
                width="400"
                className="object-contain"
              />
              <p className="text-base sm:text-xl mt-4 mb-2 text-neutral-200">
                Air Jordan 4 Retro Reimagined
              </p>

              <p className="text-sm text-neutral-400 whitespace-normal">
                The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
                February 17, 2024. Your best opportunity to get these right now
                is by entering raffles and waiting for the official releases.
              </p>
              <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 mt-4 text-xs font-bold bg-zinc-800">
                <span>Buy now </span>
                <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                  $100
                </span>
              </button>
            </BackgroundGradient>
          </div>
          <div ref={product} className="mx-5">
            <BackgroundGradient
              rounded
              className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-zinc-900"
            >
              <Image
                src={`/card-image.png`}
                alt="jordans"
                height="400"
                width="400"
                className="object-contain"
              />
              <p className="text-base sm:text-xl mt-4 mb-2 text-neutral-200">
                Air Jordan 4 Retro Reimagined
              </p>

              <p className="text-sm text-neutral-400 whitespace-normal">
                The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
                February 17, 2024. Your best opportunity to get these right now
                is by entering raffles and waiting for the official releases.
              </p>
              <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 mt-4 text-xs font-bold bg-zinc-800">
                <span>Buy now </span>
                <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                  $100
                </span>
              </button>
            </BackgroundGradient>
          </div>
          <div ref={product} className="mx-5">
            <BackgroundGradient
              rounded
              minimalized
              className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-zinc-900"
            >
              <Image
                src={`/card-image.png`}
                alt="jordans"
                height="400"
                width="400"
                className="object-contain"
              />
              <p className="text-base sm:text-xl mt-4 mb-2 text-neutral-200">
                Air Jordan 4 Retro Reimagined
              </p>

              <p className="text-sm text-neutral-400 whitespace-normal">
                The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
                February 17, 2024. Your best opportunity to get these right now
                is by entering raffles and waiting for the official releases.
              </p>
              <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 mt-4 text-xs font-bold bg-zinc-800">
                <span>Buy now </span>
                <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                  $100
                </span>
              </button>
            </BackgroundGradient>
          </div>
          <div ref={product} className="ml-5">
            <BackgroundGradient
              rounded
              className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-zinc-900"
            >
              <Image
                src={`/card-image.png`}
                alt="jordans"
                height="400"
                width="400"
                className="object-contain"
              />
              <p className="text-base sm:text-xl mt-4 mb-2 text-neutral-200">
                Air Jordan 4 Retro Reimagined
              </p>

              <p className="text-sm text-neutral-400 whitespace-normal">
                The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
                February 17, 2024. Your best opportunity to get these right now
                is by entering raffles and waiting for the official releases.
              </p>
              <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 mt-4 text-xs font-bold bg-zinc-800">
                <span>Buy now </span>
                <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                  $100
                </span>
              </button>
            </BackgroundGradient>
          </div>
        </div>
      </div>
      <div className="w-full max-[1024px]:hidden justify-end items-center flex pr-[3%] mt-[2%]">
        <button
          disabled={!canScrollLeft}
          onClick={() => scrollByAmount(-500)}
          className="disabled:opacity-25 disabled:shadow-none group scroll-button-left hover:shadow-sm hover:shadow-white transition-all duration-200 group  flex bg-[#000]  hover:bg-zinc-950  duration-[0.2s] cursor-pointer   justify-center items-center rounded-[50%] min-w-[70px] mx-2 min-h-[70px] w-fit"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="size-6 group-hover:stroke-purple-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
            />
          </svg>
        </button>
        <button
          disabled={!canScrollRight}
          onClick={() => scrollByAmount(500)}
          className="disabled:opacity-25 group scroll-button-left hover:shadow-sm hover:shadow-white transition-all duration-200 flex bg-[#000] hover:bg-zinc-950 group  duration-[0.2s] cursor-pointer  justify-center items-center rounded-[50%] min-w-[70px] mx-2 min-h-[70px] w-fit"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="size-6 rotate-180 group-hover:stroke-purple-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default ItemsList;
