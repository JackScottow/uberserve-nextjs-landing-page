import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <section className="pt-20 pb-5">
        <div className="container px-4 mx-auto wow animate__animated animate__fadeIn" data-wow-delay=".3s">
          <div className="flex flex-wrap mb-12 -mx-3 text-center lg:mb-20 lg:text-left">
            <div className="w-full px-3 mb-6 lg:w-1/5 lg:mb-0">
              <Link href="/" legacyBehavior>
                <a className="inline-block mx-auto text-3xl font-semibold leading-none lg:mx-0">
                  <img className="h-10" src="/assets/imgs/logos/uberserve.png" alt="UberServe" />
                </a>
              </Link>
            </div>
            <div className="w-full px-3 mb-8 lg:w-2/5 lg:mb-0">
              <p className="max-w-md mx-auto leading-relaxed text-center lg:max-w-full lg:mx-0 lg:pr-32 lg:text-lg text-blueGray-400">
                The Nation's <span className="font-bold text-blue-500">Fastest</span> Fibre Optic Broadband
              </p>
            </div>
            <div className="w-full px-3 mb-8 lg:w-1/5 lg:mb-0">
              <p className="lg:text-lg text-blueGray-400">123 Main Street</p>
              <p className="lg:text-lg text-blueGray-400">London</p>
            </div>
            <div className="w-full px-3 lg:w-1/5">
              <p className="lg:text-lg text-blueGray-400">(+44) 01234 567 891</p>
              <p className="lg:text-lg text-blueGray-400">contact@uberserve.com</p>
            </div>
          </div>
          <div className="flex flex-col items-center lg:flex-row lg:justify-between">
            <div className="order-first mx-auto mb-1 lg:order-last lg:mb-0">
              <a href="https://www.facebook.com" className="mx-2">
                <FontAwesomeIcon icon={faFacebook} size="2xl" className="text-blue-500 hover:-translate-y-0.5" />
              </a>
              <a href="https://www.twitter.com" className="mx-2">
                <FontAwesomeIcon icon={faTwitter} size="2xl" className="text-blue-500 hover:-translate-y-0.5" />
              </a>
              <a href="https://www.instagram.com" className="mx-2">
                <FontAwesomeIcon icon={faInstagram} size="2xl" className="text-blue-500 hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
          <p className="pt-10 text-xs text-center">Made by Jack Scottow 2023</p>
        </div>
      </section>
    </>
  );
};

export default Footer;
