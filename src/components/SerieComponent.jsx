import { useState } from "react";

function SerieComponent(props) {
  const [mostrarDescripcion, setMostrarDescripcion] = useState(false);

  return (
    <div className="card">
      <img
        className="card-img-top img-fluid"
        src={`/${props.imagen}`}
        alt={props.nombre}
        style={{ height: "250px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title">{props.nombre}</h5>
        <p className="card-text">{props.categoria}</p>
        <button
          className="btn btn-primary"
          onClick={() => setMostrarDescripcion(!mostrarDescripcion)}
        >
          {mostrarDescripcion ? "Ocultar" : "Descripción"}
        </button>

        {mostrarDescripcion && (
          <p className="mt-2 text-muted">
            Esta es una breve descripción de <strong>{props.nombre}</strong>.
          </p>
        )}
      </div>
    </div>
  );
}

export default SerieComponent;
