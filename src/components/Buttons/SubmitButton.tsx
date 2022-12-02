import { FC } from "react";
import style from "./ButtonStyle.module.css";

type Props = {
  text: string;
  isDisabled: boolean;
};

export const SubmitButton: FC<Props> = ({ text, isDisabled }) => {
  return (
    <button className={style.submitButton} disabled={!isDisabled}>
      {text}
    </button>
  );
};
