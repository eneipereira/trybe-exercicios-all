import { Component } from 'react';
import './App.css';

const tasks = ['Estudar o conteúdo do course','Assistir à aula ao vivo', 'Fazer os exercícios', 'Ir à academia'];

const Task = (value) => {
  return (
    <li key={value} className='item'>{value}</li>
    );
  }
  
class App extends Component {
  render() {
    return (
        <ul className='list'>
          {tasks.map((task) => Task(task))}
        </ul>
    )
  };
}

export default App;