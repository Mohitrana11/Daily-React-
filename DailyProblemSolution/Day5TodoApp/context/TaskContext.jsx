import { useContext, createContext, useState } from "react";

const TaskContext = createContext({ data: [], setData: () => {} });

const TaskContextProvider = ({ children }) => {
  const [data, setData] = useState(JSON.parse(localStorage.getItem('todoApp')) ||[]);
  return (
    <TaskContext.Provider value={{ data, setData }}>
      {children}
    </TaskContext.Provider>
  );
};

const useTask = () => useContext(TaskContext);

export { TaskContextProvider, useTask };