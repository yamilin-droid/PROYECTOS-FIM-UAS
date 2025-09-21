#include <iostream>
using namespace std;
void burbuja(int arr[], int n) {
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n-i-1; j++) {
            if (arr[j] > arr[j+1]) {
                int temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}

int main() {
    int lista[] = {5, 2, 9, 1, 4, 12};
    int n = 4;
    burbuja(lista, n);
    cout << "Burbuja: ";
    for (int i = 0; i < n; i++) cout << lista[i] << " ";
    cout << endl;
    return 0;
}