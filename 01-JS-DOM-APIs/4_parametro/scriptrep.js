// Esta función se llama cuando se hace clic en el botón de búsqueda
function buscarRepositorios() {
    // Obtener el valor de búsqueda ingresado por el usuario
    var términoDeBúsqueda = document.getElementById('searchInput').value;

    // Construir la URL de la API de GitHub con el parámetro 'q' para la búsqueda
    var apiUrl = 'https://api.github.com/search/repositories?q=' + encodeURIComponent(términoDeBúsqueda);

    // Realizar la solicitud a la API utilizando la función fetch
    fetch(apiUrl)
        .then(response => response.json()) // Convertir la respuesta a formato JSON
        .then(data => {
            // Una vez que la respuesta se ha convertido a JSON, llamar a la función mostrarRepositorios
            // para manejar y mostrar los datos en la página
            mostrarRepositorios(data.items);
        })
        .catch(error => {
            // Manejar cualquier error que pueda ocurrir durante la solicitud
            console.error('Error al obtener repositorios:', error);
        });
}

// Esta función toma la lista de repositorios y los muestra en la página
function mostrarRepositorios(repositorios) {
    // Obtener el elemento donde se mostrarán los repositorios
    var listaDeRepositorios = document.getElementById('repositoriesList');

    // Limpiar la lista actual de repositorios para evitar duplicados
    listaDeRepositorios.innerHTML = '';

    // Crear una lista desordenada (ul) para enumerar los repositorios
    var ul = document.createElement('ul');

    // Iterar sobre los repositorios y crear elementos de lista (li) para cada uno
    repositorios.forEach(repositorio => {
        var li = document.createElement('li');
        
        // Asignar el nombre completo del repositorio al texto del elemento de lista
        li.textContent = repositorio.full_name;

        // Agregar el elemento de lista a la lista desordenada
        ul.appendChild(li);
    });

    // Agregar la lista desordenada al elemento contenedor en la página
    listaDeRepositorios.appendChild(ul);
}