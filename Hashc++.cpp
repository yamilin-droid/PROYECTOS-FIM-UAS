#include <bits/stdc++.h>
using namespace std;

vector<int> hashsort(const vector<int>& arr) {
  unordered_map<int,int> counts;
  for (int v : arr) counts[v]++;
  vector<int> keys; keys.reserve(counts.size());
  for (auto& p : counts) keys.push_back(p.first);
  sort(keys.begin(), keys.end());
  vector<int> out; out.reserve(arr.size());
  for (int k : keys) for (int c = counts[k]; c-- > 0; ) out.push_back(k);
  return out;
}

int main() {
  vector<int> data = {23, 65, 0, 12, 23, 63};
  auto res = hashsort(data);
  for (size_t i = 0; i < res.size(); ++i) {
    if (i) cout << ", ";
    cout << res[i];
  }
  cout << endl; // 0, 12, 23, 23, 63, 65
}