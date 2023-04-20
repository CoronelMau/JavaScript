// const no puede ser reasignado
const valorPasaje = 1650;
console.log(valorPasaje);

const nombrePasajero = "Leonardo";
const apellidoPasajero = "Cruz";
console.log(nombrePasajero + " " + apellidoPasajero);

//let puede ser reasignado
let nombrePasajeroDos = "Mau";
let apellidoPasajeroDos = "Coronel";

console.log(nombrePasajeroDos + " " + apellidoPasajeroDos);

nombrePasajeroDos = "Astrid";
console.log(nombrePasajeroDos + " " + apellidoPasajeroDos);

//Interpolacion
let nombreCompleto = `Nombre con interpolacion: ${nombrePasajeroDos} ${apellidoPasajeroDos}`;
console.log(nombreCompleto);