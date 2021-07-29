import React, { useEffect, useState } from "react";

export default function List(props) {
  const [todos, setTodos] = useState(props.todos);
  useEffect(() => {
    setTodos(props.todos);
  });

  console.log("list is updating", todos.length, props.todos);
  return todos.map((todo) => {
    return (
      <div className="flex p-2 m-2 ">
        <input
          className="p-2 m-2"
          type="checkbox"
          checked={todo.completed}
          onChange={() => {
            props.onChange(todo);
          }}
        ></input>{" "}
        {todo.title}
        <div
          className="p-2 m-2"
          onClick={() => {
            props.onDelete(todo);
          }}
          className="border-2 border-black bg-white px ml-2 h-6"
        >
          x
        </div>
      </div>
    );
  });
}
