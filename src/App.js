import React from 'react';
import ProductList from './ProductList';

const products = [
  {
    id: 1,
    name: 'Product A',
    price: 19.99,
    description: 'This is product a. Best in the market'
  },
  {
    id: 2,
    name: 'Product B',
    price: 29.99,
    description: 'This is product b. You can trust on'
  },
  {
    id: 3,
    name: 'Product c',
    price: 29.99,
    description: 'This is product b. You can buy me'
  },
  // Add more products...
];

const App = () => {
  return (
    <div>
      <h1>E-commerce App</h1>
      <ProductList products={products} />
    </div>
  );
};

export default App;
