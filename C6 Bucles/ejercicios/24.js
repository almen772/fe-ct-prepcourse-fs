function invertirTexto(texto) {
   // La función recibe un argumento "texto" que es un string.
   // Tu objetivo es invertir el string y devolver el string invertido.
   // Tu código:

   // var palabra = texto.split('').reverse().join('');
   // return palabra; 
   var palabra = "";
   for (var i = texto.length; i > 0; i--) {
      palabra += texto[i - 1];
   }
   return palabra;
}

module.exports = invertirTexto;
