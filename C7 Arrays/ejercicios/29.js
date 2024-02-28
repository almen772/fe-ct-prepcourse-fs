function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el aray es vacío o si no hay números faltantes.
  // Tu código:
  var faltante = numeros.find((num, idx, arr) => {
    return arr[idx] !== arr[idx + 1] - 1;
  });
  if (faltante === undefined || numeros.length === faltante) return null;
  else return faltante ? faltante + 1 : null;
}

module.exports = encontrarNumeroFaltante;