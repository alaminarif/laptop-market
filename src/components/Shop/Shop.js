import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [carts, setCart] = useState([]);
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
        <Cart cart={carts}></Cart>
      </div>
    </div>
  );
};

export default Shop;
