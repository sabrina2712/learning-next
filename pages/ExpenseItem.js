import React, { Component } from "react";

export default function ExpenseItem(props) {
  const expenses = [
    {
      id: "e1",
      title: "Toilet paper",
      amount: 19,
      date: new Date(2021, 2, 14),
    },
    {
      id: "e2",
      title: "Car Insurance",
      amount: 190,
      date: new Date(2021, 3, 17),
    },
    { id: "e3", title: "Oil", amount: 10, date: new Date(2021, 4, 13) },
    { id: "e4", title: "Cloths", amount: 80, date: new Date(2021, 4, 16) },
  ];
  return (
    <div>
      {expenses.map((e) => (
        <Items expense={e} />
      ))}
    </div>
  );
}

function Items(props) {
  const expense = props.expense;

  return (
    <div className="flex justify-between align-center w-full bg-gray-500 rounded-xl m-16 p-1 ">
      <div className="flex justify-center  m-2 p-2">
        <Calender date={expense.date} />
        <div className="align-center bg-pink-200 text-white p-4 font-bold text-2xl font-mono">
          {expense.title}
        </div>
      </div>
      <div className="m-4 p-4 w-32 h-16 flex  rounded-xl border-2 border-white justify-center bg-purple-600  ">
        <div className="text-white text-2xl font-mono">${expense.amount}</div>
      </div>
    </div>
  );
}

function Calender(props) {
  const expense = props.expense;
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div className="text-white p-4 m-2 bg-gray-700 rounded-2xl border-2">
      <div className="text-2xl">{month}</div>
      <div className="text-m text-center">{year}</div>
      <div className="text-3xl text-center">{day}</div>
    </div>
  );
}
