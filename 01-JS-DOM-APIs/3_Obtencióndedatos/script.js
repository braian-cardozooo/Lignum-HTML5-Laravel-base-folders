//aqui se crea el evento del loading
window.addEventListener("DOMContentLoaded", function() {
    //Se obtiene la referencia a la sección con el ID "fa" del section
    var pp = document.getElementById("fa");

       // Mostrar la sección con la clase "fade-in"
        pp.classList.add("fade-in");
    
});

function mostrarAlerta() {
    alert("MENSAJE DE ALERTA MI LOCO!!!!!!.");
}




// Selecciona el primer botón encontrado en el documento
const but = document.querySelector('button');

// Selecciona el primer elemento h2 encontrado en el documento
const parrafo = document.querySelector('h3');

// Agrega un event listener al botón que ejecuta la función getData cuando se hace clic
but.addEventListener('click', getData);

// Define la función getData como una función asíncrona
async function getData() {
    try {
        // Realiza una solicitud a la API de Chuck Norris para obtener un chiste aleatorio
        const data = await fetch('https://api.chucknorris.io/jokes/random');

        // Convierte la respuesta a formato JSON
        const json = await data.json();

        // Actualiza el contenido del párrafo con el valor del chiste obtenido
        parrafo.textContent = json.value;
    } catch (e) {
        // Maneja cualquier error que pueda ocurrir durante la solicitud o el procesamiento del JSON
        console.error(e);
    }
}

