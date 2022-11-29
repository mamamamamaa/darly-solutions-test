import { createAsyncThunk } from "@reduxjs/toolkit";
import { IFriend } from "./friendsSlice";

const BASE_URL = "http://localhost:3000/friends/";

export const fetchFriends = createAsyncThunk<
  IFriend[],
  undefined,
  { rejectValue: string }
>("friends/fetchFriends", async (_, thunkAPI) => {
  const response = await fetch(`${BASE_URL}`);

  if (!response.ok) {
    return thunkAPI.rejectWithValue("Server error");
  }

  return await response.json();
});

export const addFriend = createAsyncThunk<
  IFriend,
  IFriend,
  { rejectValue: string }
>("friends/addFriend", async (data, thunkAPI) => {
  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  };

  const response = await fetch(`${BASE_URL}`, options);

  if (!response.ok) {
    return thunkAPI.rejectWithValue("Server error");
  }

  return await response.json();
});

export const deleteFriend = createAsyncThunk<
  IFriend,
  string,
  { rejectValue: string }
>("friends/deleteFriend", async (friendId, thunkAPI) => {
  const response = await fetch(`${BASE_URL}/${friendId}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    return thunkAPI.rejectWithValue("Server error");
  }

  return await response.json();
});
