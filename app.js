// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigosAgregados = [];
function agregarAmigo(){
    //localizamos el nombre y captamos el valor
    let nombre = document.getElementById('amigo').value;
    //almacenamos en la lista
    listaAmigosAgregados.push(nombre);
    //verificamos en la consola
    console.log(listaAmigosAgregados);
} 