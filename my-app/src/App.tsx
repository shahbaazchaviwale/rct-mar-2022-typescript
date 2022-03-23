import './App.css';
import Todos from './components/Todos';
import Todo from './modal/todo';


function App() {

const todosList = [new Todo('React JS', false), new Todo('Angular JS', false), new Todo('Vue JS', false), ]

  return (
    <div>
      <Todos items={todosList}/>
    </div>
  );
}

export default App;
