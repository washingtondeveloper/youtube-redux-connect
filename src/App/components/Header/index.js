import React from "react";

import CartSize from "../CartSize";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="lanches">
          <i className="fa fa-cutlery" aria-hidden="true"></i> Lanches
        </a>

        <div className="float-right">
          <CartSize />
        </div>
      </div>
    </nav>
  );
}

export default Header;
