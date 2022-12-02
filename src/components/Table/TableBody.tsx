import style from "./Table.module.css";
import { IFeedback } from "../../redux";
import { FC } from "react";
import { DeleteButton } from "../Buttons/DeleteButton";
import { ModalButton } from "../Buttons/ModalButton";

type Props = {
  feedback: IFeedback[];
  onOpen: Function;
  onDelete: Function;
};

export const TableBody: FC<Props> = ({ feedback, onOpen, onDelete }) => {
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
            <td className={style.td}>
              <ModalButton callback={onOpen} text={"Show message"}>
                <div>
                  <h3 className="text-2xl mb-3 text-center">Message</h3>
                  <p>{user.message}</p>
                </div>
              </ModalButton>
            </td>
            <td className={style.td}>
              <DeleteButton onDelete={onDelete} param={id} />
            </td>
          </tr>
        ))}
    </tbody>
  );
};
