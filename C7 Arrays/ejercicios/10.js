function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
  var string5 = array.find((string) => string.length >= 5);
  return string5;

  /* var stringC = array.filter((string) => string.length > 5);
  return stringC.length > 0 ? stringC[0] : undefined; */
  /* for (let i = 0; i < array.length; i++) {
    if (array[i].length > 5) {
      return array[i];
    }
  } */
}

module.exports = obtenerPrimerStringLargo;
