import { FC } from "react";
import style from "./ButtonStyle.module.css";

type Props = {
  text: string;
  handleLoadMore: Function;
};

export const LoadMoreButton: FC<Props> = ({ text, handleLoadMore }) => {
  return (
    <button onClick={() => handleLoadMore()} className={style.loadMoreButton}>
      {text}
    </button>
  );
};
