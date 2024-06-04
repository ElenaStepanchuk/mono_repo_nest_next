"use client";
import { configureStore } from "@reduxjs/toolkit";

import { listsApi } from "@/redux/api/listsApi";
import { tasksApi } from "@/redux/api/tasksApi";

export const store = configureStore({
  reducer: {
    [listsApi.reducerPath]: listsApi.reducer,
    [tasksApi.reducerPath]: tasksApi.reducer,
  },
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware().concat(listsApi.middleware, tasksApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
