#include <iostream> // Incluye la biblioteca estándar para entrada y salida.
using namespace std; // Permite usar elementos del espacio de nombres estándar sin anteponer "std::".

// Función que imprime los elementos de una matriz por columnas.
int Array() {
    // Se declara e inicializa una matriz de 3x3 con valores enteros.
    int edad[3][3] = {
        {22, 36, 43},
        {28, 19, 31},
        {31, 27, 19}
    };

    int filas = 3;     // Número de filas de la matriz.
    int columnas = 3;  // Número de columnas de la matriz.

    // Bucle externo que recorre las columnas de la matriz.
    for (int j = 0; j < columnas; j++) {
        // Bucle interno que recorre las filas de la matriz.
        for (int i = 0; i < filas; i++) {
            // Imprime el valor en la posición [i][j], recorriendo la matriz por columnas.
            cout << edad[i][j] << " ";
        }
        // Imprime un salto de línea después de cada columna.
        cout << endl;
    }

    return 0; // Finaliza la función con valor de retorno 0.
}
