"use client";
import * as React from "react";

import css from "./btnAddCard.module.css";
import Button from "@mui/joy/Button";
import Add from "@mui/icons-material/Add";
import Box from "@mui/joy/Box";

import { AddCard } from "..";

interface IProps {
  children: React.ReactNode;
  id: number;
}

const BtnAddCard: React.FC<IProps> = ({ children, id }) => {
  const [openAddNewCard, setOpenAddNewCard] = React.useState(false);

  const handleClickAddNewCard = () => {
    setOpenAddNewCard(true);
  };

  return (
    <div className={css.container}>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        <Button
          variant="outlined"
          sx={{
            border: "1px dashed grey",
            ":hover": { bgcolor: "grey", color: "#ffffff" },
            ":active": { bgcolor: "grey" },
            color: { color: "grey" },
            width: { width: "calc(100vw / 4 - 1.5rem)" },
          }}
          startDecorator={<Add />}
          onClick={handleClickAddNewCard}
        >
          {children}
        </Button>
      </Box>
      <AddCard
        id={id}
        openAddNewCard={openAddNewCard}
        setOpenAddNewCard={setOpenAddNewCard}
      />
    </div>
  );
};

export default BtnAddCard;
