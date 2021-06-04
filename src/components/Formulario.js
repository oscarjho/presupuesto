import React, { useState } from "react";
import Error from "./Error";
import { v4 as uuid } from "uuid";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);

  // cuando el usuario agrega un gasto
  const agregarGasto = (e) => {
    e.preventDefault();

    // validar
    if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === "") {
      setError(true);
      return;
    }
    setError(false);

    // construir el gasto
    const gasto = {
      nombre,
      cantidad,
      id: uuid(),
    };
    console.log(gasto);

    // enviar el gasto al componente principal

    //resetear el form
  };

  return (
    <div className="Formulario">
      <form onSubmit={agregarGasto}>
        <h2>Agrega tus gastos aquí</h2>
        {error ? (
          <Error mensaje="Ambos campos son obligatorios o Presupuesto Incorrecto" />
        ) : null}
        <div className="campo">
          <label>Nombre Gasto</label>
          <input
            type="text"
            className="u-full-width"
            placeholder="Ej. Transporte"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="campo">
          <label>Cantidad Gasto</label>
          <input
            type="number"
            className="u-full-width"
            placeholder="Ej. 300"
            value={cantidad}
            onChange={(e) => setCantidad(parseInt(e.target.value, 10))}
          />
        </div>
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Agregar Gasto"
        />
      </form>
    </div>
  );
};

export default Formulario;
