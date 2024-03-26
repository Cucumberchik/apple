"use client"
import {   productConfigureRef, useAppDispatch, useAppSelector } from '@/app/hooks/ReduxHook';
import React, { useEffect } from 'react'
import ProductCard from './ProductCard';
import {  getDocs } from 'firebase/firestore';
import {  upDateData } from '@/app/GlobalRedux/Slices/generalAppleSlice';


export default function GLobalStore() {
  let dispatch = useAppDispatch()
  let {data} = useAppSelector(state=>state.generalAppleSlice)
  async function UpDateData(){
    const docs = await getDocs(productConfigureRef);
    let Data = docs.docs.map((doc) => {
        return { ...doc.data(), id: doc.id}
    });
    dispatch(upDateData(Data))
  }
  useEffect(()=>{UpDateData()},[])
    
  return (
    <section id='Store'>
      <div className="store_content">
        {data.length > 0 ? (
          data.map((el, idx)=>(
          <ProductCard datas={el} key={idx} />
          ))
        ): (
          <></>
        )}
            </div>

      {/* <ProductCard/> */}
    </section>
  )
}
