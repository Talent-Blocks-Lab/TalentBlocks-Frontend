import { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { CiCirclePlus } from "react-icons/ci";

const faqsData = [
  {
    id: "01",
    question: "What is TalentBlocks Lab?",
    answer:
      "TalentBlocks Lab is a grassroots-focused Web3 community platform committed to discovering, nurturing, and empowering individuals from underrepresented communities across Africa. We provide comprehensive training in both Web2 and Web3 technologies, creating sustainable pathways from curiosity to expertise to leadership.",
  },
  {
    id: "02",
    question: "What programs do you offer?",
    answer:
      "We offer physical bootcamp programs across three main tracks: Web2 Basic (foundation programming skills, HTML, CSS, JavaScript), Web2 Advanced (frameworks, backend, databases, APIs), and Web3 (blockchain development, Solidity, smart contracts, DeFi). We also provide training in non-technical skills like community management, tokenomics, product management, and Web3 marketing.",
  },
  {
    id: "03",
    question: "Do I need coding experience to join?",
    answer:
      "Not at all! Our Web2 Basic Track is designed for absolute beginners with no prior coding experience. We take you from ground zero through foundation programming skills. For those with existing knowledge, we offer advanced tracks in both Web2 and Web3 development.",
  },
  {
    id: "04",
    question: "Why physical bootcamps instead of online learning?",
    answer:
      "We believe nothing beats the immersive experience of physical bootcamps for mastering complex technical skills. Our in-person programs provide hands-on mentorship, peer collaboration, and a focused environment that accelerates learning and builds lasting community connections.",
  },
  {
    id: "05",
    question: "Are there opportunities for non-technical people?",
    answer:
      "Absolutely! The tech ecosystem needs diverse skills beyond coding. We offer training in digital marketing, product management, technical writing, tokenomics, Web3 community management, DeFi strategy, NFT marketing, and blockchain content creation. Everyone has a role to play in building the future.",
  },
  {
    id: "06",
    question: "How does TalentBlocks Lab support grassroots communities?",
    answer:
      "We actively seek talent in overlooked and underrepresented communities across Africa, ensuring everyone has access to quality tech education regardless of background. We break down barriers through inclusive learning, practical application, and by connecting local talent with global opportunities.",
  },
  {
    id: "07",
    question: "What happens after completing a bootcamp?",
    answer:
      "We don't just teach skills — we create pathways. After completing our programs, you join a vibrant community of learners, mentors, and builders. We help you connect with real-world projects, international opportunities, and ongoing support to transform from a learner into a builder, and from a builder into a leader.",
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