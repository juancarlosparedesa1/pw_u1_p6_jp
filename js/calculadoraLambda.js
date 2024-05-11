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
    console.log(diasSemana);
    console.log(diasSemana[0]);
    console.log(diasSemana[1]);
    console.log(diasSemana[5]);

    diasSemana[5]="Sabado";
    console.log(diasSemana[5]);

    diasSemana.push("domingo");
    //para no hacer esto se le declara const al arreglodiasSemana="dias"
    console.log( diasSemana);

    diasSemana.unshift("dias");
    console.log( diasSemana);

    const numerosPares=[2,4,6,8,9,10];
    console.log( numerosPares);

    const numerosImpares=[1,3,5,7,9]
    
    const numerosCompletos=numerosPares.concat(numerosImpares);

    console.log(numerosCompletos);

    //Repetitivas
    //for
    for(const dia of diasSemana){
        console.log(dia);
        if (dia==="Viernes") {
            console.log("Por fin llego el fin de semana");  
        }
    }

    //condicionales-if

    if(diasSemana[8]===undefined){
        console.log('No tiene valor');

    }else{
        console.log("Si tiene valor");
    }

    //objetos en js

    const estudiante={
        nombre:"Juan Carlos",
        apellido:"Paredes",
        edad:27,
        genero:"M",
        ciudadNacimiento:"Quito"
    }
    console.log(estudiante);
    console.log(estudiante.apellido);

    estudiante.nombre="coki";
    console.log(estudiante);

    //objeto atributos complejos
    const profesor={
        nombre:"Juan",
        apellido:"Angulo",
        edad:27,
        genero:"M",
        ciudadNacimiento:"Quito",
        direccion:{
            callePrincipal:"Av.America",
            calleSecundaria:"La Gasca",
            numercion:"0e3-59",
            barrio:"La Gasca"
        }
    }

    console.log(profesor);
    console.log(profesor.direccion.barrio);

    //Arreglos de Objetos

    const estu1={
        nombre:"Juan",
        apellido:"Paredes"
    }
    const estu2={
        nombre:"Carlos",
        apellido:"Paredes"
    }
    const estu3={
        nombre:"Luis",
        apellido:"Paredes"
    }
    const estu4={
        nombre:"Alicia",
        apellido:"Paredes"
    }

    const estudiantes=[estu1,estu2,estu3,estu4];
    console.log(estudiantes);
    console.table(estudiantes);

    console.log(estudiantes[1]);
    console.log(estudiantes[1].apellido);

    estudiantes[1].apellido="Cambiar apellido";
    console.table(estudiantes);

    //arreglo de objetos de profesores
    const profesores=[{nombre:"Juan",edad:24},{nombre:"Andres",edad:33}];
    console.table(profesores);

    var prof=profesores.pop();
    console.log(prof);
    console.table(profesores);
    

    //Desestructuración de Arreglos
    const diasSemana2=["Lunes","Martes","Miercoles","Jueves","Viernes"];
    const[dia1,dia2,dia3,dia4]=diasSemana2;
    console.log(dia2);   
    console.log(dia4);

    console.table(diasSemana2);


    const[d1,d2,d3,d4,d5]=["Lunes-1","Martes-2","Miercoles-3","Jueves-4","Viernes-5"];
    console.log(d2);
    console.log(d5);

    //Desestructuración de objetos

    const vehiculo={
        marca:"Toyota",
        modelo:"Prius",
        anio:2018
    }

    const {anio,marca}=vehiculo;
    console.log(marca);
    console.log(anio);

    const {modelo}={
        marca:"Ford",
        modelo:"Edge",
        anio:2020
    }
    console.log(modelo);

    //desestructuración de un objeto tenga un atributo compuesto,
    //tanto de los principales como los secundarios

    const profesor2={
        nombre:"Juan",
        apellido:"Angulo",
        edad:27,
        genero:"M",
        ciudadNacimiento:"Quito",
        direccion:{
            callePrincipal:"Av.America",
            calleSecundaria:"La Gasca",
            numercion:"0e3-59",
            barrio:"La Gasca"
        }
    }

    const {genero}=profesor2;
    const{barrio}=profesor2.direccion;
    console.log(genero);
    console.log(barrio);



}