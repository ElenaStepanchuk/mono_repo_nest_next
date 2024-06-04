"use client";
import * as React from "react";
import { Loader, MiniMenu, ModalUpdateCard, ModalWindowDelete } from "..";
import MenuItem from "@mui/joy/MenuItem";

import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";

import { useDeleteTaskMutation } from "@/redux/api/tasksApi";
import { useGetOneListQuery } from "@/redux/api/listsApi";

interface IProps {
  id: number | undefined;
  listId: number | undefined;
}

const MiniMenuTask: React.FC<IProps> = ({ id, listId }) => {
  const [openEditTask, setOpenEditTask] = React.useState(false);
  const [openDeleteTask, setOpenDeleteTask] = React.useState(false);

  const { data, error, isLoading } = useGetOneListQuery({ id: listId });
  const [deleteTask] = useDeleteTaskMutation();

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    console.log("error", error);
    return null;
  }

  // Edit task
  const handleClickEditTask = () => {
    setOpenEditTask(true);
  };

  // Delete task
  const handleClickDeleteTask = () => {
    setOpenDeleteTask(true);
  };
  const handleCloseDeleteTask = async (event: React.MouseEvent) => {
    const buttonText = (event.target as HTMLButtonElement).innerText;
    if (buttonText === "YES") {
      await deleteTask({ id: id });
      window.location.reload();
    }
    setOpenDeleteTask(false);
  };

  return (
    <>
      <MiniMenu>
        <MenuItem onClick={handleClickEditTask}>
          <FiEdit />
          Edit
        </MenuItem>
        <MenuItem
          onClick={handleClickDeleteTask}
          sx={{
            color: "red",
          }}
        >
          <RiDeleteBinLine />
          Delete
        </MenuItem>
      </MiniMenu>
      {
        <ModalUpdateCard
          openUpdateCard={openEditTask}
          setOpenEditTask={setOpenEditTask}
          taskId={id}
          listName={data?.detail.list_name}
        />
      }
      <ModalWindowDelete
        openDeleteList={openDeleteTask}
        handleCloseDeleteList={handleCloseDeleteTask}
      />
    </>
  );
};

export default MiniMenuTask;
