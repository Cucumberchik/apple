"use client"
import { upDateData } from '@/app/GlobalRedux/Slices/generalAppleSlice';
import { db } from '@/app/firebase';
import { useAppDispatch, useAppSelector } from '@/app/hooks/ReduxHook';
import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect } from 'react'
import ProductCard from './ProductCard';
import { TypeProduct } from '../support/page';

export default function GLobalStore() {
    let dispatch = useAppDispatch()
    let productConfigureRef = collection(db, "Product");
    let {data} = useAppSelector(state=>state.generalAppleSlice)
    
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
        {!!data? (
          data.map((el, idx)=>(
          <ProductCard data={el} idx={idx} />
          ))
        ): (
          <></>
        )}
            </div>

      {/* <ProductCard/> */}
    </section>
  )
}
