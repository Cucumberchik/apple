import React from 'react'
import { TypeProduct } from '../support/page'

export default function ProductCard() {
    let data: TypeProduct = {
        URLimage: "https://www.istore.kg/media/products/ipad-pro-13-select-cell-spacegray-202210.webp",
        cotegory: 'iPad',
        description: "Amazing performance. Incredibly advanced displays. Ultra-fast wireless connection. Apple Pencil features a new level. Powerful new features in iPad OS. An unparalleled iPad experience.",
        title: "iPad Pro 12.9",
        price: '1700'
    }
  return (
    <div className='card_product'>
        <div className="card_content">
           <div className="card_title">
            <h3>New</h3>
            <h1>{data.title}</h1>
           </div>
           <img src={data.URLimage} alt="image" />
           <div className="card_option">
            <h2>From ${data.price} for 24 mo*.</h2>
            <button>Buy</button>
           </div>
        </div>
    </div>
  )
}
