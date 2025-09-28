import { Link } from "react-router-dom";

const CTAsection = () => {
  return (
    <section className="bg-white px-6 sm:px-10 md:px-[60px] lg:px-[120px] py-12 md:py-[70px]">
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-7 bg-[#081131] text-white rounded-xl py-10 sm:py-12 lg:py-[70px] px-6 sm:px-10 lg:px-[120px]">
        
        {/* Left Side - Text */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6">
            Ready to learn a Tech skill for a better Tomorrow?
          </h2>
          <p className="text-sm sm:text-base md:text-lg font-normal mb-7">
            Learn and earn a professional Tech certificate that can land you a
            valuable job tomorrow.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
            <Link
              className="flex items-center justify-center bg-primary border-primary border-2 rounded h-12 w-full sm:w-40 px-8 font-medium"
              to="/register"
            >
              Get Started
            </Link>

            <Link
              className="flex items-center justify-center border-white border-2 rounded h-12 w-full sm:w-40 px-8 font-medium"
              to="/contact"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Right Side - Image */}
        <img
          src="/src/assets/CTAsection.png"
          alt="CTA"
          className="w-full max-w-[400px] h-auto object-contain"
        />
      </div>
    </section>
  );
};

export default CTAsection;
