"use client";
import * as React from "react";

import Button from "@mui/material/Button";
interface IProps {
  buttonText: string;
  handleClose: any;
}

const UniversalButton: React.FC<IProps> = ({ buttonText, handleClose }) => {
  return (
    <>
      <Button
        variant="outlined"
        sx={{
          marginTop: "10px",
          marginBottom: "10px",
          ":hover": {
            bgcolor: "grey",
            border: { borderColor: "grey" },
            color: "#ffffff",
          },
          ":active": {
            bgcolor: "grey",
            border: { borderColor: "grey" },
            color: "#ffffff",
          },
          color: { color: "grey" },
          border: { borderColor: "grey" },
        }}
        onClick={handleClose}
      >
        {buttonText}
      </Button>
    </>
  );
};

export default UniversalButton;
