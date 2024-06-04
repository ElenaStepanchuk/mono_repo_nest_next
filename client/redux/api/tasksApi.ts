import { createApi } from "@reduxjs/toolkit/query/react";

import baseQuery from "../baseQuery/baseQuery";

import { IResponse } from "../../types/response";
import { ITask } from "@/types/task";

export const tasksApi = createApi({
  reducerPath: "taskApi",
  baseQuery,
  endpoints: (builder) => ({
    getAllTasks: builder.query<IResponse<ITask[]>, string>({
      query: () => ({
        url: `tasks`,
        method: "GET",
      }),
    }),
    createTask: builder.mutation<
      IResponse<ITask>,
      {
        id: number;
        task_name: string;
        description: string | undefined;
        deadline: string;
        priority: "Medium" | "Low" | "High";
      }
    >({
      query: ({ task_name, description, deadline, priority, id }) => ({
        url: `tasks/list/${id}`,
        method: "POST",
        body: { task_name, description, deadline, priority },
      }),
    }),
    deleteTask: builder.mutation<IResponse<number>, any>({
      query: ({ id }) => ({
        url: `tasks/${id}`,
        method: "DELETE",
      }),
    }),
    updateTask: builder.mutation<IResponse<ITask>, any>({
      query: ({ id, task_name, description, deadline, priority }) => ({
        url: `tasks/${id}`,
        method: "PATCH",
        body: { task_name, description, deadline, priority },
      }),
    }),
    getOneTask: builder.query<IResponse<ITask>, any>({
      query: ({ id }) => ({
        url: `tasks/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetAllTasksQuery,
  useCreateTaskMutation,
  useDeleteTaskMutation,
  useUpdateTaskMutation,
  useGetOneTaskQuery,
} = tasksApi;
