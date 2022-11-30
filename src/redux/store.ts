import { configureStore } from "@reduxjs/toolkit";
import { feedbackReducer } from "./friendsSlice";

export const store = configureStore({
  reducer: {
    friends: feedbackReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
