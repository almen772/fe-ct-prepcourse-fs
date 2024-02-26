function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  var result = array.includes("Enero", "Marzo", "Noviembre");
  if (result === true) {
    result = array.filter(function (mes) { return mes === "Enero" || mes === "Marzo" || mes === "Noviembre"; });
    return result;
  } else return "No se encontraron los meses pedidos";
}

module.exports = mesesDelAño;
