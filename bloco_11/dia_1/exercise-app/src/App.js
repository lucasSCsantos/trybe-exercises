import logo from './logo.svg';
import './App.css';

const array = ['massa', 'legal', 'bão']

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    array.map((arr) => Task(arr))
  );
}

export default App;
