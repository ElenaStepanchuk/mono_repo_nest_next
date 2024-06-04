"use client";
import * as React from "react";
import Dropdown from "@mui/joy/Dropdown";
import IconButton from "@mui/joy/IconButton";
import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MoreVert from "@mui/icons-material/MoreVert";

interface IProps {
  children: React.ReactNode;
}

const MiniMenu: React.FC<IProps> = ({ children }) => {
  return (
    <Dropdown>
      <MenuButton
        sx={{
          margin: {
            border: "transparent",
          },
        }}
        slots={{ root: IconButton }}
        slotProps={{
          root: {
            variant: "outlined",
            color: "#000000",
            ":hover": { bgcolor: "#ffffff", color: "#000000" },
            ":active": { bgcolor: "#ffffff" },
          },
        }}
      >
        <MoreVert />
      </MenuButton>
      <Menu>{children}</Menu>
    </Dropdown>
  );
};

export default MiniMenu;
