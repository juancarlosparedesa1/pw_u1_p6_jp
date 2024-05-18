// Funciones para ingresar números y operadores
const ponerUno = () => {
    var contenido = document.getElementById('idpantalla').textContent.concat("1");
    digitarPantalla(contenido);
}

const ponerDos = () => {
    var contenido = document.getElementById('idpantalla').textContent.concat("2");
    digitarPantalla(contenido);
}

const ponerTres = () => {
    var contenido = document.getElementById('idpantalla').textContent.concat("3");
    digitarPantalla(contenido);
}

const ponerCuatro = () => {
    var contenido = document.getElementById('idpantalla').textContent.concat("4");
    digitarPantalla(contenido);
}

const ponerCinco = () => {
    var contenido = document.getElementById('idpantalla').textContent.concat("5");
    digitarPantalla(contenido);
}

const ponerSeis = () => {
    var contenido = document.getElementById('idpantalla').textContent.concat("6");
    digitarPantalla(contenido);
}

const ponerSiete = () => {
    var contenido = document.getElementById('idpantalla').textContent.concat("7");
    digitarPantalla(contenido);
}

const ponerOcho = () => {
    var contenido = document.getElementById('idpantalla').textContent.concat("8");
    digitarPantalla(contenido);
}

const ponerNueve = () => {
    var contenido = document.getElementById('idpantalla').textContent.concat("9");
    digitarPantalla(contenido);
}

const ponerCero = () => {
    var contenido = document.getElementById('idpantalla').textContent.concat("0");
    digitarPantalla(contenido);
}

const ponerSuma = () => {
    var contenido = document.getElementById('idpantalla').textContent.concat("+");
    digitarPantalla(contenido);
}

const ponerResta = () => {
    var contenido = document.getElementById('idpantalla').textContent.concat("-");
    digitarPantalla(contenido);
}

const ponerMulti = () => {
    var contenido = document.getElementById('idpantalla').textContent.concat("*");
    digitarPantalla(contenido);
}

const ponerDiv = () => {
    var contenido = document.getElementById('idpantalla').textContent.concat("/");
    digitarPantalla(contenido);
}

// Función para borrar completamente la pantalla
const borrar = () => {
    digitarPantalla("");
}

// Función para resolver la expresión y mostrar el resultado
const resolver = () => {
    var contenido = document.getElementById('idpantalla').textContent;
    console.log(contenido);
    var res = eval(contenido);
    digitarPantalla(res);
}

// Función para actualizar la pantalla con el contenido dado
const digitarPantalla = (contenido) => {
    document.getElementById('idpantalla').innerHTML = contenido;
}


const ponerPuntoDecimal = () => {
    var contenido = document.getElementById('idpantalla').textContent;
    
    if (!contenido.includes(".")) {
        contenido += ".";
        digitarPantalla(contenido);
    } else {
        alert("Ya existe un punto decimal.");
    }
};

const borrarDigito = () => {
    let contenidoActual = document.getElementById('idpantalla').textContent;
    
    if (contenidoActual.length > 0) {
        contenidoActual = contenidoActual.slice(0, -1);
    }
    
    digitarPantalla(contenidoActual);
};