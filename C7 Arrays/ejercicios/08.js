function encontrarElemento(num, array) {
   // Busca el número pasado por argumento dentro del array.
   // Si lo encuentras debes retornar el INDICE en el que se encuentra dentro del array.
   // Si no se encuentra, retorna -1.
   // Tu código:
   var fIndex = (x) => x === num;
   return array.findIndex(fIndex);
}

module.exports = encontrarElemento;
