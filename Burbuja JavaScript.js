// Función que implementa el algoritmo de ordenamiento burbuja.
function burbuja(arr) {
    // Bucle externo que recorre todo el arreglo.
    for (let i = 0; i < arr.length; i++) {
        // Bucle interno que compara elementos adyacentes.
        // El rango se reduce en cada iteración del bucle externo.
        for (let j = 0; j < arr.length - i - 1; j++) {
            // Si el elemento actual es mayor que el siguiente, se intercambian.
            if (arr[j] > arr[j + 1]) {
                // Intercambio de valores usando destructuración de arreglos.
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
}

// Se declara e inicializa un arreglo de números.
let lista = [7, 1, 6, 2];

// Se llama a la función burbuja para ordenar el arreglo.
burbuja(lista);

// Se imprime el arreglo ordenado en consola.
console.log("Burbuja:", lista);
