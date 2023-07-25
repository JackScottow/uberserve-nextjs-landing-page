import React from "react";
import Layout from "../components/layout/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket, faSterlingSign, faUpDown, faMoneyBillTrendUp, faCloudArrowDown, faPercent, faWifi, faPhoneVolume, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Prices from "../components/elements/Prices";

function Home() {
  return (
    <>
      <Layout>
        <section className="hero-3">
          <div className="container">
            <div className="flex flex-wrap items-center -mx-3">
              <div className="w-full px-3 lg:w-2/5">
                <div className="max-w-lg mx-auto mb-8 text-center lg:max-w-md lg:mx-0 lg:text-left">
                  <h2 className="mb-4 text-3xl font-bold lg:text-5xl font-heading wow animate__animated animate__fadeIn">
                    The Nation's <span className="text-blue-500">Fastest </span> Fibre Optic Broadband
                  </h2>
                  <div className="text-blueGray-400">
                    Here at <strong className="text-blue-500">UberServe</strong> we work hard to provide you with the absolute best possible speeds
                  </div>
                </div>
              </div>
              <div className="w-full px-3 mb-12 lg:w-3/5 lg:mb-0">
                <div className="flex items-center justify-center lg:h-128">
                  <img className="lg:max-w-lg" src="/assets/imgs/illustrations/undraw_broadcast.png" alt="UberServe" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-top bg-no-repeat xl:bg-contain" style={{ backgroundImage: "url('assets/imgs/backgrounds/intersect.svg')" }} id="key-features">
          <div className="container">
            <div className="max-w-lg mx-auto mb-12 text-center">
              <h2 className="my-2 text-3xl font-bold md:text-4xl font-heading wow animate__animated animate__fadeIn" data-wow-delay=".1s">
                Why choose
                <span className="text-blue-500"> UberServe</span> for your broadband?
              </h2>
            </div>
            <div className="flex flex-wrap mb-6 -mx-3">
              <div className="w-full px-3 mb-6 md:w-1/2 lg:w-1/4">
                <div className="px-6 pt-8 pb-6 text-center transition duration-500 bg-white border border-gray-100 rounded shadow hover:shadow-lg hover-up-2 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                  <div className="mx-auto mb-4 text-blue-500">
                    <FontAwesomeIcon icon={faRocket} size="3x" />
                  </div>
                  <h3 className="mb-2 font-bold font-heading">UberFast</h3>
                  <p className="text-sm text-blueGray-400">
                    Our iconic 1Gb package is over <span className="font-bold text-blue-500">84x</span> faster than the UK's average
                  </p>
                </div>
              </div>
              <div className="w-full px-3 mb-6 md:w-1/2 lg:w-1/4">
                <div className="px-6 pt-8 pb-6 text-center transition duration-500 bg-white border border-gray-100 rounded shadow hover:shadow-lg hover-up-2 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                  <div className="mx-auto mb-4 text-blue-500">
                    <FontAwesomeIcon icon={faSterlingSign} size="3x" />
                  </div>
                  <h3 className="mb-2 font-bold font-heading">Price Match</h3>
                  <p className="text-sm text-blueGray-400">
                    If you find the same package elsewhere we'll refund you <span className="font-bold text-blue-500">double</span> the difference
                  </p>
                </div>
              </div>
              <div className="w-full px-3 mb-6 md:w-1/2 lg:w-1/4">
                <div className="px-6 pt-8 pb-6 text-center transition duration-500 bg-white border border-gray-100 rounded shadow hover:shadow-lg hover-up-2 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                  <div className="mx-auto mb-4 text-blue-500">
                    <FontAwesomeIcon icon={faUpDown} size="3x" />
                  </div>
                  <h3 className="mb-2 font-bold font-heading">Symmetrical Speeds</h3>
                  <p className="text-sm text-blueGray-400">
                    Unlike other providers we offer <span className="font-bold text-blue-500">identical</span> upload and download speeds on all our packages
                  </p>
                </div>
              </div>
              <div className="w-full px-3 mb-6 md:w-1/2 lg:w-1/4">
                <div className="px-6 pt-8 pb-6 text-center transition duration-500 bg-white border border-gray-100 rounded shadow hover:shadow-lg hover-up-2 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                  <div className="mx-auto mb-4 text-blue-500">
                    <FontAwesomeIcon icon={faMoneyBillTrendUp} size="3x" />
                  </div>
                  <h3 className="mb-2 font-bold font-heading">No Price Hikes</h3>
                  <p className="text-sm text-blueGray-400">
                    We promise to <span className="font-bold text-blue-500">never</span> raise prices during commitment periods
                  </p>
                </div>
              </div>
              <div className="w-full px-3 mb-6 md:w-1/2 lg:w-1/4">
                <div className="px-6 pt-8 pb-6 text-center transition duration-500 bg-white border border-gray-100 rounded shadow hover:shadow-lg hover-up-2 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                  <div className="mx-auto mb-4 text-blue-500">
                    <FontAwesomeIcon icon={faCloudArrowDown} size="3x" />
                  </div>
                  <h3 className="mb-2 font-bold font-heading">Unlimited</h3>
                  <p className="text-sm text-blueGray-400">
                    Use as much as you want with <span className="font-bold text-blue-500">unlimited</span> data on all our packages
                  </p>
                </div>
              </div>
              <div className="w-full px-3 mb-6 md:w-1/2 lg:w-1/4">
                <div className="px-6 pt-8 pb-6 text-center transition duration-500 bg-white border border-gray-100 rounded shadow hover:shadow-lg hover-up-2 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                  <div className="mx-auto mb-4 text-blue-500">
                    <FontAwesomeIcon icon={faPercent} size="3x" />
                  </div>
                  <h3 className="mb-2 font-bold font-heading">Reliablity</h3>
                  <p className="text-sm text-blueGray-400">
                    We promise over <span className="font-bold text-blue-500">99.5%</span> up time with automatic compensation for loss of service
                  </p>
                </div>
              </div>
              <div className="w-full px-3 mb-6 md:w-1/2 lg:w-1/4">
                <div className="px-6 pt-8 pb-6 text-center transition duration-500 bg-white border border-gray-100 rounded shadow hover:shadow-lg hover-up-2 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                  <div className="mx-auto mb-4 text-blue-500">
                    <FontAwesomeIcon icon={faWifi} size="3x" />
                  </div>
                  <h3 className="mb-2 font-bold font-heading">Unmatched WiFi</h3>
                  <p className="text-sm text-blueGray-400">
                    Our state of the art <span className="font-bold text-blue-500">UberHub</span> provides WiFi anywhere in your home
                  </p>
                </div>
              </div>
              <div className="w-full px-3 mb-6 md:w-1/2 lg:w-1/4">
                <div className="px-6 pt-8 pb-6 text-center transition duration-500 bg-white border border-gray-100 rounded shadow hover:shadow-lg hover-up-2 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                  <div className="mx-auto mb-4 text-blue-500">
                    <FontAwesomeIcon icon={faPhoneVolume} size="3x" />
                  </div>
                  <h3 className="mb-2 font-bold font-heading">24/7 Customer Service</h3>
                  <p className="text-sm text-blueGray-400">
                    Our UK based customer service centres are available <span className="font-bold text-blue-500">24/7</span> if you ever have an issue
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Prices />
        <section className="py-10">
          <div className="container">
            <div className="relative px-4 py-20 lg:p-20">
              <div className="max-w-lg mx-auto text-center">
                <h2 className="mb-4 text-3xl font-bold lg:text-4xl font-heading wow animate__animated animate__fadeIn">
                  <span>Subscribe to our newsletter for latest updates</span>
                </h2>
                <div className="flex flex-wrap max-w-md p-4 mx-auto bg-white rounded-lg wow animate__animated animate__fadeIn" data-wow-delay=".5s">
                  <div className="flex w-full px-3 mb-3 rounded md:w-2/3 md:mb-0 md:mr-6 bg-blueGray-100">
                    <FontAwesomeIcon icon={faEnvelope} className="my-auto text-blue-500" size="lg" />

                    <input className="w-full py-4 pl-3 text-xs font-semibold leading-none outline-none text-blueGray-400 bg-blueGray-100" type="text" placeholder="Type your e-mail" />
                  </div>
                  <button className="w-full px-8 py-4 text-xs font-semibold leading-none text-white bg-blue-500 rounded md:w-auto hover:bg-blue-700" type="submit">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
export default Home;
