import React from "react";
import Input from "../Input/Input";
import { useToDo } from '../../contexts/ToDoContext.jsx';
import styles from"./AddTask.module.css";

const AddTask = () => {
  const [task, setTask] = React.useState("");
  const { dispatch } = useToDo();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      dispatch({ type: 'ADD_TASK', payload: task });  
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
