function ListaTareas({ tareas, eliminarTarea }) {
  return (
    <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
      {tareas.map(t => (
        <li key={t.id} style={{ marginBottom: "10px" }}>
          {t.texto}
          <button
            onClick={() => eliminarTarea(t.id)}
            style={{
              marginLeft: "10px",
              backgroundColor: "white",
              color: "red",
              border: "1px solid red",
              borderRadius: "5px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            ❌
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ListaTareas;
