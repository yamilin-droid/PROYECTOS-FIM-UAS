// Se declara una matriz bidimensional llamada 'edades' con 3 filas y 3 columnas.
let edades = [
    [22, 36, 43],
    [28, 19, 31],
    [31, 27, 19]
];

// Se obtiene el número de filas de la matriz.
let filas = edades.length;

// Se obtiene el número de columnas de la primera fila de la matriz.
let columnas = edades[0].length;

// Bucle externo que recorre las columnas de la matriz.
for (let j = 0; j < columnas; j++) {
    // Bucle interno que recorre las filas de la matriz.
    for (let i = 0; i < filas; i++) {
        // Imprime el valor en la posición [i][j], es decir, recorre la matriz por columnas.
        console.log(edades[i][j]);
    }
    // Imprime una línea vacía para separar visualmente cada grupo de columna.
    console.log();
}
