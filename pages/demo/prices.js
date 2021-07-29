import React from "react";

export default function Prices() {
  return (
    <div className="w-full h-screen bg-purple-50 flex items-center justify-center">
      <div className="bg-white w-4/5 flex justify-center p-8 shadow-lg rounded-lg">
        {option(false, "PERSONAL")}
        {option(true, "TEAM")}
        {option(false, "PLATINUM")}
      </div>
    </div>
  );
}

function option(isCenter, title) {
  const border = isCenter === true ? "w-4/12 border-r-2 border-l-2" : "w-4/12";
  return (
    <div className={border}>
      <div className="text-center py-4 "> {title}</div>
      <div className="text-center flex justify-center py-8">
        <img className="w-40" src="/shop.png" />
      </div>

      <div className="text-center ">20 video course</div>
      <div className="text-center ">1 account</div>
      <div className="text-center pt-4 text-xl font-bold">
        <span
          className="text-sm pr-2 font-normal
        "
        >
          $
        </span>
        9.99
      </div>
      <div className="flex justify-center">
        <div className="text-center py-2 m-4  border-2 border-gray-300 rounded-full w-3/5">
          Get Started
        </div>
      </div>
    </div>
  );
}
