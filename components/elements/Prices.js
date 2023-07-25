import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";

const prices = () => {
  return (
    <section className="py-20 xl:bg-contain bg-top bg-no-repeat" style={{ backgroundImage: "url('assets/imgs/backgrounds/intersect.svg')" }}>
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="max-w-lg mx-auto mb-4 text-3xl font-bold font-heading wow animate__animated animate__fadeIn" data-wow-delay=".2s">
            All of our plans are full fibre and come with <span className="text-blue-500 font-bold">unlimited</span> data
          </h2>
        </div>
        <div className="flex flex-wrap -mx-3">
          <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
            <div className="hover-up-5 pt-16 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn" data-wow-delay=".2s">
              <h3 className="mb-2 text-4xl font-bold font-heading">Fast</h3>
              <h3 className="mb-2 text-4xl text-blue-500 font-bold font-heading">150Mbps</h3>
              <span className="text-4xl font-bold font-heading">£14.99</span>
              <p className="mt-2 mb-8 text-blueGray-400">per month for 24 months</p>
              <div className="flex flex-col items-center mb-8">
                <ul className="text-blueGray-400">
                  <li className="flex mb-3">
                    <span>
                      <FontAwesomeIcon icon={faCircleCheck} /> 150Mbps Upload/Download
                    </span>
                  </li>
                  <li className="flex mb-3">
                    <span>
                      <FontAwesomeIcon icon={faCircleCheck} /> Unlimited Data
                    </span>
                  </li>
                  <li className="flex mb-3">
                    <span>
                      <FontAwesomeIcon icon={faCircleCheck} /> Less than 50p a day
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <a className="block sm:inline-block py-4 px-6 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-blue-500 hover:bg-blue-700 rounded" href="#">
                  Start Free Trial
                </a>
                <a className="block sm:inline-block py-4 px-6 text-xs text-blueGray-500 hover:text-blueGray-600 text-center font-semibold leading-none bg-white border border-blueGray-200 hover:border-blueGray-300 rounded" href="#">
                  Purchase
                </a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
            <div className="hover-up-5 pt-16 pb-8 px-4 text-center text-white bg-blue-500 rounded shadow wow animate__animated animate__fadeIn" data-wow-delay=".4s">
              <h3 className="mb-2 text-4xl font-bold font-heading">Super Fast</h3>
              <h3 className="mb-2 text-4xl font-bold font-heading">500Mbps</h3>
              <span className="text-4xl font-bold font-heading">£29.99</span>
              <p className="mt-2 mb-8">per month for 24 months</p>
              <div className="flex flex-col items-center mb-8">
                <ul>
                  <li className="flex mb-3">
                    <span>
                      <FontAwesomeIcon icon={faCircleCheck} /> 500Mbps Upload/Download
                    </span>
                  </li>
                  <li className="flex mb-3">
                    <span>
                      <FontAwesomeIcon icon={faCircleCheck} /> Unlimited Data
                    </span>
                  </li>
                  <li className="flex mb-3">
                    <span>
                      <FontAwesomeIcon icon={faCircleCheck} /> Less than £1.00 a day
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <a className="block sm:inline-block py-4 px-6 mb-4 sm:mb-0 sm:mr-3 text-xs text-blue-500 font-semibold leading-none bg-white hover:bg-blueGray-50 rounded" href="#">
                  Start Free Trial
                </a>
                <a className="block sm:inline-block py-4 px-6 text-xs font-semibold leading-none border border-blue-400 hover:border-blue-400 rounded" href="#">
                  Purchase
                </a>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/3 px-3 mb-6">
            <div className="hover-up-5 pt-16 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn" data-wow-delay=".6s">
              <h3 className="mb-2 text-4xl font-bold font-heading">UberFast</h3>
              <h3 className="mb-2 text-4xl font-bold font-heading">1Gbps</h3>
              <span className="text-4xl text-blue-500 font-bold font-heading">£39.99</span>
              <p className="mt-2 mb-8 text-blueGray-400">per month for 24 months</p>
              <div className="flex flex-col items-center mb-8">
                <ul className="text-blueGray-400">
                  <li className="flex mb-3">
                    <span>
                      <FontAwesomeIcon icon={faCircleCheck} /> 1Gbps Upload/Download
                    </span>
                  </li>
                  <li className="flex mb-3">
                    <span>
                      <FontAwesomeIcon icon={faCircleCheck} /> Unlimited Data
                    </span>
                  </li>
                  <li className="flex mb-3">
                    <span>
                      <FontAwesomeIcon icon={faCircleCheck} /> Less than £1.50 a day
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <a className="block sm:inline-block py-4 px-6 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-blue-500 hover:bg-blue-700 rounded" href="#">
                  Start Free Trial
                </a>
                <a className="block sm:inline-block py-4 px-6 text-xs text-blueGray-500 hover:text-blueGray-600 text-center font-semibold leading-none bg-white border border-blueGray-200 hover:border-blueGray-300 rounded" href="#">
                  Purchase
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default prices;
