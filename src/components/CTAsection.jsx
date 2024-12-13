import { Link } from "react-router-dom";

const CTAsection = () => {
  return (
    <section className="bg-white py-[70px] px-[120px]">
      <div className=" flex gap-7 bg-[#081131] text-white py-[70px] px-[120px]">
        <div className="flex-col">
          <h2 className="text-4xl font-semibold mb-7">
            Ready to lean a Tech skill for better Tomorrow?
          </h2>
          <p className="text-sm font-normal mb-7">
            Lean and learn a professional Tech certificate that can get your
            valuable job tomorrow.
          </p>
          <div className="flex gap-6">
            <Link
              className="flex items-center bg-primary border-primary border-2 rounded h-12 w-40 py-4 px-8"
              to="/register">
              Get Started
            </Link>

            <Link
              className="flex items-center border-white border-2 rounded h-12 w-40 py-4 px-8"
              to="/contact">
              {" "}
              Contact us
            </Link>
          </div>
        </div>
        <img
          src="/src/assets/CTAsection.png"
          alt="CTA"
          width={400}
          height={300}
        />
      </div>
    </section>
  );
};

export default CTAsection;
