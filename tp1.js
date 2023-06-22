/*  
  Ejercicio 1: 
  Implementar la función 'extractValues' que toma un objeto y retorna un array con todos los valores del objeto.
  Ejemplo: 
  extractValues({a: 1, b: 2, c: 3}) debería retornar [1, 2, 3]
*/

function extractValues(data) {
  return Object.values(data);
}

/*  
  Ejercicio 2: 
  Implementar la función 'arrayToLengthCounters' que toma un array de strings y retorna un objeto donde cada elemento
  del array se convierte en una clave del objeto y el valor es la longitud de cada string.
  Ejemplo: 
  arrayToLengthCounters(['gato', 'perro', 'elefante']) debería retornar {gato: 4, perro: 5, elefante: 8}
*/

function arrayToLengthCounters(array) {
  const longitud = {};

  for (let i = 0; i < array.length; i++){
    const valor = array[i];
    longitud[valor] = valor.length;
  }
  return longitud;
}

/*  
  Ejercicio 3: 
  Implementar la función 'findKeysInCommon' que toma dos objetos y retorna un array con los nombres de las 
  propiedades que tienen en común.
  Ejemplo:
  findKeysInCommon({a: 1, b: 2, c: 3}, {b: 4, c: 5, d: 6}) debería retornar ['b', 'c']
*/

function findKeysInCommon(objeto1, objeto2) {
  const obj1 = Object.keys(objeto1);
  const obj2 = Object.keys(objeto2);

  const comparaObj = obj1.filter(key => obj2.includes(key));

  return comparaObj;
}

// Llamamos a las funciones y mostramos los resultados

function main() {
  console.log("Trabajo Practico N° 1")
  console.log("\nEjercicio 1")
  console.log(extractValues({a: 1, b: 2, c: 3}));
  console.log("\nEjercicio 2")
  console.log(arrayToLengthCounters(['gato', 'perro', 'elefante']));
  console.log("\nEjercicio 3")
  console.log(findKeysInCommon({a: 1, b: 2, c: 3}, {b: 4, c: 5, d: 6}));
}

main();
