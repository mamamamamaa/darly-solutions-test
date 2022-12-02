import style from "./Table.module.css";
import { deleteFeedback, useAppDispatch, useFeedback } from "../../redux";
import { TableHead } from "./TableHead";
import { TableBody } from "./TableBody";
import React, { FC, useState } from "react";
import { Modal } from "../Modal/Modal";
import { SkeletonTableRow } from "./SkeletonTableRow";

const tableHeaders: ReadonlyArray<string> = [
  "First name",
  "Last name",
  "Email",
  "Phone number",
  "Message",
  "Delete",
];

export const Table: FC = () => {
  const [message, setMessage] = useState<string>();

  const dispatch = useAppDispatch();
  const { feedback, isLoading } = useFeedback();

  const handleToggleModal = (message: string) => setMessage(message);
  const handleDelete = (id: string) => dispatch(deleteFeedback(id));

  return (
    <>
      {feedback.length === 0 && (
        <h1 className={style.emptyTableHeader}>Table is empty!</h1>
      )}

      {feedback.length > 0 && (
        <div className={style.tableContainer}>
          <table className={style.table}>
            <TableHead headers={tableHeaders} />
            {isLoading && <SkeletonTableRow headers={tableHeaders} />}
            {!isLoading && (
              <TableBody
                feedback={feedback}
                onOpen={handleToggleModal}
                onDelete={handleDelete}
              />
            )}
          </table>
          {message && <Modal onClose={handleToggleModal}>{message}</Modal>}
        </div>
      )}
    </>
  );
};
