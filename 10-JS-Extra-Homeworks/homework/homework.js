// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí

 objeto = {
   D: 1,
   B: 2,
   C: 3
 };
 var matriz = Object.keys(objeto)
     .map(function(key){
       return [key, objeto[key]]
     });
  console.log(matriz);
}
deObjetoAmatriz();                                                                



function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aqui

  string = prompt("Ingresa una frase")
  let obj = {}
  for(let i=0 ; i<string.length ; i++){
    if(!obj.hasOwnProperty(string[i])){
      obj[string[i]] = 1;
    }else{
      obj[string[i]] += 1
    }
  }
  return obj
}
numberOfCharacters();


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí

  console.log(capToFront("soyHENRY"));

function capToFront(s) {
  var mayuscula = '';
  var minuscula = '';
  for (i = 0; i<s.length; i++){ 
     if(s[i] === s[i].toUpperCase()){ 
          mayuscula = mayuscula + s[i]; 
       }
   else {
          minuscula = minuscula + s[i];
        } 
   }       
  return (mayuscula + minuscula) 
}
}
capToFront();

function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

  function asAmirror(str) {
    var espejo = '';
      for(let i = str.length -1; i >= 0; i--) {
        espejo += str[i];
      };
     return espejo.split(' ').reverse().join(' ');
   }
   console.log(asAmirror("The Henry Challenge is close!"));
} 
asAmirror();

function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí

  numero = numero.toString();
  return numero.split('').reverse().join('') === numero 
}
console.log(capicua(73));
capicua();


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código 
  
 cadena = prompt('Ingresa un string');
 let nuevoStr = cadena.replace(/[a,b,c]/g,'');
 return nuevoStr
}

deleteAbc();



function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

  let str = arr.sort((l1,l2) => l1.length - l2.length);
  return str;
  
}
console.log(sortArray(["You", "are", "beautiful", "looking"]));

sortArray();

function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  

  let array1 = [5,6,7,2,1];
  let array2 = [4,3,7,9,5];

  const union = array1.filter(value => array2.includes(value));
  return union;
}

buscoInterseccion();

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

