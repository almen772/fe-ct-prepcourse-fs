function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  var result = a <= b ? 1 : -1;

  for (var i = Math.min(a, b); i <= Math.max(a, b); i++) {
    if (i !== 0) {
      result *= i;
    }
    else return 0;
  }

  return result;

}

module.exports = productoEntreNúmeros;