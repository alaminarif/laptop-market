import React from "react";
import "./Product.css";

const Product = (props) => {
  console.log(props.product);
  const { id, name, img, price } = props.product;

  return (
    <div>
      <img src={img} alt="" />
    </div>
  );
};

export default Product;
