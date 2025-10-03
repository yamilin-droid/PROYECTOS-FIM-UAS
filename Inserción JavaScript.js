// Se declara e inicializa un arreglo de números desordenados.
let arr = [7, 2, 9, 1, 10, 5, 3, 8, 6, 4];

// Se imprime el arreglo original antes de ordenarlo.
console.log("Original:", arr);

// Función que implementa el algoritmo de ordenamiento por inserción.
function insercion(arr) {
    // Recorre el arreglo desde el segundo elemento hasta el final.
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];   // Guarda el valor actual que se va a insertar en la posición correcta.
        let j = i - 1;      // Inicializa el índice para comparar con los elementos anteriores.

        // Desplaza los elementos mayores que 'key' una posición hacia la derecha.
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j]; // Mueve el elemento hacia la derecha.
            j--;                 // Decrementa el índice para seguir comparando hacia atrás.
        }

        arr[j + 1] = key; // Inserta el valor 'key' en su posición ordenada.
    }
}

// Se llama a la función insercion para ordenar el arreglo.
insercion(arr);

// Se imprime el arreglo ya ordenado.
console.log("Ordenado:", arr);
