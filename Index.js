function cambiarColor() {
    var miParrafo = document.getElementById('miParrafo');
    miParrafo.style.color = "blue";
}

document.addEventListener("DOMContentLoaded", function() {
    InsertarImagen();
  });

function InsertarImagen() {

    var contenedorImagen = document.getElementById("contenedor-imagen");
    var imagen = document.createElement("img");
    imagen.src = "/img/CR7.jpg"; 
    contenedorImagen.appendChild(imagen);
}

function eliminarEnlace() {
    var listaEnlaces = document.getElementById("Enlace");
    listaEnlaces.remove();
  }
  