import { Link } from "react-router-dom";
import { Logo } from "./index";

import { FaLinkedinIn, FaFacebookF, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const socialLinks = [
  { icon: <FaLinkedinIn />, url: "https://linkedin.com" },
  { icon: <RiInstagramFill />, url: "https://instagram.com" },
  { icon: <FaFacebookF />, url: "https://facebook.com" },
  { icon: <FaTwitter />, url: "https://x.com/talentblockslab" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section
      id="footer"
      className="bg-[#E8EAEC] px-4 md:px-16 lg:px-[120px] py-4 md:py-14"
    >
      {/* Newsletter */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">
        <div>
          <h4 className="text-black text-[28px] md:text-[32px] font-bold">
            Join Our Community
          </h4>
          <small className="text-base font-normal">
            Stay updated with bootcamp schedules, learning resources, and opportunities.
          </small>
        </div>
        <div>
          <div className="flex flex-col md:flex-row md:items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 w-full md:w-64 h-12 rounded-sm border border-gray-300 mr-0 md:mr-5 mb-4 md:mb-0"
            />
            <button className="bg-primary text-white text-sm font-normal w-full md:w-40 h-12 rounded-sm">
              Join Now
            </button>
          </div>
          <small className="text-black text-sm font-normal block mt-3">
            We care about your data. Check our{" "}
            <Link to="/" className="underline underline-offset-4">
              privacy policy
            </Link>
          </small>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="flex flex-col md:flex-row items-center justify-between mt-[70px] gap-6">
        <Logo
          width={150}
          height={60}
          img={"/assets/full-logo-orange.png"}
        />
        <p className="text-base font-normal text-[#6B6975] text-center">
          Copyright © {currentYear} TalentBlocks Lab
        </p>
        <div className="flex gap-4">
          {socialLinks.map((item, i) => (
            <a
              key={i}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6B6975] hover:text-primary text-lg"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;