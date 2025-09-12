#include <iostream>
using namespace std;

int busqueda_lineal(int edades[], int n, int buscando){
    for (int i = 0; i < n; i++) {
        if (edades[i] == buscando) {
            return i;
        }
    }
    return -1;
}
int main() {
    
    int edades[] = {23, 25, 36, 24, 37, 43, 38};
    int n = sizeof(edades)/sizeof(edades[0]);
  
    cout << "Edades: " << endl;
    for (int i = 0; i < n; i++) {
        cout << "Indice: " << i << "| Edad: " << edades[i] << endl;
    }
    
    edades[2] = 19;
    cout << "Edades despues de remplazar la edad del indice 2 por 19: " << endl;
    for (int i = 0; i < n; i++) {
        cout << "Indice: " << i << "| Edad: " << edades[i] << endl;
    }
   
    int pos = busqueda_lineal(edades, n, 37);
    if (pos != -1) {
        cout << "La edad 37 se encuentra en el indice: " << pos << endl;
  } else {
        cout << "Edad 37 no encontrada" << endl;
    }
}

