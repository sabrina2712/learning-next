import React, { useEffect, useState } from "react";

export default function Input(props) {
  const [value, setValue] = useState(props.value);

  const handleKeyDown = (e) => {
    console.log(e.key);
    if (e.key === "Enter") {
      props.submit(value);
      setValue("");
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="flex-col">
      <div className="m-4 p-2 text-xl">Add Todo</div>
      <div className="flex">
        <div className="border-2 m-6">
          {" "}
          <input
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            key="random1"
            placeholder={"Add new Todo"}
            value={value}
          />
        </div>
        <div
          onClick={() => {
            props.submit(value);
            setValue("");
          }}
          className="m-4 p-2 bg-blue-500 w-20 h-10 text-white align-cenetr"
        >
          Submit
        </div>
        <div
          onClick={props.handelClear}
          className="m-4 p-2 bg-blue-500 w-20 h-10  text-white"
        >
          Clear
        </div>
      </div>
    </div>
  );
}
