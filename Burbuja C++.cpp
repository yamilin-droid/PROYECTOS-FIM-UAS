#include <iostream> // Incluye la biblioteca estándar para entrada y salida.
using namespace std; // Permite usar elementos del espacio de nombres estándar sin anteponer "std::".

// Función que implementa el algoritmo de ordenamiento burbuja.
void burbuja(int arr[], int n) {
    // Bucle externo que recorre el arreglo n veces.
    for (int i = 0; i < n; i++) {
        // Bucle interno que compara elementos adyacentes y los intercambia si están en orden incorrecto.
        for (int j = 0; j < n - i - 1; j++) {
            // Si el elemento actual es mayor que el siguiente, se realiza el intercambio.
            if (arr[j] > arr[j + 1]) {
                int temp = arr[j];       // Se guarda temporalmente el valor actual.
                arr[j] = arr[j + 1];     // Se asigna el valor del siguiente al actual.
                arr[j + 1] = temp;       // Se asigna el valor temporal al siguiente.
            }
        }
    }
}

int main() {
    // Se declara e inicializa un arreglo de enteros.
    int lista[] = {5, 2, 9, 1, 4, 12};

    // Se define la cantidad de elementos a ordenar (solo los primeros 4).
    int n = 4;

    // Se llama a la función burbuja para ordenar los primeros n elementos del arreglo.
    burbuja(lista, n);

    // Se imprime un encabezado.
    cout << "Burbuja: ";

    // Se recorre el arreglo ordenado y se imprime cada elemento.
    for (int i = 0; i < n; i++) cout << lista[i] << " ";

    // Se imprime un salto de línea al final.
    cout << endl;

    return 0; // Finaliza el programa correctamente.
}
