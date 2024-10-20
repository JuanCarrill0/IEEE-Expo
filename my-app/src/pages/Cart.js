// pages/Cart.js
import React, { useContext, useEffect, useState, useCallback } from 'react';
import { CartContext } from '../services/CartContext';

const Cart = () => {
  const { cartItems } = useContext(CartContext);
  const [total, setTotal] = useState(0);

  // Usamos useCallback para memorizar la función calculateTotal
  const calculateTotal = useCallback(() => {
    let contador = 0;
    cartItems.forEach(item => {
      contador += item.price * item.quantity; // Calculamos el total
    });
    setTotal(contador); // Actualizamos el estado del total
  }, [cartItems]); // Dependemos de cartItems para recalcular el total

  useEffect(() => {
    calculateTotal(); // Calculamos el total cada vez que cambian los items en el carrito
  }, [calculateTotal]); // Añadimos calculateTotal como dependencia

  return (
    <div className="cart">
      <h2>Carrito de Compras</h2>
      {cartItems.length > 0 ? (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.title} - ${item.price.toFixed(2)} x {item.quantity}
            </li>
          ))}
          <li>
            <strong>Total: ${total.toFixed(2)}</strong> {/* Mostramos el total con dos decimales */}
          </li>
        </ul>
      ) : (
        <p>No tienes productos en tu carrito.</p>
      )}
    </div>
  );
};

export default Cart;
