"use client";
import * as React from "react";
import { MiniMenu, ModalWindowEdit, ModalWindowDelete, AddCard } from "..";
import MenuItem from "@mui/joy/MenuItem";

import { FiEdit } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import { RiDeleteBinLine } from "react-icons/ri";

import {
  useDeleteListMutation,
  useUpdateListMutation,
} from "@/redux/api/listsApi";

const MiniMenuHeader = (id: any) => {
  const [openEditList, setOpenEditList] = React.useState(false);
  const [openAddNewCard, setOpenAddNewCard] = React.useState(false);
  const [openDeleteList, setOpenDeleteList] = React.useState(false);

  const [valueListEdit, setValueListEdit] = React.useState(id.nameList);

  const [deleteList] = useDeleteListMutation();
  const [updateList] = useUpdateListMutation();

  // Edit list
  const handleClickEditList = () => {
    setValueListEdit(id.nameList);
    setOpenEditList(true);
  };

  const addListEditText = (event: any) => {
    const text = event.target.value;
    setValueListEdit(text);
  };

  const handleCloseEditList = async () => {
    await updateList({ id: id.id, list_name: valueListEdit });
    setOpenEditList(false);
    window.location.reload();
  };

  // Add new task
  const handleClickAddNewCard = () => {
    setOpenAddNewCard(true);
  };

  // Delete list
  const handleClickDeleteList = () => {
    setOpenDeleteList(true);
  };
  const handleCloseDeleteList = async (event: React.MouseEvent) => {
    const buttonText = (event.target as HTMLButtonElement).innerText;
    if (buttonText === "YES") {
      await deleteList({ id: id.id });
      window.location.reload();
    }
    setOpenDeleteList(false);
  };

  return (
    <>
      <MiniMenu>
        <MenuItem onClick={handleClickEditList}>
          <FiEdit />
          Edit
        </MenuItem>
        <MenuItem onClick={handleClickAddNewCard}>
          <FaPlus />
          Add new task
        </MenuItem>
        <MenuItem
          onClick={handleClickDeleteList}
          sx={{
            color: "red",
          }}
        >
          <RiDeleteBinLine />
          Delete
        </MenuItem>
      </MiniMenu>
      <ModalWindowEdit
        openEditList={openEditList}
        handleCloseEditList={handleCloseEditList}
        valueListEdit={valueListEdit}
        addListEditText={addListEditText}
      />
      <ModalWindowDelete
        openDeleteList={openDeleteList}
        handleCloseDeleteList={handleCloseDeleteList}
      />
      <AddCard
        id={id.id}
        openAddNewCard={openAddNewCard}
        setOpenAddNewCard={setOpenAddNewCard}
      />
    </>
  );
};

export default MiniMenuHeader;
