#include <iostream>
using namespace std;
//busqueda lineal
int busqueda_lineal(int edades[], int n, int buscando){
    for (int i = 0; i < n; i++) {
        if (edades[i] == buscando) {
            return i;
        }
    }
    return -1;
}
int main() {
    //creando un arreglo
    int edades[] = {23, 25, 36, 24, 37, 43, 38};
    int n = sizeof(edades)/sizeof(edades[0]);
    //recorriendo el arreglos 
    cout << "Edades: " << endl;
    for (int i = 0; i < n; i++) {
        cout << "Indice: " << i << "| Edad: " << edades[i] << endl;
    }
    //agragando un elemento remplazando un elemento anterior
    edades[2] = 19;
    cout << "Edades despues de remplazar la edad del indice 2 por 19: " << endl;
    for (int i = 0; i < n; i++) {
        cout << "Indice: " << i << "| Edad: " << edades[i] << endl;
    }
    //buscando el elemento 37 con una busqueda lineal  
    int pos = busqueda_lineal(edades, n, 37);
    if (pos != -1) {
        cout << "La edad 37 se encuentra en el indice: " << pos << endl;
  } else {
        cout << "Edad 37 no encontrada" << endl;
    }
}
