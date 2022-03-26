import React from "react";
import "./Cart.css";
const Cart = (props) => {
  const { name } = props.cart;

  return (
    <div className="cart">
      <p> Name: {name}</p>
    </div>
  );
};

export default Cart;
