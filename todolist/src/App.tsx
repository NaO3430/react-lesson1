import React, { useState } from 'react';
import TaskInputForm from './TaskInputForm';
import Radiobutton from './RadioButton';
import TaskTable from './TaskTable';
import Title from './Title';
import { Task } from './types';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (text: string) => {
    const maxId =
      tasks.length > 0 ? Math.max(...tasks.map((task) => task.id)) : 0;
    const newTask: Task = {
      id: maxId + 1,
      text: text,
      status: '作業中',
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const deleteTask = (id: number) => {
    const updatedTasks = tasks
      .filter((task) => task.id !== id)
      .map((task, index) => ({
        ...task,
        id: index + 1,
      }));
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <Title />
      <Radiobutton />
      <TaskTable tasks={tasks} onTaskDelete={deleteTask} />
      <TaskInputForm onAdd={addTask} />
    </div>
  );
}

export default App;
