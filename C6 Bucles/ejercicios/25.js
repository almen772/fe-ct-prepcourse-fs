function esPalindromo(string) {
   // La función recibe un argumento "string".
   // Verifica si este string es palíndromo o no.
   // Retorna true si lo es, caso contrario, retorna false.
   // IMPORTANTE: Un palíndromo es una palabra o frase
   // que se lee igual hacia adelante que hacia atrás.
   // Tu código:

   // var invertida = texto.split('').reverse().join('');
   // if(string === invertida) return true;
   // else return false;
   var invertida = "";
   for (var i = string.length; i > 0; i--) {
      invertida += string[i - 1];
   }
   if (string === invertida) return true;
   else return false;
}

module.exports = esPalindromo;
