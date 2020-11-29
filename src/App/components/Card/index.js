import React from "react";

function Card(props) {
  return (
    <div className="col-md-4">
      <div className="card mb-3 mt-3" style={{ position: "relative" }}>
        <div style={{ position: "absolute", top: 15, right: 15 }}>
          <i
            className="fa fa-plus-circle text-white fa-2x"
            aria-hidden="true"
            style={{ cursor: "pointer" }}
            onClick={() => alert("Item adicionado")}
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

export default Card;
