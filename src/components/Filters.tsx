"use client";
import React from "react";
import { kanit, anton, inter } from "@/utils/fonts";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { FilterIcon, SearchIcon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface Props {
  children?: React.ReactNode;
}
const Filters = ({ children }: Props) => {
  return (
    <div className="grid max-[1024px]:grid-cols-1 grid-cols-5 w-full max-[650px]:px-3 sm:px-4 h-full">
      <div className="max-[1024px]:flex justify-center items-center text-center my-2 rounded-md hidden w-full text-white">
        <button className="inline-flex h-12 w-full animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <FilterIcon />
          <h4 className="mx-2">Filters</h4>
        </button>
      </div>
      <div className="flex flex-col text-white max-[1024px]:hidden">
        <div className="flex justify-between items-center my-2">
          <h3 className="text-lg">Filters</h3>
          <p className="text-sm">Clear All</p>
        </div>
        <p className="mb-8 text-xs">Showing 0 of 100</p>
        <div id="categories" className="flex flex-col">
          <Link
            href="#"
            className="hover:underline underline-offset-2 my-1 text-sm"
          >
            Category One
          </Link>
          <Link
            href="#"
            className="hover:underline underline-offset-2 my-1 text-sm"
          >
            Category Two
          </Link>
          <Link
            href="#"
            className="hover:underline underline-offset-2 my-1 text-sm"
          >
            Category Three
          </Link>
          <Link
            href="#"
            className="hover:underline underline-offset-2 my-1 text-sm"
          >
            Category Four
          </Link>
        </div>
        <Accordion
          type="multiple"
          defaultValue={[
            "filter-1",
            "filter-2",
            "filter-3",
            "filter-4",
            "filter-5",
            "filter-6",
          ]}
        >
          <AccordionItem value="filter-1">
            <AccordionTrigger
              className={`text-white pb-5 text-lg whitespace-nowrap uppercase ${anton.className}`}
            >
              Filter One
            </AccordionTrigger>
            <AccordionContent className="text-white flex flex-col">
              <div className="flex items-center space-x-2 my-1">
                <Checkbox id="checkbox-1" />
                <label
                  htmlFor="checkbox-1"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Option One
                </label>
              </div>
              <div className="flex items-center space-x-2  my-1">
                <Checkbox id="checkbox-2" />
                <label
                  htmlFor="checkbox-2"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Option Two
                </label>
              </div>
              <div className="flex items-center space-x-2  my-1">
                <Checkbox id="checkbox-3" />
                <label
                  htmlFor="checkbox-3"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Option Three
                </label>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="filter-2">
            <AccordionTrigger
              className={`text-white pb-5 text-lg whitespace-nowrap uppercase ${anton.className}`}
            >
              Filter Two
            </AccordionTrigger>
            <AccordionContent className="text-white flex flex-col">
              <RadioGroup defaultValue="option-one">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-one" id="option-one" />
                  <label
                    htmlFor="option-one"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Option One
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-two" id="option-two" />
                  <label
                    htmlFor="option-two"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Option Two
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-three" id="option-three" />
                  <label
                    htmlFor="option-three"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Option Three
                  </label>
                </div>
              </RadioGroup>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="filter-3">
            <AccordionTrigger
              className={`text-white pb-5 text-lg whitespace-nowrap uppercase ${anton.className}`}
            >
              Filter Three
            </AccordionTrigger>
            <AccordionContent className="text-white flex flex-col">
              <div className="relative">
                <SearchIcon className="absolute left-2 top-2" />
                <Input placeholder="Keyword" className="pl-10" />
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="filter-4">
            <AccordionTrigger
              className={`text-white pb-5 text-lg whitespace-nowrap uppercase ${anton.className}`}
            >
              Filter Four
            </AccordionTrigger>
            <AccordionContent className="text-white flex flex-col">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="filter-5">
            <AccordionTrigger
              className={`text-white pb-5 text-lg whitespace-nowrap uppercase ${anton.className}`}
            >
              Filter Five
            </AccordionTrigger>
            <AccordionContent className="text-white flex flex-col">
              <Slider defaultValue={[33]} max={100} step={1} />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="filter-6">
            <AccordionTrigger
              className={`text-white pb-5 text-lg whitespace-nowrap uppercase ${anton.className}`}
            >
              Filter Six
            </AccordionTrigger>
            <AccordionContent className="text-white flex flex-col">
              <Switch />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="flex flex-col col-span-4 max-[1024px]:col-span-1">
        <div className="flex justify-between w-full text-white lg:px-5 max-[1024px]:px-0">
          <div className="flex justify-start items-center overflow-x-auto whitespace-nowrap scrollbar-none max-w-full mr-4 w-full lg:px-4 max-[1024px]:px-1">
            <div className="text-sm flex items-center mx-1">
              <button className="relative inline-flex h-8 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-xs font-medium text-white backdrop-blur-3xl">
                  Border Magic
                  <button className="group flex items-center justify-center px-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white h-4 w-4  group-hover:scale-125 group-hover:rotate-3 transition duration-200"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M18 6l-12 12" />
                      <path d="M6 6l12 12" />
                    </svg>
                  </button>
                </span>
              </button>
            </div>

            <div className="text-sm flex items-center mx-1">
              <button className="relative inline-flex h-8 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-xs font-medium text-white backdrop-blur-3xl">
                  Border Magic
                  <button className="group flex items-center justify-center px-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white h-4 w-4  group-hover:scale-125 group-hover:rotate-3 transition duration-200"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M18 6l-12 12" />
                      <path d="M6 6l12 12" />
                    </svg>
                  </button>
                </span>
              </button>
            </div>

            <div className="text-sm flex items-center mx-1">
              <button className="relative inline-flex h-8 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-xs font-medium text-white backdrop-blur-3xl">
                  Border Magic
                  <button className="group flex items-center justify-center px-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white h-4 w-4  group-hover:scale-125 group-hover:rotate-3 transition duration-200"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M18 6l-12 12" />
                      <path d="M6 6l12 12" />
                    </svg>
                  </button>
                </span>
              </button>
            </div>

            <div className="text-sm flex items-center mx-1">
              <button className="relative inline-flex h-8 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-xs font-medium text-white backdrop-blur-3xl">
                  Border Magic
                  <button className="group flex items-center justify-center px-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white h-4 w-4  group-hover:scale-125 group-hover:rotate-3 transition duration-200"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M18 6l-12 12" />
                      <path d="M6 6l12 12" />
                    </svg>
                  </button>
                </span>
              </button>
            </div>

            <div className="text-sm flex items-center mx-1">
              <button className="relative inline-flex h-8 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-xs font-medium text-white backdrop-blur-3xl">
                  Border Magic
                  <button className="group flex items-center justify-center px-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white h-4 w-4  group-hover:scale-125 group-hover:rotate-3 transition duration-200"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M18 6l-12 12" />
                      <path d="M6 6l12 12" />
                    </svg>
                  </button>
                </span>
              </button>
            </div>

            <div className="text-sm flex items-center mx-1">
              <button className="relative inline-flex h-8 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-xs font-medium text-white backdrop-blur-3xl">
                  Border Magic
                  <button className="group flex items-center justify-center px-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white h-4 w-4  group-hover:scale-125 group-hover:rotate-3 transition duration-200"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M18 6l-12 12" />
                      <path d="M6 6l12 12" />
                    </svg>
                  </button>
                </span>
              </button>
            </div>

            <div className="bg-slate-700 p-2 rounded-xl text-sm flex items-center mx-1">
              <p className="text-xs">Tag One</p>
              <div>
                <button className="group flex items-center justify-center px-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white h-4 w-4  group-hover:scale-125 group-hover:rotate-3 transition duration-200"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M18 6l-12 12" />
                    <path d="M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <Pagination className="max-[1024px]:hidden">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>

          <div className="max-w-[100px] min-w-[100px]">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        {children}
        <Pagination className="text-white">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default Filters;
