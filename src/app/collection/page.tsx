import { kanit, anton, inter } from "@/utils/fonts";
import { Filters } from "@/components";
import { HoverEffect } from "@/components/ui/card-hover-effect";

const Collection = () => {
  const projects = [
    {
      title: "Stripe",
      description:
          "A technology company that builds economic infrastructure for the internet.",
      link: "https://stripe.com",
    },
    {
      title: "Netflix",
      description:
          "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
      link: "https://netflix.com",
    },
    {
      title: "Google",
      description:
          "A multinational technology company that specializes in Internet-related services and products.",
      link: "https://google.com",
    },
    {
      title: "Meta",
      description:
          "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
      link: "https://meta.com",
    },
    {
      title: "Amazon",
      description:
          "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
      link: "https://amazon.com",
    },
    {
      title: "Microsoft",
      description:
          "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
      link: "https://microsoft.com",
    },
  ];

  return (
    <main className="mb-40">
      <div className="px-4 pb-10 pt-32 text-white text-left">
        <h1 className={`text-7xl ${kanit.className}`}>Collection</h1>
        <p className={`${inter.className} my-5 text-sm`}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel
          dignissimos deleniti ipsam possimus nesciunt
        </p>
      </div>
      <Filters>
        <div className="px-0 lg:pr-5 lg:pl-10 max-[650px]:px-0">
          <HoverEffect items={projects} />
        </div>
      </Filters>
    </main>
  );
};

export default Collection;
