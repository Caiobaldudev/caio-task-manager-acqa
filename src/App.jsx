import React from 'react'
import "./global.css";
import AddTask from './components/AddTask/AddTask';
import ToDoList from './components/ToDoList/ToDoList';
import { ToDoProvider } from './contexts/ToDoContext'; 

const App = () => {
  return (
    <ToDoProvider>
    <div className="container">
      <h1>Gerencie suas tarefas</h1>
      <AddTask />
      <ToDoList />
    </div>
  </ToDoProvider>
  )
}

export default App
