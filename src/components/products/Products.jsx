import React from "react";
import Product from "./Product";

function Products() {
  const products = [
    {
      id: 1,
      title: "product.1",
      desc: "this is product number one",
      price: "200",
    },
    {
      id: 2,
      title: "product.2",
      desc: "this is product number two",
      price: "200",
    },
    {
      id: 3,
      title: "product.3",
      desc: "this is product number three",
      price: "200",
    },
    {
        id: 4,
        title: "product.4",
        desc: "this is product number four",
        price: "200",
    },
    {
        id: 5,
        title: "product.5",
        desc: "this is product number five",
        price: "200",
    },
    {
        id: 6,
        title: "product.6",
        desc: "this is product number six",
        price: "200",
      },
  ];
  return (
    <>
      <div className='row'>
        {products.map((product) => {
        return <Product {...product} key={product.id}/>
        })}
      </div>
    </>
  )
}
export default Products;
