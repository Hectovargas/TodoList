import { useState } from "react";

function FormularioTarea({ agregarTarea }) {
  const [texto, setTexto] = useState("");

  function manejarCambio(e) {
    setTexto(e.target.value);
  }

  function manejarSubmit(e) {
    e.preventDefault();
    if (texto !== "") {
      agregarTarea(texto);
      setTexto("");
    }
  }

  return (
    <form onSubmit={manejarSubmit}>
      <input
        type="text"
        placeholder="Escribe una tarea..."
        value={texto}
        onChange={manejarCambio}
      />
      <button type="submit">Agregar</button>
    </form>
  );
}

export default FormularioTarea;