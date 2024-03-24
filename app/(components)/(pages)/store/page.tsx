"use client"
import { upDateData } from '@/app/GlobalRedux/Slices/generalAppleSlice';
import { db } from '@/app/firebase';
import { useAppDispatch } from '@/app/hooks/ReduxHook';
import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect } from 'react'
import ProductCard from './ProductCard';

export default function GLobalStore() {
    let dispatch = useAppDispatch()
    let productConfigureRef = collection(db, "Product");
    
    const UpDateData = async()=>{
        const docs = await getDocs(productConfigureRef);
        let Data = docs.docs.map((doc: any) => {
            return { ...doc.data(), id: doc.id}
        });
        dispatch(upDateData(Data))
    }
    useEffect(()=>{UpDateData()},[])
  return (
    <section id='Store'>
      <div className="store_content">
        <ProductCard/>
      </div>
    </section>
  )
}
