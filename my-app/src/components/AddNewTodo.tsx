import React, { useRef } from "react";
import classes from "./AddNewTodo.module.css";

const AddNewTodo: React.FC<{ addTodoTask: (text: string) => void }> = (
  props
) => {
  const getTodoText = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = getTodoText.current?.value;
    if (!enteredText) {
      return;
    }
    console.log("getTodoText >>", enteredText);
    props.addTodoTask(enteredText);
    getTodoText.current.value = "";
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label>Add Task : </label>
      <input type="text" id="task_text" ref={getTodoText} />
      <button>Add Todo</button>
    </form>
  );
};

export default AddNewTodo;
