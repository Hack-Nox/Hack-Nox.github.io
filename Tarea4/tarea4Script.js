function determinarSigno() {

    var numero = document.getElementById('texto1').value.trim();
    if (numero > 0) {
        return alert("Positivo");
    } else if (numero < 0) {
        return alert("Negativo");
    } else {
        return alert("Cero");
    }

}

function obtenerDiaSemana() {
    var num = document.getElementById('texto2').value.trim();
    var dia;

    switch (Number(num)) {
        case 1:
            dia = "Lunes";
            break;
        case 2:
            dia = "Martes";
            break;
        case 3:
            dia = "Miércoles";
            break;
        case 4:
            dia = "Jueves";
            break;
        case 5:
            dia = "Viernes";
            break;
        case 6:
            dia = "Sábado";
            break;
        case 7:
            dia = "Domingo";
            break;
        default:
            dia = "Día inválido";
    }

    return alert(dia);
}


function dividir() {
    
    var a = document.getElementById('texto3').value.trim();
    var b = document.getElementById('texto4').value.trim();

    try {
      if (b == 0) {
        throw new Error("No se puede dividir por cero");
      }
      res = a / b;
      return alert(res);
    } catch (error) {
      alert("Error: " + error.message);
    }
  }

  function conteoConFor(){
    for (let index = 0; index < 20; index++) {
          alert(index );
}

}

function binario() {
var numero = document.getElementById('texto5').value.trim();

if (numero === '') {
    alert("Por favor, ingresa un número.");
    return;
}

var binario = '';
var numeroEntero = parseInt(numero, 10);

if (!isNaN(numeroEntero)) {
    if (numeroEntero === 0) {
        binario = '0';
    } else {
        while (numeroEntero > 0) {
            var residuo = numeroEntero % 2;
            binario = residuo + binario;
            numeroEntero = Math.floor(numeroEntero / 2);
        }
    }
} else {
    for (var i = 0; i < numero.length; i++) {
        var charCode = numero.charCodeAt(i);
        binario += charCode.toString(2) + ' ';
    }
}

alert("El número " + numero + " en binario es: " + binario);
}

function puedeManejar() {

    var edad = document.getElementById('texto5').value.trim();
    var tieneLicencia = document.getElementById('Tiene').value;

    if (parseInt(edad) >= 18 && tieneLicencia === 'true') {
        alert("Puedes conducir");
    } else {
        alert("No puedes conducir");
    }
}

function PuedesalirCasa(){

    var estaLloviendo = document.getElementById('Lluvia').value;
    var hayNieve = document.getElementById('Nevando').value;

    if (estaLloviendo === 'true' || hayNieve === 'true') {
        alert("Lleva un paraguas o un abrigo");
      } else {
        alert("Sal sin protección adicional");
      }

}

function obtenerInformacionFecha() {
    var fechaActual = new Date(); 

    var dia = fechaActual.getDate();
    var mes = fechaActual.getMonth() + 1;
    var anno = fechaActual.getFullYear();
    
    alert("La fecha actual es: " + dia + "/" + mes + "/" + anno);
}

function obtenerCaracter() {


    try{
    
        var indice = document.getElementById('texto6').value.trim();
    if(indice < 7){
    var cadena = "CARTERA";

    var caracterseleccionado = cadena[indice]; 

    alert("El numero de indice corresponde a  " + "'  " + caracterseleccionado + "  '");
    } else{
        throw new Error("El arreglo llega hasta 6");
    }
}catch (error) {
        alert("Error: " + error.message);
}
}





function agregarNombre(){
var nombres = ["Carlos ", "Ana "];
 
var nombre = document.getElementById('texto7').value.trim();

nombres.push(nombre);

alert("Los nombres guardados son :" +  nombres);

}

function CambiarDatoArray(){
var numeros = new Int32Array([10, 20, 30, 40, 50]);

var indicearry = document.getElementById('texto8').value.trim();
var cambianum = document.getElementById('texto9').value.trim();

numeros[indicearry] = cambianum;

alert(numeros); 


}




