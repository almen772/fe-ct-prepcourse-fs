function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  if (array.length === 0) return 0;
  var maxIndex = array[0];
  for (var i = 1; i < array.length; i++) {
    if (array[i] > maxIndex) {
      maxIndex = array[i];
    }
  }
  return array.indexOf(maxIndex);
}

module.exports = encontrarIndiceMayor;
