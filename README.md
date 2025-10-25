# Ruta de aprendizaje JS (JavaScript) 

## Parte 1
<hr/>

## Variables y tipos de datos
Vamos a comenzar con las variables y tipos de datos en JavaScript. Empezando por definir apropiadamente una variable, ya que esto es importante para JavaScript, y en gral. para cualquier lenguaje de programacion.

* Que es una variable?
Una variable es un contenedor de informacion. Puede ser de cualquier tipo, y puede cambiar su valor en cualquier momento. O mas formalmente, una variable es un nombre simbólico que se utiliza para referirse a un valor almacenado en la memoria del computador. Es decir, es un espacio de memoria donde se asigna un valor (clasificandolo por su tipo de dato).

* Tipos de datos en JavaScript
JavaScript tiene varios tipos de datos, los cuales se pueden clasificar en dos categorias, los primitivos y los objetos.
Los tipos de datos primitivos son:
    * `number`. Sirve para almacenar numeros tanto enteros como con decimales.
    * `string`. Sirve para almacenar cadenas de texto.
    * `boolean`. Verdadero / Falso.
    * `null`. Es un valor nulo (es importante no confundirlo con el undefined, ya que el Null se asigna mediante programacion, en cambio, cuando un valor un no se asigna su valor por defecto es undefined).
    * `undefined`. Es un valor que se asigna por defecto a una variable que no ha sido inicializada.

```javascript
// Ejemplo de declaracion de variables
let edad = 22; //? number
let nombre = 'HoneyVapor'; //? string
let esProgramador = true; //? boolean
let cantidadDeHijos = null; //? null
let proyectoActual; //? undefined
```

Los tipos de datos objetos son:
* `Object`. Los objetos son JSON (JavaScript Object Notation), y son una forma de almacenar y transmitir datos.
* `Array`. Los arrays son objetos que se utilizan para almacenar una coleccion de elementos.
* `Function`. Las funciones son bloques de codigo que se pueden reutilizar (de estas hablaremos mas adelante en ES6, ECMA Script 6).

## Algoritmos y Algoritmia
Para continuar con los temas, vamos a ver los algoritmos. Un algoritmo es una secuencia de pasos que se siguen para resolver un problema o realizar una tarea. En JavaScript, los algoritmos se pueden implementar usando funciones, condiciones, ciclos, entre otras cosas.

Por que creo que es importante ver esta parte primero? Porque los algoritmos son como una receta de cocina, y cada paso es como una instruccion para el computador. Entonces, antes de comenzar a programar, es importante entender como funciona un algoritmo, y como se implementa. Ademas, es importante saber que los algoritmos son la base de la programacion, y que cualquier programa que se escriba en JavaScript es una implementacion de un algoritmo. Dicho en palabras mas simples, documentar, comentar y diseñar el flujo del programa antes de codificarlo. Esto te da mas profesionalismo, ademas, facilita el trabajo en equipo y es una buena practica. 

## JavaScript Vanilla para Apps de Terminal (Node.js)
Comenzaremos por definir dos paradigmas de programacion:
 * Programacion Estructurada
 * Programacion Orientada a Objetos

Siendo cada uno de estos un paradigma de programacion muy distinto del otro, tenemos que aprender primero uno para pasar a comprender a profundidad el segundo, vamos a ver como se implementa la programacion estructurada en JavaScript y despues la POO.

### Programacion Estructurada
En la programacion estructurada, se organiza el codigo en funciones y bloques de codigo, y se utilizan declaraciones como `if`, `else`, `for`, `while` y `switch` para controlar el flujo de ejecucion del programa. Es la mas simple de las formas de programar, y se basa en la idea de que el programa se divide en funciones, y cada funcion se encarga de realizar una tarea especifica.

### Programacion Orientada a Objetos
En la programacion orientada a objetos, se organiza el codigo en objetos, y cada objeto tiene propiedades y metodos. Se utilizan clases para definir objetos, y se utilizan instancias de clases para crear objetos. 
Ademas, en la POO se utilizan conceptos como herencia, polimorfismo y encapsulamiento para organizar y estructurar el codigo de manera mas eficiente y reutilizable.


## Parte 2
<hr/>

## ECMAScript 6 (ES6)
ECMAScript 6 (ES6) es la version mas reciente de JavaScript, y fue lanzada en 2015 (hace ya 10 años). Esta version agrega muchas nuevas caracteristicas y mejoras a JavaScript, como las arrow functions, las plantillas de cadena, las destructuraciones, las promesas, y mas.

En este archivo, veremos las nuevas caracteristicas de ES6, y como se utilizan en JavaScript.

### const, let y var
En ES6, se introdujeron dos nuevas formas de declarar variables, `const` y `let`. Ambas son usadas para declarar variables, pero tienen diferencias importantes. 
* `const` se utiliza para declarar variables que no van a cambiar su valor en el futuro. Es decir, se utilizan para declarar variables que son constantes, o bien, que no se van a modificar.
* `let` se utiliza para declarar variables que van a cambiar su valor en el futuro. Es decir, se utilizan para declarar variables que son mutables.
* `var` se utiliza para declarar variables que van a cambiar su valor en el futuro. Es decir, se utilizan para declarar variables que son mutables. Sin embargo, se considera una forma obsoleta de declarar variables, y se debe evitar su uso.

### () => {} arrow functions
Las arrow functions son una forma mas concisa de escribir funciones en JavaScript. Se utilizan para definir funciones anonimas, y se pueden utilizar en lugar de las funciones tradicionales. 
Ademas, las arrow functions tienen una sintaxis mas simple y clara, y se utilizan para definir funciones de una sola linea.

### try, catch y finally
En JavaScript, se utilizan las palabras clave `try`, `catch` y `finally` para manejar errores y excepciones. 
* `try` se utiliza para envolver el codigo que puede generar un error.
* `catch` se utiliza para capturar y manejar el error generado en el bloque `try`.
* `finally` se utiliza para definir un bloque de codigo que se ejecutara independientemente de si hay un error o no.

### Promises
En JavaScript, las promesas son objetos que se utilizan para manejar operaciones asincronas. Se utilizan para encapsular el codigo que se va a ejecutar en el futuro, y para manejar el resultado de la operacion cuando se complete.
* `then` se utiliza para manejar el resultado de la promesa cuando se complete con exito.
* `catch` se utiliza para manejar el error generado en la promesa.
* `finally` se utiliza para definir un bloque de codigo que se ejecutara independientemente de si hay un error o no.

### async, await
En ES6, se introdujeron dos nuevas formas de manejar promesas, `async` y `await`. 
* `async` se utiliza para definir una funcion asincrona, y se utilizan para envolver el codigo que contiene promesas.
* `await` se utiliza para esperar a que se complete una promesa, y se utilizan dentro de funciones asincronas.

### class
En ES6, se introdujo la palabra clave `class` para definir clases y herencia en JavaScript. Se utilizan para definir objetos y sus propiedades y metodos.
* `class` se utiliza para definir una clase.
* `constructor` se utiliza para definir el constructor de la clase.
* `extends` se utiliza para heredar de otra clase.
* `super` se utiliza para llamar al constructor de la clase padre.
* `this` se utiliza para referir a la instancia de la clase.

### modules
En ES6, se introdujeron los modulos para organizar y estructurar el codigo en JavaScript. Se utilizan para dividir el codigo en archivos separados, y para exportar y importar funciones, objetos y variables entre archivos.
* `export` se utiliza para exportar funciones, objetos y variables desde un archivo.
* `import` se utiliza para importar funciones, objetos y variables desde otro archivo.

### use strict
En ES6, se introdujo la palabra clave `use strict` para activar el modo estricto en JavaScript. Se utilizan para activar ciertas reglas y mejoras de seguridad en el codigo.
`use strict` se utiliza para activar el modo estricto en el archivo.
El modo estricto se activa al inicio de un archivo, y se aplica a todo el codigo dentro de ese archivo.
Lo que el `use strict` hace es activar ciertas reglas y mejoras de seguridad en el codigo. Como:
* No se puede utilizar la palabra clave `this` en el modo estricto.
* No se puede utilizar la palabra clave `arguments` en el modo estricto.
* No se puede utilizar la palabra clave `eval` en el modo estricto.
* No se puede utilizar la palabra clave `new.target` en el modo estricto.
* No se puede utilizar la palabra clave `delete` en el modo estricto.
* No se puede utilizar la palabra clave `super` en el modo estricto.
* No se puede utilizar la palabra clave `yield` en el modo estricto.
* No se puede utilizar la palabra clave `yield*` en el modo estricto.
* No se puede utilizar la palabra clave `import` en el modo estricto.
* No se puede utilizar la palabra clave `export` en el modo estricto.
* No se puede utilizar la palabra clave `class` en el modo estricto.

### strict equality operator (===)
En ES6, se introdujo el operador de igualdad estricta `===`. Se utilizan para comparar dos valores, y devolver `true` si los valores son iguales y del mismo tipo.
* `===` se utiliza para comparar dos valores iguales estrictamente.
* `!==` se utiliza para comparar dos valores diferentes estrictamente.

### map, filter, forEach
En ES6, se introdujeron tres nuevas formas de iterar sobre arrays, `map`, `filter` y `forEach`.
* `map` se utiliza para transformar cada elemento de un array en otro valor, y devolver un nuevo array con los valores transformados.
* `filter` se utiliza para filtrar los elementos de un array segun una condicion, y devolver un nuevo array con los elementos que cumplen la condicion.
* `forEach` se utiliza para ejecutar una funcion para cada elemento de un array.

### implicit return
En ES6, se introdujo la forma implicita de devolver un valor en una funcion. Se utilizan para definir funciones de una sola linea, y para devolver el valor implicito.
* `() => {}` se utiliza para definir una funcion de una sola linea.
* `() => valor` se utiliza para devolver el valor implicito.

### implicit operations
En ES6, se introdujeron las operaciones implicitas para realizar operaciones matematicas de manera mas simple y clara. Se utilizan para realizar operaciones como suma, resta, multiplicacion y division.
* `+=` se utiliza para sumar un valor a la variable.
* `-=` se utiliza para restar un valor a la variable.
* `*=` se utiliza para multiplicar un valor a la variable.
* `/=` se utiliza para dividir un valor a la variable.

Tambien se introdujeron las operaciones implicitas para incrementar y decrementar una variable.
* `++` se utiliza para incrementar una variable en 1.
* `--` se utiliza para decrementar una variable en 1.

Asimismo, se introdujeron las operaciones implicitas para comparar y asignar valores.
* `||=` se utiliza para asignar un valor a la variable si la variable es falsy.
* `&&=` se utiliza para asignar un valor a la variable si la variable es truthy.
* `??=` se utiliza para asignar un valor a la variable si la variable es nullish.

Finalmente, se introdujeron los fragmentos de codigo `if` y `for` para realizar operaciones condicionales y iterativas en una sola linea.
```javascript
if(condicion) code_here;

for(let i = 0 ; i < array.length ; i++) code_here;
```

### console.log, console.error, console.warn, console.info, console.table
En ES6, se introdujeron varias funciones para imprimir mensajes en la consola. Se utilizan para depurar y probar el codigo.
* `console.log` se utiliza para imprimir un mensaje en la consola.
* `console.error` se utiliza para imprimir un mensaje de error en la consola.
* `console.warn` se utiliza para imprimir un mensaje de advertencia en la consola.
* `console.info` se utiliza para imprimir un mensaje informativo en la consola.
* `console.table` se utiliza para imprimir una tabla en la consola.