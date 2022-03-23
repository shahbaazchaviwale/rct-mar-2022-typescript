import { Fragment, useState } from "react";
import "./App.css";
import AddNewTodo from "./components/AddNewTodo";
import Todos from "./components/Todos";
import Todo from "./modal/todo";

function App() {
  const [todos, setTodo] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {

    const newTodo = new Todo(todoText, false);

    setTodo((prevTodo) => {
      return prevTodo.concat(newTodo);
    });
    console.log("Todo >>", todos);
  };

  const removeTodoHandler = (id: string) => {
    setTodo((prevTodos) => {
      return prevTodos.filter((removeItem) => removeItem.id !== id);
    });
  };
  
  return (
    <Fragment>
      <AddNewTodo addTodoTask={addTodoHandler} />
      <Todos items={todos} onRemoveTodo={removeTodoHandler} />
    </Fragment>
  );
}

export default App;
