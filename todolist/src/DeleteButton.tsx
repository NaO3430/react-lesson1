import React from 'react';

type DeleteButtonProps = {
  taskId: number;
  onDelete: (id: number) => void;
};

const DeleteButton: React.FC<DeleteButtonProps> = ({ taskId, onDelete }) => {
  return <button onClick={() => onDelete(taskId)}>削除</button>;
};
export default DeleteButton;
