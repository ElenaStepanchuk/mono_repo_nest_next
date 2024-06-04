"use client";
import * as React from "react";

import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";

interface IProps {
  children: React.ReactNode;
}

const CardComponent: React.FC<IProps> = ({ children }) => {
  return (
    <Card
      sx={{
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderRadius: "0",
        padding: "10px 0 10px 0",
        background: "#ffffff",
        color: "#000000",
        width: "100%",
      }}
    >
      <CardContent orientation="horizontal">{children}</CardContent>
    </Card>
  );
};

export default CardComponent;
