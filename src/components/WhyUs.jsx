import { FiPocket, FiSliders, FiGlobe } from "react-icons/fi";
import bline from "../assets/bline.svg";
import gline from "../assets/gline.svg";
import oline from "../assets/oline.svg";

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
    <section className="bg-neutral-blue flex flex-col justify-center items-center px-[120px] py-[70px]">
      <h2 className="text-4xl font-[600] text-black text-center">
        Why choose TalentsBlocks
      </h2>
      <p className="mb-[70px] text-base font-[400] leading-[25px] text-center w-[956px] text-[#555]">
        Lorem ipsum dolor sit amet consectetur. Amet sociis tincidunt feugiat
        nisl dui malesuada pulvinar convallis. Mauris ac est pretium eleifend
        mattis bibendum sed adipiscing natoque.
      </p>
      {/* Cards */}
      <div className="flex flex-wrap gap-[30px] items-center">
        {cardsData.map((card, i) => (
          <div key={i} className="flex justify-between items-center">
            <img src={card.line} alt={card.title} width={4} height={217} />
            <div className="flex-col flex justify-start items-start mx-[44px]">
              <div className="mb-[29px] flex justify-center items-center w-14 h-14 text-white bg-neutral-200 rounded-lg">
                <div className="bg-primary w-6 h-6 flex justify-center items-center rounded-full">
                  {card.svg}
                </div>
              </div>
              <h5 className="mb-[21px] text-black text-2xl font-[700]">
                {card.title}
              </h5>
              <p className="w-[323px]">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
