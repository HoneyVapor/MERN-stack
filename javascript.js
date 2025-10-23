/*
 * Para comenzar (requisitos previos): 
    ! - Tener instalado Node.js *
    ! - Tener instalado npm (Node Package Manager) *
    ! - Tener instalado un editor de codigo (recomendado: Visual Studio Code) *
    ? - Tener instalado Git (para clonar el repositorio) [opcional]
    ? - Tener instaladas extensiones para Visual Studio Code (recomendadas: 
    ? Prettier - Code formatter, BetterComments, Fira Code Font) [opcional]
 * 
 *
 *
 * Lo primero que hay que hacer es una app sencilla de la terminal. En este caso 
 * vamos a comenzar por proyectos sencillos como una calculadora. E iremos modificando 
 * ese proyecto para reciclar codigo e ir aprendiendo sobre nuevas funcionalidades 
 * y campos de aplicacion de JS.
 *
 *
 *
 *
 * Pero antes que todo, vamos a presentar la sintaxis basica de JS (del Javascript vanilla antiguo). 
    ? - Para esto debemos ejecutar el siguiente comando en la terminal:
    ! - npm install
 */

//? Importar prompt-sync para habilitar la funcionalidad de prompt() en Node.js
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

//* Ahora, se manda llamar una funcion que lo unico que hace es devolver
//* el tipo de dato que se le pasa como argumento y lo muestra en la terminal.
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
ejemploDeFuncion(); //TODO: Declarar aqui un tipo de dato function

//* Lo que vamos a hacer aqui es asegurarnos que hayamos declarado bien
//* los tipos de datos mediante la funcion evaluarTipoDe()
console.log(evaluarTipoDe(micadena));
console.log(evaluarTipoDe(minumero));
console.log(evaluarTipoDe(miboleano));
console.log(evaluarTipoDe(miobjeto));
console.log(evaluarTipoDe(miarray));
console.log(evaluarTipoDe(ejemploDeFuncion)); //! NOTAR QUE ESTO NO EXISTE (Poner el nombre de la funcion que creaste aqui)

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
//* Ahora, una vez entendida la programacion estructurada, podemos comenzar a crear proyectos mas complejos.
//* Comenzaremos formalmente con la POO (Programacion Orientada a Objetos)

//! Primero: Que es la POO?
/*
! Formalmente, la POO es un paradigma de programacion que se basa en la idea de crear objetos que contienen 
! tanto datos como funciones.
!
! En palabras mas sencillas, la POO nos permite modelar el mundo real en terminos de objetos, 
! cada uno con propiedades y metodos (funciones) que pueden manipular sus propiedades (atributos).
!
! Por ejemplo, un objeto "Coche" puede tener propiedades como "marca", "modelo", "color", y metodos como 
! "acelerar", "frenar", y "cambiarDeMarcha".
!
! Para hacer mas sencillo este proceso, comenzaremos con la clase "Coche".
*/

class Coche {
  //* Las clases normalmente se escriben con la primera letra en mayuscula.
  constructor(marca, modelo, color, velocidad = 0) {
    //* Todas las clases tienen un super() o inicializador (tambien nombrado constructor)
    //* que se encarga de inicializar los atributos de la clase.
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.velocidad = velocidad; //* Esta tambien es una propiedad o atributo de la clase Coche
    //* Pero, como es un atributo, se puede acceder y modificar desde fuera de la clase.
  }

  //* Ahora, para agregar metodos a la clase, simplemente se agrega una funcion dentro de la clase.
  //? Cabe notar que la sintaxis para declarar un metodo cambia con respecto a la de una funcion
  /*
   * Una funcion normal en JS antiguo se escribe:
   * function nombreDeLaFuncion(parametros) {
   *   //* Parametros: Son los valores que se pasan a la funcion cuando se llama.
   *   //* Retorno: Es el valor que la funcion devuelve cuando se llama.
   *   //* Cuerpo de la funcion: Es el codigo que se ejecuta cuando se llama a la funcion.
   *   var resultado = valor1 + valor2;
   *   return resultado;
   * }
   *
   *
   * En cambio, un metodo se escribe:
   * nombreDeLaFuncion(parametros) {
   *   //* Parametros: Son los valores que se pasan a la funcion cuando se llama.
   *   //* Retorno: Es el valor que la funcion devuelve cuando se llama.
   *   //* Cuerpo de la funcion: Es el codigo que se ejecuta cuando se llama a la funcion.
   *   var resultado = valor1 + valor2;
   *   return resultado;
   * }
   *
   */

  acelerar(cuanto = 25) {
    console.log(
      `El coche esta acelerando ${cuanto}km/h mas de lo que ya estaba (${this.velocidad}km/h)`
    );
    this.velocidad += cuanto;
  }

  frenar() {
    //* Aqui podemos ver algo mas complejo, ya que el coche no puede frenar mas alla de su velocidad actual.
    console.log("El coche esta frenando");
    while (this.velocidad > 0) {
      this.velocidad -= 25;
    }
    console.log(`El coche ha frenado (${this.velocidad}km/h)`);
  }

  cambiarDeMarcha() {
    console.log("El coche cambio de marcha");
  }
}

//* Ahora, para crear un objeto de la clase "Coche", se usa la palabra clave "new" seguida del nombre de la clase.
var carrito = new Coche("Chevrolet", "Spark", "Rojo"); //? Esto crea un objeto "carrito" de la clase "Coche" con las propiedades
//? "marca", "modelo" y "color" iguales a "Chevrolet", "Spark" y "Rojo" respectivamente.

//? Aqui lo que hacemos es que el objeto "carrito" acelere a madres y luego cambiamos la velocidad
carrito.acelerar();
carrito.acelerar();
carrito.acelerar();
carrito.acelerar();
carrito.acelerar();
carrito.acelerar();
carrito.frenar();
carrito.cambiarDeMarcha();

//* O dicho de otra manera, hacemos referencia a la Clase Coche con el objeto "carrito"
//* y le decimos que acelere para que finalmente frenemos y cambiemos de marcha.

//? Por ejemplo, la clase Coche, representa un objeto del mundo real y contiene atributos y metodos
//? como "marca", "modelo", "color", "acelerar", "frenar" y "cambiarDeMarcha".
var carrazo = new Coche("Ferrari", "F50", "Amarillo");
carrazo.acelerar(100);
carrazo.acelerar(100);
carrazo.acelerar(100);
console.log(carrazo.velocidad); //? Aqui mostramos la velocidad del objeto "carrazo"
carrazo.frenar();
carrazo.cambiarDeMarcha();

//* Como podemos ver, carrazo es otro objeto de la clase Coche con las propiedades
//? "marca", "modelo" y "color" iguales a "Ferrari", "F50" y "Amarillo" respectivamente.
//? Y en el ejemplo observamos que carrazo acelera 100km/h, 100km/h y 100km/h,
//? luego frena y cambia de marcha.

//* Y aunque carrito y carrazo son objetos de la misma clase,
//* cada uno tiene sus propias propiedades y metodos que heredan a partir de la clase Coche.

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

//! SIGUIENTE TEMA: CREAR UNA CALCULADORA EN POO:
class Calculadora {
  constructor() {
    //* El constructor de la clase Calculadora no tiene parametros.
  }

  sumar(parametrosAqui) {}

  restar(parametrosAqui) {}

  multiplicar(parametrosAqui) {}

  dividir(parametrosAqui) {}
}

//? Mas adelante veremos lo que son las constantes, por ahora, solo usaremos la constante para declarar
//? el acceso a la clase Calculadora y sus metodos.
const calculadora = new Calculadora();
