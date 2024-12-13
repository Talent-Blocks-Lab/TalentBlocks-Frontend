import { IoIosCloseCircle } from "react-icons/io";
import { CiCirclePlus } from "react-icons/ci";
import { useState } from "react";

const Faq = ({ id, question, answer }) => {
  const [isFaqShowing, setIsFaqShowing] = useState(false);

  return (
    <div
      onClick={() => setIsFaqShowing((prev) => !prev)}
      className="hover:bg-light-blue text-left py-10 px-8">
      {/* questions elements */}
      <div className="flex items-center">
        <p className="text-[#9D96A8] text-[32px] font-bold">{id}</p>
        <h4 className="text-black text-2xl font-medium ml-8 w-full">
          {question}
        </h4>
        <button>
          {isFaqShowing ? <IoIosCloseCircle /> : <CiCirclePlus />}
        </button>
      </div>
      {/* answer element */}
      {isFaqShowing && (
        <p className="text-[#555] ml-[75px] mt-8 text-sm font-normal">
          {answer}
        </p>
      )}
    </div>
  );
};

export default Faq;
