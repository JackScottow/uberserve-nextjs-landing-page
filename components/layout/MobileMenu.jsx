import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

const MobileMenu = ({ hiddenClass, handleRemove }) => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };
  return (
    <>
      <div className={`${hiddenClass} navbar-menu sticky z-50 transition duration-300 `}>
        <div className="navbar-backdrop fixed inset-0 bg-blueGray-800 opacity-25"></div>
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-10 px-6 bg-white border-r overflow-y-auto transition duration-300 ">
          <div className="flex items-center mb-8">
            <Link href="#" legacyBehavior>
              <a className="mr-auto text-3xl font-semibold leading-none">
                <img className="h-10" src="/assets/imgs/logos/uberserve.png" alt="UberServe" />
              </a>
            </Link>
            <button className="navbar-close" onClick={handleRemove}>
              <FontAwesomeIcon icon={faXmark} size="xl" />
            </button>
          </div>
          <div>
            <ul className="mobile-menu">
              <li className={isActive.key == 1 ? "mb-1 menu-item-has-children rounded-xl active" : "mb-1 menu-item-has-children rounded-xl"} onClick={() => handleToggle(1)}>
                <Link href="/" legacyBehavior>
                  <a className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500 rounded-xl">Home</a>
                </Link>
              </li>
              <li className="mb-1">
                <Link href="/services" legacyBehavior>
                  <a className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500">Services</a>
                </Link>
              </li>
              <li className="mb-1">
                <Link href="/team" legacyBehavior>
                  <a className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500">Our Team</a>
                </Link>
              </li>
              <li className="mb-1">
                <Link href="/contact" legacyBehavior>
                  <a className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500">Contact</a>
                </Link>
              </li>
            </ul>
            <div className="mt-4 pt-6 border-t border-blueGray-100">
              <Link href="/signup" legacyBehavior>
                <a className="block px-4 py-3 mb-3 text-xs text-center font-semibold leading-none bg-blue-400 hover:bg-blue-500 text-white rounded">Sign Up</a>
              </Link>
              <Link href="/login" legacyBehavior>
                <a className="block px-4 py-3 mb-2 text-xs text-center text-blue-500 hover:text-blue-700 font-semibold leading-none border border-blue-200 hover:border-blue-300 rounded">Log In</a>
              </Link>
            </div>
          </div>
          <div className="mt-auto mx-auto">
            <a href="https://www.facebook.com" className="mx-2">
              <FontAwesomeIcon icon={faFacebook} size="xl" className="text-blue-500" />
            </a>
            <a href="https://www.twitter.com" className="mx-2">
              <FontAwesomeIcon icon={faTwitter} size="xl" className="text-blue-500" />
            </a>
            <a href="https://www.instagram.com" className="mx-2">
              <FontAwesomeIcon icon={faInstagram} size="xl" className="text-blue-500" />
            </a>
          </div>
        </nav>
      </div>
    </>
  );
};

export default MobileMenu;
