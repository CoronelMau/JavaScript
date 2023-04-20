//Definir arreglos
const ciudades = new Array("México, Colombia, Chile");
console.log(ciudades);

const ciudades2 = ["México, Colombia, Chile"];
console.log(ciudades2);

//Agregando elementos a los arreglos (al final)
ciudades.push("China");
ciudades2.push("Inglaterra");

console.log(ciudades);
console.log(ciudades2);

//Agregando elementos a los arreglos (al inicio)
ciudades.unshift("Ecuador");
ciudades2.unshift("Canadá");

console.log(ciudades);
console.log(ciudades2);

//Mandando a imprimir un elemento en determinada posición
console.log(ciudades[0]);
console.log(ciudades2[0]);

//Eliminar y agregar elementos 
ciudades.splice(1, 2, "Venezuela", "Paraguay");
console.log(ciudades);

//Cnatidad de elementos
var cantidadCiudades = ciudades.length;
console.log(`Tenemos ${cantidadCiudades} ciudades`);
console.log(`Tenemos ${ciudades.length} ciudades`);

//Remover primer elemento
ciudades.shift();
console.log(ciudades);

//Remover último elemento
ciudades.pop();
console.log(ciudades);

ciudades.push("Francia, Cuba, Colombia, Chile, Canada");
console.log(ciudades);

//Filtrar
const ciudadesFiltradas = ciudades.filter((e) => e == "México");
console.log(ciudadesFiltradas);

console.log(ciudades.join("*"));

console.log(ciudades.sort());