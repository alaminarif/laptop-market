import React from "react";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Product.css";

const Product = (props) => {
  // console.log(props);
  const { product, handleAddToCart } = props;
  const { name, img, price } = product;

  return (
    <div className="product">
      <img src={img} alt="" />
      <h6>{name}</h6>
      <p className="price">Price: ${price}</p>
      <button onClick={() => handleAddToCart(product)}>
        <p>Add to Cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
