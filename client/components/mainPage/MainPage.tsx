"use client";
import * as React from "react";
import {
  CardComponent,
  MiniMenuHeader,
  Loader,
  TaskCard,
  BtnAddCard,
} from "..";

import { useGetAllListsQuery } from "@/redux/api/listsApi";

import css from "./mainPage.module.css";
import { IList } from "@/types/list";
import { ITask } from "@/types/task";

const MainPage: React.FC = () => {
  const { data = { detail: [] }, isLoading, error } = useGetAllListsQuery("");
  const sortedData = [...data.detail].sort((a, b) => {
    if (a.id !== undefined && b.id !== undefined) {
      return a.id - b.id;
    }
    return 1;
  });

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    console.log("error", error);
    return null;
  }

  return (
    <div className={css.container}>
      <ul className={css.card_list}>
        {sortedData.map(
          (item: IList) =>
            item?.id !== undefined && (
              <li key={item.id} className={css.card_item}>
                <CardComponent>
                  <h2 className={css.card_title}>{item.list_name}</h2>
                  <p className={css.value}>{item.tasks?.length}</p>
                  <MiniMenuHeader id={item.id} nameList={item.list_name} />
                </CardComponent>
                <BtnAddCard id={item.id}>Add new card</BtnAddCard>
                <ul>
                  {item?.tasks?.map((task: ITask) => (
                    <li key={task.id}>
                      <TaskCard
                        id={task.id}
                        listId={item.id}
                        taskName={task.task_name}
                        cardDescription={task.description}
                        deadlineDate={task.deadline ? task.deadline : ""}
                        priority={task.priority}
                      />
                    </li>
                  ))}
                </ul>
              </li>
            )
        )}
      </ul>
    </div>
  );
};

export default MainPage;
