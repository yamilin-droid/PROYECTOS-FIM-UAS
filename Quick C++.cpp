#include <iostream>
#include <vector>
using namespace std;

int partition(vector<int>& a, int low, int high) {
    int pivot = a[high];
    int i = low;
    for (int j = low; j < high; ++j) {
        if (a[j] <= pivot) {
            swap(a[i], a[j]);
            ++i;
        }
    }
    swap(a[i], a[high]);
    return i;
}

void quickSort(vector<int>& a, int low, int high) {
    if (low < high) {
        int p = partition(a, low, high);
        quickSort(a, low, p - 1);
        quickSort(a, p + 1, high);
    }
}

int main() {
    vector<int> a = {8, 75, 35, 21, 32, 32, 65, 0};
    quickSort(a, 0, (int)a.size() - 1);
    for (size_t i = 0; i < a.size(); ++i) {
        if (i) cout << " ";
        cout << a[i];
    }
    cout << "\n";
    return 0;
}