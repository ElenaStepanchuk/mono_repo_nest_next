"use client";
import * as React from "react";
import { format, isValid, parseISO } from "date-fns";
import { enAU } from "date-fns/locale";

import CloseIcon from "@mui/icons-material/Close";
import css from "./modalUpdateCard.module.css";

import { Loader, MiniMenu, ModalWindow } from "..";

import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
// import MenuItem from "@mui/joy/MenuItem";
import Button from "@mui/joy/Button";

import {
  useGetOneTaskQuery,
  useUpdateTaskMutation,
} from "@/redux/api/tasksApi";

import { AiOutlineAim } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { AiOutlineCalendar } from "react-icons/ai";
import { GoTag } from "react-icons/go";
import { BiCrosshair } from "react-icons/bi";

import { ITask } from "@/types/task";

interface IProps {
  openUpdateCard: boolean;
  setOpenEditTask: any;
  taskId: number | undefined;
  listName: string | undefined;
}

const ModalUpdateCard: React.FC<IProps> = ({
  setOpenEditTask,
  openUpdateCard,
  taskId,
  listName,
}) => {
  const { data, error, isLoading } = useGetOneTaskQuery({ id: taskId });
  const [updateTask] = useUpdateTaskMutation();

  // console.log("data:", data);

  const [dataTask, setDataTask] = React.useState<ITask>({
    task_name: "",
    description: "",
    deadline: "",
    priority: "Medium",
  });

  const [open, setOpen] = React.useState<boolean>(false);
  const [status, setStatus] = React.useState<string>("");

  React.useEffect(() => {
    if (data) {
      setDataTask({
        task_name: data.detail.task_name || "",
        description: data.detail.description || "",
        deadline:
          format(data?.detail.deadline, "EEE, d MMM", {
            locale: enAU,
          }) || "",
        priority: data.detail.priority || "Medium",
      });
    }
  }, [data]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    console.log("error", error);
    return null;
  }

  const handleOpenEditTask = () => {
    setOpen(true);
    const dateDeadlineFormat = format(data?.detail.deadline, "EEE, d MMM", {
      locale: enAU,
    });
  };

  const handleEditTextCard = async (event: any) => {
    const { value, name } = event.target;
    setDataTask((prev) => ({ ...prev, [name]: value }));
    setStatus(value);
  };

  const updateTaskNameText = () => {};

  const handleCloseEditCard = async () => {
    await updateTask({
      id: taskId,
      task_name: dataTask.task_name,
      description: dataTask.description,
      deadline: dataTask.deadline,
      priority: dataTask.priority,
    });
    window.location.reload();
    setOpenEditTask(false);
  };

  const inputStyles = {
    display: "flex",
    fontSize: "14px",
    "& .MuiInput-underline:before": {
      borderBottomColor: "#cdd7e1",
      borderWidth: "1px",
    },
    "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
      borderBottomColor: "#000000",
      borderWidth: "1px",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#000000",
      borderWidth: "1px",
    },
  };

  const inscriptionStyles = {
    display: "flex",
    fontSize: "14px",
    width: "150px",
    margin: "0",
    fontWeight: "600",
  };

  return (
    <ModalWindow
      open={openUpdateCard}
      handleClose={handleCloseEditCard}
      buttonText={"Edit task card"}
      width={"85vw"}
      height={"85vh"}
      padding={"0"}
    >
      <div className={css.bar}>
        <button className={css.btn_close} onClick={handleCloseEditCard}>
          <CloseIcon sx={{ color: "#ffffff" }} />
        </button>
      </div>
      <div className={css.container}>
        <div className={css.left_container}>
          <form noValidate autoComplete="off">
            <FormControl sx={{ width: "100%" }}>
              {open ? (
                <>
                  <div className={css.container_changeText}>
                    <Typography
                      variant="subtitle1"
                      gutterBottom
                      sx={inscriptionStyles}
                    >
                      Task name:
                    </Typography>
                    <TextField
                      name="task_name"
                      value={dataTask.task_name}
                      onChange={handleEditTextCard}
                      variant="standard"
                      sx={inputStyles}
                    />
                  </div>
                  <div className={css.container_changeText}>
                    <Typography
                      variant="subtitle1"
                      gutterBottom
                      sx={inscriptionStyles}
                    >
                      Status:
                    </Typography>
                    <TextField
                      name="list_name"
                      value={listName}
                      onChange={handleEditTextCard}
                      variant="standard"
                      sx={inputStyles}
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className={css.container_title}>
                    <h2 className={css.card_title}>{dataTask.task_name}</h2>
                    <Button
                      onClick={handleOpenEditTask}
                      className={css.btn_edit}
                      variant="outlined"
                      sx={{
                        ":hover": { bgcolor: "#cdd7e1" },
                        ":active": { bgcolor: "#cdd7e1" },
                        color: { color: "grey" },
                        border: { borderColor: "#cdd7e1" },
                        width: { width: "90px" },
                        padding: { padding: "5px 10px" },
                      }}
                    >
                      <FiEdit size={"12px"} />
                      <span className={css.btn_edit__text}>Edit task</span>
                    </Button>
                  </div>
                  <div className={css.container_dataText}>
                    <Typography
                      variant="subtitle1"
                      gutterBottom
                      sx={{
                        display: "flex",
                        justifyContent: "left",
                        fontSize: "12px",
                        color: "grey",
                        width: "200px",
                      }}
                    >
                      <BiCrosshair size={"12px"} className={css.icon} /> Status
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      gutterBottom
                      sx={{
                        display: "flex",
                        justifyContent: "left",
                        fontSize: "12px",
                        color: "#000000",
                      }}
                    >
                      {listName}
                    </Typography>
                  </div>
                  <div className={css.container_dataText}>
                    <Typography
                      variant="subtitle1"
                      gutterBottom
                      sx={{
                        display: "flex",
                        justifyContent: "left",
                        fontSize: "12px",
                        color: "grey",
                        width: "200px",
                      }}
                    >
                      <AiOutlineCalendar size={"12px"} className={css.icon} />
                      Due date
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      gutterBottom
                      sx={{
                        display: "flex",
                        justifyContent: "left",
                        fontSize: "12px",
                        color: "#000000",
                      }}
                    >
                      {dataTask?.deadline}
                    </Typography>
                  </div>
                  <div className={css.container_dataText}>
                    <Typography
                      variant="subtitle1"
                      gutterBottom
                      sx={{
                        display: "flex",
                        justifyContent: "left",
                        fontSize: "12px",
                        color: "grey",
                        width: "200px",
                      }}
                    >
                      <GoTag size={"12px"} className={css.icon} />
                      Priority
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      gutterBottom
                      sx={{
                        display: "flex",
                        justifyContent: "left",
                        fontSize: "12px",
                        color: "#000000",
                      }}
                    >
                      {data?.detail.priority}
                    </Typography>
                  </div>
                  <div className={css.container_descriptionText}>
                    <Typography
                      variant="subtitle1"
                      gutterBottom
                      sx={{
                        marginTop: "15px",
                        fontSize: "14px",
                        display: "flex",
                        justifyContent: "left",
                        fontWeight: "600",
                        color: "#000000",
                      }}
                    >
                      Description
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      gutterBottom
                      sx={{
                        display: "flex",
                        justifyContent: "flex-start",
                        testAlign: "start",
                        fontSize: "12px",
                        color: "grey",
                        width: "calc(85vw / 100 * 60 - 20px)",
                      }}
                    >
                      {data?.detail.description}
                    </Typography>
                  </div>
                </>
              )}

              {/* <Typography
                variant="subtitle1"
                gutterBottom
                sx={{
                  display: "flex",
                  justifyContent: "left",
                  fontSize: "12px",
                }}
              >
                Due date
              </Typography>
              <TextField
                name="deadline"
                value={dataTask.deadline}
                onChange={handleEditTextCard}
              /> */}
              {/* <Typography
                variant="subtitle1"
                gutterBottom
                sx={{
                  display: "flex",
                  justifyContent: "left",
                  fontSize: "12px",
                }}
              >
                Priority
              </Typography>
              <TextField
                name="priority"
                value={dataTask.priority}
                onChange={handleEditTextCard}
              /> */}
              {/* <Typography
                variant="subtitle1"
                gutterBottom
                sx={{
                  marginTop: "15px",
                  fontSize: "12px",
                  display: "flex",
                  justifyContent: "left",
                }}
              >
                Description
              </Typography>
              <TextField
                name="description"
                value={dataTask.description}
                onChange={handleEditTextCard}
                multiline
                rows={4}
              /> */}
            </FormControl>
          </form>
        </div>
        <div className={css.right_container}></div>
      </div>
    </ModalWindow>
  );
};

export default ModalUpdateCard;
