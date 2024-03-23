"use client"
import React, { useState } from 'react'
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

  
  const [cotegory, setCotegory] = useState<string>('')
    function handleProduct(e: React.ChangeEvent<HTMLInputElement>){
      let product = inputVlue;
        if(e.target.name === "price"){
            const Product = {...inputVlue, [e.target.name]: e.target.value}
            product = Product;
        }else if(e.target.name !== "price"){
            const Product = {...inputVlue, [e.target.name]: e.target.value}
            product = Product
        }else if(cotegory !== "cotegory" && !!cotegory) {
          let obj = {...inputVlue, cotegory}
          product = obj
        }else{
          alert("cotegory empty")
        }
        setInputValue(product)
    }
    async function handleAdding(){
    }
    let number = inputVlue.price?.split('').filter(i=> +i).join('')
  return (
    <section id='admin'>
        <div className="admin_content">
            <center><h1>Add Product</h1></center>
              <div className='inputs'>
                <input onChange={handleProduct} type="text" name='title' placeholder='Title'/>
                <input onChange={handleProduct} type="text" name='description' placeholder='Description'/>
                <input onChange={handleProduct} type="text" name='URLimage' placeholder='URL image'/>
                <input value={number} onChange={handleProduct} type="text" name='price' placeholder='Price'/>
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
                <button>Add Product</button>
              </div>
        </div>
    </section>
  )
}
