// alerta en javascript
// let numero = 5;
// numero = 4;
// const constante= 4;
// console.log('Usando Javascript desde html');
// alert('Hola desde una alerta de java script');
// console.log(numero);
// console.log(constante);

// concatenación

let nombre = 'Manuel';
let apellido = 'Moreno';
console.log(nombre + ' ' + apellido);
document.write('Mi nombre es: '+ nombre + ' ' + apellido);

// funcion de imprimer un elemento de html desde la consola
let seleccion = document.querySelector('#seccion1');
// poner lengusje de hipertexto desde la consola en una parte del DOM
seleccion.innerHTML:`<h2>hola</h2>`;

console.log(seleccion)