/*
  TODO: ECMA Script 6:
 ? Que temas vamos a ver en este archivo:
 ! const, let, y var 
 ! () => {} Arrow functions
 ! try, catch, finally
 ! Promises
 ! async, await
 ! class
 ! modules
 ! use strict
 ! strict equality
 ! map, filter, forEach
 ! implicit return
 ! implicit operations
 ! console.log, console.error, console.warn, console.info, console.table
 * ================================================================ 
 ? const, let, y var: Alcances y tipos de declaracion de variables
 ? () => {}: Funciones de flecha (funciones anonimas)
 ? try, catch, finally: Manejo de excepciones
 ? Promises: Que son promesas y como se usan
 ? async, await: Manejo de promesas
 ? class: Clases y herencia
 ? modules: Modulos y exportacion
 ? use strict: Modo estricto
 ? strict equality: Comparacion estricta
 ? map, filter, forEach: Metodos de arrays
 ? implicit return: Retorno implicito
 ? implicit operations: Operaciones implicitas
 ? console.log, console.error, console.warn, console.info, console.table: Imprimir mensajes en la consola
 */
/*
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */

//todo# --------- Alcances y tipos de declaracion de variables ---------
/*
 ? const: Esto es una constante, no se puede reasignar
 ? let: Variable de bloque, se puede reasignar
 ? var: Variable de funcion, se puede reasignar
*/
const PI = 3.14159265359; //? Es una constante, no se puede reasignar
//? (ademas es una buena practica asignar las constantes en mayusculas)
const NOMBRE = "Yael Evangelista"; //* Este es simplemente un ejemplo
//* de una constante (valor que nunca se va a reasignar)
let radius = 5; //? Se puede reasignar
radius = 10; //? El alcanca de esta variable es de bloque (es decir
//? solo se puede usar dentro del bloque donde se declaro, p.e:
//? si se declara dentro de un if, solo se puede usar dentro de ese if)
//? O si se dentro de una funcion, es una variable local (no puedes usarla
//? fuera de la funcion donde se declaro)
function ejemploDeLet() {
  let miVariableLocal = 5;
}
miVariableLocal += 2; //! Error, no se puede usar fuera de la funcion
console.log(miVariableLocal);

//* ============================ VAR ================================
function ejemploDeVar() {
  var miVariableDeAlcance = 5;
}
miVariableDeAlcance += 2; //? Esto es posible, ya que var es de funcion
console.log(miVariableDeAlcance);
//! Por ese mismo motivo, es peligroso y poco recomendado seguir usando
//! var, y en su lugar usar let o const (que es la forma moderna de
//! declarar variables y constantes)

//? Su unico caso de uso es cuando necesitas declarar una variable
//? que se va a usar en un bucle, y necesitas acceder a ella fuera
//? de ese bucle (p.e: cuando necesitas acceder a la variable
//? i en un for loop), o variables que necesitan un alcance global
var miVariableGlobal = 10;
function a() {
  miVariableGlobal += 2;
}
function b() {
  if (miVariableGlobal > 10) {
    console.log("miVariableGlobal es mayor a 10");
  }
}
a();
b();

/*
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */
//todo# --------- Funciones de flecha (funciones anonimas) ---------
/*
 ? () => {}: Funciones de flecha (funciones anonimas)
 ? Son funciones que no tienen nombre, se usan cuando necesitas
 ? pasar una funcion como argumento a otra funcion, o cuando necesitas
 ? declarar una funcion de forma concisa
*/
() => {
  console.log("Hola, mundo! (desde funcion de flecha)");
};

//? Un uso comun de las funciones de flecha es cuando necesitas
//? pasar una funcion como argumento a otra funcion, p.e:
const miArray = new Array(1, 2, 3, 4, 5); //? Declaracion de array
//? (instancia a la clase Array)
miArray.forEach(
  //? Esto es un metodo de Arrays, que recorre cada elemento
  //? propio del lenguaje
  (elemento) => {
    console.log(elemento);
  }
  //? Esta es la funcion ^^^^
  //? Aqui cierra la funcion
);

//? Otra forma de usar funciones de flecha es cuando necesitas
//? retornar una funcion, p.e:
const miFuncion = () => {
  return () => {
    console.log(
      "Hola, mundo! (desde funcion de flecha dentro de otra funcion anonima)"
    );
  };
};

//? Ahora, si necesitas usar la funcion retornada, necesitas
//? llamar a la funcion miFuncion, y luego a la funcion retornada
miFuncion()(); //? Esto imprime "Hola, mundo! (desde funcion de
//? flecha dentro de otra funcion anonima)"

//? Sin embargo aunque esto es posible lo mas comun es usar
//? constantes como funciones en si mismas, p.e:
const miFuncion2 = () => {
  console.log("Hola, mundo! (desde funcion de flecha)");
};
miFuncion2(); //? Esto imprime "Hola, mundo! (desde funcion de flecha)"
/*
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */

//todo# ---------------- Manejo de excepciones ----------------
/*
 ? try: Bloque de codigo que se va a intentar ejecutar
 ? catch: Bloque de codigo que se va a ejecutar si ocurre un error
 ? throw: Lanza un error
 ? finally: Bloque de codigo que se va a ejecutar siempre,
 ? independientemente de si ocurre un error o no
*/
try {
  const MESSAGE = "Hola, mundo! (desde try)";
  if (!MESSAGE) throw new Error("El mensaje es requerido"); //! Sino hay mensaje, lanza un error
  console.log(MESSAGE);
} catch (error) {
  console.error(error);
} finally {
  //? (en este caso, se imprime "Fin de la ejecucion" sin importar si
  //? hay un error o no)
  console.info("Fin de la ejecucion");
}
//* Este tema es relativamente breve y sencillo (PERO, ES MUY IMPORTANTE)
//* Ya que, el manejo de errores o excepciones es una forma de controlar
//* los errores que pueden ocurrir en tu codigo, y evitar que tu programa
//* se detenga abruptamente (sino sabes usar el try, el programa en backend
//* puede fallar de manera inesperada y causar problemas graves, pues detiene
//* la ejecucion del programa)
/*
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */
//todo# ------------ Que son promesas y como se usan ------------
/*
 ? Promises: Son objetos que representan la eventual conclusion
 ? (éxito o falla) de una operacion asincrona, y permiten manejar
 ? el resultado de manera asincrona
 ? 
 */
const miPromesa = new Promise((resolve, reject) => {
  //? Esto es el codigo asincrono que se va a ejecutar
  //? Si la operacion es exitosa, se llama a resolve()
  //? Si la operacion falla, se llama a reject()
  //* Cabe mencionar, que como vimos antes las funciones
  //* resolve() y reject() son funciones callback (asincronas),
  //* y se ejecutan cuando la operacion asincrona se completa.
  //! ===========================================================
  //* Puede ser exitosa o fallida, y formalmente, son metodos
  //* de la clase Promise

  //? Aqui estamos imitando el comportamiento de respuesta de
  //? una API (devolviendo un JavaScript Object Notation (JSON))
  //? que, si recordamos temas anteriores, ya habiamos visto
  //? que son los objetos en JS, y como se usan para almacenar
  //? datos en forma de pares clave-valor
  resolve(`{ "res": "Operacion exitosa" }`);
  reject(`{ "res": "Operacion fallida" }`);
});

miPromesa
  //? El primer .then() se ejecuta cuando la promesa se resuelve (exitosa)
  //? y se pasa el resultado como argumento, ademas este metodo
  //? puede ser llamado varias veces (serian como try-catch-finally)
  .then((respuesta) => {
    return respuesta.json();
    //? Se retorna un json, para que el siguiente .then()
    //? pueda manejar el resultado de manera asincrona
  })
  .then((json) => {
    //? Aqui lo que se esta haciendo es manejar el resultado (respuesta)
    //? de manera asincrona, es decir, cuando el primer .then()
    //? ha terminado de ejecutarse, se ejecuta este .then()
    console.log(json);
  })
  .catch((error) => {
    //! Y en caso de haber algun error, se captura aqui
    console.error(error);
  })
  .finally(() => {
    //? Este metodo se ejecuta siempre, independientemente de si
    //? ocurre un error o no
    console.info("Fin de la ejecucion");
  });

/*
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */
//todo# ------------------ Ejercicio ------------------
/*
 ? Crea una promesa que simule una operacion asincrona, como
 ? por ejemplo, una solicitud HTTP. La promesa debe resolver
 ? si la operacion es exitosa y rechazar si ocurre un error.
 ? 
 ? Ademas, agrega un .then() para manejar el resultado exitoso
 ? y un .catch() para manejar el error.
*/

//? Pista: Puedes usar setTimeout() para simular una operacion
//? asincrona.
const miPromesa2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(`{ "res": "Operacion exitosa" }`);
    reject(`{ "res": "Operacion fallida" }`);
  }, 2000);
});

//todo = = = = = = = = = = TU CODIGO AQUI = = = = = = = = = =

/*
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */
//todo# ------------------ Manejo de promesas ------------------
/*
 ? Async/Await: Son una forma más sencilla y legible de manejar
 ? promesas, permitiendo escribir código asincrónico de manera
 ? más similar al código sincrónico. Sin instancias a clases
 ? y sin necesidad de usar .then() y .catch()
*/
const miPromesa3 = async () => {
  //? Aqui incluimos una funcion asincrona (de tipo flecha, o anonima),
  //? que se va a ejecutar cuando se llame a la funcion miPromesa3()
  try {
    const respuesta = await miPromesa2; //? Esperamos a que se resuelva la promesa
    const json = await respuesta.json(); //? Esperamos a que se resuelva la conversion a JSON (Promise)
    console.log(json); //? Imprimimos el resultado (JSON)
  } catch (error) {
    console.error(error); //! Si algo falla, mostramos el error
  } finally {
    console.info("Fin de la ejecucion"); //* Independientemente de si hay error o no, mostramos este mensaje
  }
};
miPromesa3(); //? Llamamos a la funcion asincrona
