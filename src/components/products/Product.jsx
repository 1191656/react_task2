import React from "react";

function Product(props) {
  return (
    <div className="col-md-4 pt-3 text-center">
      <h2>{props.title}</h2>
      <p>{props.desc}</p>
      <p>{props.price}</p>
    </div>
  );
}

export default Product;
