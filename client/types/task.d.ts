export interface ITask {
  id?: number | undefined;
  task_name: string;
  description?: string | undefined;
  deadline: string | Data;
  priority: "Medium" | "Low" | "High";
  createdAt?: Date;
  updatedAt?: Date;
}
