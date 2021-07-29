import next from "next";
import React, { useState } from "react";

export default function ShoppingCart(props) {
  const [cart, setCart] = useState([]);

  function addItem(item) {
    const { title, location, price } = item;
    const cartItem = {
      title: title,
      location: location,
      price: price,
      count: 1,
    };
    setCart((prev) => {
      return [...prev, cartItem];
    });
  }

  function clearAllFromCart() {
    setCart(() => {
      return [];
    });
  }
  function increaseItemCountInCart(item) {
    setCart((prev) => {
      const updatedItems = prev.map((e) => {
        if (e.title === item.title) {
          e.count += 1;
        }
        return e;
      });
      return updatedItems;
    });
  }
  function increaseItemCountInCart(item) {
    setCart((prev) => {
      const updatedItems = prev.map((e) => {
        if (e.title === item.title) {
          e.count += 1;
        }
        return e;
      });
      return updatedItems;
    });
  }

  function decreaseItemCountInCart(item) {
    if (item.count == 1) {
      return deleteItem(item);
    }
    setCart((prev) => {
      const updatedItems = prev.map((e) => {
        if (e.title === item.title) {
          e.count -= 1;
        }
        return e;
      });
      return updatedItems;
    });
  }

  function deleteItem(item) {
    setCart((prev) => {
      const deletedItem = prev.filter((e) => e.title !== item.title);
      return deletedItem;
    });
  }

  const listItems = [
    { title: "Coca cola", location: "Berlin", price: "10" },
    { title: "Sprite", location: "Hamburg", price: "18" },

    { title: "Mirinda", location: "Köln", price: "15" },
  ];

  return (
    <div className="bg-blue-200 w-full rounded-2xl m-4 flex z-0">
      <div className="bg-white z-20  m-32 mr-0 rounded-tl-3xl rounded-bl-3xl">
        <div className="flex justify-around m-6">
          <div>
            <div className="text-2xl font-bold">Wine and Spirits Team</div>
            <div className="text-gray-500">Location Network</div>
          </div>
          <div className="w-12 h-12 ml-12">
            <img src="bell-button.png" />
          </div>
          <div className="w-12 h-12 ">
            <img src="reload-button.png" />
          </div>
          <div className="w-12 h-10">
            <img src="potrait-person.jpeg" />
          </div>
          <div>
            <div className="text-lg"> Cody Flyer</div>
            <div className="text-gray-500">Employee</div>
          </div>
        </div>
        <div className="container">
          <input
            className="w-11/12 h-10 bg-gray-100 rounded mb-2 ml-6 focus:outline-none text-xl px-8 rounded-2xl "
            type="search"
            placeholder="find Product by name or code"
          ></input>
        </div>
        <div className="flex justify-around p-4 ">
          <div className="border-2 py-1 px-6 rounded-full m-2 shadow-md">
            Red
          </div>
          <div className="border-2 py-1 px-6 rounded-full m-2 shadow-md">
            White
          </div>
          <div className="border-2 py-1 px-6 rounded-full m-2 shadow-md">
            Rose
          </div>
          <div className="border-2 py-1 px-6 rounded-full m-2 shadow-md">
            Sparkling
          </div>
          <div className="border-2 py-1 px-6 rounded-full m-2 shadow-md">
            Desert
          </div>
        </div>
        <div className="grid grid-cols-2">
          {listItems.map((e) => {
            return itemFunc(e, addItem);
          })}
        </div>
      </div>
      <div className="bg-white z-20 w-1/4  m-32 ml-1 rounded-tr-3xl rounded-br-3xl">
        <div className="flex justify-around m-4">
          <div className="text-2xl font-bold">Cart</div>
          <div
            onClick={(e) => {
              clearAllFromCart(e);
            }}
            className="bg-red-300 text-red-400 p-2 rounded-2xl px-4 "
          >
            clear
          </div>
        </div>
        <div>
          <div>
            {cart.map((item) => {
              return (
                <CartItem
                  item={item}
                  plusCount={increaseItemCountInCart}
                  minusCount={decreaseItemCountInCart}
                />
              );
            })}
          </div>
        </div>
        <CashFunc
          subtotal={cart.reduce((a, c) => {
            return a + c.count * c.price;
          }, 0)}
        />
      </div>
    </div>
  );
}

function itemFunc(item, addItem) {
  const { title, location, price } = item;
  return (
    <div
      onClick={() => {
        addItem(item);
      }}
      className=" border-2 py-4 px-4 m-6 rounded-3xl flex shadow-2xl transform transition duration-500 hover:scale-110"
    >
      <div className="w-16 relative ">
        <img src="/wine1.png" className="z-20 absolute -top-8" />
        <div className="bg-red-400 w-16 h-16 absolute rounded-2xl z-10 "></div>
      </div>
      <div className="ml-4">
        <div className="text-xl font-bold">{title}</div>
        <div className="text-gray-400">{location}</div>
        <div className="text-red-400">${price}</div>
      </div>
    </div>
  );
}

function CartItem(props) {
  const { item, plusCount, minusCount } = props;

  const { title, location, price } = item;
  return (
    <div className=" py-2 m-6 flex">
      <div className="w-24 relative m-2 mr-1 border-2 shadow-2xl rounded-xl">
        <img src="/wine1.png" className="z-20 absolute -top-2" />
        <div className="bg-white-400 w-12 h-12 absolute rounded z-10 "></div>
      </div>
      <div className="ml-4 mr-2">
        <div className="text-l font-bold">{title}</div>
        <div className="text-gray-400">{location}</div>
        <div className="text-red-400">${price}</div>
      </div>
      <div className="m-2">
        <div
          onClick={() => {
            plusCount(item);
          }}
          className="mb-1 text-l font-bold bg-blue-200 rounded h-4 w-4 p-2 flex justify-content relative"
        >
          <div className="absolute -top-1 right-1">+</div>
        </div>
        <div className="mb-1 text-l font-bold bg-blue-200 rounded h-4 w-4 p-2 flex justify-content relative">
          <div className="absolute -top-1 right-1">{item.count}</div>
        </div>
        <div
          onClick={() => {
            minusCount(item);
          }}
          className="mb-1 text-l font-bold bg-blue-200 rounded h-4 w-4 p-2 flex justify-content relative"
        >
          <div className="absolute -top-1 right-1">-</div>
        </div>
      </div>
    </div>
  );
}

function CashFunc(props) {
  const { subtotal } = props;
  const tax = 0.19;
  const discount = 0;
  const total = subtotal + tax * 100 - discount;
  return (
    <div className="relative">
      <div className=" w-52 h-52 shadow-2xl rounded-2xl z-20 absolute m-8">
        <div className="m-2 mt-4 text-gray-400">{subtotal}</div>
        <div className="m-2 text-gray-400">1.9%</div>
        <div className="m-2 text-gray-400">{discount}</div>
        <div>
          <div className="m-4 border-0 bg-blue-400 rounded-2xl p-2 text-white pl-4">
            Total <span className=" m-2 font-bold">{total}</span>
          </div>
          <div className="w-24 h-24 ml-24 bg-yellow-300 rounded-full z-10 absolute"></div>
        </div>
      </div>
    </div>
  );
}
