import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = ({ handleHidden, hiddenClass }) => {
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  });
  return (
    <>
      <header className={scroll && hiddenClass !== "" ? "bg-transparent sticky-bar mt-4 stick z-1" : "bg-transparent sticky-bar mt-4"}>
        <div className="container bg-transparent">
          <nav className="flex items-center justify-between py-3 bg-transparent">
            <Link href="/" legacyBehavior>
              <a className="text-3xl font-semibold leading-none">
                <img className="h-10" src="/assets/imgs/logos/uberserve.png" alt="UberServe" />
              </a>
            </Link>
            <ul className="hidden lg:flex lg:items-center lg:w-auto lg:space-x-12">
              <li className="relative pt-4 pb-4 group">
                <Link href="/" legacyBehavior>
                  <a className="text-sm font-semibold text-blueGray-600 hover:text-blue-500">Home</a>
                </Link>
              </li>
              <li className="pt-4 pb-4">
                <Link href="/services" legacyBehavior>
                  <a className="text-sm font-semibold text-blueGray-600 hover:text-blue-500">Services</a>
                </Link>
              </li>
              <li className="relative pt-4 pb-4 group">
                <Link href="/team" legacyBehavior>
                  <a className="text-sm font-semibold text-blueGray-600 hover:text-blue-500">Our Team</a>
                </Link>
              </li>
              <li className="pt-4 pb-4">
                <Link href="/contact" legacyBehavior>
                  <a className="text-sm font-semibold text-blueGray-600 hover:text-blue-500">Contact</a>
                </Link>
              </li>
            </ul>
            <div className="hidden lg:block">
              <Link href="/login" legacyBehavior>
                <a className="btn-accent hover-up-2">Log In</a>
              </Link>
              <Link href="/signup" legacyBehavior>
                <a className="btn-primary hover-up-2">Sign Up</a>
              </Link>
            </div>
            <div className="lg:hidden">
              <button className="flex items-center px-3 py-2 text-blue-500 border border-blue-200 rounded navbar-burger hover:text-blue-700 hover:border-blue-300" onClick={handleHidden}>
                <FontAwesomeIcon icon={faBars} />
              </button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
