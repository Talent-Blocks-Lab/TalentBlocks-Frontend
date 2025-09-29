import { useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown, Logo } from "./index";
import { IoMdMenu, IoMdClose } from "react-icons/io";

const menuItems = [
  {
    title: "About Us",
    route: "#about-us",
    isHash: true,
  },
  {
    title: "Programs ⌵",
    children: [
      {
        title: "UI/UX Design Course",
        route: "/",
      },
      {
        title: "Web2 Basics Course",
        route: "/",
      },
      {
        title: "Web2 Advance Course",
        route: "/",
      },
      {
        title: "Web3 (Blockchain & Solidity Course)",
        route: "/",
      },
      {
        title: "Non-Technical Programs (online)",
        route: "#non-technical",
        isHash: true,
      },
    ],
  },
  { title: "FAQs", route: "#faqs", isHash: true },
  { title: "Blogs", route: "/" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleHashClick = (e, route) => {
    e.preventDefault();
    const element = document.querySelector(route);
    if (element) {
      const navbarHeight = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav className="fixed z-40 bg-black bg-opacity-70 flex items-center justify-between h-[90px] mb-[162px] w-full py-[40px] px-4 md:px-2 lg:px-16 xl:px-[120px] text-white">
        <Logo width={150} height={30} img="/assets/full-logo-blue.png" />

        {/* Menu Items */}
        <div className="flex items-center gap-[30px]">
          {menuItems.map((item, index) => {
            if (item.children) {
              return (
                <div key={index} className="hidden md:block">
                  <Dropdown item={item} handleHashClick={handleHashClick} />
                </div>
              );
            } else {
              return (
                <div key={index} className="hidden md:block">
                  {item.isHash ? (
                    <a
                      href={item.route}
                      onClick={(e) => handleHashClick(e, item.route)}
                      className="text-white text-base font-[500] leading-relaxed cursor-pointer">
                      {item.title}
                    </a>
                  ) : (
                    <Link
                      to={item.route || ""}
                      className="text-white text-base font-[500] leading-relaxed">
                      {item.title}
                    </Link>
                  )}
                </div>
              );
            }
          })}
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2 lg:gap-[15px] xl:gap-[30px]">
          {/* Programs dropdown for md and below */}
          <div className="hidden sm:inline-flex md:hidden">
            <Dropdown item={menuItems.find((item) => item.children)} handleHashClick={handleHashClick} />
          </div>

          {/* Contacts - xl and up only */}
          <a
            className="hidden md:block text-white text-base font-medium leading-none cursor-pointer"
            href="#footer"
            onClick={(e) => handleHashClick(e, '#footer')}>
            Contacts
          </a>

          {/* Get Started - sm and up */}
          <a
            className="hidden sm:inline-flex w-[120px] xl:w-[164px] h-[40px] xl:h-[50px] text-base px-4 xl:px-8 py-2 xl:py-4 bg-blue-500 rounded justify-center items-center cursor-pointer"
            href="#explore"
            onClick={(e) => handleHashClick(e, '#explore')}>
            Get Started
          </a>

          {/* Mobile Menu Button - md and below */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden w-[40px] h-[40px] flex items-center justify-center">
            {isMobileMenuOpen ? (
              <IoMdClose size={24} />
            ) : (
              <IoMdMenu size={24} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 md:hidden">
          <div className="fixed top-0 right-0 w-80 bg-white shadow-xl">
            <div className="flex items-center justify-end pt-4">
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-full hover:bg-gray-100">
                <IoMdClose size={24} className="text-gray-600" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {menuItems.map((item, index) => (
                <div key={index}>
                  {item.children ? (
                    <MobileDropdown item={item} onClose={toggleMobileMenu} handleHashClick={handleHashClick} />
                  ) : item.isHash ? (
                    <a
                      href={item.route}
                      onClick={(e) => handleHashClick(e, item.route)}
                      className="block text-gray-800 text-base font-medium py-2 hover:text-blue-500 cursor-pointer">
                      {item.title}
                    </a>
                  ) : (
                    <Link
                      to={item.route || ""}
                      onClick={toggleMobileMenu}
                      className="block text-gray-800 text-base font-medium py-2 hover:text-blue-500">
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}

              <div className="pt-2 space-y-4">
                <a
                  href="#footer"
                  onClick={(e) => handleHashClick(e, '#footer')}
                  className="block text-gray-800 text-base font-medium py-2 hover:text-blue-500 cursor-pointer">
                  Contacts
                </a>
                <a
                  href="#explore"
                  onClick={(e) => handleHashClick(e, '#explore')}
                  className="block w-full text-center px-6 py-3 bg-blue-500 text-white rounded font-medium hover:bg-blue-600 cursor-pointer">
                  Get started
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const MobileDropdown = ({ item, onClose, handleHashClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = item?.children || [];

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        onClick={toggle}
        className="flex items-center gap-4 w-full text-gray-800 text-base font-medium py-2 hover:text-blue-500">
        <span>{item.title.replace(" ⌵", "")}</span>
        <span
          className={`transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}>
          ⌵
        </span>
      </button>

      {isOpen && (
        <div className="ml-4 mt-2 space-y-2">
          {menuItems.map((childItem) => (
            childItem.isHash ? (
              <a
                key={childItem.route}
                href={childItem.route}
                onClick={(e) => {
                  handleHashClick(e, childItem.route);
                  onClose();
                }}
                className="block text-gray-600 text-sm font-medium py-2 hover:text-blue-500 cursor-pointer">
                {childItem.title}
              </a>
            ) : (
              <Link
                key={childItem.route}
                to={childItem?.route || ""}
                onClick={onClose}
                className="block text-gray-600 text-sm font-medium py-2 hover:text-blue-500">
                {childItem.title}
              </Link>
            )
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;