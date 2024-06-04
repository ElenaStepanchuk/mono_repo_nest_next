import { createApi } from "@reduxjs/toolkit/query/react";

import baseQuery from "../baseQuery/baseQuery";

import { IResponse } from "../../types/response";
import { IList } from "@/types/list";

export const listsApi = createApi({
  reducerPath: "listsApi",
  baseQuery,
  endpoints: (builder) => ({
    getAllLists: builder.query<IResponse<IList[]>, string>({
      query: () => ({
        url: `lists`,
        method: "GET",
      }),
    }),
    createList: builder.mutation<IResponse<IList>, { list_name: string }>({
      query: ({ list_name }) => ({
        url: `lists`,
        method: "POST",
        body: { list_name },
      }),
    }),
    getOneList: builder.query<IResponse<IList>, any>({
      query: ({ id }) => ({
        url: `lists/${id}`,
        method: "GET",
      }),
    }),
    updateList: builder.mutation<IResponse<IList>, any>({
      query: ({ id, list_name }) => ({
        url: `lists/${id}`,
        method: "PATCH",
        body: { list_name },
      }),
    }),
    deleteList: builder.mutation<IResponse<number>, any>({
      query: ({ id }) => ({
        url: `lists/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAllListsQuery,
  useCreateListMutation,
  useGetOneListQuery,
  useUpdateListMutation,
  useDeleteListMutation,
} = listsApi;
