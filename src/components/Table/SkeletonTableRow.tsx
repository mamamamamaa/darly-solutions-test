import { FC } from "react";
import style from "./Table.module.css";

type Props = {
  headers: readonly string[];
};

export const SkeletonTableRow: FC<Props> = ({ headers }) => {
  return (
    <tbody>
      <tr className="animate-pulse">
        {headers.map((_, index) => (
          <td key={index} className={style.td}>
            <div className={style.skeletonTd}></div>
          </td>
        ))}
      </tr>
    </tbody>
  );
};
