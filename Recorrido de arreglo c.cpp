#include <iostream>
using namespace std;
int Array() {
    int edades[3][3]={
        {22, 36, 43},
        {28, 19, 31},
        {31, 27, 19}
    };
    int filas = 3;
    int columnas = 3;
  
    for(int j = 0; j < columnas; j ++) {
        for(int i = 0; i < filas; i ++){
            cout << edades[i][j] << " ";
        }
        cout << endl;
    }
    return 0;
}

