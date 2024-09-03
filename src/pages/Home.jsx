import React, { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';
import '../styles/Home.css';
import CocaColaImg from '../assets/img/cocacola.jpeg';
import PepsiImg from '../assets/img/pepsi.jpeg';
import FantaImg from '../assets/img/fanta.jpeg';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulación de API (productos) 
    const mockProducts = [
      { id: 1, name: 'Coca Cola', price: '$1.50', image: CocaColaImg },
      { id: 2, name: 'Pepsi', price: '$1.40', image: PepsiImg },
      { id: 3, name: 'Fanta', price: '$1.30', image: FantaImg },

    ];
    setProducts(mockProducts);
  }, []);

  return (
    <>
      <div className="container mt-4">
        <h1 className='palabra-productos'>Productos</h1>
          <ProductList products={products} />
          <ProductList products={products} />
        </div>
    </>   
  );
};

export default Home;
