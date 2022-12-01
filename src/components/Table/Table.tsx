import style from "./Table.module.css";
import { useAppSelector } from "../../redux";
import { TableHead } from "./TableHead";
import { TableBody } from "./TableBody";
import { FC, useState } from "react";
import { Modal } from "../Modal/Modal";

const tableHeaders: ReadonlyArray<string> = [
  "First name",
  "Last name",
  "Email",
  "Phone number",
  "Message",
];

export const Table: FC = () => {
  const [message, setMessage] = useState<string>();
  const feedback = useAppSelector((store) => store.feedbacks.data);

  const handleToggleModal = (message: string) => setMessage(message);

  return (
    <div className={style.tableContainer}>
      <table className={style.table}>
        <TableHead headers={tableHeaders} />
        <TableBody feedback={feedback} onOpen={handleToggleModal} />
      </table>
      {message && <Modal onClose={handleToggleModal}>{message}</Modal>}
    </div>
  );
};
