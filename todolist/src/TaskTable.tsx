import React from 'react';
import { Task } from './types';
import DeleteButton from './DeleteButton';

type TaskTableProps = {
  tasks: Task[];
  onTaskDelete: (id: number) => void;
};

const TaskTable: React.FC<TaskTableProps> = ({ tasks, onTaskDelete }) => (
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>コメント</th>
        <th>状態</th>
      </tr>
    </thead>
    <tbody>
      {tasks.map((task) => (
        <tr key={task.id}>
          <td>{task.id}</td>
          <td>{task.text}</td>
          <td>
            <button>{task.status}</button>
          </td>
          <td>
            <DeleteButton taskId={task.id} onDelete={onTaskDelete} />
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default TaskTable;
