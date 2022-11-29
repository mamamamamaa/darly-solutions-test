import React, { useEffect, FC } from "react";
import { fetchFriends, useAppDispatch, useAppSelector } from "../../redux";

export const App: FC = () => {
  const dispatch = useAppDispatch();
  const friends = useAppSelector((state) => state.friends.data);

  useEffect(() => {
    dispatch(fetchFriends());
  }, [dispatch]);

  return (
    <>
      <h1>Hello buddy</h1>
      <div>
        {friends.length > 0 && (
          <ul>
            {friends.map(({ id, friendInfo }) => (
              <li key={id}>{friendInfo.name}</li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};
