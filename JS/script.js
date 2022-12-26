//alert de registrarse

alert("Aún no está registrado en el sitio web! Regístrese para ingresar.")

//variables para la generación del usuario
let userNombre = prompt("Ingrese su nombre");
let userTelefono = prompt("Ingrese su telefono");
let userEmail = prompt("Ingrese su e-mail");

function user(nombre,telefono,email) {
    this.nombre = nombre;
    this.telefono = telefono;
    this.email = email;
}

const user1 = new user(userNombre, userTelefono, userEmail);
const users = [user1];

const agregarUser = [];

function cargarUser(arr,user1){
    arr.push(user1);
}

cargarUser(agregarUser, user1);
console.log(agregarUser);

//bienvenida al sitio web

function bienvenida (userNombre){
    alert("Hola " + userNombre + "! Bienvenido/a a Darth Market.");
}

bienvenida(userNombre);

//variables página web

let resultado = 0;
let cantidad = 0;
let total = 0;

//simulación del menu de la web con alert
alert("Disponemos de esta lista de articulos. Escriba el nombre del producto para añadirlo a su carrito: \n taza \n pijama");

//función para buscar y agregar productos

let entrada = prompt("Seleccione un producto para añadir al carrito. Escriba ok para finalizar la compra.");

const carritoFinal = []

function carrito(){
    while (entrada != "ok") {
        switch(entrada){
            case "taza":
                cantidad = parseInt(prompt("Cuantas unidades querés comprar?"));
                alert("Se agregó al carrito " + cantidad + " unidad/es del producto");
            if (resultado <= cantidad){
                total += (cantidad*taza.precio);
                alert("El valor de su carrito es: $" + total);
            }
                break;

            case "tazon":
            cantidad = parseInt(prompt("Cuantas unidades querés comprar?"));
                alert("Se agregó al carrito " + cantidad + " unidad/es del producto");
            if (resultado < cantidad){
                total += (cantidad*tazon.precio);
                alert("El valor de su carrito es: $" + total);
            }
                break;

            case "pijama":
            cantidad = parseInt(prompt("Cuantas unidades querés comprar?"));
                alert("Se agregó al carrito " + cantidad + " unidad/es del producto");
            if (resultado < cantidad){
                total += (cantidad*pijama.precio);
                alert("El valor de su carrito es: $" + total);
            }
                break;

            case "disfraz":
             cantidad = parseInt(prompt("Cuantas unidades querés comprar?"));
                 alert("Se agregó al carrito " + cantidad + " unidad/es del producto");
             if (resultado < cantidad){
                 total += (cantidad*disfraz.precio);
                 alert("El valor de su carrito es: $" + total);
             }
                break;

            case "pelicula":
             cantidad = parseInt(prompt("Cuantas unidades querés comprar?"));
                 alert("Se agregó al carrito " + cantidad + " unidad/es del producto");
             if (resultado < cantidad){
                 total += (cantidad*pellicula.precio);
                 alert("El valor de su carrito es: $" + total);
             }
                break;
         
            default: 
             alert("El producto no está en el listado.")
            
        }

        cargarProducto(carritoFinal, entrada);
        entrada = prompt("Sellecione otro producto. Ingrese ok para finalizar la compra")
    }
}

//Cargar productos al array "carritoFinal"

function cargarProducto(arr, entrada){
    arr.push(entrada)
}

console.log(carritoFinal)

//función para el total de la compra

function sumar(){
    let totalCarrito = total;
    alert("El total de la compra es por un monto de $" + totalCarrito)
}

//se simiula la finalización de la compra
function finalizar(){
    if (entrada == "ok"){
        let tarjeta = parseInt(prompt("Ingrese los numeros de su tarjeta"))
        let cvv = parseInt(prompt("Ingrese el cvv de su tarjeta"))
        alert("Compra finalizada!")
    }
        else{
            false
        }
}


//listado de productos

function productos(nombre, categoria, precio){
    this.nombre = nombre;
    this.categoria = categoria;
    this.precio = parseFloat(precio);
}

const taza = new productos("taza","tazas y tazones", 2000);
const tazon = new productos("tazon","tazas y tazones", 2500);
const pijama = new productos ("pijama", "indumentaria", 4000);
const disfraz = new productos ("disfraz", "indumentaria", 5000);
const pelicula = new productos ("pelicula", "series y peliculas", 3000);


const listado = [taza,pijama]


carrito();
sumar();
finalizar();


