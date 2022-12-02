import { FC, ReactNode } from "react";
import style from "./ButtonStyle.module.css";

type Props = {
  callback: Function;
  text: string;
  children: ReactNode;
};

export const ModalButton: FC<Props> = ({ callback, text, children }) => {
  return (
    <button onClick={() => callback(children)} className={style.modalButton}>
      {text}
    </button>
  );
};
