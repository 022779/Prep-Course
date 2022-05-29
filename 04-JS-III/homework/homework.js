// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:

  var array = [1,2,3,4];
  return array[0];
}
devolverPrimerElemento();


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  var array =[1,2,3,4]
  return array[array.length -1];
}
devolverUltimoElemento();

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  var array = [1, 'hola', 2, 'como', 3, 'estas'];
  return array.length;
}
obtenerLargoDelArray();

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  
  var array = [1,2,3,4,5,6];
  var result = [];

  for(var i = 0; i < array.length; i++){
    result [i] = array[i] + 1;
  }
  return result;
}
incrementarPorUno();

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:

  var array = ['manzana', 'pera', 'uva', 'piña'];
  array.push = 'mandarina';
  return array;
}
agregarItemAlFinalDelArray();

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:

  var array = ['manzana', 'pera', 'uva', 'piña'];
  array.unshift = 'naranja';
  return array;
}
agregarItemAlComienzoDelArray();

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:

  palabras =['Esto', 'es' , 'un',  'String'];
  return palabras.join(' ');
}
dePalabrasAFrase();

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:

  var elemento = prompt('Ingresa un número < que 5');
  var elemento = parseInt(elemento);
  array =[1, 2, 3];

 for(var i = 0; i < array.length; i++) {
   if(array[i] === elemento){
     return true;
   }
 }return false;
}
arrayContiene();



function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:

  numeros =[1,5,8,7,2];
  var suma = 0;

  for(var i = 0; i < numeros.length; i++){
    suma = suma + numeros[i];

  }return suma;
}
agregarNumeros();


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:

  var resultadosTest = [1,2,3,4,5];
  var suma = 0;
  var promedio = 0;
  
  for(var i = 0; i < resultadosTest.length; i++){
    suma = suma + resultadosTest[i];

    promedio = suma / resultadosTest.length;
  }
   return promedio;
}
promedioResultadosTest();


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:

  var numeros = [1,5,8,4,3,9,2];
  var maximo = numeros[0];

  for(var i = 1; i < numeros.length; i++){
    if(numeros[i] > maximo){
    maximo = numeros[i];
  }
} 
  return maximo;
}
numeroMasGrande();

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:

  var arguments = [5,7,4,3,15,24];
  var total = 1;

  if(arguments.length < 1){
    return 0;
  }
  
  for(var i = 0; i < arguments.length; i++){
    total = total * arguments[i];
  }
  return total;
}
multiplicarArgumentos();

function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí

  var arreglo = [1,4,2,20,25,45,36];
  let contador = [];

  for(let i = 0; i < arreglo.length; i++){
     if(arreglo[i] > 19){
       contador.push(arreglo[i]);
     }
    }
    return contador;
  }
cuentoElementos();


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   

  if(numeroDeDia > 1 && numeroDeDia < 5){
    return 'Es dia laboral';

  }else{
    return 'Es fin de semana';
  }
    
  }
  diaDeLaSemana();
  


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí

  let num = n.toString();

  if(num.charAt(0) === "9"){
    return true;
  }
  return false;
}
empiezaConNueve();



function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  

  var arreglo = [1,2,3,4];

  for(var i = 0; i < arreglo.length -1; i++){
    if(arreglo[i] === arreglo[i+1]){
      return true;
    }
      return false;
    }
  }
  todosIguales(); 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:

  array = ['Febrero', 'Julio', 'Enero', 'Diciembre', 'Abril', 'Noviembre','Mayo', 'Marzo', 'Junio']
  var nuevoArray = [];

  for(let i = 0; i < array.length; i++){
    if(array[i] === 'Enero' || array[i] === 'Marzo' || array[i] === 'Noviembre'){
       nuevoArray.push(array[i]);
      }
  
    } if(nuevoArray < 3){
      return 'No se encontraron los meses pedidos';
    }else{
      return nuevoArray;
    }
    
  }
mesesDelAño();

function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:

  array = [1,20,500,45,123,147,158,190];
  nuevoArray = [];

  for(var i = 0; i < array.length; i++){
    if(array[i] > 100 && array[i] < 200)
    nuevoArray.push(array[i])
  }
  return nuevoArray;
}
mayorACien();


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:

  var numero = prompt('Ingresa un numero');
  var n = parseInt(numero);
  var array =[];
  var suma = n;

  for(var i = 0; i < 10; i++) {
    suma = suma + 2;
    if(suma === i)break;
    else {
      array.push(suma);
    }
  }
  if(i < 10){
    return 'Se interrumpió la ejecución';
  }
  else {
    return array;
  }
}
breakStatement();


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:

  var numero = prompt('Ingresa un número');
  var n = parseInt(numero);
  var array = [];
  var suma = n

  for(var i = 0; i < 10; i++){  
    if(i === 5)continue;
    else {
       suma = suma + 2;
       array.push(suma);
  }

  return array;
    }
}
continueStatement();


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
