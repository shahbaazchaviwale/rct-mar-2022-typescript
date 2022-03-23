import React from "react";

const submitHandler = (event: React.FormEvent) => {
  event.preventDefault();
};
const AddNewTodo = () => {
  return (
    <form onSubmit={submitHandler}>
      <label>Add Task</label>
      <input type="text" id="task_text" />
      <button>Add Todo</button>
    </form>
  );
};

export default AddNewTodo;
