import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="flex flex-col justify-center">
      <div>
        <div className=" m-10 p-8">
          <div className="text-5xl">Sabrina Roshni</div>
          <div className="flex m-4 ">
            <div className="bg-pink-200 text-xl m-4 p-2 border-1 border-blue-400 rounded-md shadow-md">
              About
            </div>
            <div className=" bg-pink-200 text-xl m-4 border-1 p-2 border-blue-400 rounded-md shadow-md">
              Resume
            </div>
          </div>
        </div>
        <div className="flex flex-col m-10 p-8 bg-gray-400">
          <div className="text-3xl">Some of my work</div>
          <div className="flex text-2xl ">
            <div className="m-4 p-2 bg-pink-200 rounded-md shadow-md">
              <a href="/demo/card">Card</a>
            </div>
            <div className="m-4 p-2 bg-pink-200 rounded-md shadow-md">
              {" "}
              <a href="/demo/car">Car</a>
            </div>
            <div className="m-4 p-2 bg-pink-200 rounded-md shadow-md">
              <a href="/demo/shopping">Shopping</a>
            </div>
            <div className="m-4 p-2 bg-pink-200 rounded-md shadow-md">
              <a href="/demo/prices">Prices</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
