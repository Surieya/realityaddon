import React from "react";

const Card = () => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out">
      <img
        className="w-full h-52 object-cover"
        src="https://via.placeholder.com/400x400"
        alt="Card Image"
      />

      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">Card Title</h2>
        <p className="text-gray-600 mb-4">
          This is a short description of the content inside the card. It is
          meant to be brief and informative.
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Card;
