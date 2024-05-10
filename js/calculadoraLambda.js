const sumar = (idnum1, idnum2) => {
    var num1 = parseInt(document.getElementById(idnum1).value);
    var num2 = parseInt(document.getElementById(idnum2).value);
    var respuesta = num1 + num2;
    console.log(respuesta);
    document.getElementById('idresultado').innerText = respuesta;

}

const restar = (idnum1, idnum2) => {
    var num1 = parseInt(document.getElementById(idnum1).value);
    var num2 = parseInt(document.getElementById(idnum2).value);
    var respuesta = num1 - num2;
    console.log(respuesta);
    document.getElementById('idresultado').innerText = respuesta;
}

const multiplicar = (idnum1, idnum2) => {
    var num1 = parseInt(document.getElementById(idnum1).value);
    var num2 = parseInt(document.getElementById(idnum2).value);
    var respuesta = num1 * num2;
    console.log(respuesta);
    document.getElementById('idresultado').innerText = respuesta;
}

const dividir = (idnum1, idnum2) => {
    var num1 = parseInt(document.getElementById(idnum1).value);
    var num2 = parseInt(document.getElementById(idnum2).value);
    var respuesta = num1 / num2;
    console.log(respuesta);
    document.getElementById('idresultado').innerText = respuesta;
}

function agregarElemento(){
    document.getElementById("idDivision").innerHTML="<button>NUEVO</button>";
}

function quitarElemento(){
    document.getElementById("idDivision").innerHTML="";
}

function conceptosJS(){
     /* tipos de datos JSON
    let var const
     */
    const IVA=12;
    console.log(IVA);
 /*    IVA=15;
    console.log(IVA)
    una constante no se le puede sobrescribir su valor
    constantes con mayusculas */
    var nombre="Juan";
    console.log(nombre);
    nombre="Edison";
    console.log(nombre);

    let apellido="Paredes"
    console.log(apellido);
    apellido="Angulo"
    console.log(apellido);

}