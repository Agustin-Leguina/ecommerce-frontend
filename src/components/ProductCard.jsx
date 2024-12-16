import React, { useState, useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import { CartContext } from '../context/CartContext';
import iconoCarrito from '../assets/img/carrito-de-compras.png';
import '../styles/Card.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const [added, setAdded] = useState(false); // Estado para manejar el mensaje

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);  // Mostrar mensaje "Agregado al carrito"
    setTimeout(() => setAdded(false), 2000);  // Ocultar mensaje después de 2 segundos
  };

  return (
    <div className="contenedor-card">
      <Card className="product-card">
        <div className="card-hijo-contenedor">
          <Card.Img variant="top" src={product.image} alt={product.title} />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>{product.price}</Card.Text>
            <Button variant="primary" onClick={handleAddToCart}>
              Agregar
              <img
                src={iconoCarrito}
                alt="Carrito"
                style={{ width: '20px', marginLeft: '8px' }}
              />
            </Button>
            {added && <p style={{ color: 'green', marginTop: '10px', display: 'flex', justifyContent: 'center' }}>Agregado al carrito</p>}
          </Card.Body>
        </div>
      </Card>
    </div>
  );
};

export default ProductCard;
