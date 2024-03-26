import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addDoc, getDocs } from "@firebase/firestore";
import { db } from "@/app/firebase";
import { collection } from "firebase/firestore";
import { TypeProduct } from "@/app/(components)/(pages)/support/page";

let productConfigureRef = collection(db, "Product");

interface IinitialState {
    data:TypeProduct[],
    error: boolean,
    oneProduct:TypeProduct
}

const initialState: IinitialState = {
    data: [],
    error: false,
    oneProduct: {title: '',price: '',URLimage: '',description: '',cotegory: '',id:''}
};

const AppleSlice = createSlice({
    name: "AppleSlice",
    initialState,
    reducers: {
        upDateData:(state, action)=>{
            state.data = action.payload;
        },
        addProduct:(state, action: PayloadAction<TypeProduct>)=> {
            try{
                addDoc(productConfigureRef, action.payload);
            }catch(e){
            }
        },
        getOne(state, action){
            state.oneProduct = action.payload;
        }
    }
});

export const { upDateData, addProduct, getOne } = AppleSlice.actions;
export default AppleSlice.reducer;
