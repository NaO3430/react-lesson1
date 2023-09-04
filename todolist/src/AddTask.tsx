import React, { useRef } from 'react';

function AddTask({ onAdd }: { onAdd: (task: string) => void }) {
  const input = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    if (input.current) {
      onAdd(input.current.value);

      input.current.value = '';
    }
  };

  return (
    <div>
      <h2>新規タスクの追加</h2>
      <input ref={input} type="text" />
      <input type="button" value="追加" onClick={handleClick} />
    </div>
  );
}

export default AddTask;
