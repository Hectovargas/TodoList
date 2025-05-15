import { useState } from "react";
import FormularioTarea from "./components/FormularioTarea";
import ListaTareas from "./components/ListaTareas";

function App() {
  const [tareas, setTareas] = useState([]);

  function agregarTarea(texto) {
    const nueva = { id: Date.now(), texto: texto };
    setTareas([...tareas, nueva]);
  }

  function eliminarTarea(id) {
    const nuevas = tareas.filter(t => t.id !== id);
    setTareas(nuevas);
  }

  return (
    <div>
      <h1>Mini Lista de Tareas</h1>
      <FormularioTarea agregarTarea={agregarTarea} />
      <ListaTareas tareas={tareas} eliminarTarea={eliminarTarea} />
      <p>Total de tareas: {tareas.length}</p>
    </div>
  );
}

export default App;