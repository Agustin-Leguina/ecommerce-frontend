import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './components/Cart';
import ContactPage from './components/ContactPage';
import CartPage from './pages/CartPage';
import QuienesSomos from './pages/QuienesSomos';
import { CartProvider } from './context/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';

const App = () => {

  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
