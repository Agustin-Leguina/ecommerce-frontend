import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { Table, Button, Container } from 'react-bootstrap';

// Configuración de Carrito

const CartPage = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const [quantities, setQuantities] = useState({});

  // Actualizar la cantidad de productos en el estado
  const handleQuantityChange = (e, id) => {
    const newQuantity = e.target.value;
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: newQuantity,
    }));
  };

  // Calcular el total por cada producto en base a la cantidad seleccionada
  const calculateTotal = (price, id) => {
    const quantity = quantities[id] || 1;  // Si no hay cantidad definida, es 1
    return price * quantity;
  };

  // Función para "Comprar"
  const handlePurchase = (e) => {
    alert('¡Gracias por su compra!');
  };

  return (
    <Container className="mt-4">
      <h1>Carrito de Compras</h1>
      {cartItems.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Producto</th>
                <th>Precio por Unidad</th>
                <th>Cantidad</th>
                <th>Total</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>${item.price}</td>
                  <td>
                    <input
                      type="number"
                      min="1"
                      value={quantities[item.id] || 1}
                      onChange={(e) => handleQuantityChange(e, item.id)}
                      style={{ width: '60px' }}
                    />
                  </td>
                  <td>${calculateTotal(item.price, item.id)}</td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Eliminar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div className="text-right">
            <Button variant="success" onClick={handlePurchase}>
              Comprar
            </Button>
          </div>
        </>
      )}
    </Container>
  );
};

export default CartPage;
