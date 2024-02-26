function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  var equal = array.every((value, index, arr) => {
    return value === arr[0];
  });
  return equal;
}

module.exports = todosIguales;
