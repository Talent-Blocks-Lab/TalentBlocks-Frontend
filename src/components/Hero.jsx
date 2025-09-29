import { Link } from "react-router-dom";
import { Navbar } from "./index";

const Hero = () => {
  return (
    <header className="bg-[url('/assets/hero.jpg')] bg-center bg-no-repeat bg-cover">
      <div className="pb-10 bg-black bg-opacity-70 flex-col justify-start gap-[162px]">
        <Navbar />
        <div className="mx-4 sm:mx-14 md:mx-16 lg:mx-[110px] pt-[162px] flex-col justify-center text-white">
          <h1 className="text-center text-3xl md:text-[50px] lg:text-8xl font-[600]">
            Empowering Tomorrow's <span className="text-primary">Web3</span>{" "}
            Leaders Today
          </h1>
          <p className="text-center pt-[30px] text-xs lg:text-sm mb-[77px]">
            Dive into a World of Limitless Possibilities—Where Expertise Meets
            Ambition, and Every Skill Unlocks a New Door in Web3 Space.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <Link
            className="text-center bg-orange px-[32px] py-[16px] text-sm font-[400] text-white mr-[16px]"
            to="/register">
            Get Started
          </Link>

          <div className="hidden sm:block">
            <p className="w-[93px] origin-top-left rotate-6 text-center text-lime-400 text-base font-normal font-longcang leading-[13.78px]">
              All skills start from here
            </p>
            <svg
              className="mb-10"
              xmlns="http://www.w3.org/2000/svg"
              width="42"
              height="38"
              viewBox="0 0 42 38"
              fill="none">
              <g clipPath="url(#clip0_39_327)">
                <path
                  d="M40.9311 10.422C41.3812 12.0722 40.6589 13.3427 39.8415 14.4267C38.6845 15.9196 37.3551 17.3047 35.9306 18.5034C29.2237 23.8535 21.4759 25.8576 13.0028 24.9813C10.8493 24.7508 8.69331 24.2083 6.30408 23.7458C6.77456 25.9732 8.56568 27.6426 9.17686 29.9155C8.16287 29.8466 7.70525 29.1796 7.311 28.6369C5.70233 26.4041 4.10886 24.1243 2.57751 21.8128C1.85112 20.6957 1.95498 20.055 3.07283 19.4832C5.38582 18.2609 7.84593 17.8645 10.3911 18.3255C10.4849 18.3559 10.5799 18.5423 10.7536 18.806C9.58394 20.6579 7.1566 19.3531 5.65608 20.7866C8.64877 22.5857 11.9265 23.0246 15.2016 23.1515C18.6327 23.2769 22.0143 23.0751 25.2956 22.0627C28.5149 21.082 31.3703 19.4648 34.1611 17.5673C36.9835 15.7319 39.162 13.3248 40.9311 10.422Z"
                  fill="#7FFF30"
                />
              </g>
              <defs>
                <clipPath id="clip0_39_327">
                  <rect
                    width="28.3944"
                    height="34.4457"
                    fill="white"
                    transform="translate(41.5179 10.6121) rotate(107.943)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
