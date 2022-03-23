import React from "react";
import Todo from "../modal/todo";

const Todos: React.FC<{ items: Todo[] }> = (props) => {
    console.log('props >>', props.items);
  return (
    <ul>
        {props.items.map((item) => (
            <li key={item.id}>{item.text}</li>
        ))}  
    </ul>
  );
};

export default Todos;

