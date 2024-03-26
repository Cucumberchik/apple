import React from 'react';
import { TypeProduct } from '../support/page';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/app/firebase';
import { getOne } from '@/app/GlobalRedux/Slices/generalAppleSlice';
import { useDispatch } from 'react-redux';
import Link from 'next/link';

interface ProductCardProps {
  datas: TypeProduct;
}

const ProductCard: React.FC<ProductCardProps> = ({ datas }) => {
  const dispatch = useDispatch();
  let {id, title, price,URLimage, description} = datas;
  

  return (
    <div className='card_product'>
      <div className="card_content">
        <div className="card_title">
          <h3>New</h3>
          <h1>{title}</h1>
        </div>
        <img src={URLimage} alt="image" />
        <div className="card_option">
          <h2>From ${price} for 24 mo*.</h2>
          <Link  href={`/store/${id}`}>
          <button >Buy</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;