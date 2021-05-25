import React, { useState } from "react";
import Pregunta from "./components/Pregunta";

function App() {
  // definir el state
  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);

  return (
    <div className="container">
      <header>
        <h1> Gasto Semanal</h1>
        <Pregunta setPresupuesto={setPresupuesto} setRestante={setRestante} />
      </header>
    </div>
  );
}

export default App;
