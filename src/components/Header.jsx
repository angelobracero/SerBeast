import { CiSearch } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { services } from "./servicesCategories";
import { FaAngleRight } from "react-icons/fa6";
import LoginRegisterModal from "./LoginRegisterModal";
import { useRef } from "react";

const Header = () => {
  const loginDialog = useRef();
  const [isOpen, setisOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  function toggleMenu() {
    setisOpen(!isOpen);
  }

  function openModal() {
    loginDialog.current.showModal();
  }

  return (
    <>
      <LoginRegisterModal ref={loginDialog} />

      <header className="sticky top-0 bg-lightblue text-gray-200 h-16 border-b-4 md:border-b-2 border-lightgreen z-50">
        <div className="flex items-center h-full w-[90%] md:w-[80%] mx-auto">
          <div className="flex items-center flex-grow">
            <a href="#">
              <h2 className="text-white font-montserrat text-3xl font-bold">
                SERBEAST
              </h2>
            </a>
            <nav className="hidden md:block ml-6">
              <ul className="flex gap-6 font-medium">
                <li className="hover:text-white cursor-pointer">
                  <a href="">About</a>
                </li>
                <li className="hover:text-white">
                  <button
                    onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                    className="cursor-pointer"
                  >
                    Services
                    <FaAngleRight
                      className={`inline-block ${isCategoryOpen && "rotate-90"}`}
                    />
                  </button>
                  {isCategoryOpen && (
                    <div className="fixed top-16 left-0 right-0 z-50 h-screen bg-[#003244] text-gray-200 font-medium">
                      <div className="md:w-[80%] mx-auto grid grid-cols-3 gap-5  pt-10 leading-8">
                        {services.map((service) => (
                          <ul key={service.category}>
                            <li className="font-bold text-lightgreen">
                              {service.category}
                            </li>
                            {service.items.map((item) => (
                              <li key={item.name}>
                                <a
                                  href="#"
                                  className="text-gray-200 hover:text-white"
                                >
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
                <li className="hover:text-white cursor-pointer">
                  <a href="">Professionals</a>
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
            <button
              onClick={openModal}
              className="font-medium hover:text-white cursor-pointer hidden md:block pt-[2px]"
            >
              Login/Signup
            </button>
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
