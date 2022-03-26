import React from "react";
import "./Cart.css";
const Cart = (props) => {
  console.log(props.cart);
  let elemen = props.cart.map((element) => {
    elemen = elemen + element.name;
  });

  return (
    <div className="cart">
      <h2>Choice Laptop</h2>
      <p>{elemen}</p>
    </div>
  );
};

export default Cart;
