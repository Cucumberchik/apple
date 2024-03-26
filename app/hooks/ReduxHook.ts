import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../GlobalRedux/store";
import { collection } from "firebase/firestore";
import { db } from "../firebase";



export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export let productConfigureRef = collection(db, "Product");

