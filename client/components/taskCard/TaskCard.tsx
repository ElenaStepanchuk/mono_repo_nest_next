"use client";
import * as React from "react";

import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import { AiOutlineCalendar } from "react-icons/ai";
import { GoDotFill } from "react-icons/go";

import { format } from "date-fns";
import { enAU } from "date-fns/locale";

import { MiniMenuTask, SelectMenu } from "..";

import css from "./taskCard.module.css";

interface IProps {
  priority: "Medium" | "Low" | "High";
  cardDescription: string | undefined;
  taskName: string | undefined;
  deadlineDate: string | number | Date;
  id: number | undefined;
  listId: number | undefined;
}

const TaskCard: React.FC<IProps> = ({
  taskName,
  cardDescription,
  deadlineDate,
  priority,
  id,
  listId,
}) => {
  const dateDeadlineFormat = format(deadlineDate, "EEE, d MMM", {
    locale: enAU,
  });

  return (
    <div className={css.container}>
      <Card
        sx={{
          background: "#ffffff",
          padding: "10px 10px 10px 10px",
          width: { width: "calc(100vw / 4 - 1.5rem)" },
        }}
      >
        <CardContent sx={{ display: "flex" }}>
          <h2 className={css.card_title}>
            {taskName}
            <span className={css.card_span_icon}>
              <MiniMenuTask id={id} listId={listId} />
            </span>
          </h2>
          <p className={css.card_description} color="grey">
            {cardDescription}
          </p>
          <p className={css.card_data}>
            <span className={css.card_data_icon}>
              <AiOutlineCalendar size={"24px"} />
            </span>
            {dateDeadlineFormat}
          </p>
          <div className={css.card_priority_container}>
            <p className={css.card_priority}>
              <GoDotFill />
              {priority}
            </p>
          </div>
          {listId !== undefined && <SelectMenu listId={listId} />}
        </CardContent>
      </Card>
    </div>
  );
};

export default TaskCard;
