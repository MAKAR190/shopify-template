"use client";
import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import React, { useState, createContext, useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IconMenu2, IconX } from "@tabler/icons-react";
import Image from "next/image";
import { kanit, anton, inter } from "@/utils/fonts";
import {
  HeartIcon,
  MinusCircleIcon,
  PlusCircleIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "@/components/ui/animated-modal";
import SearchBar from "../SearchBar";
interface Links {
  label: string;
  href: string;
  icon: React.JSX.Element | React.ReactNode;
}

interface SidebarContextProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  animate: boolean;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(
  undefined
);

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};

export const SidebarProvider = ({
  children,
  open: openProp,
  setOpen: setOpenProp,
  animate = true,
}: {
  children: React.ReactNode;
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  animate?: boolean;
}) => {
  const [openState, setOpenState] = useState(false);

  const open = openProp !== undefined ? openProp : openState;
  const setOpen = setOpenProp !== undefined ? setOpenProp : setOpenState;

  return (
    <SidebarContext.Provider value={{ open, setOpen, animate: animate }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const Sidebar = ({
  children,
  open,
  setOpen,
  animate,
}: {
  children: React.ReactNode;
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  animate?: boolean;
}) => {
  return (
    <SidebarProvider open={open} setOpen={setOpen} animate={animate}>
      {children}
    </SidebarProvider>
  );
};

export const SidebarBody = (props: React.ComponentProps<typeof motion.div>) => {
  return (
    <>
      <MobileSidebar {...(props as React.ComponentProps<"div">)} />
    </>
  );
};

export const MobileSidebar = ({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) => {
  const { open, setOpen } = useSidebar();
  return (
    <>
      <div
        className={cn(
          "h-fit px-4 flex flex-row items-center justify-between bg-glass backdrop-blur-sm w-full fixed z-10"
        )}
        {...props}
      >
        <Image
          src="/logo.png"
          alt="shop-logo"
          width={75}
          height={75}
          quality={100}
        />
        <div className="mx-4 sm:mx-10">
          <SearchBar />
        </div>
        <div className="flex justify-end items-center z-40 w-fit">
          <Modal>
            <ModalTrigger>
              <ShoppingBagIcon
                width={22}
                height={22}
                className="text-neutral-200"
              />
            </ModalTrigger>
            <ModalBody>
              <ModalContent>
                <h3 className={`${anton.className} uppercase text-3xl pb-5`}>
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
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
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
              <HeartIcon
                width={22}
                height={22}
                className="text-neutral-200 mx-2"
              />
            </ModalTrigger>
            <ModalBody>
              <ModalContent>
                <h3 className={`${anton.className} uppercase text-3xl pb-5`}>
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
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
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

          <IconMenu2
            className="text-neutral-200"
            width={25}
            height={25}
            onClick={() => setOpen(!open)}
          />
        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className={cn(
                "fixed h-screen w-full inset-0 bg-neutral-900 p-5 z-[100] flex flex-col justify-between",
                className
              )}
            >
              <div
                className="absolute right-8 top-10 z-50 text-neutral-200"
                onClick={() => setOpen(!open)}
              >
                <IconX />
              </div>
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export const SidebarLink = ({
  link,
  className,
  ...props
}: {
  link: Links;
  className?: string;
  props?: LinkProps;
}) => {
  const { open, animate } = useSidebar();
  return (
    <Link
      href={link.href}
      className={cn(
        "flex items-center justify-start gap-2  group/sidebar py-2",
        className
      )}
      {...props}
    >
      {link.icon}

      <motion.span
        animate={{
          display: animate ? (open ? "inline-block" : "none") : "inline-block",
          opacity: animate ? (open ? 1 : 0) : 1,
        }}
        className="text-neutral-200 text-sm group-hover/sidebar:translate-x-1 transition duration-150 whitespace-pre inline-block !p-0 !m-0"
      >
        {link.label}
      </motion.span>
    </Link>
  );
};
