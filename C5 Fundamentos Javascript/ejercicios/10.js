function esFechaValida(fecha) {
  // La función recibe un argumento "fecha".
  // Comprueba si este corresponde a una fecha válida.
  // Si es así, retorna true, sino retorna false.
  // Tu código:
  if (typeof fecha === "string") return false;

  //if (Date.Parse(fecha) === NaN) return false;
  //var fechaObj = new Date(fecha);

  var dia = fechaObj.getDate();
  var mes = fechaObj.getMonth() + 1;
  var año = fechaObj.getFullYear();
  if (dia < 1 || dia > 31) return false;
  if (mes < 1 || mes > 12) return false;
  if (año <= 0) return false;

  return true;

}

/* var fecha = "invalid"
var fechaObj = new Date(fecha);

console.log((fechaObj));
console.log(typeof (fecha)); */

module.exports = esFechaValida;