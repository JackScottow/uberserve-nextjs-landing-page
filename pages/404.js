import React from "react";
import Layout from "../components/layout/Layout";
import Link from "next/link";

const Custom404 = () => {
  return (
    <>
      <Layout>
        <section className="pt-20 pb-32">
          <div className="container text-center">
            <span className="text-4xl font-bold text-blue-500 font-heading wow animate__animated animate__fadeIn" data-wow-delay=".2s">
              Oops
            </span>
            <h2 className="mb-2 text-4xl font-bold font-heading wow animate__animated animate__fadeIn" data-wow-delay=".3s">
              Something went wrong!
            </h2>
            <div className="pt-10">
              <Link href="/" legacyBehavior>
                <a className="block px-8 py-4 mb-4 text-xs font-semibold leading-none text-center text-white bg-blue-400 rounded sm:inline-block sm:mb-0 sm:mr-3 hover:bg-blue-500 wow animate__animated animate__fadeIn" data-wow-delay=".5s">
                  Home
                </a>
              </Link>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Custom404;
