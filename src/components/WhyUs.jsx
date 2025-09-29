import { FiPocket, FiSliders, FiGlobe } from "react-icons/fi";
import bline from "/assets/bline.svg";
import gline from "/assets/gline.svg";
import oline from "/assets/oline.svg";

const cardsData = [
  {
    line: bline,
    svg: <FiPocket />,
    title: "Top-quality mentors",
    description:
      "Korem ipsum dolor sit amet consectetur. Consequat varius ultrices pharetra conse tellus. Facilisi at blandit non justo nisl.",
  },
  {
    line: gline,
    svg: <FiSliders />,
    title: "Support from start to finish",
    description:
      "Korem ipsum dolor sit amet consectetur. Consequat varius ultrices pharetra conse tellus. Facilisi at blandit non justo nisl.",
  },
  {
    line: oline,
    svg: <FiGlobe />,
    title: "Shareable Certification",
    description:
      "Korem ipsum dolor sit amet consectetur. Consequat varius ultrices pharetra conse tellus. Facilisi at blandit non justo nisl.",
  },
];

const WhyUs = () => {
  return (
    <section className="bg-neutral-blue flex flex-col justify-center items-center px-6 sm:px-10 md:px-[60px] lg:px-[120px] py-12 md:py-[70px]">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black text-center">
        Why choose TalentBlocks Lab
      </h2>
      <p className="mb-12 md:mb-[70px] text-sm sm:text-base leading-[22px] sm:leading-[25px] text-center text-[#555] max-w-2xl">
        Lorem ipsum dolor sit amet consectetur. Amet sociis tincidunt feugiat
        nisl dui malesuada pulvinar convallis. Mauris ac est pretium eleifend
        mattis bibendum sed adipiscing natoque.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-[30px] w-full max-w-6xl">
        {cardsData.map((card, i) => (
          <div
            key={i}
            className={`flex items-center justify-center sm:justify-start ${
              i === cardsData.length - 1
                ? "sm:col-span-2 sm:justify-self-center lg:col-span-1 lg:justify-self-auto"
                : ""
            }`}
          >
            {/* Line image */}
            <img
              src={card.line}
              alt={card.title}
              className="w-[4px] h-[150px] md:h-[217px] md: mr-5"
            />

            {/* Card Content */}
            <div className="flex-col flex justify-start items-start mx-0 sm:mx-4 md:mx-[44px]">
              <div className="mb-6 flex justify-center items-center w-12 h-12 sm:w-14 sm:h-14 text-white bg-neutral-200 rounded-lg">
                <div className="bg-primary w-6 h-6 flex justify-center items-center rounded-full">
                  {card.svg}
                </div>
              </div>
              <h5 className="mb-4 font-normal text-black text-lg sm:text-xl md:text-2xl  text-left">
                {card.title}
              </h5>
              <p className="max-w-xs text-sm sm:text-[14px] font-normal text-[#555] text-left">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
