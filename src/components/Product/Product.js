import React from "react";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Product.css";

const Product = (props) => {
  console.log(props);
  const { name, img, price } = props.product;

  return (
    <div className="product">
      <img src={img} alt="" />
      <h6>{name}</h6>
      <p className="price">Price: ${price}</p>
      <button>
        <p>Add to Cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
