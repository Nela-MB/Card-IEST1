
document.addEventListener("DOMContentLoaded", function() {
    let audio = document.getElementById("melodia");// seleccionar los elementos html
    let button = document.getElementById("idBotonMelodia");// seleccionar los elementos html

    // Reproduce la música automáticamente al cargar la página
    audio.play();
    

    // Función para pausar/reproducir la música
    button.addEventListener("click", function() { // al hacer click en btn-imagen, se dispara este evento.
        if (audio.paused) {
            audio.play();
            button.querySelector('img').src = "img/musica.gif";  // Imagen por defecto
        } else {
            audio.pause();
            button.querySelector('img').src = "./img/mudo.gif";  // Cambia la imagen a pausa 
        }
    });
});