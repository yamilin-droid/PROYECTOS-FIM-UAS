using System;
using System.Collections.Generic;
using System.Linq;

class Program {
  static int[] HashSort(int[] arr) {
    var counts = new Dictionary<int,int>();
    foreach (var v in arr) counts[v] = counts.TryGetValue(v, out var c) ? c + 1 : 1;
    var keys = counts.Keys.ToList(); keys.Sort();
    var outList = new List<int>(arr.Length);
    foreach (var k in keys) for (int i = 0; i < counts[k]; i++) outList.Add(k);
    return outList.ToArray();
  }

  static void Main() {
    var data = new[] {23, 65, 0, 12, 23, 63};
    Console.WriteLine(string.Join(", ", HashSort(data))); // 0, 12, 23, 23, 63, 65
  }
}