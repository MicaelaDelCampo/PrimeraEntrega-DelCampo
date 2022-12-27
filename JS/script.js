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

//función constructora de productos

function producto(nombre, categoria, precio){
    this.nombre = nombre;
    this.categoria = categoria;
    this.precio = parseFloat(precio);
}

const taza = new producto("taza","tazas y tazones", 2000);
const tazon = new producto("tazon","tazas y tazones", 2500);
const pijama = new producto ("pijama", "indumentaria", 4000);
const disfraz = new producto ("disfraz", "indumentaria", 5000);
const pelicula = new producto ("pelicula", "series y peliculas", 3000);

const listado = [];

listado.push(taza,tazon,pijama,disfraz,pelicula)

//variables página web

let resultado = 0;
let cantidad = 0;
let total = 0;

//función para buscar productos

function filtrarNombre(arr, filtro){
    return arr.filter((producto)=>{
        return producto.nombre.includes(filtro);
    })
}

let buscarNombre = prompt("Si desea buscar un ítem particular en nuestro listado de productos, escriba el nombre del producto que desee:");
const filtradoNombre = filtrarNombre(listado, buscarNombre)

alert("Encontramos los siguientes resultados: " + JSON.stringify(filtradoNombre))
console.log(filtradoNombre)

//simulación del menu de la web con alert
alert("Disponemos de esta lista de articulos. Escriba el nombre del producto para añadirlo a su carrito: \n taza \n tazon \n pijama \n disfraz \n pelicula");

//función para y agregar productos

let entrada = prompt("Seleccione un producto para añadir al carrito. Escriba ok para finalizar la compra.").toLowerCase();

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
                 total += (cantidad*pelicula.precio);
                 alert("El valor de su carrito es: $" + total);
             }
                break;
         
            default: 
             alert("El producto no está en el listado.")
            
        }

        cargarProducto(carritoFinal, entrada);
        entrada = prompt("Sellecione otro producto. Ingrese ok para finalizar la compra").toLowerCase();
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


// simulación final
carrito();
sumar();
finalizar();


