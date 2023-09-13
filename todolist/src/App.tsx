import React, { useState } from 'react';
import TaskInputForm from './TaskInputForm';
import Radiobutton from './RadioButton';
import TaskTable from './TaskTable';
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
      <TaskTable tasks={tasks} />
      <TaskInputForm onAdd={addTask} />
    </div>
  );
}

export default App;
