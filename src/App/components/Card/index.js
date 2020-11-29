import React from "react";

import { connect } from "react-redux";

function Card(props) {
  return (
    <div className="col-md-4">
      <div className="card mb-3 mt-3" style={{ position: "relative" }}>
        <div style={{ position: "absolute", top: 15, right: 15 }}>
          <i
            className="fa fa-plus-circle text-white fa-2x"
            aria-hidden="true"
            style={{ cursor: "pointer" }}
            onClick={() =>
              props.adicionarItem({ title: props.title, price: props.price })
            }
          ></i>
        </div>
        <img
          style={{ width: "100%", height: 300 }}
          alt="produto"
          src={props.image}
        />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <h6 className="card-subtitle text-muted">{props.description}</h6>
        </div>

        <div className="card-footer text-muted">
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(props.price)}
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    adicionarItem: (item) => dispatch({ type: "CART_ADD_ITEM", payload: item }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
