import React, { useState } from 'react';
import TaskInputForm from './TaskInputForm';
import Radiobutton from './RadioButton';
import TaskTable from './TaskTable';
import Title from './Title';
import { Task, TaskStatus, TaskFilterStatus } from './types';

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

  const changeStatus = (id: number, newStatus: TaskStatus) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, status: newStatus } : task
      )
    );
  };

  const [selectedStatus, setSelectedStatus] =
    React.useState<TaskFilterStatus>('all');

  const handleChange = (status: TaskFilterStatus) => {
    setSelectedStatus(status);
  };

  return (
    <div className="App">
      <Title />
      <Radiobutton onChange={handleChange} selectedStatus={selectedStatus} />
      <TaskTable
        tasks={tasks.filter((task) =>
          selectedStatus === 'all'
            ? true
            : selectedStatus === 'working'
            ? task.status === '作業中'
            : task.status === '完了'
        )}
        onTaskDelete={deleteTask}
        onStatusChange={changeStatus}
      />
      <TaskInputForm onAdd={addTask} />
    </div>
  );
}

export default App;
