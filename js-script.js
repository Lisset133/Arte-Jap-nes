document.addEventListener("DOMContentLoaded", function(){
    const imagenes = [
        "img/descarga (1).jfif",
        "img/descarga (2).jfif",
        "img/descarga (3).jfif"
    ];
    let indiceActual = 0;

    const imagenPrincipal = document.getElementById("ImagenPrincipal")
    const btnAnterior = document.getElementById("btnanterior");
    const btnSiguiente = document.getElementById("btnsiguiente");

    function mostarImagen(indice){
        imagenPrincipal.src = imagenes[indice];
    }

btnAnterior.addEventListener("click", function(){
        indiceActual--;
        if(indiceActual >= imagenes.length)indiceActual = 0;
        mostarImagen(indiceActual);
    });
    btnSiguiente.addEventListener("click", function(){
        indiceActual++;
        if(indiceActual > 0)indiceActual = imagenes.length -1;
        mostarImagen(indiceActual);
    });

    mostrarImagen(indiceActual);
    
});