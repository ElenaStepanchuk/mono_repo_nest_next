"use client";
import * as React from "react";

// import { AiOutlineCalendar } from "react-icons/ai";

// import { format } from "date-fns";
// import { enAU } from "date-fns/locale";

interface IProps {
  //   openEditList: boolean;
  // addNewDataValue: any;
  valueTaskDeadline: string;
  //   valueListEdit: string;
  addNewDataValue: (event: React.SyntheticEvent) => void;
}

const DateButton: React.FC<IProps> = ({
  addNewDataValue,
  valueTaskDeadline,
}) => {
  // const currentDate = new Date().toISOString().slice(0, 10);
  // const [dataValue, setDataValue] = React.useState(currentDate);

  // const addNewDataValue = (e: any) => {
  //   const date = e.target.value;
  // const formattedNewDate = format(date, "EEE, d MMM", { locale: enAU });
  // console.log("formattedNevDate", formattedNewDate);
  // setDataValue(date);
  // };

  return (
    <>
      <input
        onChange={addNewDataValue}
        value={valueTaskDeadline}
        type="date"
        id="deadlineDate"
        name="deadline-date"
      />
    </>
  );
};

export default DateButton;
