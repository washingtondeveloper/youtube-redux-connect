import React from "react";

import Card from "../Card";

function Products(props) {
  return (
    <div className="row">
      {[].map((item, index) => (
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
