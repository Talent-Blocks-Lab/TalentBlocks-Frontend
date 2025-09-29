import { Link } from "react-router-dom";
import uiImage from "/assets/ui.svg"; 

const cardsData = [
  {
    title: "UI/UX Design Course",
    subjects: ["Figma", "Wireframing", "Prototype", "User Research", "Product"],
    description:
      "At Talentblocks Lab, we recognize the power of hands-on, face-to-face learning. In the ever-evolving landscape of technology, nothing beats the immersive experience of a physical classroom.",
    type: "Physical class",
    duration: "8 weeks",
    btn: "Learn More",
    route: "/ui-ux",
    img: uiImage,
  },
  {
    title: "Web2 Basics Course",
    subjects: ["Internet","HTTP", "HTML", "CSS", "JavaScript", "Git & Github"],
    description:
      "At Talentblocks Lab, we recognize the power of hands-on, face-to-face learning. In the ever-evolving landscape of technology, nothing beats the immersive experience of a physical classroom.",
    type: "Physical class",
    duration: "16 weeks",
    btn: "Learn More",
    route: "/web2-basics",
    img: uiImage,
  },
  {
    title: "Web2 Advance Course",
    subjects: ["ReactJs", "Node.js", "Databases", "API", "TypeScript"],
    description:
      "At Talentblocks Lab, we recognize the power of hands-on, face-to-face learning. In the ever-evolving landscape of technology, nothing beats the immersive experience of a physical classroom.",
    type: "Physical class",
    duration: "16 weeks",
    btn: "Learn More",
    route: "/web2-advance",
    img: uiImage,
  },
  {
    title: "Blockchain & Solidity Course",
    subjects: ["Solidity", "Web3 Frontend", "Hardhat", "Foundry", "IPFS"],
    description:
      "At Talentblocks Lab, we recognize the power of hands-on, face-to-face learning. In the ever-evolving landscape of technology, nothing beats the immersive experience of a physical classroom.",
    type: "Physical class",
    duration: "16 weeks",
    route: "/solidity-course",
    img: uiImage,
  },
];

const Explore = () => {
  return (
    <section className="flex flex-col bg-white px-8 md:px-2 xl:px-[173px] pt-[60px] pb-20 text-center">
      <div className="flex flex-col items-center justify-center mb-[70px]">
        <h2 className="md:w-[655px] text-3xl lg:text-4xl text-black font-[600] mb-[16px]">
          Explore the courses we offer
        </h2>
        <p className="md:w-[576px] lg:w-[956px] text-[#555] text-center text-base">
          Lorem ipsum dolor sit amet consectetur. Amet sociis tincidunt feugiat
          nisl dui malesuada pulvinar convallis. Mauris ac est pretium eleifend
          mattis bibendum sed adipiscing natoque.
        </p>
      </div>

      <div className="flex ml-2 md:pl-8 gap-2 md:gap-11 lg:gap-10 items-center justify-center">
        <div className="flex flex-col justify-center items-center">
          {[1, 2, 3, 4].map((number, index) => (
            <div key={index}>
              <div
                className={`flex text-sm sm:text-[28px] font-[500] ${
                  index === 0 || index === 3 ? "text-black" : "text-grey"
                } justify-center items-center w-5 sm:w-[38px] h-5 sm:h-[38px] mb-1 border-solid border-[1px] border-grey`}>
                {number}
              </div>
              {index < 3 && (
                <>
                  <div className="hidden md:block w-0.5 h-[332px] bg-grey mb-1 ml-5"></div>
                  <div className="md:hidden w-[1px] h-[635px] bg-grey mb-1 ml-2 sm:ml-5"></div>
                </>
              )}
            </div>
          ))}
        </div>

        <div className="flex-col space-y-10 ml-1 mr-6 md:mr-0">
          {cardsData.map((card, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row w-full h-auto pr-4 sm:pr-0 xl:pl-6 md:gap-[32px] rounded-sm shadow border-solid opacity-[0.6] hover:opacity-[1] cursor-pointer">
              <div className="flex flex-col my-2 xl:my-6 sm:w-full">
                <h3 className="text-left text-sm xl:text-3xl text-black font-[600] mb-2">
                  {card.title}
                </h3>
                <div className="flex gap-x-1 md:gap-x-2 text-center text-[8px] sm:text-[10px] font-[600] mb-4">
                  {card.subjects.map((subject, idx) => (
                    <p
                      key={idx}
                      className="px-[8px] py-[6px] bg-[#f5f5f5] font-manrope">
                      {subject}
                    </p>
                  ))}
                </div>
                <img src={card.img} alt={card.title} className="w-full h-full md:hidden" />
                <p className="text-left mb-[38px] leading-[25px]">
                  {card.description}
                </p>
                <div className="flex justify-between">
                  <div className="text-left">
                    <small className="text-[14px] font-[600] text-[#101828]">
                      {card.type}
                    </small>
                    <br />
                    <small className="text-[14px] font-[400] text-[#667085]">
                      {card.duration}
                    </small>
                  </div>
                  <div>
                    <Link
                      to={card.route}
                      className="w-[171px] h-[50px] rounded-sm flex bg-primary text-white items-center justify-center px-[20px] py-[12px]">
                      Learn More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none">
                        <path
                          d="M7 17L17 7M17 7L7 7M17 7V17"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              <img src={card.img} alt={card.title} className="w-full h-full hidden md:block" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Explore;
