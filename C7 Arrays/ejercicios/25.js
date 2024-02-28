function contarParesConContinue(numeros) {
  // La función recibe un array de numeros por argumento.
  // Devuelve la cantidad de números pares que hay en el array.
  // Evita los impares utilizando continue.
  // Tu código:
  var i = 0;
  var sum = 0;
  while (i < numeros.length) {
    i += 1;
    if (numeros[i - 1] % 2 !== 0) continue;
    sum += 1;
  }
  return sum;
}

module.exports = contarParesConContinue;
