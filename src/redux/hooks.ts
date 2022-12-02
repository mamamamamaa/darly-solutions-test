import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "./store";

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useFeedback = () => {
  const isLoading = useAppSelector((store) => store.feedbacks.isLoading);
  const error = useAppSelector((store) => store.feedbacks.error);
  const feedback = useAppSelector((store) => store.feedbacks.data);

  return { isLoading, error, feedback };
};
