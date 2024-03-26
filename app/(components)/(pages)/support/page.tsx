"use client"
import { addProduct } from '@/app/GlobalRedux/Slices/generalAppleSlice';
import { useAppDispatch, useAppSelector } from '@/app/hooks/ReduxHook';
// import { getDocs } from 'firebase/firestore';

import React, { useState } from 'react'
export interface TypeProduct  {
    title: string,
    price:  string ,
    URLimage: string,
    description: string,
    cotegory: string,
    id:string
}
export default function Admin() {
  const [inputVlue, setInputValue] = useState<TypeProduct>({title: '',price: '',URLimage: "",description: '',cotegory: '', id: ""});
  let {data,} = useAppSelector(state=>state.generalAppleSlice)

  let dispatch = useAppDispatch()
    function handleProduct(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        if(e.target.name === "price"){
            const Product = {...inputVlue, [e.target.name]: e.target.value?.split('').filter(i=> +i || i === "0").join('')}
            setInputValue(Product)
        }else if(e.target.name !== "price"){
            const Product = {...inputVlue, [e.target.name]: e.target.value}
            setInputValue(Product)
        }else{
          alert("cotegory empty")
        }
      

    }
    async function handleAdding(){
      
      if(inputVlue.URLimage &&
         inputVlue.cotegory &&
         inputVlue.title&&
         inputVlue.description &&
         inputVlue.price &&
         inputVlue.cotegory !== "Cotegory"){
      dispatch(addProduct(inputVlue))
      setInputValue({
        title: '',
        price: '',
        URLimage: '',
        description: '',
        cotegory: '',
        id:''
      })
      }else{
        alert("Please fill all fields")
      }
    }  
    
  return (
    <section id='admin'>
        <div className="admin_content">
            <center><h1>Add Product</h1></center>
              <div className='inputs'>
              <select value={inputVlue.cotegory} onChange={(e)=>setInputValue({...inputVlue, cotegory: e.target.value})} name="cotegory" id="cotegory">
                    <option >Cotegory</option>
                    <option value="Mac">Mac</option>
                    <option value="iPad">iPad</option>
                    <option value="iPhone">iPhone</option>
                    <option value="Apple TV">Apple TV</option>
                    <option value="Watch">Watch</option>
                    <option value="Vision">Vision</option>
                    <option value="AirPods">AirPods</option>
                    <option value="Accessories">Accessories</option>
                </select>
                <input value={inputVlue.title} onChange={handleProduct} type="text" name='title' placeholder='Title'/>
                <input  value={inputVlue.description} onChange={handleProduct} type="text" name='description' placeholder='Description'/>
                <input value={inputVlue.URLimage} onChange={handleProduct} type="text" name='URLimage' placeholder='URL image'/>
                <input value={inputVlue.price} onChange={handleProduct} type="text" name='price' placeholder='Price'/>
                
                <button onClick={handleAdding} >Add Product</button>
              </div>
        </div>
    </section>
  )
}
