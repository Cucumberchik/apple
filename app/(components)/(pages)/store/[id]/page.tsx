"use client"
type TypeID = {id: string}
import { getOne } from "@/app/GlobalRedux/Slices/generalAppleSlice";
import { db } from "@/app/firebase";
import { useAppDispatch, useAppSelector } from "@/app/hooks/ReduxHook";
import { doc, getDoc } from "firebase/firestore";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import "./style.scss"

export default function DetailsProduct() {
    let dispatch = useAppDispatch()
    let {oneProduct} = useAppSelector(state=> state.generalAppleSlice)
    let {id}:TypeID = useParams()
    async function getOneProduct() {
        const docRef = doc(db, "Product", id);
        const document = await getDoc(docRef);
        const data = { ...document.data() } ; 
        dispatch(getOne(data));
    }
    useEffect(()=>{getOneProduct()},[])

    
    
  return (
    <section id="detail">
        <div className="content">
            <img src={oneProduct.URLimage} alt="logo" />
            <div className="title">
                <h1>{oneProduct.title}</h1>
                <h3>{oneProduct.description}</h3>
            </div>
        </div>
    </section>
  )
}
