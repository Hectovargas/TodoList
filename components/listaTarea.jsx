function ListaTareas({ tareas, eliminarTarea }) {
  return (
    <ul>
      {tareas.map(t => (
        <li key={t.id}>
          {t.texto}
          <button onClick={() => eliminarTarea(t.id)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
}

export default ListaTareas;