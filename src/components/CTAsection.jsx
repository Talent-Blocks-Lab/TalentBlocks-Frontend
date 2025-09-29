import React from "react";

const CTAsection = () => {
  return (
    <section className="bg-white px-6 sm:px-10 md:px-[60px] lg:px-[120px] py-12 md:py-[70px]">
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-7 bg-[#081131] text-white rounded-xl py-10 sm:py-12 lg:py-[70px] px-6 sm:px-10 lg:px-[120px]">
        
        {/* Left Side - Text */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6">
            Ready to Transform Your Future with Web3?
          </h2>
          <p className="text-sm sm:text-base md:text-lg font-normal mb-7">
            Join our grassroots-focused bootcamps and become part of Africa's next generation of builders. From Web2 foundations to Web3 innovation, we create pathways from curiosity to expertise to leadership.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
            <a
              className="flex items-center justify-center bg-primary border-primary border-2 rounded h-12 w-full sm:w-40 px-8 font-medium"
              href="#explore"
            >
              Get Started
            </a>

            <a
              className="flex items-center justify-center border-white border-2 rounded h-12 w-full sm:w-40 px-8 font-medium"
              href="#footer"
            >
              WhatsApp
            </a>
          </div>
        </div>

        {/* Right Side - Image */}
        <img
          src="/assets/CTAsection.png"
          alt="CTA"
          className="w-full max-w-[400px] h-auto object-contain"
        />
      </div>
    </section>
  );
};

export default CTAsection;