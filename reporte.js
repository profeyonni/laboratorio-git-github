const { tareas } = require("./tareas");

const pendientes = tareas.filter((tarea) => !tarea.completada);

console.log("=== REPORTE DE TAREAS PENDIENTES ===");

if (pendientes.length === 0) {
  console.log("No existen tareas pendientes.");
} else {
  pendientes.forEach((tarea) => {
    console.log(`- ${tarea.descripcion}`);
  });
}
