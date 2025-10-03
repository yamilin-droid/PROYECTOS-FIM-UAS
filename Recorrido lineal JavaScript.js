// Se declara e inicializa un arreglo de edades.
let edades = [23, 25, 36, 24, 37, 43, 38];

// Se imprime el encabezado.
console.log("Edades: ");

// Se recorre el arreglo e imprime cada índice junto con su valor.
for (let i = 0; i < edades.length; i++) {
    console.log("Indice: " + i + "| Edad: " + edades[i]);
}

// Se modifica el valor en el índice 3, reemplazando 24 por 19.
edades[3] = 19;

// Se imprime el arreglo después de la modificación.
console.log("Edades después de remplazar la edad del índice 3: ");
for (let edad of edades) {
    console.log(edad);
}

// Función que realiza una búsqueda lineal en el arreglo.
function busqueda_lineal(edades, buscado) {
    // Recorre el arreglo buscando el valor especificado.
    for (let i = 0; i < edades.length; i++) {
        if (edades[i] == buscado) {
            return i; // Retorna el índice si se encuentra el valor.
        }
    }
    return -1; // Retorna -1 si el valor no se encuentra.
}

// Se llama a la función para buscar la edad 25.
let pos = busqueda_lineal(edades, 25);

// Se imprime el resultado de la búsqueda.
if (pos !== -1) {
    console.log("La edad 25 se encuentra en el índice: " + pos);
} else {
    console.log("La edad 25 no se encuentra");
}
