function combine(str1, str2, str3) {
   // Esta función debe combinar de forma alternada cada caracter de cada string.
   // La función recibe 3 argumentos. Solo debe contabilizar aquellos que NO esten vacíos.
   // Los strings pueden tener cualquier tamaño.
   // EJEMPLOS
   // combine("abc", "", "123") == "a1b2c3"
   // combine("abc", "12345", "") == "a1b2c345"
   // combine("abc", "12345", "67") == "a16b27c345"
   var combine = "";
   if (str1 != "" && str2 != "" && str3 != "") {
      for (var i = 0; i < Math.max(str1.length, str2.length, str3.length); i++) {
         combine += str1[i] + str2[i] + str3[i];
      }
   }
   return combine;
}

console.log(combine("abc", "", "123"));
//console.log(combine("abc", "12345", ""));
//console.log(combine("abc", "12345", "67"));

module.exports = combine;
