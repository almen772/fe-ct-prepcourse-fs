function esFechaValida(fecha) {
  // La función recibe un argumento "fecha".
  // Comprueba si este corresponde a una fecha válida.
  // Si es así, retorna true, sino retorna false.
  // Tu código:

  //if (Date.Parse(fecha) === NaN) return false;

  if (typeof fecha === "string") return false;  // si es un formato invalido devuelve false

  var fechaObj = new Date(fecha);

  if (isNaN(fechaObj.getTime())) return false;  // si el objeto Date no  puede crear la fecha devuelve NaN

  var dia = fechaObj.getDate();
  var mes = fechaObj.getMonth() + 1;
  var año = fechaObj.getFullYear();
  if (dia < 1 || dia > 31) return false;
  if (mes < 1 || mes > 12) return false;
  if (año <= 0) return false;

  return true;
}

module.exports = esFechaValida;