import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { ListGroup, Button } from 'react-bootstrap';

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <div className="container mt-4">
      <h1>Carrito de Compras</h1>
      <ListGroup>
        {cartItems.map((item) => (
          <ListGroup.Item key={item.id}>
            <div className="d-flex justify-content-between">
              <span>{item.name} - {item.price}</span>
              <Button variant="danger" onClick={() => removeFromCart(item.id)}>Eliminar</Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default Cart;
