"use client";
import { redirect } from "next/navigation";
import { useAppDispatch } from "@/hooks/hooks";

import { setIsAuth } from "@/redux/slice/authSlice";
import { useRefreshTokensQuery } from "@/redux/api/authApi";

import { GetFromLocalstorageToken } from "./getFromLocalstorage.util";

const RefreshTokens = () => {
  const dispatch = useAppDispatch();
  const refresh = GetFromLocalstorageToken("refreshToken");

  const { data, status, error } = useRefreshTokensQuery(refresh);
  console.log("refreshStatus", status, error);

  const content = JSON.stringify({ data, status });

  return `<div>{content}</div>`;

  // if (data === undefined) {
  //   return `<div>No data available</div>;`;
  // }

  // console.log("RefreshTokens", data?.detail);

  // if (!data) {
  //   localStorage.removeItem("isAuth");
  //   dispatch(setIsAuth(false));
  //   return redirect("/authorization");
  // }

  return data;
};

export default RefreshTokens;
