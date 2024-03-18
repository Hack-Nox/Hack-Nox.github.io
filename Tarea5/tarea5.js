 var hayResultado = false;
function concatenaOperacion(valor) {
    if (hayResultado) {
        document.calculator.res.value = "";
        document.calculator.ans.value = "";
        hayResultado = false;
    }
    var digito = parseInt(valor);
    if (isNaN(digito))
        document.calculator.res.value = "";
    else
        document.calculator.res.value += valor;
    document.calculator.ans.value += valor;
}

function concatenaOperacion2(valor) {
    if (hayResultado) {
        document.calculator2.res.value = "";
        document.calculator2.ans.value = "";
        hayResultado = false;
    }
    var digito = parseInt(valor);
    if (isNaN(digito))
        document.calculator2.res.value = "";
    else
        document.calculator2.res.value += valor;
    document.calculator2.ans.value += valor;
}

var ans2Activo = false;
function concatenaOperacion3(valor) {
    if (hayResultado) {
        document.calculator3.res.value = "";
        document.calculator3.ans.value = "";
        hayResultado = false;
    }
    if (valor === '.' && (document.calculator3.ans.value.includes('.') || document.calculator3.res.value.includes('.'))) {

        return;
    }
    if (valor === '.') {

        if (ans2Activo) {
            document.calculator3.ans2.value += valor;
            document.calculator3.ans2.focus();
        } else {
            document.calculator3.res.value += valor;
            document.calculator3.ans.value += valor;
            document.calculator3.ans.focus();
        }
    } else {

        var digito = parseInt(valor);
        if (isNaN(digito))
            document.calculator3.res.value = "";
        else {
            if (ans2Activo) {
                document.calculator3.ans2.value += valor;
                document.calculator3.ans2.focus();
            } else {
                document.calculator3.res.value += valor;
                document.calculator3.ans.value += valor;
                document.calculator3.ans.focus();
            }
        }
    }
}
function toggleInputActivo() {
    ans2Activo = !ans2Activo;
}

function converFahrenheit() {
    try {
        var celsius = parseFloat(document.calculator.ans.value);
        if (isNaN(celsius)) {
            throw new Error("El valor ingresado no es un número válido.");
        }
        document.calculator.res.value = (celsius * 9 / 5) + 32 + '°';
    } catch (error) {
        alert("Error en la conversión a Fahrenheit:", error.message);

    }
}

function converKelvin() {
    try {
        var celsius = parseFloat(document.calculator.ans.value);
        if (isNaN(celsius)) {
            throw new Error("El valor ingresado no es un número válido.");
        }
        document.calculator.res.value = celsius + 273.15 + '°';
    } catch (error) {
        alert("Error en la conversión a Kelvin:", error.message);
    }
}

function converMillas() {
    try {
        var kilometros = parseFloat(document.calculator2.ans.value);
        if (isNaN(kilometros)) {
            throw new Error("El valor ingresado no es un número válido.");
        }
        document.calculator2.res.value = kilometros * 0.621371;
    } catch (error) {
        alert("Error en la conversión a Millas:", error.message);
    }
}

function converMetros() {
    try {
        var kilometros = parseFloat(document.calculator2.ans.value);
        if (isNaN(kilometros)) {
            throw new Error("El valor ingresado no es un número válido.");
        }
        document.calculator2.res.value = kilometros * 1000;
    } catch (error) {
        alert("Error en la conversión a Metros:", error.message);

    }
}

function calculaIMC() {
    try {
        var peso = parseFloat(document.calculator3.ans.value);
        var altura = parseFloat(document.calculator3.ans2.value);

        if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
            throw new Error("Por favor, ingresa valores válidos para peso y altura.");
        }

        var imc = peso / (altura * altura);
        document.calculator3.res.value = "Su IMC es de: " + imc.toFixed(2);
    } catch (error) {
        alert("Error en la conversión del MBI:", error.message);
    }
}
