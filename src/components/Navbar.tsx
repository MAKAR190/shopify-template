"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Sidebar, SidebarBody, SidebarLink } from "./ui/sidebar";
import SearchBar from "./SearchBar";
import { HeartIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

type NavProps = {};

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
    <nav className="fixed top-0 h-[75px] z-[100]">
      <div
        className={cn(
          "hidden flex-col w-full max-w-7xl z-[100] mx-auto overflow-hidden",
          "max-[1024px]:flex"
        )}
      >
        <Sidebar open={open} setOpen={setOpen}>
          <SidebarBody className="justify-between gap-10"></SidebarBody>
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
                  <NavigationMenuContent>Hello, there!</NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <SearchBar />
          </div>
          <div className="flex mx-5">
            <div className="bg-zinc-900 cursor-pointer rounded-md p-2 flex justify-center items-center mr-3  hover:animate-pulse">
              <ShoppingBagIcon color="white" width={25} height={25} />
            </div>

            <div className="bg-zinc-900 cursor-pointer rounded-md p-2 flex justify-center items-center hover:animate-pulse">
              <HeartIcon color="white" width={25} height={25} />
            </div>
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
  );
};

export default Navbar;
