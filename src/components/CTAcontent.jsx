import { HiCheckCircle } from "react-icons/hi";

const CTAcontent = () => {
  return (
    <section className="flex py-[70px] px-[120px] gap-[40px] bg-primary">
      <div className="flex-col text-white ml-[100px]">
        <p className="w-[88px] h-[22px] text-xs text-center flex justify-center items-center bg-white text-primary rounded-xl px-[8px]">
          Online Class
        </p>
        <h2 className="text-[40px] font-[600]">
          Unleash Your Creative Potential in Our Virtual Classes
        </h2>
        <p className="text-sm font-[400] leading-[24px] mb-[30px]">
          Lean and learn a professional Tech certificate that can get you
          valuable job tomorrow.
        </p>
        <div className="flex gap-[12px] text-sm font-[400] mb-1">
          <div className="flex justify-center items-center">
            <HiCheckCircle />
            <small>Self-Paced Learning</small>
          </div>
          <div className="flex justify-center items-center">
            <HiCheckCircle />
            <small>Updated Content</small>
          </div>
        </div>
        <div className="flex gap-[52px] text-sm font-[400]">
          <div className="flex justify-center items-center">
            <HiCheckCircle />
            <small>Cost-Effective</small>
          </div>
          <div className="flex justify-center items-center">
            <HiCheckCircle />
            <small>Flexibility</small>
          </div>
        </div>
        <p className="w-[176px] h-[50px] mt-[30px] rounded-[4px] border-[1px] border-white text-[16px] font-[400] text-center flex justify-center items-center py-[12.5px] px-[32px]">
          Coming soon
        </p>
      </div>
      <img src="/src/assets/cta.svg" alt="cta" width={406} height={326} />
    </section>
  );
};

export default CTAcontent;
