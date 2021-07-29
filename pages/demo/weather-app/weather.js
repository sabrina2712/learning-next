import React, { useEffect, useState } from "react";
import Day from "./day";

export default function Weahter(props) {
  const places = [{ name: "London", temp: "12°" }];

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    console.log(e.key);
    if (e.key === "Enter") {
      props.submit(value);
      setValue("");
    }
  };

  return (
    <div className="flex-col m-auto align-center shadow-md p-4 rounded-sm w-96 bg-white">
      <div className="flex-col m-6 p-4 font-bold text-xl">
        Weather App
        <div className="w-32 h-32 ">
          {" "}
          <img src={"weather-1.jpeg"} />
        </div>
        <div className="taxt-xl m-auto m-2.5">Find weather of your City </div>
        <div className="border-2 flex-col">
          {" "}
          <input
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            key="random1"
            placeholder={"Search for weather update"}
          />
        </div>
        <button className="p-2.5 bg-black-400">Search</button>
      </div>

      <div>
        <div>Day, time</div>
        <div>
          {places.map((p) => {
            <div className="text-3xl ml-4 p-2">{p.name}</div>;
          })}
        </div>
        <div>bar</div>

        <Day />
      </div>
    </div>
  );
}
