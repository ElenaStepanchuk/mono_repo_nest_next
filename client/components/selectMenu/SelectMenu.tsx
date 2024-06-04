"use client";
import * as React from "react";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import { useGetAllListsQuery } from "@/redux/api/listsApi";

import css from "./selectMenu.module.css";

import { IList } from "@/types/list";
import Loader from "../loader";

interface IProps {
  listId: number;
}

const SelectMenu: React.FC<IProps> = ({ listId }) => {
  const [listTo, setListTo] = React.useState("");

  const { data = { detail: [] }, isLoading, error } = useGetAllListsQuery("");
  const handleChange = (event: SelectChangeEvent) => {
    setListTo(event.target.value);
  };

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    console.log("error", error);
    return null;
  }

  return (
    <div>
      <FormControl
        sx={{
          minWidth: "100%",
          marginTop: "10px",
          background: "rgb(189, 189, 189)",
          borderRadius: "4px",
        }}
      >
        <Select
          value={listTo}
          onChange={handleChange}
          displayEmpty
          sx={{
            fontSize: "12px",
            height: "25px",
          }}
        >
          <MenuItem
            value=""
            sx={{
              fontSize: "12px",
            }}
          >
            <em>Move to:</em>
          </MenuItem>

          {data?.detail
            .filter((elem) => {
              return elem.id !== listId;
            })
            .map((item: IList) => (
              <MenuItem
                key={item.id}
                value={item.id}
                sx={{
                  fontSize: "12px",
                }}
              >
                {item.list_name}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectMenu;
