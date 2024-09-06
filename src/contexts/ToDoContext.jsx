import React, { createContext, useReducer, useContext } from 'react';

const ToDoContext = createContext();

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, { id: Date.now(), name: action.payload, completed: false }];
    case 'TOGGLE_TASK':
      return state.map(task =>
        task.id === action.payload ? { ...task, completed: !task.completed } : task
      );
    default:
      return state;
  }
};

export const ToDoProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(todoReducer, []);

  return (
    <ToDoContext.Provider value={{ tasks, dispatch }}>
      {children}
    </ToDoContext.Provider>
  );
};

export const useToDo = () => useContext(ToDoContext);
