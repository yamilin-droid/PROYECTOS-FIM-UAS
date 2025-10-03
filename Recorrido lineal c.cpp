#include <iostream> // Incluye la biblioteca estándar para entrada y salida.
using namespace std; // Permite usar elementos del espacio de nombres estándar sin anteponer "std::".

// Función que realiza una búsqueda lineal en el arreglo.
int busqueda_lineal(int edades[], int n, int buscando) {
    // Recorre el arreglo buscando el valor especificado.
    for (int i = 0; i < n; i++) {
        if (edades[i] == buscando) {
            return i; // Retorna el índice si se encuentra el valor.
        }
    }
    return -1; // Retorna -1 si el valor no se encuentra.
}

int main() {
    // Se declara e inicializa un arreglo de enteros.
    int edades[] = {23, 25, 36, 24, 37, 43, 38};

    // Se calcula la cantidad de elementos del arreglo.
    int n = sizeof(edades) / sizeof(edades[0]);

    // Se imprime el arreglo original con sus índices.
    cout << "Edades: " << endl;
    for (int i = 0; i < n; i++) {
        cout << "Indice: " << i << " | Edad: " << edades[i] << endl;
    }

    // Se modifica el valor en el índice 2, reemplazando 36 por 19.
    edades[2] = 19;

    // Se imprime el arreglo después de la modificación.
    cout << "Edades después de remplazar la edad del índice 2 por 19: " << endl;
    for (int i = 0; i < n; i++) {
        cout << "Indice: " << i << " | Edad: " << edades[i] << endl;
    }

    // Se realiza una búsqueda lineal del valor 37.
    int pos = busqueda_lineal(edades, n, 37);
    if (pos != -1) {
        cout << "La edad 37 se encuentra en el índice: " << pos << endl;
    } else {
        cout << "Edad 37 no encontrada" << endl;
    }
}
