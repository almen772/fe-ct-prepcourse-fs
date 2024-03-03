function tienePropiedad(objeto, propiedad) {
  // Verifica si el objeto recibido posee una propiedad con el mismo nombre que el parámetro "propiedad".
  // En ese caso, retorna true. Caso contrario, false.
  // Tu código:
  var prop = Object.keys(objeto);
  /* for (var i = 0; i < prop.length; i++) {
    if (prop[i] === propiedad) {
      return true;
    }
    else return false;
  } */
  return prop.includes(propiedad);
}

module.exports = tienePropiedad;
