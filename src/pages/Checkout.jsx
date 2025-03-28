import React, { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";

const Checkout = (props) => {
  const { cart, setCart } = useContext(CartContext);
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    address: "",
  });
  const navigate = useNavigate();

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleChange = (e) => {
    setCustomerInfo({ ...customerInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!customerInfo.name || !customerInfo.email || !customerInfo.address) {
      alert("Please fill out al fields");
      return;
    }

    alert("Thank you, your order has been placed");
    setCart([]);
    navigate("/");
  };
  return (
    <div>
      <h1>Checkout</h1>
      {cart.length === 0 ? (
        <p>
          Your cart is empty. <Link to="/">Go Shopping</Link>
        </p>
      ) : (
        <>
          <h2>Order Summary</h2>
          <ul>
            {cart.map((item) => {
              <li key={item.id}>
                {item.title} - ${item.price} x {item.quantity}
              </li>;
            })}
          </ul>
          <h3>Total: ${totalPrice.toFixed(2)}</h3>

          <h2>Shipping Information</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Shipping Address"
              onChange={handleChange}
              required
            />
            <button type="submit">Place Order</button>
          </form>
        </>
      )}
    </div>
  );
};

export default Checkout;
