import React from "react";

import { useSelector } from "react-redux";

import Card from "../Card";

function Products(props) {
  const produtos = useSelector((state) => state.products.items);
  return (
    <div className="row">
      {produtos.map((item, index) => (
        <Card
          key={index}
          image={item.image}
          title={item.name}
          description={"Recomendado antes do filme :-)"}
          price={item.price}
        />
      ))}
    </div>
  );
}

export default Products;
