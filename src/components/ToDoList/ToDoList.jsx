import React, { useState } from "react";
import { useToDo } from "../../contexts/ToDoContext.jsx";
import styles from "./ToDoList.module.css";

const ToDoList = () => {
  const { tasks, dispatch } = useToDo();
  const [filter, setFilter] = useState("all");

  const handleToggle = (id) => {
    dispatch({ type: "TOGGLE_TASK", payload: id });
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filterFunctions = {
    all: () => true,
    completed: (task) => task.completed,
    pending: (task) => !task.completed,
  };

  const filteredTasks = tasks.filter(
    filterFunctions[filter] || filterFunctions.all
  );

  return (
    <div>
      <div className={styles.filters}>
        <button
          className={filter === "all" ? styles.active : ""}
          onClick={() => handleFilterChange("all")}
        >
          Todas
        </button>
        <button
          className={filter === "completed" ? styles.active : ""}
          onClick={() => handleFilterChange("completed")}
        >
          Concluídas
        </button>
        <button
          className={filter === "pending" ? styles.active : ""}
          onClick={() => handleFilterChange("pending")}
        >
          Pendentes
        </button>
      </div>
      <div className={styles.listContainer}>
        <h2>Afazeres :</h2>
        <ul>
          {filteredTasks.length > 0 ? (
            filteredTasks.map((task) => (
              <li key={task.id} className={styles.listItem}>
                <input
                  type="checkbox"
                  id={`task-${task.id}`} 
                  checked={task.completed}
                  onChange={() => handleToggle(task.id)}
                />
                <label htmlFor={`task-${task.id}`}>
                  <span
                    style={{
                      textDecoration: task.completed ? "line-through" : "none",
                    }}
                  >
                    {task.name}
                  </span>
                </label>
              </li>
            ))
          ) : (
            <p>Nenhuma tarefa encontrada.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default ToDoList;
