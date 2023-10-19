export type TaskStatus = '作業中' | '完了';

export type TaskFilterStatus = 'all' | 'working' | 'done';

export type Task = {
  id: number;
  text: string;
  status: TaskStatus;
};
