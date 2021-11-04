let nombres = [
  {
    'nombre': 'Edgar',
    'apellidoP': 'Rodriguez',
    'apellidoM': 'Gallegos',
  },
  {
    'nombre': 'Ismael',
    'apellidoP': 'Sanchez',
    'apellidoM': 'Sanchez',
  },
  {
    'nombre': 'Jose',
    'apellidoP': 'Martinez',
    'apellidoM': 'Gomez',
  },
  {
    'nombre': 'Alexander',
    'apellidoP': 'Sanchez',
    'apellidoM': 'Tovar',
  },
  {
    'nombre': 'Edgar',
    'apellidoP': 'Rodriguez',
    'apellidoM': 'Gallegos',
  },
  {
    'nombre': 'Alexander',
    'apellidoP': 'Sanchez',
    'apellidoM': 'Tovar',
  },
  {
    'nombre': 'Josue',
    'apellidoP': 'Romero',
    'apellidoM': 'Gallardo',
  },
  {
    'nombre': 'Karen',
    'apellidoP': 'Sanchez',
    'apellidoM': 'Moreo',
  },
  {
    'nombre': 'Martin',
    'apellidoP': 'Martinez',
    'apellidoM': 'Huerta',
  },
  {
    'nombre': 'Angel',
    'apellidoP': 'Salma',
    'apellidoM': 'Tovar',
  },
  {
    'nombre': 'Eduardo',
    'apellidoP': 'Cruz',
    'apellidoM': 'Gallegos',
  },
  {
    'nombre': 'Anel',
    'apellidoP': 'Sanchez',
    'apellidoM': 'Diaz',
  },
  {
    'nombre': 'Andres',
    'apellidoP': 'Wayne',
    'apellidoM': 'Tovar',
  },
  {
    'nombre': 'Andrea',
    'apellidoP': 'Hernandez',
    'apellidoM': 'Ruiz',
  },
  {
    'nombre': 'Alma',
    'apellidoP': 'Sanchez',
    'apellidoM': 'Rodriguez',
  },
];

var contenido = document.getElementById('contenido');

for (let Anombres of nombres) {
  contenido.innerHTML += `<tr>      
    <td>${Anombres.nombre}</td>
    <td>${Anombres.apellidoP}</td>
    <td>${Anombres.apellidoM}</td>
  </tr>`;
}
contenido.innerHTML += `
<tr>
<th  colspan='3' style="text-align: center; background-color: grey; color: white;">Nombres repetidos</th>
</tr>
<tr>      
<th>Nombre</th>
<th>Apellido Paterno</th>
<th>Apellido Materno</th>
</tr>`;

const repetidos = nombres.filter((nombres, index, self) =>
  index != self.findIndex((t) => (
    t.nombre === nombres.nombre && t.apellidoM === nombres.apellidoM && t.apellidoP === nombres.apellidoP
  ))
)

for (let aorden of repetidos) {
  contenido.innerHTML += `<tr>      
    <td>${aorden.nombre}</td>
    <td>${aorden.apellidoP}</td>
    <td>${aorden.apellidoM}</td>
  </tr>`;
}

contenido.innerHTML += `
<tr>
<th  colspan='3' style="text-align: center; background-color: grey; color: white;">Lista sin nombres repetidos</th>
</tr>
<tr>      
<th>Nombre</th>
<th>Apellido Paterno</th>
<th>Apellido Materno</th>
</tr>`;

const listan = nombres.filter((nombres, index, self) =>
  index === self.findIndex((t) => (
    t.nombre === nombres.nombre && t.apellidoM === nombres.apellidoM && t.apellidoP === nombres.apellidoP
  ))
)


for (let aorden of listan) {
  contenido.innerHTML += `<tr>      
    <td>${aorden.nombre}</td>
    <td>${aorden.apellidoP}</td>
    <td>${aorden.apellidoM}</td>
  </tr>`;
}