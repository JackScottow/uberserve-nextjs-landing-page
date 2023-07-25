import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const teamMember = ({ name, title, image }) => {
  return (
    <div className="w-full px-3 mb-12 md:w-1/2 lg:w-1/4 hover-up-5 wow animate__animated animate__fadeIn animated" data-wow-delay=".4s">
      <img className="object-cover object-top w-64 h-64 mx-auto rounded" src={image} alt={name} />
      <p className="mt-6">
        <strong className="text-md">{name}</strong>
      </p>
      <p className="mb-4 text-xs text-gray-500">{title}</p>
      <div className="flex justify-center py-1 space-x-2">
        <a href="https://www.twitter.com">
          <FontAwesomeIcon icon={faEnvelope} size="lg" className="text-blue-500" />
        </a>
        <a href="https://www.facebook.com">
          <FontAwesomeIcon icon={faFacebook} size="lg" className="text-blue-500" />
        </a>
        <a href="https://www.facebook.com">
          <FontAwesomeIcon icon={faTwitter} size="lg" className="text-blue-500" />
        </a>
      </div>
    </div>
  );
};

export default teamMember;
