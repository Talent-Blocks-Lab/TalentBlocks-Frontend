import { Link } from "react-router-dom";
import { FiExternalLink } from "react-icons/fi";
import Feedbacks from "./Feedbacks";

const Testimonials = () => {
  return (
    <section className="py-[99px] pl-28 pr-[206px] bg-white ">
      <div className="justify-center items-center inline-flex gap-[116px] ">
        <div className="w-96 flex-col justify-start items-start gap-6 inline-flex">
          <h4 className="text-zinc-900 text-5xl font-bold font-['Inter'] leading-10">
            What our Student say!
          </h4>
          <p className="w-96 text-neutral-600 text-base font-normal font-['Inter'] leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Amet sociis tincidunt
            feugiat nisl dui malesuada pulvinar convallis. Mauris ac est pretium
            eleifend mattis bibendum sed adipiscing natoque.
          </p>

          <Link
            to="/register"
            className="text-white w-40 h-12 px-5 py-4 bg-orange rounded justify-center items-center gap-2.5 inline-flex">
            Enroll Now <FiExternalLink />
          </Link>
        </div>

        <Feedbacks />
      </div>
    </section>
  );
};

export default Testimonials;
