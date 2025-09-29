import { FiPocket, FiSliders, FiGlobe, FiUsers, FiTrendingUp, FiHeart } from "react-icons/fi";
import bline from "/assets/bline.svg";
import gline from "/assets/gline.svg";
import oline from "/assets/oline.svg";


const cardsData = [
  {
    line: bline,
    svg: <FiUsers />,
    title: "Grassroots-Focused Discovery",
    description:
      "We actively seek talent in overlooked and underrepresented communities across Africa, ensuring everyone has access to quality tech education regardless of background.",
  },
  {
    line: gline,
    svg: <FiSliders />,
    title: "Hands-On Physical Learning",
    description:
      "Nothing beats the immersive experience of our physical bootcamps. Get hands-on mentorship, peer collaboration, and focused environments for mastering complex skills.",
  },
  {
    line: oline,
    svg: <FiGlobe />,
    title: "Global Connection",
    description:
      "Bridge local talent with international opportunities. Connect with the global tech ecosystem while building solutions for African challenges.",
  },
  {
    line: bline,
    svg: <FiTrendingUp />,
    title: "Comprehensive Skill Development",
    description:
      "From Web2 basics to advanced Web3 development, plus essential non-technical skills like tokenomics, community management, and product strategy.",
  },
  {
    line: gline,
    svg: <FiHeart />,
    title: "Community-Driven Growth",
    description:
      "Join a vibrant community of learners, mentors, and builders. Experience collaborative growth through peer-to-peer learning and ongoing support.",
  },
  {
    line: oline,
    svg: <FiPocket />,
    title: "Pathway Creation",
    description:
      "We don't just teach skills — we create sustainable pathways from curiosity to expertise to leadership, transforming learners into changemakers.",
  },
];

const WhyUs = () => {
  return (
    <section className="bg-neutral-blue flex flex-col justify-center items-center px-4 sm:px-6 md:px-[60px] lg:px-[120px] py-6 md:py-[70px]">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black text-center">
        Why Choose TalentBlocks Lab
      </h2>
      <p className="mb-12 mt-4 md:mb-[70px] text-sm sm:text-base leading-[22px] sm:leading-[25px] text-center text-[#555] max-w-2xl">
        We're more than a community — we're a movement to empower Africa's next
        generation of builders through grassroots discovery, inclusive learning,
        and pathways that connect local talent to global opportunities.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-[30px] w-full max-w-6xl">
        {cardsData.map((card, i) => (
          <div
            key={i}
            className="flex items-center justify-center sm:justify-start"
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
              <h5 className="mb-4 font-semibold text-black text-lg sm:text-xl md:text-2xl  text-left">
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