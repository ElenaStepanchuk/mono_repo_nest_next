"use client";
import * as React from "react";
import { useCreateTaskMutation } from "@/redux/api/tasksApi";

import { ModalAddNewTask } from "..";

import { ITask } from "@/types/task";

interface IProps {
  id: number;
  openAddNewCard: boolean;
  setOpenAddNewCard: any;
}
const AddCard: React.FC<IProps> = ({
  id,
  openAddNewCard,
  setOpenAddNewCard,
}) => {
  const currentDate = new Date().toISOString().slice(0, 10);
  const [dataTask, setDataTask] = React.useState<ITask>({
    task_name: "",
    description: "",
    deadline: currentDate,
    priority: "Medium",
  });

  const [createTask] = useCreateTaskMutation();

  const handleClose = async () => {
    if (dataTask.task_name && id) {
      await createTask({
        id,
        task_name: dataTask.task_name,
        description: dataTask.description,
        deadline: dataTask.deadline,
        priority: dataTask.priority,
      });
      window.location.reload();
    }
    setDataTask({
      task_name: "",
      description: "",
      deadline: "",
      priority: "Medium",
    });

    setOpenAddNewCard(false);
  };

  const addNewTaskNameText = (event: any) => {
    const text = event.target.value;
    setDataTask({ ...dataTask, task_name: text });
  };
  const addNewTaskDescription = (e: any) => {
    const text = e.target.value;
    setDataTask({ ...dataTask, description: text });
  };
  const addNewValueTaskDeadline = (e: any) => {
    const text = e.target.value;
    setDataTask({ ...dataTask, deadline: text });
  };

  const addNewValueTaskPriority = (e: any) => {
    const text = e.target.value;
    setDataTask({ ...dataTask, priority: text });
  };

  return (
    <>
      <ModalAddNewTask
        openAddNewCard={openAddNewCard}
        handleClose={handleClose}
        addNewTaskNameText={addNewTaskNameText}
        addNewTaskDescription={addNewTaskDescription}
        addNewValueTaskPriority={addNewValueTaskPriority}
        addNewDataValue={addNewValueTaskDeadline}
        valueTaskName={dataTask.task_name}
        valueTaskDescription={dataTask.description}
        valueTaskDeadline={dataTask.deadline}
        valueTaskPriority={dataTask.priority}
      />
    </>
  );
};
export default AddCard;
