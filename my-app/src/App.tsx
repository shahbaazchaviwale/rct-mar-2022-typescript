import './App.css';
import Todos from './components/Todos';


function App() {
  return (
    <div>
      <Todos items={['React JS', 'Angular JS', 'Vue JS']}/>
    </div>
  );
}

export default App;
