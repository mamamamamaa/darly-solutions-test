import { createAsyncThunk } from "@reduxjs/toolkit";
import { IFeedback } from "./feedbackSlice";
import toast from "react-hot-toast";

const BASE_URL = "http://localhost:1234/feedback/";

export const fetchFeedback = createAsyncThunk<
  IFeedback[],
  undefined,
  { rejectValue: string }
>("feedback/fetchFeedback", async (_, thunkAPI) => {
  const response = await fetch(`${BASE_URL}`);

  if (!response.ok) {
    toast.error("We can't load table data :(");
    return thunkAPI.rejectWithValue("Server error");
  }

  return await response.json();
});

export const addFeedback = createAsyncThunk<
  IFeedback,
  IFeedback,
  { rejectValue: string }
>("feedback/addFeedback", async (data, thunkAPI) => {
  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  };

  const response = await fetch(`${BASE_URL}`, options);
  if (!response.ok) {
    toast.error("Something went wrong");
    return thunkAPI.rejectWithValue("Server error");
  }
  toast.success("Success!!!");

  return await response.json();
});

export const deleteFeedback = createAsyncThunk<
  IFeedback,
  string,
  { rejectValue: string }
>("feedback/deleteFeedback", async (feedbackId, thunkAPI) => {
  const response = await fetch(`${BASE_URL}/${feedbackId}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    return thunkAPI.rejectWithValue("Server error");
  }

  return await response.json();
});
