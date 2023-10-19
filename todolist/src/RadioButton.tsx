import React, { useState } from 'react';
import { TaskFilterStatus } from './types';

type RadioButtonProps = {
  selectedStatus: TaskFilterStatus;
  onChange: (status: TaskFilterStatus) => void;
};

function RadioButton({ selectedStatus, onChange }: RadioButtonProps) {
  return (
    <div>
      <label>
        <input
          type="radio"
          value="all"
          checked={selectedStatus === 'all'}
          onChange={() => onChange('all')}
        />
        すべて
      </label>
      <label>
        <input
          type="radio"
          value="done"
          checked={selectedStatus === 'done'}
          onChange={() => onChange('done')}
        />
        完了
      </label>
      <label>
        <input
          type="radio"
          value="working"
          checked={selectedStatus === 'working'}
          onChange={() => onChange('working')}
        />
        作業中
      </label>
    </div>
  );
}

export default RadioButton;
