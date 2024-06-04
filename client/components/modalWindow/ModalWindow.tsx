"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import UniversalButton from "../universalButton/UniversalButton";

interface IProps {
  children: React.ReactNode;
  open: boolean;
  handleClose: any;
  buttonText: string;
  padding: string;
  width: string;
  height: string;
}

const ModalWindow: React.FC<IProps> = ({
  children,
  open,
  handleClose,
  buttonText,
  padding,
  width,
  height,
}) => {
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          display: "flex",
          justifyContext: "center",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: width,
            height: height,
            bgcolor: "background.paper",
            border: "1px solid rgb(77, 76, 94)",
            boxShadow: 24,
            borderRadius: 2,
            overflow: "hidden",
            p: padding,
          }}
        >
          {children}
          <UniversalButton handleClose={handleClose} buttonText={buttonText} />
        </Box>
      </Modal>
    </>
  );
};
export default ModalWindow;
