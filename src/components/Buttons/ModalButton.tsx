import { FC } from "react";
import style from "./ButtonStyle.module.css";

type Props = {
  callback: Function;
  text: string;
  param: string;
};

export const ModalButton: FC<Props> = ({ callback, text, param }) => {
  return (
    <button onClick={() => callback(param)} className={style.modalButton}>
      {text}
    </button>
  );
};
