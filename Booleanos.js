const ciudadDestino = "Colombia";
const ciudadesDisponibles = new Array("Colombia", "Cuba", "Canada");

if (ciudadesDisponibles.indexOf(ciudadDestino) >= 0) {
  console.log("Pasaje disponible");
} else {
  console.log("Ciudades no disponibles");
}

//Operadores Lógicos

var precioPasaje = 1000;
var precioVuelo = 2000;

if (precioPasaje == 1000) {
  console.log("El pasaje cuesta: " + precioPasaje);
}

if (precioPasaje == 1000 && precioVuelo == 2000) {
  console.log("El precio del pasaje es 1000 y el vuelo de 2000");
}

if (precioPasaje == 1000 || precioVuelo == 2000) {
  console.log("El precio del pasaje es 1000 y el vuelo de 2000");
}

if (precioPasaje != 100) {
  console.log("El precio del pasaje es diferente de 100");
}


//Switch

switch (ciudadDestino) {

  case "Colombia":
    precioPasaje = 500;
    break;
  case "Chile":
    precioPasaje = 600;
    break;
  case "México":
    precioPasaje = 800;
    break;
  default:
    precioPasaje = 0;
    break;
}

if (precioPasaje > 0) {
  console.log(`El valor del pasaje es: ${precioPasaje}`);

}