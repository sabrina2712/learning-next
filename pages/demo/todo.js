import next from "next";
import React, { useEffect, useState } from "react";
import Input from "../../components/input";
import List from "../../components/todo-list";
import InputName from "../../components/input-name";

export default function Todo(props) {
  const [todos, setTodos] = useState([]);

  const submit = (x) => {
    setTodos([...todos, { title: x, completed: false }]);
  };

  const handelClear = () => {
    setTodos([]);
  };

  return (
    <div className="flex justify-center">
      <div className="flex-col justify-center">
        <div className="text-3xl items-center">Todo List</div>

        <div>
          <div className="flex align-center m-4 p-2 h-full w-full justify-center">
            <InputName />
          </div>
        </div>
      </div>
    </div>
  );
}
