import React from 'react'
import "./global.css";
import AddTask from './components/AddTask/AddTask';
import ToDoList from './components/ToDoList/ToDoList';

const App = () => {
  return (
    <div className='container'>
      <h1>Gerencie suas tarefas</h1>
      <AddTask/>
      <ToDoList/>
    </div>
  )
}

export default App
