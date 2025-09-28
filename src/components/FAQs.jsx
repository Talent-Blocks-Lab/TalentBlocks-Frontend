import { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { CiCirclePlus } from "react-icons/ci";

const faqsData = [
  {
    id: "01",
    question: "Alright, but what exactly do you do?",
    answer:
      "As a creative agency we work with you to develop solutions to address your brand needs. That includes various aspects of brand planning and strategy, marketing and design.",
  },
  {
    id: "02",
    question:
      "I don't need a brand strategist but I need help executing an upcoming campaign. Can we still work together ?",
    answer:
      "The training is to take an absolute beginner from ground zero to a smart contract developer with the curriculum including HTML, CSS, UI/UX, Javascript, NodeJs, ReactJS and smart contract development with Solidity.",
  },
];

// Faq Item
const Faq = ({ id, question, answer }) => {
  const [isFaqShowing, setIsFaqShowing] = useState(false);

  return (
    <div
      onClick={() => setIsFaqShowing((prev) => !prev)}
      className="hover:bg-light-blue text-left py-6 px-4 sm:py-8 sm:px-6 lg:py-10 lg:px-8 cursor-pointer transition-colors"
    >
      {/* Question Row */}
      <div className="flex items-center">
        <p className="text-[#9D96A8] text-lg sm:text-xl lg:text-2xl xl:text-[32px] font-bold">
          {id}
        </p>
        <h4 className="text-black ml-4 sm:ml-6 lg:ml-8 text-base sm:text-lg lg:text-xl xl:text-2xl font-medium w-full">
          {question}
        </h4>
        <button className="text-2xl sm:text-3xl">
          {isFaqShowing ? <IoIosCloseCircle /> : <CiCirclePlus />}
        </button>
      </div>

      {/* Answer */}
      {isFaqShowing && (
        <p className="text-[#555] mt-4 sm:mt-6 lg:mt-8 ml-10 sm:ml-14 lg:ml-[75px] text-sm sm:text-base font-normal leading-relaxed">
          {answer}
        </p>
      )}
    </div>
  );
};

// FAQs Wrapper
const FAQs = () => {
  return (
    <section id="faqs" className="px-4 sm:px-8 lg:px-[100px] py-12 sm:py-16 lg:py-[100px] bg-neutral-blue">
      <h2 className="text-center text-black text-2xl sm:text-3xl lg:text-4xl font-semibold mb-8 sm:mb-12 lg:mb-14">
        Frequently Asked Questions
      </h2>
      {faqsData.map((data) => (
        <Faq key={data.id} id={data.id} question={data.question} answer={data.answer} />
      ))}
    </section>
  );
};

export default FAQs;
