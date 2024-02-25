function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  var newArray = array.map((element) => { return element * 2 });
  return newArray;
}

module.exports = duplicarElementos;
