import { ITask } from "./task";

export interface IList {
  id?: number;
  list_name?: string;
  tasks?: ITask[] | undefined;
  createdAt?: Date;
  updatedAt?: Date;
}
