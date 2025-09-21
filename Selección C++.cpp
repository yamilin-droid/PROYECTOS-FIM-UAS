#include <iostream>
using namespace std;
void seleccion(int arr[], int n) {
    for (int i = 0; i < n; i++) {
        int minIdx = i;
        for (int j = i+1; j < n; j++) {
            if (arr[j] < arr[minIdx]) minIdx = j;
        }
        int temp = arr[i];
        arr[i] = arr[minIdx];
        arr[minIdx] = temp;
    }
}

int main() {
    int lista[] = {2, 1, 6, 20};
    int n = 4;
    seleccion(lista, n);
    cout << "Selección: ";
    for (int i = 0; i < n; i++) cout << lista[i] << " ";
    cout << endl;
    return 0;
}