import React from "react";

import Header from "../../components/Header";
import Products from "../../components/Products";

export default function Home() {
  return (
    <>
      <Header />
      <div className="container mt-3">
        <h2>Lanches</h2>
        <Products />
      </div>
    </>
  );
}
