import React, { FC, ReactNode, useState } from "react";
import style from "./Table.module.css";
import {
  deleteFeedback,
  fetchFeedback,
  useAppDispatch,
  useFeedback,
} from "../../redux";
import { TableHead } from "./TableHead";
import { TableBody } from "./TableBody";
import { Modal } from "../Modal/Modal";

const tableHeaders: ReadonlyArray<string> = [
  "First name",
  "Last name",
  "Email",
  "Phone number",
  "Message",
  "Delete",
];

export const Table: FC = () => {
  const [message, setMessage] = useState<ReactNode>();

  const dispatch = useAppDispatch();
  const { feedback, currentPage, isLoading, totalCount } = useFeedback();

  const handleToggleModal = (message: ReactNode) => setMessage(message);
  const handleDelete = (id: string) => dispatch(deleteFeedback(id));
  const uploadData = () => dispatch(fetchFeedback(currentPage));

  const scrollHandler = (event: React.UIEvent<HTMLDivElement>) => {
    const windowHeight = window.innerHeight;
    const scrollHeight = event.currentTarget.scrollHeight;
    const scrollTop = event.currentTarget.scrollTop;

    if (
      scrollHeight - (scrollTop + windowHeight) < 100 &&
      feedback.length < totalCount &&
      !isLoading
    ) {
      uploadData();
    }
  };

  return (
    <>
      {feedback.length === 0 && (
        <h1 className={style.emptyTableHeader}>Table is empty!</h1>
      )}

      {feedback.length > 0 && (
        <>
          <div className={style.tableContainer} onScroll={scrollHandler}>
            <table className={style.table}>
              <TableHead headers={tableHeaders} />
              <TableBody
                feedback={feedback}
                onOpen={handleToggleModal}
                onDelete={handleDelete}
              />
            </table>
            {message && <Modal onClose={handleToggleModal}>{message}</Modal>}
          </div>
        </>
      )}
    </>
  );
};
