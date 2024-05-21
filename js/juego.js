let intentos = 0;
let puntaje = 0;
function cambiarImagen() {
    intentos++;
    if (intentos<=3) {
        document.getElementById("idimageninicial").innerHTML = '<img src="../images/pokemonco.png" alt="No se puede cargar la imagen">';
        document.getElementById('idmensajecorrecto').innerText = "Felicitaciones, has seleccionado la opción correcta";
        document.getElementById('idmensajeincorrecto').innerText = ""; 
        if (intentos===1) {
            document.getElementById('idpuntaje').innerText = "5"; 
        }else{
            if (intentos===2) {
                document.getElementById('idpuntaje').innerText = "3";
            } else{
                if(intentos===3){
                    document.getElementById('idpuntaje').innerText = "1";
                }
            }
        }
        document.getElementById('idintentos').innerText = intentos;
    }
   
   
}
function opcionIncorrecta() {
    document.getElementById('idmensajeincorrecto').innerText = "Pokémon incorrecto, intentalo nuevamente";
    document.getElementById('idmensajecorrecto').innerText = "";
    intentos++;
    document.getElementById('idintentos').innerText = intentos;
    if (intentos===3) {
        reiniciar()
    }
}

function reiniciar() {
    document.getElementById("idimageninicial").innerHTML = '<img src="../images/pokemonbn.png" alt="No se puede cargar la imagen">';
    document.getElementById('idmensajeincorrecto').innerText = "";
    document.getElementById('idmensajecorrecto').innerText = "";
    intentos = 0;
    puntaje=0;
    document.getElementById('idintentos').innerText = intentos;
    document.getElementById('idpuntaje').innerText = puntaje;

}
