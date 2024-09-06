import React from "react";
import Input from "../Input/Input";
import { useToDo } from '../../contexts/ToDoContext.jsx';
import styles from"./AddTask.module.css";

const AddTask = () => {
  const [task, setTask] = React.useState("");
  const { dispatch } = useToDo();

  const toCamelCase = (str) => {
    return str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      const formattedTask = toCamelCase(task);
      dispatch({ type: 'ADD_TASK', payload: formattedTask });  
      setTask(""); 
    }
  };

  return (
    <div className={styles.taskContainer}>
      <form onSubmit={handleSubmit}>
        <Input
          id="task"
          type="text"
          label="Tarefa"
          value={task}
          setValue={setTask}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Digite sua nova tarefa!"
          required
        />
        <button type="submit">Adicionar Tarefa</button>
      </form>
    </div>
  );
};

export default AddTask;
