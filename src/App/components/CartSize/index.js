import React from "react";

import { useSelector } from "react-redux";

function CartSize(props) {
  const tamanhoItens = useSelector((state) => state.cart.items.length);
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
        {tamanhoItens}
      </div>
    </div>
  );
}

export default CartSize;
