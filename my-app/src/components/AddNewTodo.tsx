import React, { useRef } from "react";

const AddNewTodo = () => {
  const getTodoText = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = getTodoText.current?.value;
    if(!enteredText){
        return;
    }
    console.log('getTodoText >>', enteredText)
  };

  return (
    <form onSubmit={submitHandler}>
      <label>Add Task</label>
      <input type="text" id="task_text" ref={getTodoText} />
      <button>Add Todo</button>
    </form>
  );
};

export default AddNewTodo;
