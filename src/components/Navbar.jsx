import { useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown, Logo } from "./index";
import { IoMdMenu, IoMdClose } from "react-icons/io";

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="fixed z-40 bg-black bg-opacity-70 flex items-center justify-between h-[90px] w-full mb-[162px] py-[40px] lg:px-20 text-white">
        <Logo
          width={250}
          height={0}
          img="/src/assets/full-logo-blue.png"
        />

        {/* Menu Items */}
        <div className="flex items-center gap-[30px]">
          {menuItems.map((item, index) => {
            if (item.children) {
              // Programs dropdown - show on lg and up
              return (
                <div key={index} className="hidden md:block">
                  <Dropdown item={item} />
                </div>
              );
            } else {
              // Other menu items - show only on lg and up
              return (
                <div key={index} className="hidden md:block">
                  <Link 
                    to={item.route || ""} 
                    className="text-white text-base font-[500] leading-relaxed"
                  >
                    {item.title}
                  </Link>
                </div>
              );
            }
          })}
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-[15px] lg:gap-[30px]">
          {/* Programs dropdown for md and below - positioned close to menu button */}
          <div className="hidden sm:inline-flex md:hidden">
            <Dropdown item={menuItems.find(item => item.children)} />
          </div>

          {/* Contacts - lg and up only */}
          <Link
            className="hidden md:block text-white text-base font-medium leading-none"
            to="#contacts"
          >
            Contacts
          </Link>

          {/* Get Started - sm and up */}
          <Link
            className="hidden sm:inline-flex w-[120px] lg:w-[164px] h-[40px] lg:h-[50px] text-base px-4 lg:px-8 py-2 lg:py-4 bg-blue-500 rounded justify-center items-center"
            to="/available-courses"
          >
            Get Started
          </Link>

          {/* Mobile Menu Button - md and below */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden w-[40px] h-[40px] flex items-center justify-center"
          >
            {isMobileMenuOpen ? <IoMdClose size={24} /> : <IoMdMenu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 md:hidden">
          <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-lg">
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-xl font-semibold text-gray-800">Menu</h2>
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-full hover:bg-gray-100"
              >
                <IoMdClose size={24} className="text-gray-600" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {menuItems.map((item, index) => (
                <div key={index}>
                  {item.children ? (
                    <MobileDropdown item={item} onClose={toggleMobileMenu} />
                  ) : (
                    <Link
                      to={item.route || ""}
                      onClick={toggleMobileMenu}
                      className="block text-gray-800 text-base font-medium py-2 hover:text-blue-500"
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}

              <div className="pt-6 border-t space-y-4">
                <Link
                  to="#contacts"
                  onClick={toggleMobileMenu}
                  className="block text-gray-800 text-base font-medium py-2 hover:text-blue-500"
                >
                  Contacts
                </Link>
                <Link
                  to="/available-courses"
                  onClick={toggleMobileMenu}
                  className="block w-full text-center px-6 py-3 bg-blue-500 text-white rounded font-medium hover:bg-blue-600"
                >
                  Get started
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const MobileDropdown = ({ item, onClose }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = item?.children || [];

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        onClick={toggle}
        className="flex items-center justify-between w-full text-gray-800 text-base font-medium py-2 hover:text-blue-500"
      >
        <span>{item.title.replace(' ⌵', '')}</span>
        <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          ⌵
        </span>
      </button>
      
      {isOpen && (
        <div className="ml-4 mt-2 space-y-2">
          {menuItems.map((childItem) => (
            <Link
              key={childItem.route}
              to={childItem?.route || ""}
              onClick={onClose}
              className="block text-gray-600 text-sm font-medium py-2 hover:text-blue-500"
            >
              {childItem.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;