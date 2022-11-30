import { FC } from "react";

type Props = {
  headers: readonly string[];
};

export const TableHead: FC<Props> = ({ headers }) => {
  return (
    <thead>
      <tr>
        {headers.length > 0 &&
          headers.map((header) => (
            <th scope="col" className="py-3 px-6">
              {header}
            </th>
          ))}
      </tr>
    </thead>
  );
};
