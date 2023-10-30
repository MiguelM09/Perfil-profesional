// tipos de variables
// #const para valores que siempre son fijos. por ejem el numero PI
const pi=3.1416;
console.log(pi);
// #var para variables globales
var color = "red";
console.log(color);
// #let para variable locales o para bloques
let contador = 1;
console.log(contador);

// ####Cuatro formas de mostrar resultados
// #alert
alert("Hola bienvenido");
// #console
console.log("Hola bienvenido")
// pantalla
document.write("HOLA BIENVENIDO");
document.getElementById("tex_ejem").innerHTML="<h1>Hola bienvenido</h1>";
document.getElementById("tex_ejem_two").innerText="<h1>Hola bienvenido</h1>";
// #librerias
var nombre = "Miguel Ayala"
var profesion = "Es estudiante de ufps Ocaña"
Swal.fire(nombre, profesion, 'success')
// personalizado
Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: nombre,
    footer: profesion,
    showConfirmButton: false,
    timer: 1500
  })

  // ## tipo de datos
  // numerico
  let number_one = 10;
  let number_two = 5;
  let number_trhee = 2.5; // decimal
  // string
  let text = "Hello, i am text";
  // boleanos
  let bolean = false; // true
  // array
  let array_num = [1,2,3,4,5,6];
  let array_text= ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]
  let array_mix = ["Miguel", 20, "Andres", "Miercoles", 10, 2.5, 15];
  let array_multi = [
    {name:"Miguel", last_name:"Ayala", age:21},
    {name:"Kevin", last_name:"Ayala", age:20},
    {name:"Darwin", last_name:"Alvarez", age:21},
    {name:"Andres", last_name:"Lopez", age:21}
  ];

// ########## OPERADORES BASICOS
// suma +
var suma = number_one + number_two;
console.log("Suma = " + suma);
// resta - 
var resta = number_one - number_two;
console.log("Resta = " + resta);
// multiplicacion * 
var multi = number_one * number_two;
console.log("Multi = " + multi);
// division / 
var divi = number_one / number_two;
// divi = divi.toFixed(2);
console.log("Division = " + divi.toFixed(2));
// modulo %
var modulo = number_one % number_two;
console.log("Modulo = " + modulo);

console.log(
  "Suma = " + suma + "\n" +
  "Resta = " + resta + "\n" +
  "Multi = " + multi + "\n" +
  "Division = " + divi.toFixed(2) + "\n" +
  "Modulo = " + modulo
  )

var respuesta = "Suma = " + suma + "<br>" + "Resta = " + resta + "<br>" + "Multi = " + multi + "<br>" + "Division = " + divi.toFixed(2) + "<br>" + "Modulo = " + modulo;

Swal.fire({
  icon: 'success',
  title: 'Resultados',
  html: respuesta,
  background: '#fff'
});

// ##### OPERADORES LOGICOS (inverse, incremente)
// AND &
var bool = true;
var numeric=5;
if(!bool && numeric==5){ //!bool == true
  console.log(bool);
  count ++; //incremento
}
else{
  console.log(bool);
  count --; //decremento
}
// = es para asignar valores
// == comparar contenido
// === comparar contenido y tipo de dato
console.log(count);

// OR ||
var age=31;
if(age === 31 || numeric== "5"){
  console.log("Una o dos variables aceptada")
}
else{
  console.log("Ninguna variable aceptada")
}

// FOR
for(let i=0; i < array_text.length; i++){
  console.log(array_text[i] + (i+1))
}

//WHILE
let j=0;
while(j<array_text.length){
  console.log(array_text[j] + (j+1))
  j++;
}

// DO WHILE
 let w=0;
 do{
  console.log(array_text[w] + (w+1));
  w++
 }while(w<array_text.length)

 // EVENTOS
 function enviar(){
  document.body.style.background = "red";
  document.body.style.color = "#fff"
 }

 const btn_limpiar = document.querySelector("#limpiar");
 
 btn_limpiar.addEventListener("click", () => {
  document.body.style.backgroundColor = "#fff";
  document.body.style.color = "#000";
 });

// EJERCICIO
const form_register = document.getElementById("form_register");
const nombres = document.getElementById("nombres");
const apellidos = document.getElementById("apellidos");
const information = document.getElementById("information");

form_register.addEventListener("submit", name_event => {
  name_event.preventDefault();
  let info = ""
  if(nombres.length<=2 || apellidos.length<3){
    info += "Nombres y apellidos deben ser mayores o iguales a 3 caracteres";
    information.style.color = "red"
  }
  else{
    alert("INFORMACION CORRECTAMENTE")
  }
  information.innerText = info;
});

function accion(){
  let accion = document.getElementById("accion");
  if(accion.evalue.length == 0){
    accion.style.backgroundColor = "red"
  }
  else{
    accion.style.backgroundColor = "green"
  }
}
