import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [carts, setCart] = useState([]);
  const choiceAgain = () => setCart([]);

  const handleAddToCart = (product) => {
    const newCart = [...carts, product];
    setCart(newCart);
  };
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="shop">
      <div className="shop-container">
        {products.map((product) => (
          <Product product={product} key={product.id} handleAddToCart={handleAddToCart}></Product>
        ))}
      </div>
      <div className="cart-container">
        <h2>Choice Laptop</h2>
        {carts.map((cart) => (
          <Cart cart={cart} key={cart.id}></Cart>
        ))}
        <button>choice one for me</button>
        <button onClick={choiceAgain}>Choice Again</button>
      </div>
    </div>
  );
};

export default Shop;
