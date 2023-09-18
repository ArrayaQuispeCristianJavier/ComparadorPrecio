/*Definir a producto como clase*/
let NombreProducto=
{
 nombreProducto:""
}
let PrecioProducto = 
{
 precioProducto: 0
}
let NombreComercio = 
{
    nombreComercio:""
}
const AlmacenProducto = [];
AlmacenProducto.push(NombreProducto);
AlmacenProducto.push(precioProducto);
AlmacenProducto.push(nombreComercio);


document.getElementById("NombreProducto").innerHTML = AlmacenProducto [0].NombreComercio;
document.getElementById("PrecioProducto").innerHTML = AlmacenProducto [0].NombreProducto;
document.getElementById("NombreComercio").innerHTML = AlmacenProducto [0].NombreComercio;