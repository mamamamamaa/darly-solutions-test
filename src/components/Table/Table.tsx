import style from "./Table.module.css";
import { fetchFeedback, useAppDispatch, useAppSelector } from "../../redux";
import { useEffect } from "react";

export const Table = () => {
  const feedback = useAppSelector((store) => store.feedbacks.data);

  return (
    <div className={style.tableContainer}>
      <table className={style.table}>
        <thead className={style.thead}>
          <tr>
            <th scope="col" className="py-3 px-6">
              First name
            </th>
            <th scope="col" className="py-3 px-6">
              Last name
            </th>
            <th scope="col" className="py-3 px-6">
              Email
            </th>
            <th scope="col" className="py-3 px-6">
              Phone number
            </th>
            <th scope="col" className="py-3 px-6">
              Message
            </th>
          </tr>
        </thead>
        <tbody>
          {feedback.length > 0 &&
            feedback.map(({ user }) => (
              <tr className={style.tr}>
                <td className={style.td}>{user.firstName}</td>
                <td className={style.td}>{user.lastName}</td>
                <td className={style.td}>{user.email}</td>
                <td className={style.td}>{user.phoneNumber}</td>
                <td className={style.td}>Show message</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
