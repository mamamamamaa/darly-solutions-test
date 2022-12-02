import style from "./Table.module.css";
import {
  deleteFeedback,
  fetchFeedback,
  useAppDispatch,
  useFeedback,
} from "../../redux";
import { TableHead } from "./TableHead";
import { TableBody } from "./TableBody";
import React, { FC, ReactNode, useState } from "react";
import { Modal } from "../Modal/Modal";
import { Loader } from "../Loader/Loader";
import InfiniteScroll from "react-infinite-scroll-component";

const tableHeaders: ReadonlyArray<string> = [
  "First name",
  "Last name",
  "Email",
  "Phone number",
  "Message",
  "Delete",
];

export const Table: FC = () => {
  const [message, setMessage] = useState<ReactNode>();

  const dispatch = useAppDispatch();
  const { feedback, isLoading, currentPage, totalCount } = useFeedback();

  const handleToggleModal = (message: ReactNode) => setMessage(message);
  const handleDelete = (id: string) => dispatch(deleteFeedback(id));

  // const scrollHandler = (event: React.UIEvent<HTMLDivElement>) => {
  //   const windowHeight = window.innerHeight;
  //   const scrollHeight = event.currentTarget.scrollHeight;
  //   const scrollTop = event.currentTarget.scrollTop;
  //
  //   if (
  //     scrollHeight - (scrollTop + windowHeight) < 10 &&
  //     feedback.length < totalCount
  //   ) {
  //     dispatch(fetchFeedback(currentPage));
  //   }
  // };
  return (
    <>
      {feedback.length === 0 && (
        <h1 className={style.emptyTableHeader}>Table is empty!</h1>
      )}

      {feedback.length > 0 && (
        <>
          <div className={style.tableContainer}>
            <InfiniteScroll
              dataLength={totalCount}
              next={() => dispatch(fetchFeedback(currentPage))}
              hasMore={currentPage < totalCount / 10}
              loader={<Loader />}
              endMessage={<></>}
            >
              <table className={style.table}>
                <TableHead headers={tableHeaders} />
                <TableBody
                  feedback={feedback}
                  onOpen={handleToggleModal}
                  onDelete={handleDelete}
                />
              </table>
            </InfiniteScroll>
            {/*)}*/}
            {message && <Modal onClose={handleToggleModal}>{message}</Modal>}
          </div>
          {/*{isLoading && <Loader />}*/}
        </>
      )}
    </>
  );
};
