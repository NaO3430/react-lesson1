import React from 'react';
import { TaskStatus } from './types';

type StatusButtonProps = {
  taskId: number;
  status: string;
  onStatusChange: (id: number, status: TaskStatus) => void;
};

const StatusButton: React.FC<StatusButtonProps> = ({
  taskId,
  status,
  onStatusChange,
}) => {
  const toggleStatus = () => {
    const newStatus = status === '作業中' ? '完了' : '作業中';
    onStatusChange(taskId, newStatus);
  };
  return <button onClick={toggleStatus}>{status}</button>;
};

export default StatusButton;
