function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  var sum = resultadosTest.reduce(function (sum, num) { return sum + num })
  return sum / resultadosTest.length
}

module.exports = promedioResultadosTest;
