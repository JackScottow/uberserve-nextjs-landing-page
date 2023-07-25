import React from "react";
import Layout from "../components/layout/Layout";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <>
      <Layout>
        <section className="px-2 py-10">
          <div className="container text-center">
            <div className="flex flex-wrap items-center mx-10 text-center">
              <div className="w-1/2 px-3 mb-12 lg:w-1/3 wow animate__animated animate__fadeIn animated" data-wow-delay=".1s">
                <FontAwesomeIcon icon={faPhone} size="3x" className="py-2 text-blue-500" />
                <div className="leading-relaxed">
                  <span className="text-sm text-blueGray-400">Phone</span>
                  <p>(+44) 01234 567 891</p>
                </div>
              </div>
              <div className="w-1/2 px-3 mb-12 lg:w-1/3 wow animate__animated animate__fadeIn animated" data-wow-delay=".3s">
                <FontAwesomeIcon icon={faEnvelope} size="3x" className="py-2 text-blue-500" />
                <div className="leading-relaxed">
                  <span className="text-sm text-blueGray-400">E-mail</span>
                  <p>contact@uberserve.com</p>
                </div>
              </div>
              <div className="w-full px-3 mb-12 lg:w-1/3 wow animate__animated animate__fadeIn animated" data-wow-delay=".5s">
                <FontAwesomeIcon icon={faLocationDot} size="3x" className="py-2 text-blue-500" />
                <div className="leading-relaxed">
                  <span className="text-sm text-blueGray-400">Address</span>
                  <p>123 Main Street</p>
                  <p>London</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-10">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <div className="max-w-md mx-auto mb-8">
                <h2 className="mt-2 text-4xl font-bold font-heading wow animate__animatedanimated animate__fadeIn" data-wow-delay=".s">
                  We would <span className="font-bold text-blue-500">love</span> to hear from you!
                </h2>
              </div>
              <div>
                <form>
                  <div className="flex px-4 mb-4 border border-gray-200 rounded bg-blueGray-50">
                    <input className="w-full py-4 text-xs font-semibold leading-none outline-none placeholder-blueGray-400 bg-blueGray-50" type="text" placeholder="Subject" />
                  </div>
                  <div className="flex px-4 mb-4 border border-gray-200 rounded bg-blueGray-50">
                    <input className="w-full py-4 text-xs font-semibold leading-none outline-none placeholder-blueGray-400 bg-blueGray-50" type="text" placeholder="Name" />
                  </div>
                  <div className="flex px-4 mb-4 border border-gray-200 rounded bg-blueGray-50">
                    <input className="w-full py-4 text-xs font-semibold leading-none outline-none placeholder-blueGray-400 bg-blueGray-50" type="email" placeholder="name@email.com" />
                  </div>
                  <div className="flex px-4 mb-4 border border-gray-200 rounded bg-blueGray-50" data-wow-delay=".3s">
                    <textarea className="w-full py-4 text-xs font-semibold leading-none outline-none resize-none placeholder-blueGray-400 bg-blueGray-50 h-96" placeholder="Message"></textarea>
                  </div>

                  <div className="flex justify-center wow animate__animatedanimated animate__fadeIn " data-wow-delay=".3s">
                    <button className="px-8 py-4 text-sm font-semibold leading-none text-white bg-blue-500 rounded hover:bg-blue-700" type="submit">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-blue-500">
          <div className="container">
            <div className="max-w-xl mx-auto text-center">
              <h2 className="mb-4 text-3xl font-bold text-white lg:text-3xl font-heading">
                <span>Subscribe to our newsletter for latest updates</span>
              </h2>

              <div className="flex flex-wrap max-w-lg mx-auto">
                <div className="flex w-full px-3 mb-3 bg-blue-500 border border-blue-300 rounded md:w-2/3 md:mb-0 md:mr-6">
                  <FontAwesomeIcon icon={faEnvelope} className="my-auto text-white" size="lg" />
                  <input className="w-full py-4 pl-3 text-xs font-semibold leading-none text-white placeholder-white bg-blue-500 outline-none" type="text" placeholder="Type your e-mail" />
                </div>
                <button className="w-full px-8 py-4 text-xs font-semibold leading-none text-blue-800 transition duration-300 ease-in-out bg-white border border-blue-300 rounded md:w-auto hover:text-white hover:border-blue-300 hover:bg-blue-500" type="submit">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Contact;
