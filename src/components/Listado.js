import React from "react";
import Gasto from "./Gasto";
import PropTypes from "prop-types";

/*
        {gastos.map((gasto) => (
          <Gasto gasto={gasto} />
        ))}
*/

const Listado = ({ gastos }) => {
  const gastoss = gastos.map((gasto) => (
    /*<li key={gasto.id}> {gasto.nombre} </li>
     */
    <Gasto key={gasto.id} gasto={gasto} />
  ));

  return (
    <div className="gastos-realizados">
      <h2> Listado </h2>
      {gastoss}
    </div>
  );
};

Listado.propTypes = {
  gastos: PropTypes.array.isRequired,
};

export default Listado;
