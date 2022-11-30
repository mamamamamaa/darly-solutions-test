import React, { useEffect, FC } from "react";
import { fetchFeedback, useAppDispatch } from "../../redux";
import { Layout } from "../index";
import { Route, Routes } from "react-router-dom";
import { FormPage, HomePage, TablePage } from "../../pages/";

export const App: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFeedback());
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
