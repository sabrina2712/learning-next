import React, { useEffect, useState } from "react";
import Input from "../components/input";
import List from "../components/todo-list";

export default function InputName(props) {
  const [value, setValue] = useState(props.value);
  const [names, setNames] = useState([]);

  const handleKeyDown = (e) => {
    console.log(e.key);
    if (e.key === "Enter") {
      submitName(value);
      setValue("");
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const submitName = (name) => {
    setNames([...names]);
  };

  return (
    <div className="flex-col">
      <div className="m-4 p-2 text-xl">Name of your TodoList</div>
      <div className="flex">
        <div className="border-2 m-6">
          {" "}
          <input
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            key="random1"
            placeholder={"Add name Todo"}
            value={value}
          />
        </div>
        <div
          onClick={() => {
            AddList(value);
            setValue("");
          }}
          className="m-4 p-2 bg-blue-500 w-20 h-10 text-white align-cenetr"
        >
          Submit
        </div>
      </div>
    </div>
  );
}

const AddList = (x) => {
  return (
    <div>
      <div className="bg-pink-100  m-8 p-4 ">
        <div className="justify-center items-center">
          <div className="flex align-center m-4 p-2 h-full w-full justify-center">
            <Input submit={submit} handelClear={handelClear} />
          </div>
          <div className="flex align-center m-4 p-2 justify-center h-full"></div>
        </div>
      </div>
      <div className="flex-col">
        <List
          todos={todos}
          onDelete={(todo) => {
            const deletedTodos = todos.filter((t) => t.title !== todo.title);
            setTodos(deletedTodos);
          }}
          onChange={(todo) => {
            const updatedTodos = todos.map((t) => {
              if (t.title === todo.title) {
                t.completed = !t.completed;
              }
              return t;
            });
            setTodos(updatedTodos);
          }}
        />
      </div>
    </div>
  );
};
