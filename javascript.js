/*
 * Para comenzar (requisitos previos): 
    ! - Tener instalado Node.js *
    ! - Tener instalado npm (Node Package Manager) *
    ! - Tener instalado un editor de codigo (recomendado: Visual Studio Code) *
    ? - Tener instalado Git (para clonar el repositorio) [opcional]
    ? - Tener instaladas extensiones para Visual Studio Code (recomendadas: Prettier - Code formatter, BetterComments, Fira Code Font) [opcional]
 * 
 *
 *
 * Lo primero que hay que hacer es una app sencilla de la terminal. En este caso vamos a comenzar por proyectos sencillos como una calculadora. E iremos modificando ese proyecto para reciclar codigo e ir aprendiendo sobre nuevas funcionalidades y campos de aplicacion de JS.
 *
 *
 *
 *
 * Pero antes que todo, vamos a presentar la sintaxis basica de JS (del Javascript vanilla antiguo). 
    ? - Para esto debemos ejecutar el siguiente comando en la terminal:
    ! - npm install
 */

// Importar prompt-sync para habilitar la funcionalidad de prompt() en Node.js
var prompt = require("prompt-sync")();

function evaluarTipoDe(dato) {
  return typeof dato;
}

//! TIPOS DE DATOS
//? En JS hay 6 tipos de datos principalmente:
//? - String
//? - Number
//? - Boolean
//? - Object
//? - Array
//? - Function

//* VARIABLES (tipos primitivos)
var cadena = "Hola mundo";
var numero = 100;
var booleano = true;

//* VARIABLES (tipos objetos)
var objeto = {
  nombre: "HoneyVapor",
  edad: 22,
};
var array = [1, 2, 3, 4, 5];

//* FUNCIONES (tipos objetos)
function funcion() {
  var falso = false;
  if (falso) {
    console.log("Nunca entraria a esta parte");
  }
}

//* Aqui, se manda llamar una funcion que lo unico que hace es devolver el tipo de dato que se le pasa como argumento y lo muestra en la terminal.
console.log(evaluarTipoDe(cadena));
console.log(evaluarTipoDe(numero));
console.log(evaluarTipoDe(booleano));
console.log(evaluarTipoDe(objeto)); //? Cabe notar que tanto los objetos como arreglos se procesan igual dentro de Javascript.
console.log(evaluarTipoDe(array)); // ? Tipo: Object
console.log(evaluarTipoDe(funcion));

var micadena; //TODO: Declarar aqui un tipo de dato string
var minumero; //TODO: Declarar aqui un tipo de dato number
var miboleano; //TODO: Declarar aqui un tipo de dato boolean
var miobjeto; //TODO: Declarar aqui un tipo de dato object
var miarray; //TODO: Declarar aqui un tipo de dato array
//TODO: Declarar aqui un tipo de dato function

//* Lo que vamos a hacer aqui es asegurarnos que hayamos declarado bien los tipos de datos mediante la funcion evaluarTipoDe
console.log(evaluarTipoDe(micadena));
console.log(evaluarTipoDe(minumero));
console.log(evaluarTipoDe(miboleano));
console.log(evaluarTipoDe(miobjeto));
console.log(evaluarTipoDe(miarray));
console.log(evaluarTipoDe()); //! NOTAR QUE ESTO NO EXISTE (Poner el nombre de la funcion que creaste aqui)

//! ESTRUCTURAS DE CONTROL
//* 1. If-Else
function checaEdad(edad) {
  if (edad >= 18) {
    return "Eres un adulto";
  } else {
    return "Eres un menor";
  }
}

//* 2. Switch (Cases)
function tomarNombreDelDia(numeroDia) {
  switch (numeroDia) {
    case 1:
      return "Lunes";
    case 2:
      return "Martes";
    case 3:
      return "Miercoles";
    case 4:
      return "Jueves";
    case 5:
      return "Viernes";
    case 6:
      return "Sabado";
    case 7:
      return "Domingo";
    default:
      return "Numero de dia no valido";
  }
}

//* 3. For Loop (Iteration)
function sumArray(numeros) {
  var sum = 0;
  for (var i = 0; i < numeros.length; i++) {
    sum += numeros[i];
  }
  return sum;
}

//* 4. While Loop (Condition-based Iteration)
function cuentaRegresiva(inicio) {
  while (inicio > 0) {
    console.log(inicio);
    inicio--;
  }
}

//* 5. Do-While Loop (At least one execution)
function adivinaNumero(numeroCorrecto) {
  let intento;
  do {
    intento = parseInt(prompt("Adivina un numero entre 1-10"));
  } while (intento !== numeroCorrecto);
  return "Correcto!";
}

//* 6. Try-Catch (Error Handling)
function division(a, b) {
  try {
    if (b === 0) throw new Error("No se puede dividir por cero");
    return a / b;
  } catch (error) {
    return error.message;
  }
}

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
 */
//? Ahora bien, ya hecho esto, podemos comenzar por proyectos sencillos como una calculadora.
function suma(numero1, numero2) {
  //? Crear aqui una funcion para suma
}

function resta(numero1, numero2) {
  //? Crear aqui una funcion para resta
}

function multiplicacion(numero1, numero2) {
  //? Crear aqui una funcion para multiplicacion
}

function division(numero1, numero2) {
  //? Crear aqui una funcion para division
}

function main() {
  //? Poner aqui la logica de la calculadora
}
main();
