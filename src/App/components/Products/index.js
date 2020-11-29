import React from "react";

import { connect } from "react-redux";

import Card from "../Card";

function Products(props) {
  return (
    <div className="row">
      {props.produtos.map((item, index) => (
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

function mapStateToProps(state) {
  return {
    produtos: state.products.items,
  };
}

export default connect(mapStateToProps)(Products);
