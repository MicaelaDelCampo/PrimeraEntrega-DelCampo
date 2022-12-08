//declaracion de variables
let producto1 = "taza";
let producto2 = "poster";
let producto3 = "llavero";
let producto4 = "disfraz";

//simulación del index del sitio web
alert("Estos son los productos de Star Wars que tenemos disponibles: \n 1) Taza \n 2) Poster \n 3) Llavero \n 4) Disfraz");

let entrada = prompt("Ingrese el producto que desea agregar al carrito. Escriba 1 para finalizar la compra.");
let finalizar = 1;

function carrito(){
    while (entrada != 1){
        if (entrada == producto1){
            alert("Se agreró el item " + entrada + " al carrito de compras");
        }
        else if (entrada == producto2){
            alert("Se agreró el item " + entrada + " al carrito de compras");
        }
        else if (entrada == producto3){
            alert("Se agreró el item " + entrada + " al carrito de compras");
        }
        else if (entrada == producto4){
            alert("Se agreró el item " + entrada + " al carrito de compras");
        }
        else{
            alert("Ese producto no está disponible en nuestra tienda");
        }
        entrada = prompt("Ingrese otro producto que desea agregar al carrito. Escriba 1 para finalizar la compra.");
    }
}

function finalizarCompra(){
    if (finalizar == "1")
    alert("Compra finalizada")
}

carrito();
finalizarCompra();