import { Link } from "react-router-dom";
import { Logo } from "./index";

import { FaLinkedinIn, FaFacebookF, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const socialLinks = [
  { icon: <FaLinkedinIn />, url: "https://linkedin.com" },
  { icon: <RiInstagramFill />, url: "https://instagram.com" },
  { icon: <FaFacebookF />, url: "https://facebook.com" },
  { icon: <FaTwitter />, url: "https://x.com" },
];

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <section id="contacts" className="bg-[#E8EAEC] px-[121px] py-14">
      <div className="flex gap-80">
        <div className="flex-col">
          <h4 className="text-black text-[32px] font-bold">Join With Us</h4>
          <small className="text-base font-normal">
            We'll send you Daily special offers.
          </small>
        </div>
        <div className="flex-col">
          <input
            type="text"
            placeholder="Enter your email"
            className="p-2 w-64 h-12 rounded-sm mr-5"
          />
          <button className="bg-primary text-white text-sm font-normal w-40 h-12 rounded-sm mb-4">
            Join Now
          </button>{" "}
          <br />
          <small className="text-black text-sm font-normal ">
            We care about your data. Check our{" "}
            <Link to="/privacy" className="underline underline-offset-4">
              privacy policy
            </Link>
          </small>
        </div>
      </div>
      <div className="flex items-center justify-between mt-[70px]">
        <Logo
          img={"/src/assets/navbarLogo.svg"}
          color={"text-black"}
          fontSize={"text-[24px]"}
          fontWeight={"font-[700]"}
        />
        <p className="text-base font-normal text-[#6B6975]">
          Copyright ©_{currentYear} TalentsBlocks
        </p>
        <div className="flex gap-3">
          {socialLinks.map((item, i) => (
            <Link key={i} href={item.url} target="_blank">
              {item.icon}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
