import { BackgroundBeams } from "./ui/background-beams";

const Footer = () => {
  return (
    <footer id="footer" className="w-full relative h-full -mt-[100px]">
      <div className="h-[40rem] max-[600px]:h-[30rem] w-full bg-black rounded-md relative flex flex-col items-center justify-center antialiased">
        <div className="max-w-2xl mx-auto p-4">
          <h1 className="relative z-10 text-4xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
            Join the waitlist
          </h1>
          <p></p>
          <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
            Welcome to MailJet, the best transactional email service on the web.
            We provide reliable, scalable, and customizable email solutions for
            your business. Whether you&apos;re sending order confirmations,
            password reset emails, or promotional campaigns, MailJet has got you
            covered.
          </p>
          <input
            type="text"
            placeholder="hi@manuarora.in"
            className="rounded-lg border p-1 border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4 text-neutral-300 bg-neutral-950 placeholder:text-gray-700"
          />
        </div>
      </div>
      <div className="w-full bg-black mx-auto h-full py-10 px-5 flex items-start">
        <div className="w-full z-10 h-full grid grid-cols-4 max-[950px]:grid-cols-2 max-[600px]:grid-cols-1 gap-4">
          <div className="p-4 flex flex-col justify-start items-start">
            <h5 className="cursor-pointer hover:underline decoration-white decoration-dashed underline-offset-[5px] uppercase text-white  font-semibold">
              gift cards
            </h5>
            <h5 className="cursor-pointer hover:underline decoration-white decoration-dashed underline-offset-[5px] uppercase text-white  font-semibold">
              find a store
            </h5>
            <h5 className="cursor-pointer hover:underline decoration-white decoration-dashed underline-offset-[5px] uppercase text-white font-semibold">
              nike journal
            </h5>
            <h5 className="cursor-pointer hover:underline decoration-white decoration-dashed underline-offset-[5px] uppercase text-white font-semibold">
              become a member
            </h5>
            <h5 className="cursor-pointer hover:underline decoration-white decoration-dashed underline-offset-[5px] uppercase text-white  font-semibold">
              student discount
            </h5>
            <h5 className="cursor-pointer hover:underline decoration-white decoration-dashed underline-offset-[5px] uppercase text-white font font-semibold">
              feedback
            </h5>
            <h5 className="cursor-pointer hover:underline decoration-white decoration-dashed underline-offset-[5px] uppercase text-white font-semibold">
              promo codes
            </h5>
          </div>
          <div className="p-4 flex flex-col justify-start items-start">
            <h5 className="cursor-pointer hover:underline decoration-white decoration-dashed underline-offset-[5px] uppercase text-white font-semibold">
              get help
            </h5>
            <h6 className="cursor-pointer hover:text-gray-400 text-gray-500 py-1 text-sm font-semibold">
              Order Status
            </h6>
            <h6 className="cursor-pointer hover:text-gray-400 text-gray-500 py-1 text-sm font-semibold">
              Shipping and Delivery
            </h6>
            <h6 className="cursor-pointer hover:text-gray-400 text-gray-500 py-1 text-sm font-semibold">
              Returns
            </h6>
            <h6 className="cursor-pointer hover:text-gray-400 text-gray-500 py-1 text-sm font-semibold">
              Payment Options
            </h6>
            <h6 className="cursor-pointer hover:text-gray-400 text-gray-500 py-1 text-sm font-semibold">
              Contact Us
            </h6>
            <h6 className="cursor-pointer hover:text-gray-400 text-gray-500 py-1 text-sm font-semibold">
              Nike Promo Codes Help
            </h6>
          </div>
          <div className="p-4 flex flex-col justify-start items-start">
            <h5 className="cursor-pointer hover:underline decoration-white decoration-dashed underline-offset-[5px] uppercase text-white font-semibold">
              join us
            </h5>
            <h6 className="cursor-pointer hover:text-gray-400 text-gray-500 py-1 text-sm  font-semibold">
              Nike App
            </h6>
            <h6 className="cursor-pointer hover:text-gray-400 text-gray-500 py-1 text-sm  font-semibold">
              Nike Run Club
            </h6>
            <h6 className="cursor-pointer hover:text-gray-400 text-gray-500 py-1 text-sm  font-semibold">
              Nike Training Club
            </h6>
            <h6 className="cursor-pointer hover:text-gray-400 uppercase text-gray-500 py-1 text-sm  font-semibold">
              snkrs
            </h6>
          </div>
          <div className="p-4 flex flex-col justify-start items-start">
            <h5 className="cursor-pointer hover:underline decoration-white decoration-dashed underline-offset-[5px] uppercase text-white font-semibold">
              about nike
            </h5>
            <h6 className="cursor-pointer hover:text-gray-400 text-gray-500 py-1 text-sm font-semibold">
              News
            </h6>
            <h6 className="cursor-pointer hover:text-gray-400 text-gray-500 py-1 text-sm font-semibold">
              Careers
            </h6>
            <h6 className="cursor-pointer hover:text-gray-400 text-gray-500 py-1 text-sm font-semibold">
              Investors
            </h6>
            <h6 className="cursor-pointer hover:text-gray-400 text-gray-500 py-1 text-sm font-semibold">
              Sustainability
            </h6>
            <h6 className="cursor-pointer hover:text-gray-400 text-gray-500 py-1 text-sm font-semibold">
              Purpose
            </h6>
          </div>
          <div className="hidden max-[600px]:flex justify-center items-center pt-[2%]">
            <div className="rounded-full p-2.5 mx-2 hover:bg-[#f5f5f5] duration-[0.5s] bg-gray-600 cursor-pointer">
              <img
                className="max-w-[25px] max-h-[25px]"
                alt="instagram"
                src="/instagram-icon.svg"
              />
            </div>
            <div className="rounded-full p-2.5 mx-2 hover:bg-[#f5f5f5] duration-[0.5s] bg-gray-600 cursor-pointer">
              <img
                className="max-w-[25px] max-h-[25px]"
                alt="facebook"
                src="/facebook-icon.svg"
              />
            </div>
            <div className="rounded-full p-2.5 mx-2  hover:bg-[#f5f5f5] duration-[0.5s] bg-gray-600 cursor-pointer">
              <img
                className="max-w-[25px] max-h-[25px]"
                alt="twitter"
                src="/twitter-icon.svg"
              />
            </div>
            <div className="rounded-full px-3 py-2.5 mx-2 hover:bg-[#f5f5f5] duration-[0.5s] bg-gray-600 cursor-pointer">
              <img
                className="max-w-[25px] max-h-[25px]"
                alt="youtube"
                src="/youtube-icon.svg"
              />
            </div>
          </div>
        </div>
        <div className="flex z-10 max-[600px]:hidden justify-center items-center pt-[2%] mr-2">
          <div className="wrapper flex space-x-2">
            <div className="button group relative flex items-center justify-center hover:justify-around h-16 w-16 bg-zinc-900 rounded-full cursor-pointer shadow-lg transition-all duration-300 ease-out hover:w-52">
              <div className="icon flex items-center justify-center h-16 w-16 rounded-full transition-all duration-300 ease-out hover:bg-[#1da1f2]">
                <img
                  className="max-w-[25px] max-h-[25px]"
                  alt="twitter"
                  src="/tiktok-icon.svg"
                />
              </div>
              <span className="text-[#1da1f2] text-lg mr-10 font-medium transition-all hidden group-hover:flex duration-300 ease-out">
                Twitter
              </span>
            </div>
            <div className="button group relative flex items-center justify-center hover:justify-around h-16 w-16 bg-zinc-900 rounded-full cursor-pointer shadow-lg transition-all duration-300 ease-out hover:w-52">
              <div className="icon flex items-center justify-center h-16 w-16 rounded-full transition-all duration-300 ease-out hover:bg-[#1da1f2]">
                <img
                  className="max-w-[25px] max-h-[25px]"
                  alt="twitter"
                  src="/tiktok-icon.svg"
                />
              </div>
              <span className="text-[#1da1f2] text-lg mr-10 font-medium transition-all hidden group-hover:flex duration-300 ease-out">
                Twitter
              </span>
            </div>
            <div className="button group relative flex items-center justify-center hover:justify-around h-16 w-16 bg-zinc-900 rounded-full cursor-pointer shadow-lg transition-all duration-300 ease-out hover:w-52">
              <div className="icon flex items-center justify-center h-16 w-16 rounded-full transition-all duration-300 ease-out hover:bg-[#1da1f2]">
                <img
                  className="max-w-[25px] max-h-[25px]"
                  alt="twitter"
                  src="/tiktok-icon.svg"
                />
              </div>
              <span className="text-[#1da1f2] text-lg mr-10 font-medium transition-all hidden group-hover:flex duration-300 ease-out">
                Twitter
              </span>
            </div>
            <div className="button group relative flex items-center justify-center hover:justify-around h-16 w-16 bg-zinc-900 rounded-full cursor-pointer shadow-lg transition-all duration-300 ease-out hover:w-52">
              <div className="icon flex items-center justify-center h-16 w-16 rounded-full transition-all duration-300 ease-out hover:bg-[#1da1f2]">
                <img
                  className="max-w-[25px] max-h-[25px]"
                  alt="twitter"
                  src="/tiktok-icon.svg"
                />
              </div>
              <span className="text-[#1da1f2] text-lg mr-10 font-medium transition-all hidden group-hover:flex duration-300 ease-out">
                Twitter
              </span>
            </div>
          </div>
        </div>
      </div>
      <BackgroundBeams />
    </footer>
  );
};

export default Footer;
