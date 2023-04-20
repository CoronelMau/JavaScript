const ciudadesDisponibles = new Array("México", "Chile", "Colombia", "Cuba", "Canadá", "España", "Argentina");
const preciosCiudades = new Array(500, 600, 450, 300, 250, 550, 670);
const precioDisponible = 400;

let i = 0;

while (preciosCiudades[i] > precioDisponible) {
  i++;
}
console.log("Puedes comprar boleto para: " + ciudadesDisponibles[i]);