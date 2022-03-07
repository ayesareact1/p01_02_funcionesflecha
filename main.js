// Funciones flecha JS (ECMA6)
// Nueva sintaxis para funciones de expresión y anónimas

// const cubo = (a) => {
//     return a * a * a;
// }

// Si solo tiene un parámetro se pueden aliviar los paréntesis
// Si solo tiene una línea de código se pueden aliviar las llaves
// Si solo tiene una línea de código se puede aliviar return

const cubo = a =>  a * a * a;

console.log(cubo(5));

// La ventaja de las funciones flecha es que no tienen referencia 
// propia this, por tanto permiten utilizar el this de la función en 
// la que se encuentran
