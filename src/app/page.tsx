import {
  HeroSection,
  GlobeSection,
  ItemsList,
  ClientsSection,
} from "@/components";
import { HeroParallax } from "@/components/ui/hero-parallax";

const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail: "/card-image.png",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail: "/card-image.png",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail: "/card-image.png",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail: "/card-image.png",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail: "/card-image.png",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail: "/card-image.png",
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail: "/card-image.png",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail: "/card-image.png",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail: "/card-image.png",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail: "/card-image.png",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail: "/card-image.png",
  },

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail: "/card-image.png",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail: "/card-image.png",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail: "/card-image.png",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail: "/card-image.png",
  },
];
export default function Home() {
  return (
    <>
      <HeroSection />
      <HeroParallax products={products} />
      <ItemsList />
      <GlobeSection />
      <ClientsSection />
    </>
  );
}
