import React from 'react';
import { Task, TaskStatus } from './types';
import DeleteButton from './DeleteButton';
import StatusButton from './StatusButton';

type TaskTableProps = {
  tasks: Task[];
  onTaskDelete: (id: number) => void;
  onStatusChange: (id: number, status: TaskStatus) => void;
};

const TaskTable: React.FC<TaskTableProps> = ({
  tasks,
  onTaskDelete,
  onStatusChange,
}) => (
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
            <StatusButton
              taskId={task.id}
              status={task.status}
              onStatusChange={onStatusChange}
            />
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
