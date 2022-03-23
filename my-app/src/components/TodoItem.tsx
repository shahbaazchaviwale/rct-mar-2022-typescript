import React from 'react';
import classes from './TodoItem.module.css'

const TodoItem: React.FC<{ text: string; status: boolean; onRemoveTodo: () => void}> = (props) => {
  return (
    <li className={classes.item} onClick={props.onRemoveTodo}>
      <p><b>Task Name : </b>{props.text}</p>
      <p><b>Task Status : </b>{props.status ? "completed" : "In Progress"}</p>
    </li>
  );
};

export default TodoItem;
