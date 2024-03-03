const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:
  var result = 0;
  for (var prop in objeto) {
    result++;
  }
  return result;
};

module.exports = contarPropiedades;
