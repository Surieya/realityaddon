import React from "react";
import { Link } from "react-router-dom";

const ContentWithImageSectionLeft = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:justify-between">
        <div className="lg:w-1/2 p-6">
          <img
            src="https://via.placeholder.com/500x300"
            alt="VR Experience"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="lg:w-1/2 p-6">
          <h2 className="text-3xl font-bold mb-4">
            Engage with Cutting-Edge VR Solutions
          </h2>
          <p className="text-gray-600 mb-6">
            Explore the endless possibilities of Virtual Reality technology with
            our innovative solutions. Whether you're looking to transform your
            business, enhance training programs, or deliver immersive
            experiences, we provide the tools you need to succeed.
          </p>
          <Link
            to={"/services"}
            className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition-colors duration-300"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContentWithImageSectionLeft;
