import React, { useRef, useCallback } from 'react';

type TaskInputFormProps = {
  onAdd: (task: string) => void;
};

const TaskInputForm: React.FC<TaskInputFormProps> = ({ onAdd }) => {
  const taskRef = useRef<HTMLInputElement>(null);
  const handleClick = useCallback(
    (task?: string) => {
      if (!task || !taskRef.current) {
        return;
      }
      onAdd(task);
      taskRef.current.value = '';
    },
    [onAdd]
  );

  return (
    <div>
      <h2>新規タスクの追加</h2>
      <input ref={taskRef} type="text" />
      <button onClick={() => handleClick(taskRef.current?.value)}>追加</button>
    </div>
  );
};

export default TaskInputForm;
