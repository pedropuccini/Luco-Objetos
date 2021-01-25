function Producto(nombre, tipo, precio) {
  this.nombre = nombre;
  this.tipo = tipo;
  this.precio = precio;
}

let productos = []

productos.push(new Producto("Producto 1", "Cucha", 9800))
productos.push(new Producto("Producto 2", "Cama", 6700))
productos.push(new Producto("Producto 3", "Rascador", 3600))
productos.push(new Producto("Producto 4", "Comedero", 2900))


for (let i = 0; i < productos.length; i++) {
console.log(productos[i])
}

// Selección de producto

console.log(productos.filter((el) => el.tipo == "Cucha"))


var comprar = parseInt(prompt("Cuántos unidades del producto desea comprar? "));
console.log("Precio final de la compra " + comprar);

// Luego quiero poder multiplicar el precio del producto por la cantidad seleccionada para optener el precio final de compra. No supe como hacerlo!