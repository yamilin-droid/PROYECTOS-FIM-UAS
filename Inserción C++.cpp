#include <iostream> // Incluye la biblioteca estándar para entrada y salida.
using namespace std; // Permite usar elementos del espacio de nombres estándar sin anteponer "std::".

// Función que implementa el algoritmo de ordenamiento por inserción.
void insercion(int arr[], int n) {
    // Recorre el arreglo desde el segundo elemento hasta el final.
    for (int i = 1; i < n; i++) {
        int key = arr[i]; // Guarda el valor actual que se va a insertar en la posición correcta.
        int j = i - 1;     // Inicializa el índice para comparar con los elementos anteriores.

        // Desplaza los elementos mayores que 'key' una posición hacia la derecha.
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j]; // Mueve el elemento hacia la derecha.
            j--;                 // Decrementa el índice para seguir comparando hacia atrás.
        }

        arr[j + 1] = key; // Inserta el valor 'key' en su posición ordenada.
    }
}

int main() {
    // Se declara e inicializa un arreglo de 10 enteros desordenados.
    int arr[10] = {7, 2, 9, 1, 10, 5, 3, 8, 6, 4};
    int n = 10; // Se define la cantidad de elementos del arreglo.

    // Se imprime el arreglo original.
    cout << "Original: ";
    for (int i = 0; i < n; i++) cout << arr[i] << " ";
    cout << endl; // Salto de línea.

    // Se llama a la función insercion para ordenar el arreglo.
    insercion(arr, n);

    // Se imprime el arreglo ya ordenado.
    cout << "Ordenado: ";
    for (int i = 0; i < n; i++) cout << arr[i] << " ";
    cout << endl; // Salto de línea final.

    return 0; // Finaliza el programa correctamente.
}
