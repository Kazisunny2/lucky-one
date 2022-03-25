import React from 'react';

const Product = (props) => {
    const {name, img, price} = props.product;
    return (
        <div>
            <h2>This is Product</h2>
        </div>
    );
};

export default Product;