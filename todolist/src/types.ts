export type TaskStatus = '作業中' | '完了';

export type Task = {
  id: number;
  text: string;
  status: TaskStatus;
};
