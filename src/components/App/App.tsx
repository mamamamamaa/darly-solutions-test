import React, { FC, lazy, useEffect } from "react";
import { Layout } from "../index";
import { Route, Routes } from "react-router-dom";
import { fetchFeedback, useAppDispatch, useFeedback } from "../../redux";

const HomePage = lazy(() => import("../../pages/HomePage"));
const TablePage = lazy(() => import("../../pages/TablePage"));
const FormPage = lazy(() => import("../../pages/FormPage"));

export const App: FC = () => {
  const dispatch = useAppDispatch();
  const { currentPage } = useFeedback();

  useEffect(() => {
    dispatch(fetchFeedback(currentPage));
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/table" element={<TablePage />} />
        <Route path="/form" element={<FormPage />} />
      </Route>
    </Routes>
  );
};
