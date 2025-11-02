#include <bits/stdc++.h>
using namespace std;

static void countingSortExp(vector<int>& a, int exp) {
    const int base = 10;
    vector<int> count(base, 0);
    vector<int> out(a.size());

    for (int n : a) count[(n / exp) % base]++;

    for (int i = 1; i < base; ++i) count[i] += count[i - 1];

    for (int i = (int)a.size() - 1; i >= 0; --i) {
        int d = (a[i] / exp) % base;
        out[--count[d]] = a[i];
    }

    a.swap(out);
}

static void radixSort(vector<int>& a) {
    if (a.empty()) return;
    int mx = *max_element(a.begin(), a.end());
    for (int exp = 1; mx / exp > 0; exp *= 10)
        countingSortExp(a, exp);
}

int main() {
    vector<int> a = {8, 75, 35, 21, 32, 32, 65, 0};
    radixSort(a);
    for (size_t i = 0; i < a.size(); ++i) {
        if (i) cout << " ";
        cout << a[i];
    }
    cout << "\n";
    return 0;
}