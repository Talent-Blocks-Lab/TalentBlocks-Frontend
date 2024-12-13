import Faq from "./Faq";

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
      "The training is to take an absolute beginners from ground zero to a smart contract developer with the curriculum including HTML, CSS, UI/UX, Javascript, NodeJs, ReactJS and smart contract development with Solidity.",
  },
];

const FAQs = () => {
  return (
    <section id="faqs" className="p-[100px] bg-neutral-blue">
      <h2 className="text-center text-black text-4xl font-semibold mb-14">
        Frequently Asked Questions
      </h2>
      {faqsData.map((data) => (
        <Faq
          key={data.id}
          id={data.id}
          question={data.question}
          answer={data.answer}
        />
      ))}
    </section>
  );
};

export default FAQs;
