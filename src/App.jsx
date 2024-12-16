import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CartPage from './pages/CartPage';
import ContactPage from './components/ContactPage';
import QuienesSomos from './pages/QuienesSomos';
import { CartProvider } from './context/CartContext';
import CategoryPage from './pages/CategoryPage'; // mostrar los productos de "categorías"
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';

const App = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // Cargar productos desde el servidor o base de datos
    fetch('/data/productos.json')  // Aquí puedes cambiarlo a tu API o backend que gestione SQLite
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setFilteredProducts(data);  // Inicializar con todos los productos
      })
      .catch(error => console.error('Error cargando los productos:', error));
  }, []);

  // Función para manejar la búsqueda
  const handleSearch = (searchTerm) => {
    if (!searchTerm) {
      setFilteredProducts(products);  // Mostrar todos si no hay término
    } else {
      const filtered = products.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);  // Filtrar productos
    }
  };

  return (
    <CartProvider>
      <Router>
        <Navbar onSearch={handleSearch} /> {/* Navbar se muestra una vez */}
        <Routes>
          <Route path="/" element={<Home products={filteredProducts} />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
