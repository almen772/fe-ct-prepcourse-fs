function conection(status) {
  // El argumento "status" representa el estado de conexión de un usuario.
  // Si el estado es igual a 1, el usuario está "Online".
  // Si el estado es igual a 2, el usuario está "Away".
  // De lo contrario, presumimos que el usuario está "Offline".
  // Retornar el estado de conexión del usuario.
  // Tu código:
  //con if/else)
  if (status == 1) return "Online";
  else if (status == 2) return "Away";
  else return "Offline";

  //con switch
  /* switch (status) {
    case 1:
      return "Online";
    case 2:
      return "Away";
    default:
      return "Offline";
  } */
}

module.exports = conection;
