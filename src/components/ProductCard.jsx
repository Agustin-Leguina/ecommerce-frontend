import React, { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import { CartContext } from '../context/CartContext';
import '../styles/Card.css'

//Configuracion de la Card de cada producto

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <Card className="text-center">
      <Card.Img variant="top" src={product.image} alt={product.name} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.price}</Card.Text>
        <Button variant="primary" onClick={() => addToCart(product)}>Comprar</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
