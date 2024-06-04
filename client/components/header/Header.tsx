"use client";
import * as React from "react";

import css from "./header.module.css";
import Button from "@mui/joy/Button";
import Add from "@mui/icons-material/Add";
import Box from "@mui/joy/Box";
import ReplayIcon from "@mui/icons-material/Replay";
import { ModalWindow, Loader } from "..";

import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";

import { useCreateListMutation } from "@/redux/api/listsApi";

const Header = () => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  const [createList] = useCreateListMutation();

  const addNewList = (event: any) => {
    const text = event.target.value;
    setValue(text);
  };

  const handleClickAddList = () => setOpen(true);
  const handleClose = async () => {
    if (value) {
      await createList({ list_name: value });
    }
    setValue("");
    setOpen(false);
  };

  return (
    <header className={css.container}>
      <h1 className={css.title}>My Task Board</h1>
      <Box
        sx={{ display: "flex", gap: 2, flexWrap: "wrap", marginLeft: "auto" }}
      >
        <Button
          variant="outlined"
          sx={{
            ":hover": { bgcolor: "grey", color: "#ffffff" },
            ":active": { bgcolor: "grey" },
            color: { color: "grey" },
            border: { borderColor: "grey" },
          }}
          startDecorator={<ReplayIcon />}
        >
          History
        </Button>
        <Button
          variant="outlined"
          sx={{
            ":hover": { bgcolor: "grey", color: "#ffffff" },
            ":active": { bgcolor: "grey" },
            color: { color: "grey" },
            border: { borderColor: "grey" },
          }}
          startDecorator={<Add />}
          onClick={handleClickAddList}
        >
          Create new list
        </Button>
      </Box>
      {
        <ModalWindow
          open={open}
          handleClose={handleClose}
          buttonText={"Add new list"}
          width={"400px"}
          height={"auto"}
          padding={"20px"}
        >
          <div className={css.modal_container}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Create new list
              <form noValidate autoComplete="off">
                <FormControl sx={{ width: "25ch" }}>
                  <OutlinedInput
                    placeholder="Please enter new list name"
                    value={value}
                    onChange={addNewList}
                  />
                </FormControl>
              </form>
            </Typography>
          </div>
        </ModalWindow>
      }
    </header>
  );
};

export default Header;
