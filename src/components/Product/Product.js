import React from 'react';
import'./Product.css'
const Product = (props) => {
    const{product, handleAddToCart} = props;
    const {name, img, price} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" ></img>
           <div className='product-info'>
           <p className='product-name'>{name}</p>
            <p>Price: ${price}</p>
           </div>
           <button onClick={() => handleAddToCart(product)} className='btn-cart'>
               <p>Add to Cart</p>
           </button>
        </div>
    );
};

export default Product;