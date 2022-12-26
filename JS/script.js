//variables para la generación del usuario
let userNombre = prompt("Ingrese su nombre");
let userTelefono = prompt("Ingrese su telefono");
let userEmail = prompt("Ingrese su e-mail");

function user(nombre,telefono,email) {
    this.nombre = nombre;
    this.telefono = telefono;
    this.email = email
}

const user1 = new user(userNombre, userTelefono, userEmail);
const user = [user1];

const agregarUser = [];

function cargarUser(arr,user1){
    arr.push(user1);
}

cargarUser(agregarUser, user1);
console.log(agregarUser)

//bienvenida al sitio web

function bienvenida (userNombre){
    alert("Hola " + userNombre + "! Bienvenido/a a Darth Market.");
}

bienvenida(usaerNombre);

//variables página web

let resultado = 0
let cantidad = 0
let total = 0



