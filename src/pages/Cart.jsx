import React from "react";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, addToCart, decreaseQuantity, clearCart } =
    useContext(CartContext);

  return (
    <div>
      <h1>Shopping Cart</h1>
      <Link to="/">Continue Shopping</Link>
      {cart.length === 0 ? (
        <p>
          Your Cart is empty. <Link to="/">Go Shopping</Link>
        </p>
      ) : (
        cart.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ddd",
              padding: "10px",
              margin: "10px",
            }}
          >
            <img src={product.image} alt={product.title} width="100" />
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
            <p>Quantity: {product.quantity}</p>

            <button onClick={() => decreaseQuantity(product.id)}>-</button>
            <button onClick={() => addToCart(product)}>+</button>
            <button onClick={() => removeFromCart(product.id)}>Remove</button>
          </div>
        ))
      )}
      <button onClick={() => clearCart()}>Clear Cart</button>
      <h2>
        Total: $
        {cart
          .reduce((sum, item) => sum + item.price * item.quantity, 0)
          .toFixed(2)}
      </h2>
      {cart.length > 0 && <Link to="/checkout">Proceed to Checkout</Link>}
    </div>
  );
};

export default Cart;
