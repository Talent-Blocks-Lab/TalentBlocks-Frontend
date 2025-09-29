import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import quoteIcon from "/assets/quote-left.svg";

const Feedbacks = () => {
  const [index, setIndex] = useState(0);
  const [feedbacks, setFeedbacks] = useState([]);

  const getAllFeedbacks = async () => {
    try {
      const res = await fetch("http://localhost:8500/api/v1/feedbacks");
      const data = await res.json();
      setFeedbacks(data);
    } catch (error) {
      console.error("Error fetching feedbacks:", error);
      setFeedbacks([]);
    }
  };

  useEffect(() => {
    getAllFeedbacks();
  }, []);

  useEffect(() => {
    if (feedbacks.length === 0) return;
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % feedbacks.length);
    }, 20000);
    return () => clearInterval(interval);
  }, [feedbacks]);

  const prevTestimonialHandler = () => {
    setIndex((prev) => (prev - 1 + feedbacks.length) % feedbacks.length);
  };

  const nextTestimonialHandler = () => {
    setIndex((prev) => (prev + 1) % feedbacks.length);
  };

  if (feedbacks.length === 0) {
    return <h2 className="text-center text-gray-500">No feedbacks to display</h2>;
  }

  const current = feedbacks[index];

  return (
    <div
      className="relative flex flex-col justify-center items-center w-[90%] sm:w-[400px] lg:w-[413px] px-10 py-8 rounded-xl shadow-md"
      style={{
        backgroundColor: current?.favColor || "#FFA630",
        color: current?.textColor || "#1c1c1c",
      }}
    >
      {/* Large Quote Icon */}
      <div className="absolute -top-8 -left-4 select-none pointer-events-none">
        <img
          src={quoteIcon}
          alt="quote"
          className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 opacity-80"
        />
      </div>

      {/* Avatar + Nav */}
      <div className="flex justify-center items-center gap-16 mb-7">
        <button onClick={prevTestimonialHandler} className="hover:scale-110 transition">
          <FaArrowLeft />
        </button>
        <img
          src={current.avatar}
          alt={current.fullname}
          className="w-20 h-20 rounded-full object-cover"
        />
        <button onClick={nextTestimonialHandler} className="hover:scale-110 transition">
          <FaArrowRight />
        </button>
      </div>

      {/* Title */}
      <h5 className="text-xl font-semibold mb-4">{current.title}</h5>

      {/* Comment */}
      <p className="text-[14px] sm:text-sm md:text-xl font-medium font-inter text-center mb-6 leading-relaxed">
        {current.comment}
      </p>

      {/* User Info */}
      <h5 className="text-xl font-semibold">{current.fullname}</h5>
      <small className="text-sm">{current.field}</small>
    </div>
  );
};

export default Feedbacks;