import React, { createContext, useReducer, useContext, useEffect } from "react";

const ToDoContext = createContext();

const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [
        ...state,
        { id: Date.now(), name: action.payload, completed: false },
      ];
    case "TOGGLE_TASK":
      return state.map((task) =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task
      );
    case "DELETE_TASK":
      return state.filter((task) => task.id !== action.payload);
    case "LOAD_TASKS":
      return action.payload;
    default:
      return state;
  }
};

export const ToDoProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(todoReducer, []);

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      dispatch({ type: "LOAD_TASKS", payload: JSON.parse(savedTasks) });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <ToDoContext.Provider value={{ tasks, dispatch }}>
      {children}
    </ToDoContext.Provider>
  );
};

export const useToDo = () => useContext(ToDoContext);
