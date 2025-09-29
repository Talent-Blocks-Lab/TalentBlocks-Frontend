import { Link } from "react-router-dom";
import { FiExternalLink } from "react-icons/fi";
import Feedbacks from "./Feedbacks";

const Testimonials = () => {
  return (
    <section className="py-8 md:py-20 px-6 lg:px-28 bg-white">
      <div className="flex flex-col md:flex-row justify-center items-center gap-16">
        
        {/* Left Side */}
        <div className="max-w-md flex flex-col gap-6">
          <h4 className="text-zinc-900 text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug">
            What Our Community Says!
          </h4>
          <p className="text-neutral-600 text-base leading-relaxed">
          Hear from the talented individuals we've empowered across Africa. From curious beginners to confident builders, discover how TalentBlocks Lab transforms lives through grassroots talent development and inclusive learning.
          </p>
          <a
            href="https://t.me/+hAeLTBGmWW45OWZk"
            target="_blank"
            className="flex items-center justify-center w-56 h-12 px-5 py-3 bg-orange text-white rounded gap-2 hover:opacity-90 transition"
          >
            Join Our Community <FiExternalLink />
          </a>
        </div>

        {/* Right Side (Feedbacks) */}
        <div className="flex justify-center items-center">
          <Feedbacks />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
