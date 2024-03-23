import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addDoc, DocumentData, getDocs } from "@firebase/firestore";
import { db } from "@/app/firebase";



const initialState = {
    productConfigureRef: collection(db),
    data: null,
    error: false
};

// Создаем слайс с помощью createSlice
const AppleSlice = createSlice({
    name: "AppleSlice",
    initialState,
    reducers: {
        addProduct: {
            reducer(state, action: PayloadAction<DocumentData>) {
                addDoc(state.productConfigureRef, action.payload);
                state.data = getDocs(state.productConfigureRef);
            },
            prepare(payload: DocumentData) {
                return { payload };
            }
        }
    }
});

// Экспортируем actions и reducer
export const { addProduct } = AppleSlice.actions;
export default AppleSlice.reducer;
