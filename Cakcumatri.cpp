#include <iostream>
#include <vector>
#include <string>
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

// Función para operar dos matrices según la operación seleccionada
vector<vector<string>> operar_matrices(const vector<vector<double>>& m1, const vector<vector<double>>& m2, const string& operacion) {
    int filas = m1.size(); // Obtiene el número de filas
    int columnas = m1[0].size(); // Obtiene el número de columnas
    vector<vector<string>> resultado(filas, vector<string>(columnas)); // Matriz resultado vacía
    for (int i = 0; i < filas; i++) { // Recorre cada fila
        for (int j = 0; j < columnas; j++) { // Recorre cada columna
            if (operacion == "suma") {
                resultado[i][j] = to_string(m1[i][j] + m2[i][j]); // Suma
            } else if (operacion == "resta") {
                resultado[i][j] = to_string(m1[i][j] - m2[i][j]); // Resta
            } else if (operacion == "multiplicacion") {
                resultado[i][j] = to_string(m1[i][j] * m2[i][j]); // Multiplicación
            } else if (operacion == "division") {
                if (m2[i][j] != 0) // Evita división por cero
                    resultado[i][j] = to_string(m1[i][j] / m2[i][j]);
                else
                    resultado[i][j] = "Indefinido";
            } else {
                resultado[i][j] = "Error";
            }
        }
    }
    return resultado; // Retorna la matriz resultado
}

// Función para imprimir una matriz de strings
void imprimir_matriz(const vector<vector<string>>& matriz) {
    for (const auto& fila : matriz) { // Recorre cada fila
        for (const string& valor : fila) { // Recorre cada valor de la fila
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

    cout << "Operaciones disponibles: suma, resta, multiplicacion, division" << endl;
    cout << "Ingrese el tipo de operación que desea realizar: "; // Pide la operación
    string operacion;
    cin >> operacion;

    vector<vector<string>> resultado = operar_matrices(matriz1, matriz2, operacion); // Realiza la operación

    cout << "El resultado de la " << operacion << " es:" << endl;
    imprimir_matriz(resultado); // Imprime el resultado

    return 0;
}