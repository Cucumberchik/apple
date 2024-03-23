"use client"
import { addProduct } from '@/app/GlobalRedux/Slices/generalAppleSlice';
import { useAppDispatch, useAppSelector } from '@/app/hooks/ReduxHook';
import { getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
export interface TypeProduct  {
    title?: string,
    price?:  string ,
    URLimage?: string,
    description?: string,
    cotegory?: string
}

export default function Admin() {
  const [inputVlue, setInputValue] = useState<TypeProduct>({
    title: '',
    price: '',
    URLimage: '',
    description: '',
    cotegory: ''
  });
  let {data, productConfigureRef} = useAppSelector(state=>state.generalAppleSlice)

  
  let dispatch = useAppDispatch()
  const [cotegory, setCotegory] = useState<string>('')
    function handleProduct(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        if(e.target.name === "price"){
            const Product = {...inputVlue, [e.target.name]: e.target.value?.split('').filter(i=> +i).join('')}
            setInputValue(Product)
        }else if(e.target.name !== "price"){
            const Product = {...inputVlue, [e.target.name]: e.target.value}
            setInputValue(Product)
        }else{
          alert("cotegory empty")
        }
    }
    async function handleAdding(){
      setInputValue({...inputVlue, cotegory: cotegory})
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
        cotegory: ''
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
                <input value={inputVlue.title} onChange={handleProduct} type="text" name='title' placeholder='Title'/>
                <input  value={inputVlue.description} onChange={handleProduct} type="text" name='description' placeholder='Description'/>
                <input value={inputVlue.URLimage} onChange={handleProduct} type="text" name='URLimage' placeholder='URL image'/>
                <input value={inputVlue.price} onChange={handleProduct} type="text" name='price' placeholder='Price'/>
                <select onChange={(e)=>setCotegory(e.target.value)} name="cotegory" id="cotegory">
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
                <button onClick={handleAdding} >Add Product</button>
              </div>
        </div>
    </section>
  )
}
