"use client";
import * as React from "react";
import { ModalWindow, DateButton } from "..";

import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

interface IProps {
  openAddNewCard: boolean;
  handleClose: any;
  valueTaskName: string;
  addNewTaskNameText: any;
  addNewTaskDescription: any;
  addNewDataValue: any;
  valueTaskDescription: string | undefined;
  valueTaskDeadline: string;
  addNewValueTaskPriority: any;
  valueTaskPriority: "Medium" | "Low" | "High";
}

const ModalAddNewTask: React.FC<IProps> = ({
  openAddNewCard,
  handleClose,
  valueTaskName,
  addNewTaskNameText,
  valueTaskDescription,
  addNewTaskDescription,
  addNewDataValue,
  valueTaskDeadline,
  // addNewValueTaskPriority,
  // valueTaskPriority,
}) => {
  const [listTo, setListTo] = React.useState("");
  const handleChange = (event: SelectChangeEvent) => {
    setListTo(event.target.value);
  };

  return (
    <ModalWindow
      open={openAddNewCard}
      handleClose={handleClose}
      buttonText={`Add new task`}
      width={"400px"}
      height={"auto"}
      padding={"20px"}
    >
      <Typography id="modal-modal-title" variant="h6" component="h2">
        Create new task
      </Typography>
      <form noValidate autoComplete="off">
        <FormControl sx={{ width: "30ch" }}>
          <Typography
            variant="subtitle1"
            gutterBottom
            sx={{
              display: "flex",
              justifyContent: "left",
              fontSize: "12px",
            }}
          >
            Name
          </Typography>
          <TextField
            placeholder="Please enter new task name"
            value={valueTaskName}
            onChange={addNewTaskNameText}
          />
          <Typography
            variant="subtitle1"
            gutterBottom
            sx={{
              marginTop: "15px",
              fontSize: "12px",
              display: "flex",
              justifyContent: "left",
            }}
          >
            Description
          </Typography>
          <TextField
            placeholder="Please enter task description"
            value={valueTaskDescription}
            onChange={addNewTaskDescription}
            multiline
            rows={4}
          />
          <Typography
            variant="subtitle1"
            gutterBottom
            sx={{
              marginTop: "15px",
              fontSize: "12px",
              display: "flex",
              justifyContent: "left",
            }}
          >
            Deadline
          </Typography>
          <DateButton
            addNewDataValue={addNewDataValue}
            valueTaskDeadline={valueTaskDeadline}
          />
          <Typography
            variant="subtitle1"
            gutterBottom
            sx={{
              marginTop: "15px",
              fontSize: "12px",
              display: "flex",
              justifyContent: "left",
            }}
          >
            Priority
          </Typography>

          <Select
            value={listTo}
            onChange={handleChange}
            displayEmpty
            sx={{
              fontSize: "12px",
              height: "25px",
              textAlign: "start",
            }}
          >
            <MenuItem
              value=""
              sx={{
                fontSize: "12px",
              }}
            >
              <em>Change priority:</em>
            </MenuItem>
            <MenuItem
              value={10}
              sx={{
                fontSize: "12px",
              }}
            >
              High
            </MenuItem>
            <MenuItem
              value={20}
              sx={{
                fontSize: "12px",
              }}
            >
              Medium
            </MenuItem>
            <MenuItem
              value={30}
              sx={{
                fontSize: "12px",
              }}
            >
              Low
            </MenuItem>
          </Select>
        </FormControl>
      </form>
    </ModalWindow>
  );
};

export default ModalAddNewTask;
