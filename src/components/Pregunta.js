import React, { Fragment, useState } from "react";
import Error from "./Error";

const Pregunta = () => {
  // definir el state
  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);

  // funcion que lee el presupuesto
  const definirPresupuesto = (e) => {
    setCantidad(parseInt(e.target.value, 10));
  };
  // submit para definir el presupuesto
  const agregarPresupuesto = (e) => {
    e.preventDefault();
    // validar
    if (cantidad < 1 || isNaN(cantidad)) {
      setError(true);
      return;
    }
    //que hacer si pasa la validacion
    setError(false);
  };

  return (
    <Fragment>
      <h2> Coloca Tu Presupuesto </h2>
      {error ? <Error mensaje="El Presupuesto es Incorrecto" /> : null}
      <form onSubmit={agregarPresupuesto}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Coloca tu presupuesto"
          onChange={definirPresupuesto}
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Definir Presupuesto"
        />
      </form>
    </Fragment>
  );
};

export default Pregunta;
