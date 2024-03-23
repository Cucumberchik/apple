"use client"
import { getDocs } from "firebase/firestore";
import { useAppSelector, useAppDispatch } from "./ReduxHook";
import { useEffect } from "react";
import { upDateData } from "../GlobalRedux/Slices/generalAppleSlice";

export default function UpDateData() {
    let dispatch = useAppDispatch()
    let {productConfigureRef} = useAppSelector(state=>state.generalAppleSlice)
    const fetchData = async () => {
        const querySnapshot = await getDocs(productConfigureRef);
        let fetchedData = querySnapshot.docs.map(doc => doc.data());
        dispatch(upDateData(fetchedData))
    };
    useEffect(()=>{fetchData()},[])
    return (<div></div>)
}
