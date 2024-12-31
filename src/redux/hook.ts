import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RoootState } from "./store";

export const useAppSelector = useSelector.withTypes<RoootState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
