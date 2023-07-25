import React from "react";
import Layout from "../components/layout/Layout";
import Prices from "../components/elements/Prices";

const Services = () => {
  return (
    <>
      <Layout>
        <Prices />
        <section className="py-10 bg-top bg-no-repeat xl:bg-contain" style={{ backgroundImage: "url('assets/imgs/backgrounds/intersect.svg')" }}>
          <div className="container">
            <div className="mb-16 text-center">
              <h2 className="max-w-lg mx-auto mb-4 text-3xl font-bold font-heading wow animate__animated animate__fadeIn" data-wow-delay=".2s">
                All of our plans are full fibre and come with <span className="font-bold text-blue-500">unlimited</span> data
              </h2>
            </div>
            <div className="flex flex-wrap justify-center -mx-3">
              <div className="w-full px-3 mb-6 md:w-1/2 lg:w-1/3">
                <div className="px-4 pt-16 pb-8 text-center bg-white rounded shadow hover-up-5 wow animate__animated animate__fadeIn" data-wow-delay=".2s">
                  <img className="lg:w-full" src="/assets/imgs/illustrations/undraw_broadcast.png" alt="UberServe" />
                  <h3 className="mb-2 text-4xl font-bold font-heading">UberHub</h3>
                  <p className="mt-2 mb-8 text-blueGray-400">All our plans come with our state of the art UberHub free of charge with free installation</p>
                  <div>
                    <a className="block px-6 py-4 mb-4 text-xs font-semibold leading-none text-center text-white bg-blue-500 rounded sm:inline-block sm:mb-0 sm:mr-3 hover:bg-blue-700" href="#">
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Services;
