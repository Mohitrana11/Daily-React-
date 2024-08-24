import React, { useState } from 'react';
import Tasks from './components/Tasks';
import { useTask } from './context/TaskContext';

function App() {
  const { data, setData } = useTask();
  const [inputTask, setInputTask] = useState('');

  const handleSubmitTask = (e) => {
    e.preventDefault();
    setData([...data, { id: Date.now(), task: inputTask, completed: false }]);
    setInputTask('');
  };

  console.log(data);

  return (
    <div className="relation w-[50%] py-20 h-full m-auto flex justify-center flex-col">
      <h1 className="text-center font-bold text-xl mb-4">Todo Application</h1>
      <p className='w-10 h-10 bg-blue-100 absolute flex items-center justify-center font-bold text-2xl rounded-xl top-[19%] right-[24%]'> {data.length }</p>
      <form action="" className="border w-full px-4 py-4 rounded-md" onSubmit={handleSubmitTask}>
        <input
          type="text"
          placeholder="Enter the Task"
          className="w-[80%] outline-none"
          value={inputTask}
          onChange={(e) => setInputTask(e.target.value)}
        />
        <button className="btn">Add Task</button>
      </form>
      <Tasks />
    </div>
  );
}

export default App;