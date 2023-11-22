function crearTabla(datos) {
    // Crear la tabla
    var tabla = document.createElement('table');

    // Crear la fila de encabezados
    var encabezados = document.createElement('tr');
    var campos = ['Nombre', 'Apellido', 'Edad', 'Teléfono', 'Correo'];

    // Crear celdas de encabezado y agregarlos a la fila de encabezados
    campos.forEach(function(campo) {
        var th = document.createElement('th');
        th.appendChild(document.createTextNode(campo));
        encabezados.appendChild(th);
    });

    // Agregar la fila de encabezados a la tabla
    tabla.appendChild(encabezados);

    // Agregar filas de datos
    datos.forEach(function(fila) {
        // Crear una nueva fila
        var tr = document.createElement('tr');

        // Iterar sobre los valores de la fila y crear celdas
        fila.forEach(function(valor) {
            var td = document.createElement('td');
            td.appendChild(document.createTextNode(valor));
            tr.appendChild(td);
        });

        // Agregar la fila de datos a la tabla
        tabla.appendChild(tr);
    });

    // Agregar la tabla al cuerpo de la página
    document.body.appendChild(tabla);
}

// Ejemplo de uso
var datosEjemplo = [
    ['John', 'Doe', 25, '123-456-7890', 'john.doe@example.com'],
    ['Jane', 'Smith', 30, '987-654-3210', 'jane.smith@example.com'],
    ['Juan', 'Pérez', 28, '555-123-4567', 'juan.perez@example.com'],
    ['María', 'Gómez', 35, '222-789-4560', 'maria.gomez@example.com'],
    ['Carlos', 'Rodríguez', 22, '333-987-6543', 'carlos.rodriguez@example.com']
];

// Llamar a la función para crear la tabla con los datos de ejemplo
crearTabla(datosEjemplo);


/*datasooo--------------------------------------------------------
DOM significa "Document Object Model" (Modelo de Objetos del Documento) 
y es una interfaz de programación para documentos HTML y XML. En términos más simples, 
el DOM es una representación jerárquica de la estructura de un documento web.*/