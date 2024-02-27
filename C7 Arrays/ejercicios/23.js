function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retórnarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
  // la ejecución y retornar el string: "Se interrumpió la ejecución".
  // PISTA: Utiliza el statement 'break'.
  // Tu código:
  var array = [];
  var i = 0;
  var sum = num;
  while (i < 10) {
    sum += 2;
    i += 1;
    array.push(sum);
    if (array.length === sum) break;
  }
  if (array.length === sum) return "Se interrumpió la ejecución";
  else return array;
}

module.exports = breakStatement;
