// Definición de la función
function sumaCarrito(producto1, producto2) {
  var resultado = producto1 + producto2;
  alert("Cantidad total de productos a comprar " + resultado);
}

// Declaración de las variables
var numero1 = parseInt(prompt("Cuántos unidades del producto 1 desea comprar? "));
var numero2 = parseInt(prompt("Cuántos unidades del producto 2 desea comprar? "));

// Llamada a la función
sumaCarrito(numero1, numero2);
