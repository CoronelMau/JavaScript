const datosCiudades = [
  {
    "Ciudad": "Bogotá",
    "Precio": 500
  },
  {
    "Ciudad": "México",
    "Precio": 600
  },
  {
    "Ciudad": "Santiago",
    "Precio": 550
  },
  {
    "Ciudad": "Lima",
    "Precio": 450
  },
  {
    "Ciudad": "Montevideo",
    "Precio": 400
  }
]
let i = 0;
const presupuestoDisponible = 490;
while (i < datosCiudades.length && datosCiudades[i].Precio > presupuestoDisponible) {
  i++;
}

if (i == datosCiudades.length) {
  console.log("No tenemos pasaje disponible");
} else {
  console.log("Puedes comprar pasaje para: " + datosCiudades[i].Ciudad);
}