import React from "react";
import Card from "./Card";

const ServicesSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">VR Development</h3>
            <p className="text-gray-600">
              We create immersive virtual reality experiences.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Training Simulations</h3>
            <p className="text-gray-600">
              Realistic VR simulations for employee training.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">AR Solutions</h3>
            <p className="text-gray-600">
              Augmented reality solutions to enhance the real world.
            </p>
          </div> */}

          <Card />
          <Card />
          <Card />

          <Card />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
