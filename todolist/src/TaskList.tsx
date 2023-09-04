import React from 'react';
import { Task } from './types';
type TaskListProps = {
  tasks: Task[];
};

function TaskList({ tasks }: TaskListProps) {
  return (
    <div>
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
                <button>削除</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TaskList;
