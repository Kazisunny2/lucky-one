import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const[cart, setCart] = useState([])
    
    useEffect(() =>{
        fetch('products.json')
        .then(res=> res.json())
        .then(data => setProducts(data))
    },[])

    const handleAddToCart = (product) =>{
        console.log(product)
        const newCart = [...cart, product];
        setCart(newCart); 
        
    }
    const remove  =() =>{
        
    }
    return (
        <div className='shop-container'>
           <div className="products-container">
            {
               products.map(product=> <Product
                 key={product.id} 
                 product={product} 
                 handleAddToCart={handleAddToCart}
                 ></Product>) 
            }
           </div>
           <div className="cart-container">
            <h1>Selected Books</h1>
            {
                cart.map(product => <h1>{product.name}</h1>)
              
            }
            <button className='btn-1'>CHOOSE 1 FOR ME</button>
            <br />
            <button onClick={remove} className='btn-2'>CHOOSE AGAIN</button>

           </div>
        </div>
    );
};

export default Shop;