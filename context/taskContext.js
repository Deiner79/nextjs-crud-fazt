import { createContext, useContext, useState } from "react";
import { v4 as uuid } from "uuid";

export const TaskContext = createContext();
export const useTask = () => {
  return useContext(TaskContext);
};
export const TasksProvider = ({ children }) => {
  const [tasks, setTask] = useState([
    { id: "1", title: "hola", description: "estamos en ello" },
  ]);
  const createTask = (title, description) => {
    setTask([...tasks, { title, description, id: uuid() }]);
  };
  const updateTask = (id, updated) => {
    setTask([
      ...tasks.map((task) => (task.id === id ? { ...task, ...updated } : task)),
    ]);
  };

  const deleteTask = (id) => {
    setTask([...tasks.filter((task) => task.id !== id)]);
  };
  return (
    <TaskContext.Provider value={{ tasks, createTask, updateTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};
