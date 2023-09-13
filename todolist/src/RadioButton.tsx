import React, { useState } from 'react';

function RadioButton() {
  const [selectedStatus, setSelectedStatus] = React.useState<string>('all');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedStatus(e.target.value);
  };
  return (
    <div>
      <label>
        <input
          type="radio"
          value="all"
          checked={selectedStatus === 'all'}
          onChange={handleChange}
        />
        すべて
      </label>
      <label>
        <input
          type="radio"
          value="done"
          checked={selectedStatus === 'done'}
          onChange={handleChange}
        />
        完了
      </label>
      <label>
        <input
          type="radio"
          value="working"
          checked={selectedStatus === 'working'}
          onChange={handleChange}
        />
        作業中
      </label>
    </div>
  );
}

export default RadioButton;
