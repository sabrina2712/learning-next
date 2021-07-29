import React from "react";

// https://www.hongkiat.com/blog/creative-pricing-table-designs/

export default function Car() {
  return (
    <div className="w-full h-screen bg-hero-pattern z-0 flex">
      <div className="w-2/3 h-3/4 bg-white z-40 m-12 mt-24 p-12">
        <div className="text-3xl text-center p-1 text-gray-500 m-4">
          Model <span className="text-black font-bold">S</span>
        </div>
        <div className="flex justify-center">
          <div className="w-12 h-1 bg-gray-300 mb-6 mt-2 "></div>
        </div>
        <div>
          <img src="car-image1.jpeg" />
        </div>
        <div className="text-center p-8 font-bold text-gray-500	">
          <div className="p-1">Captivate Touchscreen</div>
          <div className="p-1">Automativc key</div>
          <div className="p-1">Cruise control</div>
        </div>
        <div className="flex justify-center">
          <div className="w-12 h-1 bg-gray-500 "></div>
        </div>
        <div className="text-center p-6 text-3xl font-bold">
          $570/ <span className="text-gray-400">mo </span>{" "}
        </div>
        <div className="flex justify-center m-6">
          <div className="text-center bg-red-500 rounded-2xl p-2 w-32 font-bold text-gray-300	">
            ORDER
          </div>
        </div>
      </div>

      <div className="w-2/3 h-3/4 bg-gray-400 z-20 m-12 mt-40 -ml-20 z-10 p-12 ">
        <div className="text-3xl text-center p-1 text-gray-200 m-4 ">
          Model <span className="text-white">X</span>
        </div>
        <div className="flex justify-center">
          <div className="w-12 h-1 bg-gray-300 mb-6 mt-2 "></div>
        </div>
        <div>
          <img src="car-image2.jpeg" />
        </div>
        <div className="text-center p-6 font-bold text-gray-200	">
          <div className="p-1">Captivate Touchscreen</div>
          <div className="p-1">Automativc key</div>
          <div className="p-1">Cruise control</div>
        </div>

        <div className="flex justify-center">
          <div className="w-12 h-1 bg-gray-300  "></div>
        </div>
        <div className="text-center p-4 text-3xl text-gray-200">
          early <span className="text-white">2016</span>
        </div>
        <div className="flex justify-center m-6">
          <div className="text-center bg-blue-700 rounded-2xl p-2 w-32 m-4 font-bold text-gray-300">
            RESERVE
          </div>
        </div>
      </div>
    </div>
  );
}
