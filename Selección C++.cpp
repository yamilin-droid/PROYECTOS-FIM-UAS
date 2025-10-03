#include <iostream> // Incluye la biblioteca estándar para entrada y salida.
using namespace std; // Permite usar elementos del espacio de nombres estándar sin anteponer "std::".

// Función que implementa el algoritmo de ordenamiento por selección.
void seleccion(int arr[], int n) {
    // Recorre el arreglo desde el primer hasta el penúltimo elemento.
    for (int i = 0; i < n; i++) {
        int minIdx = i; // Supone que el elemento actual es el mínimo.

        // Busca el índice del menor elemento en el resto del arreglo.
        for (int j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIdx])
                minIdx = j;
        }

        // Intercambia el elemento actual con el menor encontrado.
        int temp = arr[i];
        arr[i] = arr[minIdx];
        arr[minIdx] = temp;
    }
}

int main() {
    // Se declara e inicializa un arreglo de enteros.
    int lista[] = {2, 1, 6, 20};
    int n = 4; // Número de elementos del arreglo.

    // Se llama a la función de ordenamiento por selección.
    seleccion(lista, n);

    // Se imprime el arreglo ya ordenado.
    cout << "Selección: ";
    for (int i = 0; i < n; i++)
        cout << lista[i] << " ";
    cout << endl;

    return 0; // Finaliza el programa correctamente.
}
