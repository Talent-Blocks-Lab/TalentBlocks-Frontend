import { Link } from "react-router-dom";
import { Dropdown, Logo } from "./index";

const menuItems = [
  {
    title: "About Us",
    route: "#about-us",
  },
  {
    title: "Programs ⌵",
    children: [
      {
        title: "UI/UX Design",
        route: "/product-design",
      },
      {
        title: "Frontend Development",
        route: "/frontend-dev",
      },
      {
        title: "Backend Development",
        route: "/backend-dev",
      },
      {
        title: "Fullstack Development",
        route: "/fullstack-dev",
      },
      {
        title: "Web3, Blockchain & Crypto Bootcamp",
        route: "/web3-blockchain",
      },
    ],
  },
  { title: "FAQs", route: "#faqs" },
  { title: "Blogs", route: "/blogs" },
];

const Navbar = () => {
  return (
    <nav className="fixed z-40 bg-grey bg-opacity-70 flex items-center justify-between h-[90px] w-full mb-[162px] px-[120px] py-[40px] text-white">
      <Logo
        img="/src/assets/full-logo-orange.png"
      />

      <div className="flex items-center gap-[30px]">
        {menuItems.map((item, index) =>
          item.children ? (
            <Dropdown key={index} item={item} />
          ) : (
            <ul
              key={index}
              className="items-center flex gap-[30px] text-white text-base font-[500] leading-relaxed">
              <li>
                <Link to={item.route || ""}>{item.title}</Link>
              </li>
            </ul>
          )
        )}
      </div>

      <div className="w-[278px] h-[50px] flex justify-start items-center gap-[30px] ml-20">
        <Link
          className="text-white text-base font-medium leading-none"
          to="#contacts">
          Contacts
        </Link>

        <Link
          className="w-[164px] h-[50px] px-8 py-4 bg-blue-500 rounded justify-center items-center gap-2.5 inline-flex"
          to="/available-courses">
          Get started
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
