#include <bits/stdc++.h>
using namespace std;

static void insertionSort(vector<int>& a) {
    for (size_t i = 1; i < a.size(); ++i) {
        int key = a[i];
        int j = (int)i - 1;
        while (j >= 0 && a[j] > key) {
            a[j + 1] = a[j];
            --j;
        }
        a[j + 1] = key;
    }
}

static vector<int> bucketSort(const vector<int>& arr) {
    if (arr.empty()) return {};
    int mn = *min_element(arr.begin(), arr.end());
    int mx = *max_element(arr.begin(), arr.end());
    if (mn == mx) return arr;
    int n = (int)arr.size();
    int k = n;
    vector<vector<int>> buckets(k);
    for (int v : arr) {
        int idx = (int)((long long)(v - mn) * (k - 1) / (mx - mn));
        buckets[idx].push_back(v);
    }
    vector<int> res;
    res.reserve(arr.size());
    for (auto& b : buckets) {
        insertionSort(b);
        res.insert(res.end(), b.begin(), b.end());
    }
    return res;
}

int main() {
    vector<int> nums = {7, 23, 45676, 3443676, 21123, 12345};
    auto sorted = bucketSort(nums);
    for (size_t i = 0; i < sorted.size(); ++i) {
        if (i) cout << " ";
        cout << sorted[i];
    }
    cout << "\n";
    return 0;
}