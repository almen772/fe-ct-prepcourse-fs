function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:

  /* var result;
  var max;
  var min;
  if (a<=b){result=1}else result =-1;
  if (a>b){max=a; min=b}else{max=b; min=a};

  for (var i = min; i <= max; i++) {
    if (i !== 0) {
      result *= i;
    }
    else return 0;
  }
  return result; */

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