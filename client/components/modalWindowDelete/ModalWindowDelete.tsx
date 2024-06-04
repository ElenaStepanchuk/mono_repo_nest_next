"use client";
import * as React from "react";
import { ModalWindow, UniversalButton } from "..";

import Typography from "@mui/material/Typography";

interface IProps {
  openDeleteList: boolean;
  handleCloseDeleteList: any;
}

const ModalWindowDelete: React.FC<IProps> = ({
  openDeleteList,
  handleCloseDeleteList,
}) => {
  return (
    <>
      <ModalWindow
        open={openDeleteList}
        handleClose={handleCloseDeleteList}
        buttonText={`Yes`}
        width={"400px"}
        height={"auto"}
        padding={"20px"}
      >
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Are you chure want to delete this List!
        </Typography>
        <UniversalButton
          handleClose={handleCloseDeleteList}
          buttonText={"No"}
        />
      </ModalWindow>
    </>
  );
};

export default ModalWindowDelete;
