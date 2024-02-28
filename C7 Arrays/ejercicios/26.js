function encontrarPrimerMultiploDeN(n, secuencia) {
  // La función recibe un numero "n" y un array de números "secuencia" como argumentos.
  // Devuelve el primer múltiplo de n que encuentres en la secuencia de números.
  // Usa un break para detener el bucle una vez halles el múltiplo.
  // Tu código:

  var i = 0;
  var multiplo = undefined;
  while (i < secuencia.length) {
    i += 1;
    if (secuencia[i - 1] % n === 0) {
      multiplo = secuencia[i - 1];
      break;
    }
  }
  return multiplo;
}

module.exports = encontrarPrimerMultiploDeN;