function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:
  let result = [];
  for (var i = 0; i <= 10; i++) {
    result.push(i * 6);
  }
  return result;
}

module.exports = tablaDelSeis;
