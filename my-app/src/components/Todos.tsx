import React from "react";
import Todo from "../modal/todo";
import TodoItem from "./TodoItem";

const Todos: React.FC<{ items: Todo[] }> = (props) => {
  console.log("props >>", props.items);
  return (
    <ul>
      {props.items.map((item) => (
        <TodoItem key={item.id} text={item.text} status={item.completed} />
      ))}
    </ul>
  );
};

export default Todos;
