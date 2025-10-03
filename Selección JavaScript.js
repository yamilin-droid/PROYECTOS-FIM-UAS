// Función que implementa el algoritmo de ordenamiento por selección.
function seleccion(arr) {
    // Recorre el arreglo desde el primer hasta el penúltimo elemento.
    for (let i = 0; i < arr.length; i++) {
        let minIdx = i; // Supone que el elemento actual es el mínimo.

        // Busca el índice del menor elemento en el resto del arreglo.
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIdx])
                minIdx = j;
        }

        // Intercambia el elemento actual con el menor encontrado usando destructuración.
        [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
    }
}

// Se declara e inicializa un arreglo de enteros.
let lista = [5, 2, 1, 10];

// Se llama a la función de ordenamiento por selección.
seleccion(lista);

// Se imprime el arreglo ya ordenado.
console.log("Selección:", lista);
