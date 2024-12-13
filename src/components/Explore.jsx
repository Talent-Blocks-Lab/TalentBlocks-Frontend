import { Link } from "react-router-dom";
import uiImage from "../assets/ui.svg"; // Replace require with import

const cardsData = [
  {
    title: "UI/UX Design",
    subjects: ["Figma", "Wireframing", "Prototype", "User Research"],
    description:
      "At TalentsBlocks, we recognize the power of hands-on, face-to-face learning. In the ever-evolving landscape of technology, nothing beats the immersive experience of a physical classroom.",
    type: "Physical class",
    duration: "12 weeks",
    btn: "Learn More",
    route: "/ui-ux",
    img: uiImage,
  },
  {
    title: "Frontend Development",
    subjects: ["HTML", "CSS", "JavaScript", "React"],
    description:
      "At TalentsBlocks, we recognize the power of hands-on, face-to-face learning. In the ever-evolving landscape of technology, nothing beats the immersive experience of a physical classroom.",
    type: "Physical class",
    duration: "12 weeks",
    btn: "Learn More",
    route: "/frontend",
    img: uiImage,
  },
  {
    title: "Backend Development",
    subjects: ["Node.js", "Express", "Databases", "API"],
    description:
      "At TalentsBlocks, we recognize the power of hands-on, face-to-face learning. In the ever-evolving landscape of technology, nothing beats the immersive experience of a physical classroom.",
    type: "Physical class",
    duration: "12 weeks",
    btn: "Learn More",
    route: "/backend",
    img: uiImage,
  },
  {
    title: "Full Stack Development",
    subjects: ["Frontend", "Backend", "Database", "DevOps"],
    description:
      "At TalentsBlocks, we recognize the power of hands-on, face-to-face learning. In the ever-evolving landscape of technology, nothing beats the immersive experience of a physical classroom.",
    type: "Physical class",
    duration: "12 weeks",
    route: "/fullstack",
    img: uiImage,
  },
];

const Explore = () => {
  return (
    <section className="flex flex-col bg-white px-[173px] pt-[60px] pb-[128px] text-center">
      <div className="flex flex-col items-center justify-center">
        <h2 className="w-[655px] text-4xl text-black font-[600] mb-[16px]">
          Explore the courses we offer
        </h2>
        <p className="w-[956px] text-[#555] text-center mb-[70px] text-base">
          Lorem ipsum dolor sit amet consectetur. Amet sociis tincidunt feugiat
          nisl dui malesuada pulvinar convallis. Mauris ac est pretium eleifend
          mattis bibendum sed adipiscing natoque.
        </p>
      </div>

      <div className="flex gap-[60px] items-center justify-center">
        <div className="flex flex-col justify-center items-center">
          {[1, 2, 3, 4].map((number, index) => (
            <div key={index}>
              <div
                className={`flex text-[28px] font-[500] ${
                  index === 0 || index === 3 ? "text-black" : "text-grey"
                } justify-center items-center w-[38px] h-[38px] mb-1 border-solid border-2 border-grey`}>
                {number}
              </div>
              {index < 3 && (
                <div className="w-0.5 h-[292px] bg-grey mb-1"></div>
              )}
            </div>
          ))}
        </div>

        <div className="flex-col space-y-10">
          {cardsData.map((card, i) => (
            <div
              key={i}
              className="flex w-[1020px] h-[310px] pl-[24px] gap-[32px] rounded-sm shadow border-solid opacity-[0.6] hover:opacity-[1] cursor-pointer">
              <div className="flex flex-col my-[24px]">
                <h3 className="text-left text-3xl text-black font-[600]">
                  {card.title}
                </h3>
                <div className="flex gap-x-2 text-center text-[10px] font-[600] mb-4">
                  {card.subjects.map((subject, idx) => (
                    <p
                      key={idx}
                      className="px-[8px] py-[6px] bg-[#f5f5f5] font-manrope">
                      {subject}
                    </p>
                  ))}
                </div>
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
              <img src={card.img} alt={card.title} width={384} height={310} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Explore;
