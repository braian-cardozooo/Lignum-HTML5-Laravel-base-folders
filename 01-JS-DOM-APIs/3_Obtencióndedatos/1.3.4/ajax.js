
function makeAjaxCall() {
    // Configuración de la llamada AJAX
    var config = {
        method: 'GET', // Método HTTP (GET, POST, etc.)
        url: 'https://api.chucknorris.io/jokes/random', // URL del servicio
    };

    // Llamada a la función AJAX
    ajax(config)
        .then(data => {
            // Manipular los datos obtenidos y mostrar solo los valores deseados

            // Seleccionar el elemento donde se mostrarán los resultados
            var resultSection = document.getElementById('result');
            
            // Limpiar contenido anterior
            resultSection.innerHTML = '';

            // Función para crear párrafos solo si el valor no es undefined o vacío
            function createParagraph(key, value) {
                if (value !== undefined && value !== '') {
                    var paragraph = document.createElement('p');
                    paragraph.textContent = value;
                    resultSection.appendChild(paragraph);
                }
            }

            // Excluir las propiedades que no deseas mostrar
            createParagraph('categories', data.categories);
            createParagraph('value', data.value);

/*// Iterar sobre las propiedades del objeto data y mostrar solo los valores
for (var key in data) {
    if (data.hasOwnProperty(key)) {
        var value = data[key];
        var paragraph = document.createElement('p');
        paragraph.textContent = key + ': ' + value;
        resultSection.appendChild(paragraph);}}*/

        })
        .catch(error => {
            // Manejar errores y poner la sección en rojo
            
            // Seleccionar el elemento donde se mostrarán los resultados
            var resultSection = document.getElementById('result');

            // Mostrar mensaje de error en rojo
            resultSection.innerHTML = 'Error en la llamada AJAX';
            resultSection.classList.add('error');
            
            // Registrar el error en la consola
            console.error('Error en la llamada AJAX:', error);
        });
}

// Función reutilizable para realizar llamadas AJAX y devolver una promesa
function ajax(config) {
    // Devolver una nueva promesa
    return new Promise(function(resolve, reject) {
        // Crear una instancia de XMLHttpRequest
        var xhr = new XMLHttpRequest();

        // Configuración de la solicitud
        xhr.open(config.method, config.url, true);

        // Definición de funciones de devolución de llamada
        xhr.onload = function() {
            // Verificar si la solicitud fue exitosa (código en el rango 200-299)
            if (xhr.status >= 200 && xhr.status < 300) {
                // La llamada fue exitosa

                // Intentar analizar la respuesta JSON
                try {
                    var responseData = JSON.parse(xhr.responseText);
                    // Resolver la promesa con los datos obtenidos
                    resolve(responseData);
                } catch (parseError) {
                    // Error al analizar la respuesta JSON
                    reject(parseError);
                }
            } else {
                // La llamada falló, rechazar la promesa con el mensaje de estado
                reject(xhr.statusText);
            }
        };

        xhr.onerror = function() {
            // Error de red, rechazar la promesa con un mensaje de error de red
            reject('Error de red al intentar realizar la llamada AJAX');
        };

        // Realizar la solicitud
        xhr.send();
    });
}
