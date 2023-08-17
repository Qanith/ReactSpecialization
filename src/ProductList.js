import React from 'react';

// ProductItem component to render a single product
const ProductItem = ({ product }) => {
    return (
        <div className="product">
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
        </div>
    );
};

// ProductList component specialized for rendering a list of products
const ProductList = ({ products }) => {
    return (
        <div>
            <h2>Products</h2>
            <div className="product-list">
                {products.map((product) => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
