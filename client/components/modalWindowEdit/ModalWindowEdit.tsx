"use client";
import * as React from "react";
import { ModalWindow } from "..";

import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";

interface IProps {
  openEditList: boolean;
  handleCloseEditList: any;
  addListEditText: any;
  valueListEdit: string;
}

const ModalWindowEdit: React.FC<IProps> = ({
  openEditList,
  handleCloseEditList,
  valueListEdit,
  addListEditText,
}) => {
  return (
    <>
      <ModalWindow
        open={openEditList}
        handleClose={handleCloseEditList}
        buttonText={"Update list"}
        width={"400px"}
        height={"auto"}
        padding={"20px"}
      >
        <Typography id="modal-modal-title" variant="h6" component="h2">
          <form noValidate autoComplete="off">
            <FormControl sx={{ width: "25ch" }}>
              <OutlinedInput value={valueListEdit} onChange={addListEditText} />
            </FormControl>
          </form>
        </Typography>
      </ModalWindow>
    </>
  );
};
export default ModalWindowEdit;
