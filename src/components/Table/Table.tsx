import style from "./Table.module.css";
import { useAppSelector } from "../../redux";
import { TableHead } from "./TableHead";
import { TableBody } from "./TableBody";
import { FC } from "react";

const tableHeaders: ReadonlyArray<string> = [
  "First name",
  "Last name",
  "Email",
  "Phone number",
  "Message",
];

export const Table: FC = () => {
  const feedback = useAppSelector((store) => store.feedbacks.data);

  return (
    <div className={style.tableContainer}>
      <table className={style.table}>
        <TableHead headers={tableHeaders} />
        <TableBody feedback={feedback} />
      </table>
    </div>
  );
};
