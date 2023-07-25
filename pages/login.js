import React from "react";
import Layout from "../components/layout/Layout";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  return (
    <>
      <Layout>
        <section className="py-12 bg-blueGray-50">
          <div className="container">
            <div className="flex flex-col max-w-md mx-auto text-center">
              <div className="p-8 mt-12 mb-8 bg-white rounded shadow">
                <h4 className="mb-6 text-3xl">Sign In</h4>
                <div className="flex px-4 mb-4 border border-gray-200 rounded bg-blueGray-50">
                  <input className="w-full py-4 text-xs font-semibold leading-none outline-none placeholder-blueGray-400 bg-blueGray-50" type="email" placeholder="Username or email" />
                  <FontAwesomeIcon icon={faAt} className="mx-auto my-auto text-blueGray-300" size="lg" />
                </div>
                <div className="flex px-4 mb-4 border border-gray-200 rounded bg-blueGray-50">
                  <input className="w-full py-4 text-xs font-semibold leading-none outline-none placeholder-blueGray-400 bg-blueGray-50" type="password" placeholder="Password" />
                  <FontAwesomeIcon icon={faAt} className="mx-auto my-auto text-blueGray-300" size="lg" />
                </div>

                <button className="flex items-center w-full px-4 py-3 mb-2 text-xs font-semibold leading-none text-white transition duration-300 ease-in-out transform bg-blue-500 rounded hover:-translate-y-1 hover:bg-blue-700">
                  <FontAwesomeIcon icon={faCheckCircle} className="mr-8" size="xl" />
                  <span className="">Sign In</span>
                </button>

                <button className="flex items-center w-full px-4 py-3 mb-2 text-xs font-semibold leading-none transition duration-300 ease-in-out transform border border-gray-200 rounded hover:-translate-y-1 text-blueGray-500 hover:bg-blueGray-50" href="#">
                  <FontAwesomeIcon icon={faFacebook} className="mr-8 text-blue-500" size="xl" />
                  <span className="">Sign in with Facebook</span>
                </button>
                <button className="flex items-center w-full px-4 py-3 text-xs font-semibold leading-none transition duration-300 ease-in-out transform border border-gray-200 rounded hover:-translate-y-1 text-blueGray-500 hover:bg-blueGray-50" href="#">
                  <FontAwesomeIcon icon={faGoogle} className="mr-8 text-blue-500" size="xl" />
                  <span className="">Sign in with Google</span>
                </button>
              </div>

              <div className="w-full mx-auto mt-12 text-center">
                <p>
                  Don't Have an Account?{" "}
                  <Link href="/signup" legacyBehavior>
                    <a className="inline-block text-xs font-semibold leading-none text-blue-600 hover:text-blue-700 wow animate__animated animate__fadeIn animated" data-wow-delay=".1s">
                      Sign Up now
                    </a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Login;
