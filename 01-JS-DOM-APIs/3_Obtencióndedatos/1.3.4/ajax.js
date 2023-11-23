
// Función reutilizable para realizar llamadas AJAX
function realizarLlamadaAjax(url, metodo, datos) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open(metodo, url, true);
        xhr.setRequestHeader('Content-Type', 'application/json');

        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.response);
            } else {
                reject(new Error('Error en la solicitud. Estado: ' + xhr.status));
            }
        };

        xhr.onerror = function () {
            reject(new Error('Error de red'));
        };

        xhr.send(JSON.stringify(datos));
    });
}

// Función para obtener la respuesta de la API de Chuck Norris
function obtenerFraseChuckNorris() {
    var url = 'https://api.chucknorris.io/jokes/random';

    realizarLlamadaAjax(url, 'GET', null)
        .then(function (respuesta) {
            var respuestaElemento = document.getElementById('respuesta');
            respuestaElemento.style.color = 'black'; // Restablecer color
            respuestaElemento.textContent = JSON.parse(respuesta).value;
        })
        .catch(function (error) {
            console.error('Error:', error);
            var respuestaElemento = document.getElementById('respuesta');
            respuestaElemento.style.color = 'red'; // Establecer color rojo en caso de error
            respuestaElemento.textContent = 'Error al obtener la broma';
        });
}

// Reemplazar el evento de clic del botón con la nueva función
document.getElementById('obtenerfrase').addEventListener('click', obtenerFraseChuckNorris);


/* datasooooo------------------------------------------------------
Ajax (Asynchronous JavaScript and XML)
 es una técnica de desarrollo web que permite realizar 
 solicitudes asíncronas al servidor desde el navegador 
 sin necesidad de recargar toda la página. 


 Una promesa es un objeto en JavaScript que representa el eventual resultado 
 (o fracaso) de una operación asíncrona. Proporciona una manera más limpia y
  estructurada de manejar operaciones asíncronas en comparación con los callbacks anidados.*/