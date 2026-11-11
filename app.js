const { tareas } = require("./tareas");

console.log("=== LISTA DE TAREAS DEL PROYECTO ===");

tareas.forEach((tarea) => {
  const estado = tarea.completada ? "OK" : "PENDIENTE";
  console.log(`${tarea.id}. ${tarea.descripcion} - ${estado}`);
});

const completadas = tareas.filter((tarea) => tarea.completada).length;

console.log("\nResumen:");
console.log(`Total: ${tareas.length}`);
console.log(`Completadas: ${completadas}`);
console.log(`Pendientes: ${tareas.length - completadas}`);
