import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchFriends, deleteFriend, addFriend } from "./operations";

export interface IFriend {
  id: string;
  friendInfo: {
    name: string;
    age: number;
    phoneNumber: string;
    email: string;
    about: string;
    dream: string;
  };
}

interface FriendsSlice {
  data: IFriend[];
  isLoading: boolean;
  error: string | undefined;
}

const initialState: FriendsSlice = {
  data: [],
  isLoading: false,
  error: undefined,
};

const friendsSlice = createSlice({
  name: "friends",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchFriends.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(addFriend.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addCase(deleteFriend.fulfilled, (state, action) => {
        state.data = state.data.filter(({ id }) => action.payload.id !== id);
      })
      .addMatcher(
        isAnyOf(fetchFriends.pending, addFriend.pending, deleteFriend.pending),
        (state) => {
          state.isLoading = true;
          state.error = undefined;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchFriends.rejected,
          addFriend.rejected,
          deleteFriend.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchFriends.fulfilled,
          addFriend.fulfilled,
          deleteFriend.fulfilled
        ),
        (state) => {
          state.isLoading = false;
          state.error = undefined;
        }
      ),
});

export const friendsReducer = friendsSlice.reducer;
