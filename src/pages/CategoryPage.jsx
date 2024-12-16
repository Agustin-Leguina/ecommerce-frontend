import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductList from '../components/ProductList';

// busqueda de productos por filtros

const CategoryPage = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('../data/productos.json');
        if (!response.ok) throw new Error('No se pudo cargar el archivo JSON');
        const data = await response.json();
        setProducts(data);
  
        const filtered = data.filter(product => product.category === category.toLowerCase());
        if (filtered.length === 0) {
          console.log('No se encontraron productos para esta categoría.');
        }
        else {setFilteredProducts(filtered)}
      } catch (error) {
        console.error('Error cargando los productos:', error);
      }
    };
    fetchProducts();
  }, [category]);
  


  return (
    <div>
      <h1>{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
      {filteredProducts.length === 0 ? (
        <p>No hay productos disponibles para esta categoría.</p>
      ) : (
        <ProductList products={filteredProducts} />
      )}
    </div>
  );
  
};

export default CategoryPage;


