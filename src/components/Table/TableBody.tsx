import style from "./Table.module.css";
import { IFeedback } from "../../redux";
import { FC } from "react";

type Props = {
  feedback: IFeedback[];
};

export const TableBody: FC<Props> = ({ feedback }) => {
  return (
    <tbody>
      {feedback.length > 0 &&
        feedback.map(({ id, user }) => (
          <tr key={id} className={style.tr}>
            <td className={style.td}>{user.firstName}</td>
            <td className={style.td}>{user.lastName}</td>
            <td className={style.td}>
              <a href={`mailto:${user.email}`}>{user.email}</a>
            </td>
            <td className={style.td}>
              <a href={`tel:${user.phoneNumber}`}>{user.phoneNumber}</a>{" "}
            </td>
            <td className={style.td}>Show message</td>
          </tr>
        ))}
    </tbody>
  );
};
