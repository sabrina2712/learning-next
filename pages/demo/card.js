import React from "react";
const data = [
  {
    title: "Basic",
    detail: "Photoshopt version",
    price: "43",
    downloads: "92",
    videoSupport: false,
    os: "Android",
  },
  {
    title: "Gold",
    detail: "Photoshopt version",
    price: "53",
    downloads: "29",
    videoSupport: true,
    os: "Android",
  },
  {
    title: "Platinum",
    detail: "Photoshopt version",
    price: "73",
    downloads: "36",
    videoSupport: false,
    os: "Android",
  },
];
const colors = ["white", "blue-400", "white"];
const textColor = ["white", "gray-600", "white"];
let paddings = ["p-10", "p-16", "p-10"];
const buttonColors = ["red-400", "blue-300", "red-400"];
const circleColors = ["red-400", "white", "red-400"];
const fontColors = ["gray-600", "white", "gray-600"];

export default function Card() {
  return (
    <div className="bg-gray-400 w-full h-screen flex justify-center">
      <div className="flex justify-center items-center p-8 ">
        {data.map((e, i) => {
          let color = colors[i];
          console.log(color);
          let textC = textColor[i];
          let p = paddings[i];
          let buttonColor = buttonColors[i];
          let circleColor = circleColors[i];
          let fontColor = fontColors[i];

          return templateCard(
            e.title,
            e.detail,
            e.price,
            e.downloads,
            e.videoSupport,
            e.os,
            color,
            fontColor,
            textC,
            p,
            buttonColor,
            circleColor
          );
        })}
      </div>
    </div>
  );
}

function templateCard(
  title,
  detail,
  price,
  downloads,
  videoSupport,
  os,
  color,
  fontColor,
  textC,
  p,
  buttonColor,
  circleColor
) {
  const rows = [
    {
      heading: "Number of Downlads",
      name: downloads,
      image: "/noun_Download_3813858.png",
      border: "",
    },
    {
      heading: "Video Support",
      name: videoSupport === true ? "yes" : "No",
      image: "/noun_Video_3810338.png",
      border: "border-t-2 border-b-2",
    },
    {
      heading: "Operating System",
      name: os,
      image: "/noun_Android_1083833.png",
      border: "",
    },
  ];
  return (
    <div className={` ${p} w-1/3 my-12 bg-${color} text-${fontColor} `}>
      <div className="items-center m-4">
        <div className={`text-center text-2xl font-serif font-bold`}>
          {title}
        </div>
        <div className="text-center font-serif">{detail}</div>
      </div>
      <div
        className={`bg-${circleColor} text-center rounded-full h-36 w-36 m-12 flex justify-center place-items-center`}
      >
        <div className={`text-xl h-8 text-${textC}`}>${price}/month</div>
      </div>
      {rows.map((e) => {
        return row(e.heading, e.name, e.image, e.border);
      })}

      <div
        className={`text-center m-8 bg-${buttonColor} p-2 text-2xl shadow-md text-white rounded-lg`}
      >
        Select Plan
      </div>
    </div>
  );
}

function row(heading, name, image, border) {
  return (
    <div className={`w-full pt-2 ${border}`}>
      <div className="text-center">{heading}</div>
      <div className="text-center text-2xl flex justify-center p-4">
        <img src={image} className="w-10 mr-2" />
        <span>{name}</span>
      </div>
    </div>
  );
}
