const sumar=(idNum1,idNum2)=>{
    console.log("SUMAR")
    var num1=parseInt(document.getElementById(idNum1).value);
    var num2=parseInt(document.getElementById(idNum2).value);
    var respuesta=num1+num2;
    console.log(respuesta);
    document.getElementById("idResultado").innerText=respuesta;

}

const restar=(idNum1,idNum2)=>{
    console.log("RESTAR")
    var num1=parseInt(document.getElementById(idNum1).value);
    var num2=parseInt(document.getElementById(idNum2).value);
    var respuesta=num1-num2;
    console.log(respuesta);
    document.getElementById("idResultado").innerText=respuesta;

}

const multiplicar=(idNum1,idNum2)=>{
    console.log("MULTIPLICAR")
    var num1=parseInt(document.getElementById(idNum1).value);
    var num2=parseInt(document.getElementById(idNum2).value);
    var respuesta=num1*num2;
    console.log(respuesta);
    document.getElementById("idResultado").innerText=respuesta;

}

const dividir=(idNum1,idNum2)=>{
    console.log("DIVIDIR")
    var num1=parseInt(document.getElementById(idNum1).value);
    var num2=parseInt(document.getElementById(idNum2).value);
    var respuesta=num1/num2;
    console.log(respuesta);
    document.getElementById("idResultado").innerText=respuesta;

}

function agregarElemento(){

    document.getElementById('idDivision').innerHTML="<button>NUEVO</button>";
}

function quitarElemento(){

    document.getElementById('idDivision').innerHTML="";
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
/* const sumar1=()=>{
    
} */