"use client"
import { getDocs } from "firebase/firestore";
import { useAppSelector, useAppDispatch } from "./ReduxHook";
import { useEffect } from "react";
import { upDateData } from "../GlobalRedux/Slices/generalAppleSlice";


export default function UpDateData() {
    let dispatch = useAppDispatch()
let {productConfigureRef} = useAppSelector(state=>state.generalAppleSlice)
    const fetchData = async () => {
        const docs = await getDocs(productConfigureRef);
        let Data = docs.docs.map((doc: any) => {
            return { ...doc.data(), id: doc.id}
        });
        dispatch(upDateData(Data))
    };
    useEffect(()=>{fetchData()},[])
    return (<div></div>)
}
