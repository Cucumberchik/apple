import React from 'react';
import { TypeProduct } from '../support/page';

interface ProductCardProps {
  data: TypeProduct;
  idx: number
}

const ProductCard: React.FC<ProductCardProps> = ({ data, idx }) => {
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
  );
};

export default ProductCard;