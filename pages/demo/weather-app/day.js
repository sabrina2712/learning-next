import React, { useEffect, useState } from "react";

const dates = [{ Day: "Monday", time: "12" }];

export default function Day(props) {
  return (
    <div className="flex m-8 p-2">
      feature
      {dates.map((p) => {
        return (
          <div className="flex-col m-8 p-4 border-4 border-grey-400 shadow-md">
            <div className="m-2 p-2">{p.Day}</div>
            <div className="m-2 p-2">{p.time}</div>
          </div>
        );
      })}
    </div>
  );
}
