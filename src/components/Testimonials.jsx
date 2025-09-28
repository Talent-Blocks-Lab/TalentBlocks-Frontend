import { Link } from "react-router-dom";
import { FiExternalLink } from "react-icons/fi";
import Feedbacks from "./Feedbacks";

const Testimonials = () => {
  return (
    <section className="py-20 px-6 lg:px-28 bg-white">
      <div className="flex flex-col md:flex-row justify-center items-center gap-16">
        
        {/* Left Side */}
        <div className="max-w-md flex flex-col gap-6">
          <h4 className="text-zinc-900 text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug">
            What our Students say!
          </h4>
          <p className="text-neutral-600 text-base leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Amet sociis tincidunt feugiat nisl
            dui malesuada pulvinar convallis. Mauris ac est pretium eleifend mattis
            bibendum sed adipiscing natoque.
          </p>
          <Link
            to="/register"
            className="flex items-center justify-center w-40 h-12 px-5 py-3 bg-orange text-white rounded gap-2 hover:opacity-90 transition"
          >
            Enroll Now <FiExternalLink />
          </Link>
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
