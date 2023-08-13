import React from "react";

const TVC = () => {
  return (
    <div>
      <div className="relative overflow-hidden bg-gray-800">
        <img
          className="object-cover w-full h-auto lg:h-full"
          src="https://graphicsfamily.com/wp-content/uploads/edd/2021/01/Free-Real-Estate-Logo-Template-1180x664.jpg"
          alt="Real Estate"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center p-4 md:p-8 lg:p-12 text-white">
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-2 md:mb-4 lg:mb-6">
            Your Dream Home Awaits
          </h1>
          <p className="text-sm md:text-base lg:text-lg mb-4 md:mb-6 lg:mb-8">
            Discover the best properties at the most affordable prices.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out">
            Explore Properties
          </button>
        </div>
      </div>
    </div>
  );
};

export default TVC;
