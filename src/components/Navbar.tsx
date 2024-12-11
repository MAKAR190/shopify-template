"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Sidebar, SidebarBody } from "./ui/sidebar";
import Link from "next/link";
import SearchBar from "./SearchBar";
import {
  HeartIcon,
  ShoppingBagIcon,
  PlusCircleIcon,
  MinusCircleIcon,
} from "@heroicons/react/24/outline";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "@/components/ui/animated-modal";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { kanit, anton, inter } from "@/utils/fonts";
import { ImagesSlider } from "./ui/images-slider";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className="fixed top-0 h-[75px] z-[100]">
        <div
          className={cn(
            "hidden flex-col w-full max-w-7xl z-[100] mx-auto overflow-hidden",
            "max-[1024px]:flex"
          )}
        >
          <Sidebar open={open} setOpen={setOpen}>
            <SidebarBody className="flex flex-col justify-start overflow-y-auto">
              <Image
                src="/logo.png"
                alt="shop-logo"
                width={120}
                height={100}
                quality={100}
              />
              <Accordion type="single" collapsible className="px-3">
                <AccordionItem value="item-1">
                  <AccordionTrigger
                    className={`text-white pb-5 text-lg whitespace-nowrap uppercase ${anton.className}`}
                  >
                    Group One
                  </AccordionTrigger>
                  <AccordionContent className="text-white">
                    <ul className="list-none flex flex-col">
                      <li className="mb-2 hover:underline text-sm whitespace-nowrap underline-offset-2">
                        <Link
                          href="#"
                          className={`text-white ${inter.className}`}
                        >
                          Link One
                        </Link>
                      </li>

                      <li className="mb-2 hover:underline text-sm whitespace-nowrap underline-offset-2">
                        <Link
                          href="#"
                          className={`text-white ${inter.className}`}
                        >
                          Link One
                        </Link>
                      </li>

                      <li className="mb-2 hover:underline text-sm whitespace-nowrap underline-offset-2">
                        <Link
                          href="#"
                          className={`text-white ${inter.className}`}
                        >
                          Link One
                        </Link>
                      </li>

                      <li className="mb-2 hover:underline text-sm whitespace-nowrap underline-offset-2">
                        <Link
                          href="#"
                          className={`text-white ${inter.className}`}
                        >
                          Link One
                        </Link>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger
                    className={`text-white pb-5 text-lg whitespace-nowrap uppercase ${anton.className}`}
                  >
                    Group Two
                  </AccordionTrigger>
                  <AccordionContent className="text-white">
                    <ul className="list-none flex flex-col">
                      <li className="mb-2 hover:underline text-sm whitespace-nowrap underline-offset-2">
                        <Link
                          href="#"
                          className={`text-white ${inter.className}`}
                        >
                          Link One
                        </Link>
                      </li>

                      <li className="mb-2 hover:underline text-sm whitespace-nowrap underline-offset-2">
                        <Link
                          href="#"
                          className={`text-white ${inter.className}`}
                        >
                          Link One
                        </Link>
                      </li>

                      <li className="mb-2 hover:underline text-sm whitespace-nowrap underline-offset-2">
                        <Link
                          href="#"
                          className={`text-white ${inter.className}`}
                        >
                          Link One
                        </Link>
                      </li>

                      <li className="mb-2 hover:underline text-sm whitespace-nowrap underline-offset-2">
                        <Link
                          href="#"
                          className={`text-white ${inter.className}`}
                        >
                          Link One
                        </Link>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger
                    className={`text-white pb-5 text-lg whitespace-nowrap uppercase ${anton.className}`}
                  >
                    Group Three
                  </AccordionTrigger>
                  <AccordionContent className="text-white">
                    <ul className="list-none flex flex-col">
                      <li className="mb-2 hover:underline text-sm whitespace-nowrap underline-offset-2">
                        <Link
                          href="#"
                          className={`text-white ${inter.className}`}
                        >
                          Link One
                        </Link>
                      </li>

                      <li className="mb-2 hover:underline text-sm whitespace-nowrap underline-offset-2">
                        <Link
                          href="#"
                          className={`text-white ${inter.className}`}
                        >
                          Link One
                        </Link>
                      </li>

                      <li className="mb-2 hover:underline text-sm whitespace-nowrap underline-offset-2">
                        <Link
                          href="#"
                          className={`text-white ${inter.className}`}
                        >
                          Link One
                        </Link>
                      </li>

                      <li className="mb-2 hover:underline text-sm whitespace-nowrap underline-offset-2">
                        <Link
                          href="#"
                          className={`text-white ${inter.className}`}
                        >
                          Link One
                        </Link>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger
                    className={`text-white pb-5 text-lg whitespace-nowrap uppercase ${anton.className}`}
                  >
                    Group Four
                  </AccordionTrigger>
                  <AccordionContent className="text-white">
                    <ul className="list-none flex flex-col">
                      <li className="mb-2 hover:underline text-sm whitespace-nowrap underline-offset-2">
                        <Link
                          href="#"
                          className={`text-white ${inter.className}`}
                        >
                          Link One
                        </Link>
                      </li>

                      <li className="mb-2 hover:underline text-sm whitespace-nowrap underline-offset-2">
                        <Link
                          href="#"
                          className={`text-white ${inter.className}`}
                        >
                          Link One
                        </Link>
                      </li>

                      <li className="mb-2 hover:underline text-sm whitespace-nowrap underline-offset-2">
                        <Link
                          href="#"
                          className={`text-white ${inter.className}`}
                        >
                          Link One
                        </Link>
                      </li>

                      <li className="mb-2 hover:underline text-sm whitespace-nowrap underline-offset-2">
                        <Link
                          href="#"
                          className={`text-white ${inter.className}`}
                        >
                          Link One
                        </Link>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <div className="w-full h-full">
                <div className="flex w-full justify-between">
                  <h3
                    className={`text-white ml-3 mt-2 pb-5 text-lg whitespace-nowrap uppercase ${anton.className}`}
                  >
                    Featured Products
                  </h3>
                  <Link
                    className={`mr-3 mt-2 text-white ${kanit.className}`}
                    href="#"
                  >
                    View All &rarr;
                  </Link>
                </div>
                <ImagesSlider
                  images={[
                    "/card-image.png",
                    "/card-image.png",
                    "/card-image.png",
                  ]}
                >
                  <></>
                </ImagesSlider>
              </div>
            </SidebarBody>
          </Sidebar>
        </div>
        <div
          className={`flex max-[1024px]:hidden justify-around items-center ${
            scrolled ? "bg-glass backdrop-blur-sm" : "bg-transparent"
          } transition-all duration-300 fixed w-full z-40 max-h-[75px]`}
        >
          <Image
            src="/logo.png"
            alt="shop-logo"
            width={120}
            height={100}
            quality={100}
          />
          <div className="flex items-center justify-center w-[50%] max-w-[790px]">
            <div className="flex w-full items-center justify-start">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>More</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid gap-3 w-fit min-w-[60vw] grid-cols-5">
                        <div className="grid grid-cols-3 gap-x-3 gap-y-5 col-span-3 p-6">
                          <div className="flex flex-col">
                            <h3
                              className={`pb-5 text-lg whitespace-nowrap uppercase ${anton.className}`}
                            >
                              Group One
                            </h3>
                            <ul className="list-none flex flex-col">
                              <li className="mb-2 hover:underline text-sm whitespace-nowrap underline-offset-2">
                                <Link
                                  href="#"
                                  className={`text-white ${inter.className}`}
                                >
                                  Link One
                                </Link>
                              </li>

                              <li className="mb-2 hover:underline text-sm whitespace-nowrap underline-offset-2">
                                <Link
                                  href="#"
                                  className={`text-white ${inter.className}`}
                                >
                                  Link One
                                </Link>
                              </li>

                              <li className="mb-2 hover:underline text-sm whitespace-nowrap underline-offset-2">
                                <Link
                                  href="#"
                                  className={`text-white ${inter.className}`}
                                >
                                  Link One
                                </Link>
                              </li>

                              <li className="mb-2 hover:underline text-sm whitespace-nowrap underline-offset-2">
                                <Link
                                  href="#"
                                  className={`text-white ${inter.className}`}
                                >
                                  Link One
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="flex flex-col">
                            <h3
                              className={`pb-5 text-lg whitespace-nowrap uppercase ${anton.className}`}
                            >
                              Group Two
                            </h3>
                            <ul className="list-none flex flex-col">
                              <li className="mb-2 hover:underline text-sm whitespace-nowrap underline-offset-2">
                                <Link
                                  href="#"
                                  className={`text-white ${inter.className}`}
                                >
                                  Link One
                                </Link>
                              </li>

                              <li className="mb-2 hover:underline text-sm whitespace-nowrap underline-offset-2">
                                <Link
                                  href="#"
                                  className={`text-white ${inter.className}`}
                                >
                                  Link One
                                </Link>
                              </li>

                              <li className="mb-2 hover:underline text-sm whitespace-nowrap underline-offset-2">
                                <Link
                                  href="#"
                                  className={`text-white ${inter.className}`}
                                >
                                  Link One
                                </Link>
                              </li>

                              <li className="mb-2 hover:underline text-sm whitespace-nowrap underline-offset-2">
                                <Link
                                  href="#"
                                  className={`text-white ${inter.className}`}
                                >
                                  Link One
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="flex flex-col">
                            <h3
                              className={`pb-5 text-lg whitespace-nowrap uppercase ${anton.className}`}
                            >
                              Group Three
                            </h3>
                            <ul className="list-none flex flex-col">
                              <li className="mb-2 hover:underline text-sm whitespace-nowrap underline-offset-2">
                                <Link
                                  href="#"
                                  className={`text-white ${inter.className}`}
                                >
                                  Link One
                                </Link>
                              </li>

                              <li className="mb-2 hover:underline text-sm whitespace-nowrap underline-offset-2">
                                <Link
                                  href="#"
                                  className={`text-white ${inter.className}`}
                                >
                                  Link One
                                </Link>
                              </li>

                              <li className="mb-2 hover:underline text-sm whitespace-nowrap underline-offset-2">
                                <Link
                                  href="#"
                                  className={`text-white ${inter.className}`}
                                >
                                  Link One
                                </Link>
                              </li>

                              <li className="mb-2 hover:underline text-sm whitespace-nowrap underline-offset-2">
                                <Link
                                  href="#"
                                  className={`text-white ${inter.className}`}
                                >
                                  Link One
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="flex flex-col">
                            <h3
                              className={`pb-5 text-lg whitespace-nowrap uppercase ${anton.className}`}
                            >
                              Group Three
                            </h3>
                            <ul className="list-none flex flex-col">
                              <li className="mb-2 hover:underline text-sm whitespace-nowrap underline-offset-2">
                                <Link
                                  href="#"
                                  className={`text-white ${inter.className}`}
                                >
                                  Link One
                                </Link>
                              </li>

                              <li className="mb-2 hover:underline text-sm whitespace-nowrap underline-offset-2">
                                <Link
                                  href="#"
                                  className={`text-white ${inter.className}`}
                                >
                                  Link One
                                </Link>
                              </li>

                              <li className="mb-2 hover:underline text-sm whitespace-nowrap underline-offset-2">
                                <Link
                                  href="#"
                                  className={`text-white ${inter.className}`}
                                >
                                  Link One
                                </Link>
                              </li>

                              <li className="mb-2 hover:underline text-sm whitespace-nowrap underline-offset-2">
                                <Link
                                  href="#"
                                  className={`text-white ${inter.className}`}
                                >
                                  Link One
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="flex flex-col">
                            <h3
                              className={`pb-5 text-lg whitespace-nowrap uppercase ${anton.className}`}
                            >
                              Group Three
                            </h3>
                            <ul className="list-none flex flex-col">
                              <li className="mb-2 hover:underline text-sm whitespace-nowrap underline-offset-2">
                                <Link
                                  href="#"
                                  className={`text-white ${inter.className}`}
                                >
                                  Link One
                                </Link>
                              </li>

                              <li className="mb-2 hover:underline text-sm whitespace-nowrap underline-offset-2">
                                <Link
                                  href="#"
                                  className={`text-white ${inter.className}`}
                                >
                                  Link One
                                </Link>
                              </li>

                              <li className="mb-2 hover:underline text-sm whitespace-nowrap underline-offset-2">
                                <Link
                                  href="#"
                                  className={`text-white ${inter.className}`}
                                >
                                  Link One
                                </Link>
                              </li>

                              <li className="mb-2 hover:underline text-sm whitespace-nowrap underline-offset-2">
                                <Link
                                  href="#"
                                  className={`text-white ${inter.className}`}
                                >
                                  Link One
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="flex flex-col">
                            <h3
                              className={`pb-5 text-lg whitespace-nowrap uppercase ${anton.className}`}
                            >
                              Group Three
                            </h3>
                            <ul className="list-none flex flex-col">
                              <li className="mb-2 hover:underline text-sm whitespace-nowrap underline-offset-2">
                                <Link
                                  href="#"
                                  className={`text-white ${inter.className}`}
                                >
                                  Link One
                                </Link>
                              </li>

                              <li className="mb-2 hover:underline text-sm whitespace-nowrap underline-offset-2">
                                <Link
                                  href="#"
                                  className={`text-white ${inter.className}`}
                                >
                                  Link One
                                </Link>
                              </li>

                              <li className="mb-2 hover:underline text-sm whitespace-nowrap underline-offset-2">
                                <Link
                                  href="#"
                                  className={`text-white ${inter.className}`}
                                >
                                  Link One
                                </Link>
                              </li>

                              <li className="mb-2 hover:underline text-sm whitespace-nowrap underline-offset-2">
                                <Link
                                  href="#"
                                  className={`text-white ${inter.className}`}
                                >
                                  Link One
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="bg-zinc-950 col-span-2">
                          <div className="p-6 flex flex-col w-full h-full">
                            <h3
                              className={`pb-5 text-center text-lg uppercase whitespace-nowrap ${anton.className}`}
                            >
                              Featured Products
                            </h3>
                            <div className="w-full h-full">
                              <ImagesSlider
                                images={[
                                  "/card-image.png",
                                  "/card-image.png",
                                  "/card-image.png",
                                ]}
                              >
                                <></>
                              </ImagesSlider>
                            </div>
                          </div>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              <SearchBar />
            </div>
            <div className="flex mx-5">
              <Modal>
                <ModalTrigger>
                  <div className="bg-zinc-900 cursor-pointer rounded-md p-2 flex justify-center items-center mr-3  hover:animate-pulse">
                    <ShoppingBagIcon color="white" width={25} height={25} />
                  </div>
                </ModalTrigger>
                <ModalBody>
                  <ModalContent>
                    <h3
                      className={`${anton.className} uppercase text-3xl pb-5`}
                    >
                      Your cart
                    </h3>
                    <div className="flex flex-col">
                      <div className="rounded-lg grid grid-cols-3 gap-5 overflow-y-auto bg-black/90 backdrop-blur-sm w-full mx-auto h-fit p-5 my-2">
                        <div className="p-1 bg-white rounded-lg flex justify-center items-center">
                          <Image
                            src="/card-image.png"
                            alt="cart-item"
                            width={150}
                            height={150}
                          />
                        </div>
                        <div className="flex flex-col">
                          <h4
                            className={`${kanit.className} text-gradient-animation text-md sm:text-md md:text-xl lg:text-xl xl:text-2xl font-semibold`}
                          >
                            Cart Item
                          </h4>
                          <p
                            className={`${inter.className} text-white text-sm sm:text-sm md:text-lg lg:text-lg xl:text-xl font-[Inter]`}
                          >
                            Qty: 1
                          </p>
                          <p
                            className={`${inter.className} text-white text-lg sm:text-lg md:text-lg lg:text-lg xl:text-xl font-thin`}
                          >
                            350$
                          </p>
                        </div>
                        <div>
                          <button className="absolute top-4 right-4 group">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-white h-4 w-4 group-hover:scale-125 group-hover:rotate-3 transition duration-200"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <path d="M18 6l-12 12" />
                              <path d="M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                        <div className="absolute bottom-2 right-2 flex">
                          <PlusCircleIcon
                            color="white"
                            className="hover:scale-125 hover:-rotate-3 transition duration-200 cursor-pointer"
                            width={30}
                            height={30}
                          />
                          <MinusCircleIcon
                            className="hover:scale-125 hover:rotate-3 transition duration-200 cursor-pointer"
                            color="white"
                            width={30}
                            height={30}
                          />
                        </div>
                      </div>
                      {/* Repeat similar blocks for other items */}
                    </div>
                  </ModalContent>
                  <ModalFooter>
                    <div className="flex items-center w-full justify-between">
                      <p className={`${inter.className} text-sm`}>
                        Total: 1400.00$
                      </p>
                      <button
                        className={`${inter.className} inline-flex uppercase mx-2 font-bold h-10 sm:h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-4 sm:px-6 text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50`}
                      >
                        Checkout
                      </button>
                    </div>
                  </ModalFooter>
                </ModalBody>
              </Modal>
              <Modal>
                <ModalTrigger>
                  <div className="bg-zinc-900 cursor-pointer rounded-md p-2 flex justify-center items-center hover:animate-pulse">
                    <HeartIcon color="white" width={25} height={25} />
                  </div>
                </ModalTrigger>
                <ModalBody>
                  <ModalContent>
                    <h3
                      className={`${anton.className} uppercase text-3xl pb-5`}
                    >
                      Your wishlist
                    </h3>
                    <div className="flex flex-col">
                      <div className="rounded-lg grid grid-cols-3 gap-5 overflow-y-auto bg-black/90 backdrop-blur-sm w-full mx-auto h-fit p-5 my-2">
                        <div className="p-1 bg-white rounded-lg flex justify-center items-center">
                          <Image
                            src="/card-image.png"
                            alt="wishlist-item"
                            width={150}
                            height={150}
                          />
                        </div>
                        <div className="flex flex-col">
                          <h4
                            className={`${kanit.className} text-gradient-animation text-md sm:text-md md:text-xl lg:text-xl xl:text-2xl font-semibold`}
                          >
                            Wishlist Item
                          </h4>
                          <p
                            className={`${inter.className} text-white text-lg sm:text-lg md:text-lg lg:text-lg xl:text-xl font-thin`}
                          >
                            350$
                          </p>
                        </div>
                        <div>
                          <button className="absolute top-4 right-4 group">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-white h-4 w-4 group-hover:scale-125 group-hover:rotate-3 transition duration-200"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <path d="M18 6l-12 12" />
                              <path d="M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </ModalContent>
                  <ModalFooter>
                    <div className="flex items-center w-full justify-between">
                      <p>Total: 1400.00$</p>
                      <button
                        className={`${inter.className} inline-flex uppercase mx-2 font-bold h-10 sm:h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-4 sm:px-6 text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50`}
                      >
                        Add to cart
                      </button>
                    </div>
                  </ModalFooter>
                </ModalBody>
              </Modal>
            </div>
          </div>
          <div className="flex justify-around min-w-[300px] max-w-[300px]">
            <button className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-[#0b0a0a] border border-white text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
              Sign In
            </button>
            <button className="p-[3px] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
              <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                Promotions
              </div>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
