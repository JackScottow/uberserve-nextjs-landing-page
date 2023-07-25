import React from "react";
import Layout from "../components/layout/Layout";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { faEye, faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";

const Signup = () => {
  return (
    <>
      <Layout>
        <section className="py-12 bg-blueGray-50">
          <div className="container">
            <div className="flex max-w-md mx-auto flex-col text-center">
              <div className="mt-12 mb-8 p-8 bg-white rounded shadow">
                <h4 className="mb-6 text-3xl">Create an Account</h4>
                <div className="flex mb-4 px-4 bg-blueGray-50 rounded border border-gray-200">
                  <input className="w-full py-4 text-xs placeholder-blueGray-400 font-semibold leading-none bg-blueGray-50 outline-none" type="email" placeholder="Username" />
                  <FontAwesomeIcon icon={faAt} className="mx-auto my-auto text-blueGray-300" size="lg" />
                </div>
                <div className="flex mb-4 px-4 bg-blueGray-50 rounded border border-gray-200">
                  <input className="w-full py-4 text-xs placeholder-blueGray-400 font-semibold leading-none bg-blueGray-50 outline-none" type="email" placeholder="Email" />
                  <FontAwesomeIcon icon={faAt} className="mx-auto my-auto text-blueGray-300" size="lg" />
                </div>
                <div className="flex mb-6 px-4 bg-blueGray-50 rounded border border-gray-200">
                  <input className="w-full py-4 text-xs placeholder-blueGray-400 font-semibold leading-none bg-blueGray-50 outline-none" type="password" placeholder="Choose a password" />
                  <button className="ml-4">
                    <FontAwesomeIcon icon={faEye} className="mx-auto my-auto text-blueGray-300" size="lg" />
                  </button>
                </div>
                <div className="flex mb-6 px-4 bg-blueGray-50 rounded border border-gray-200">
                  <input className="w-full py-4 text-xs placeholder-blueGray-400 font-semibold leading-none bg-blueGray-50 outline-none" type="password" placeholder="Confirm password" />
                  <button className="ml-4">
                    <FontAwesomeIcon icon={faEye} className="mx-auto my-auto text-blueGray-300" size="lg" />
                  </button>
                </div>

                <div className="float-left mb-8 wow animate__animated animate__fadeIn animated" data-wow-delay=".1s">
                  <label className="inline-flex text-xs">
                    <input type="checkbox" className="form-checkbox" checked />
                    <span className="ml-2">
                      I agree to{" "}
                      <Link href="" legacyBehavior>
                        <a className="underline hover:text-blueGray-500">Privacy Policy</a>
                      </Link>{" "}
                      and{" "}
                      <Link href="" legacyBehavior>
                        <a className="underline hover:text-blueGray-500">Terms of Use</a>
                      </Link>
                    </span>
                  </label>
                </div>
                <button className="transition duration-300 ease-in-out transform hover:-translate-y-1 flex items-center w-full px-4 py-3 mb-2 text-xs text-white font-semibold leading-none bg-blue-500 hover:bg-blue-700 rounded">
                  <FontAwesomeIcon icon={faCheckCircle} className="mr-8" size="xl" />
                  <span className="">Sign Up</span>
                </button>

                <button className="transition duration-300 ease-in-out transform hover:-translate-y-1 flex items-center w-full px-4 py-3 mb-2 text-xs text-blueGray-500 font-semibold leading-none border border-gray-200 hover:bg-blueGray-50 rounded" href="#">
                  <FontAwesomeIcon icon={faFacebook} className="mr-8 text-blue-500" size="xl" />
                  <span className="">Sign in with Facebook</span>
                </button>
                <button className="transition duration-300 ease-in-out transform hover:-translate-y-1 flex items-center px-4 py-3 w-full text-xs text-blueGray-500 font-semibold leading-none border border-gray-200 hover:bg-blueGray-50 rounded" href="#">
                  <FontAwesomeIcon icon={faGoogle} className="mr-8 text-blue-500" size="xl" />
                  <span className="">Sign in with Google</span>
                </button>
                <div className="w-full mt-12 mx-auto text-center">
                  <p className="text-sm">
                    Already have an account?{" "}
                    <Link href="/login" legacyBehavior>
                      <a className="inline-block text-xs text-blue-600 hover:text-blue-700 font-semibold leading-none wow animate__animated animate__fadeIn animated" data-wow-delay=".1s">
                        Sign in now
                      </a>
                    </Link>
                  </p>
                </div>
              </div>
              <div>
                <p className="text-xs text-blueGray-400 text-center">
                  <a className="underline hover:text-blueGray-500" href="#">
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a className="underline hover:text-bluegray-500" href="#">
                    Terms of Use
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Signup;
