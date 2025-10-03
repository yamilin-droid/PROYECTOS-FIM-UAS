#include <iostream>
#include <vector>
using namespace std;

// Función para leer una matriz del usuario
vector<vector<double>> leer_matriz(int filas, int columnas) {
    vector<vector<double>> matriz(filas, vector<double>(columnas)); // Crea una matriz vacía
    for (int i = 0; i < filas; i++) { // Recorre cada fila
        for (int j = 0; j < columnas; j++) { // Recorre cada columna
            cout << "Ingrese el valor para la posición [" << i << "][" << j << "]: "; // Pide el valor
            cin >> matriz[i][j]; // Guarda el valor en la matriz
        }
    }
    return matriz; // Retorna la matriz completa
}

// Función para sumar dos matrices
vector<vector<double>> sumar_matrices(const vector<vector<double>>& m1, const vector<vector<double>>& m2) {
    int filas = m1.size(); // Obtiene el número de filas
    int columnas = m1[0].size(); // Obtiene el número de columnas
    vector<vector<double>> resultado(filas, vector<double>(columnas)); // Matriz resultado vacía
    for (int i = 0; i < filas; i++) { // Recorre cada fila
        for (int j = 0; j < columnas; j++) { // Recorre cada columna
            resultado[i][j] = m1[i][j] + m2[i][j]; // Suma los valores correspondientes
        }
    }
    return resultado; // Retorna la matriz suma
}

// Función para imprimir una matriz
void imprimir_matriz(const vector<vector<double>>& matriz) {
    for (const auto& fila : matriz) { // Recorre cada fila
        for (double valor : fila) { // Recorre cada valor de la fila
            cout << valor << " "; // Imprime el valor
        }
        cout << endl; // Salto de línea al final de la fila
    }
}

int main() {
    int filas, columnas;
    cout << "Ingrese el número de filas: "; // Pide el número de filas
    cin >> filas;
    cout << "Ingrese el número de columnas: "; // Pide el número de columnas
    cin >> columnas;

    cout << "Ingrese los valores de la primera matriz:" << endl;
    vector<vector<double>> matriz1 = leer_matriz(filas, columnas); // Lee la primera matriz

    cout << "Ingrese los valores de la segunda matriz:" << endl;
    vector<vector<double>> matriz2 = leer_matriz(filas, columnas); // Lee la segunda matriz

    vector<vector<double>> resultado = sumar_matrices(matriz1, matriz2); // Suma las matrices

    cout << "La suma de las dos matrices es:" << endl;
    imprimir_matriz(resultado); // Imprime el resultado

    return 0;
}