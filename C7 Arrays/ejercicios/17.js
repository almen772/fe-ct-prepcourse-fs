function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  var sum = arrayOfNums.reduce(
    (acumulator, currentValue) => acumulator + currentValue
  );
  return sum;
}

module.exports = agregarNumeros;
