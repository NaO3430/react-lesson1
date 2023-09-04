import React, { useState } from 'react';
import AddTask from './AddTask';
import Radiobutton from './RadioButton';
import TaskList from './TaskList';
import Title from './Title';
import { Task } from './types';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const addTask = (text: string) => {
    const newTask: Task = {
      id: tasks.length + 1,
      text: text,
      status: '作業中',
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };
  return (
    <div className="App">
      <Title />
      <Radiobutton />
      <TaskList tasks={tasks} />
      <AddTask onAdd={addTask} />
    </div>
  );
}

export default App;
