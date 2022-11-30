import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchFeedback, deleteFeedback, addFeedback } from "./operations";

export interface IFeedback {
  id: string;
  user: {
    firstName: string;
    secondName: string;
    phoneNumber: string;
    email: string;
    message: string;
  };
}

interface IFeedbackSlice {
  data: IFeedback[];
  isLoading: boolean;
  error: string | undefined;
}

const initialState: IFeedbackSlice = {
  data: [],
  isLoading: false,
  error: undefined,
};

const feedbackSlice = createSlice({
  name: "feedback",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchFeedback.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(addFeedback.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addCase(deleteFeedback.fulfilled, (state, action) => {
        state.data = state.data.filter(({ id }) => action.payload.id !== id);
      })
      .addMatcher(
        isAnyOf(
          fetchFeedback.pending,
          addFeedback.pending,
          deleteFeedback.pending
        ),
        (state) => {
          state.isLoading = true;
          state.error = undefined;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchFeedback.rejected,
          addFeedback.rejected,
          deleteFeedback.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchFeedback.fulfilled,
          addFeedback.fulfilled,
          deleteFeedback.fulfilled
        ),
        (state) => {
          state.isLoading = false;
          state.error = undefined;
        }
      ),
});

export const feedbackReducer = feedbackSlice.reducer;
