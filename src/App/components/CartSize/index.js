import React from "react";

import { connect } from "react-redux";

function CartSize(props) {
  return (
    <div style={{ position: "relative" }}>
      <i
        className="fa fa-shopping-cart fa-2x text-white"
        aria-hidden="true"
      ></i>
      <div
        style={{
          position: "absolute",
          top: -10,
          right: -10,
          width: 25,
          height: 22,
          borderRadius: "50%",
          backgroundColor: "red",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontWeight: "bold",
        }}
      >
        {props.tamanhoItems}
      </div>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    tamanhoItems: state.cart.items.length,
  };
}

export default connect(mapStateToProps)(CartSize);
