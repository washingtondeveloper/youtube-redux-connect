import React from "react";

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
        0
      </div>
    </div>
  );
}

export default CartSize;
