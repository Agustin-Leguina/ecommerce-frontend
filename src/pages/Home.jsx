import React, { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';
import '../styles/Footer.css';

const Home = ({ products }) => {
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Función para manejar la búsqueda
  const handleSearch = (searchTerm) => {
    if (!searchTerm) {
      setFilteredProducts(products); // Si no hay término de búsqueda, mostrar todos los productos
    } else {
      const filtered = products.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered); // Filtrar productos según el término de búsqueda
    }
  };

  // Función para restablecer los productos al hacer clic en el logo
  const resetProducts = () => {
    setFilteredProducts(products); // Restablece la lista completa de productos
  };

  useEffect(() => {
    setFilteredProducts(products); // Actualizar la lista de productos cuando cambien
  }, [products]);

  return (
    <div className="div-principal">
      <h1>Todos los productos</h1>
      <ProductList products={filteredProducts} /> {/* Mostramos productos filtrados */}
      <footer>&copy; 2024 Distribuidora La Estación. Todos los derechos reservados.</footer>
    </div>
  );
};

export default Home;
