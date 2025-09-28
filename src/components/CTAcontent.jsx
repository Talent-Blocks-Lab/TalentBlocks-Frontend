import { HiCheckCircle } from "react-icons/hi";

const CTAcontent = () => {
  return (
    <section className="flex flex-col sm:flex-row py-[70px] lg:px-[80px] xl:px-[120px] gap-[40px] bg-primary">
      <div className="flex-col text-white ml-7 mr-7 md:ml-[60px] xl:ml-[100px]">
        <p className="w-[88px] h-[22px] text-xs text-center flex justify-center items-center bg-white text-primary rounded-xl px-[8px]">
          Online Class
        </p>
        <h2 className="text-[28px] lg:text-[40px] font-[600]">
          Unleash Your Creative Potential in Our Virtual Classes
        </h2>
{/* Image shown on mobile */}
        <img src="/src/assets/cta.svg" alt="cta" className="sm:hidden h-[426] w-full my-3" />

        <p className="text-sm font-[400] leading-[24px] mb-[30px]">
          Lean and learn a professional Tech certificate that can get you
          valuable job tomorrow.
        </p>
        <div className="flex flex-col sm:flex-row sm:gap-[12px] text-base lg:text-sm font-[400] mb-1">
          <div className="flex sm:justify-center items-center">
            <HiCheckCircle />
            <small>Self-Paced Learning</small>
          </div>
          <div className="flex sm:justify-center items-center">
            <HiCheckCircle />
            <small>Updated Content</small>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row sm:gap-[52px] text-base lg:text-sm font-[400]">
          <div className="flex sm:justify-center items-center">
            <HiCheckCircle />
            <small>Cost-Effective</small>
          </div>
          <div className="flex sm:justify-center items-center">
            <HiCheckCircle />
            <small>Flexibility</small>
          </div>
        </div>
        <p className="w-[176px] h-[50px] mt-[30px] rounded-[4px] border-[1px] border-white text-[16px] font-[400] text-center flex justify-center items-center py-[12.5px] px-[32px]">
          Coming soon
        </p>
      </div>
{/* Image shown on large devices */}

      <img src="/src/assets/cta.svg" alt="cta" className="hidden h-[426] sm:block w-[272px] lg:w-[406px]" />
    </section>
  );
};

export default CTAcontent;
