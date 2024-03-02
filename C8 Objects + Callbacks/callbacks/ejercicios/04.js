function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // NOTA: no debes retornar nada.
   // Tu código:

   //var sum = arrayOfNumbers.reduce((acum, value) => acum + value);
   var sum = 0;
   for (var i = 0; i < arrayOfNumbers.length; i++) {
      sum += arrayOfNumbers[i];
   }
   cb(sum);
}

module.exports = sumarArray;
