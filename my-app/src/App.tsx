import { Fragment } from "react";
import "./App.css";
import AddNewTodo from "./components/AddNewTodo";
import Todos from "./components/Todos";
import Todo from "./modal/todo";

function App() {
  const todosList = [
    new Todo("React JS", false),
    new Todo("Angular JS", false),
    new Todo("Vue JS", false),
  ];

  return (
    <Fragment>
      <AddNewTodo />
      <Todos items={todosList} />
    </Fragment>
  );
}

export default App;
