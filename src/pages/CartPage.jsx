import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { ListGroup, Button, Container } from 'react-bootstrap';

//Configuracion de Carrito

const CartPage = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <Container className="mt-4">
      <h1>Carrito de Compras</h1>
      {cartItems.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
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
      )}
    </Container>
  );
};

export default CartPage;
