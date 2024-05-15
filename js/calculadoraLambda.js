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

    //Declaración de arreglos
    
    const diasSemana=["Lunes","Martes","Miercoles","Jueves","Viernes"];
    console.log(diasSemana);//imprime el arreglo
    console.log(diasSemana[0]);//imprime la posisción 0(si existe)
    console.log(diasSemana[5]);//imprime la posición 5 ( no existe-undefined)
    diasSemana[5]="Sabado";
    console.log(diasSemana);
    diasSemana.push("Domingo");
    console.log(diasSemana);
    diasSemana.unshift("Dias");
    console.log(diasSemana);

    const numerosPares=[2,4,6,8,10];
    console.log(numerosPares);

    const numerosImpares=[1,3,5,7,9];
    console.log(numerosImpares);

    const numerosCompletos=numerosPares.concat(numerosImpares);
    console.log(numerosCompletos);

    //Sentencias de control y condicionales
    for(const dia of diasSemana){
        console.log(dia);
        if (dia==="Viernes") {
            console.log("Por fin llego el fin de semana")
        }
    }

    if (diasSemana[8]===undefined) {
        console.log("No tiene valor ")
    }else{
        console.log("Si tiene valor")
    }

    //objetos en javascript
    const estudiante={
        nombre:"Juan Carlos",
        apellido:"Paredes",
        edad:25,
        genero:"M",
        ciudadNacimiento:"Quito"
    }
    console.log(estudiante)
    console.log(estudiante.apellido)
    estudiante.nombre="Luis"
    console.log(estudiante)

    //objeto con atributos compuestos
    const profesor={
        nombre:"Edison",
        apellido:"Cayambe",
        edad:34,
        genero:"M",
        ciudadNacimiento:"Quito",
        direccion:{
            callePrincipal:"Av.America",
            calleSecundaria:"La Gasca",
            numeracion:"OE1234-523",
            barrio:"Universidad Central"
        }
    }
    console.log(profesor);

    
    console.log(profesor.direccion.barrio);//acceder al atributo
    //asignarle un valor
    //Arreglos de objetos
    const estu1={
        nombre:"Edison",
        apellido:"Salazar"

    }
    const estu2={
        nombre:"Luis",
        apellido:"Mena"

    }
    const estu3={
        nombre:"Pedro",
        apellido:"Rojas"

    }
    
    const estu4={
        nombre:"Pepe",
        apellido:"Garcia"

    }

    const estudiantes=[estu1,estu2,estu3,estu4];
    console.log(estudiantes);
    console.table(estudiantes);

    console.log(estudiantes[1]);//imprimir un estudiante en especifico
    console.log(estudiantes[1].apellido);//imprimir un atributo
    estudiantes[1].apellido="Cambiar apellido";//cambiar atributo
    console.log(estudiantes);

    const profesores=[{nombre:"Edison",edad:34},{nombre:"Juan",edad:25}]

}