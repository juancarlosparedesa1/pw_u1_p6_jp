function sumar(idnum1,idnum2){
    var num1=parseInt(document.getElementById(idnum1).value);
    var num2=parseInt(document.getElementById(idnum2).value);
    var respuesta=num1+num2;
    console.log(respuesta);
    document.getElementById('idresultado').innerText=respuesta;
    
}

function restar(idnum1,idnum2){
    var num1=parseInt(document.getElementById(idnum1).value);
    var num2=parseInt(document.getElementById(idnum2).value);
    var respuesta=num1-num2;
    console.log(respuesta);
    document.getElementById('idresultado').innerText=respuesta;
    
}

function multiplicar(idnum1,idnum2){
    var num1=parseInt(document.getElementById(idnum1).value);
    var num2=parseInt(document.getElementById(idnum2).value);
    var respuesta=num1*num2;
    console.log(respuesta);
    document.getElementById('idresultado').innerText=respuesta;
    
}

function dividir(idnum1,idnum2){
    var num1=parseInt(document.getElementById(idnum1).value);
    var num2=parseInt(document.getElementById(idnum2).value);
    var respuesta=num1/num2;
    console.log(respuesta);
    document.getElementById('idresultado').innerText=respuesta;
    
}

/* no generico
function sumar(){
    var num1=document.getElementById("idnumero1").value;
    var num2=document.getElementById("idnumero2").value;
} */