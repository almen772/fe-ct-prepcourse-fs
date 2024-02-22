function combine(str1, str2, str3) {
   // Esta función debe combinar de forma alternada cada caracter de cada string.
   // La función recibe 3 argumentos. Solo debe contabilizar aquellos que NO esten vacíos.
   // Los strings pueden tener cualquier tamaño.
   // EJEMPLOS
   // combine("abc", "", "123") == "a1b2c3"
   // combine("abc", "12345", "") == "a1b2c345"
   // combine("abc", "12345", "67") == "a16b27c345"
   var concatena = "";
   var i = 0;
   if (str1 === "" && str2 === "" && str3 === "") return concatena;
   while (i < Math.max(str1.length, str2.length, str3.length)) {
      if (str1[i] !== undefined && str1[i] !== "") concatena += str1[i];
      if (str2[i] !== undefined && str2[i] !== "") concatena += str2[i];
      if (str3[i] !== undefined && str3[i] !== "") concatena += str3[i];
      i += 1
   }
   /* for (var i = 0; i < Math.max(str1.length, str2.length, str3.length); i++) {
      if (str1[i] !== undefined && str1[i] !== "") concatena += str1[i];
      if (str2[i] !== undefined && str2[i] !== "") concatena += str2[i];
      if (str3[i] !== undefined && str3[i] !== "") concatena += str3[i];
   } */
   return concatena;
}

module.exports = combine;
