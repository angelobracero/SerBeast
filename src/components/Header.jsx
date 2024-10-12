import { CiSearch } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import React from "react";
import { useState } from "react";

const Header = () => {
  const [isOpen, setisOpen] = useState(false);

  function toggleMenu() {
    setisOpen(!isOpen);
  }

  return (
    <>
      <header className="sticky top-0 bg-lightblue text-gray-200 h-16 border-b-4 md:border-b-2 border-lightgreen">
        <div className="flex items-center h-full w-[90%] md:w-[80%] mx-auto">
          <div className="flex items-center flex-grow">
            <a href="#">
              <h2 className="text-white font-montserrat text-3xl font-bold">
                SERBEAST
              </h2>
            </a>
            <nav className="hidden md:block ml-6">
              <ul className="flex space-x-6 font-medium">
                <li className="hover:text-white cursor-pointer">
                  <a href="">Services</a>
                </li>
                <li className="hover:text-white cursor-pointer">
                  <a href="">Professionals</a>
                </li>
                <li className="hover:text-white cursor-pointer">
                  <a href="">About</a>
                </li>
                <li className="hover:text-white cursor-pointer">
                  <a href="">Contact</a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex space-x-3 ml-auto">
            <CiSearch
              className="h-7 w-7 hover:text-white cursor-pointer"
              tabIndex={0}
              role="button"
            />
            {isOpen ? (
              <IoCloseOutline
                className="h-7 w-7 scale-125 text-gray-200 md:hover:text-white cursor-pointer md:hidden"
                onClick={toggleMenu}
              />
            ) : (
              <RxHamburgerMenu
                className="h-7 w-7 md:hover:text-white cursor-pointer md:hidden"
                onClick={toggleMenu}
              />
            )}
            <a
              href="#"
              className="font-medium hover:text-white cursor-pointer hidden md:block pt-[2px]"
            >
              Login/Signup
            </a>
          </div>
        </div>
      </header>

      {isOpen && (
        <div className="md:hidden fixed top-16 left-0 right-0 bottom-0 z-50 bg-lightblue text-gray-200 font-medium">
          <nav>
            <ul className="flex flex-col items-start space-y-4 p-4 justify-start ">
              <li>
                <a href="" className="hover:text-white cursor-pointer block">
                  Services
                </a>
              </li>
              <li>
                <a href="" className="hover:text-white cursor-pointer block">
                  Professionals
                </a>
              </li>
              <li>
                <a href="" className="hover:text-white cursor-pointer block">
                  About
                </a>
              </li>
              <li>
                <a href="" className="hover:text-white cursor-pointer block">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
