using System;
using System.Collections.Generic;

class Program
{
    static void InsertionSort(List<int> a)
    {
        for (int i = 1; i < a.Count; i++)
        {
            int key = a[i];
            int j = i - 1;
            while (j >= 0 && a[j] > key)
            {
                a[j + 1] = a[j];
                j--;
            }
            a[j + 1] = key;
        }
    }

    static int[] BucketSort(int[] arr)
    {
        if (arr.Length == 0) return arr;
        int mn = arr[0], mx = arr[0];
        foreach (int v in arr) { if (v < mn) mn = v; if (v > mx) mx = v; }
        if (mn == mx) return (int[])arr.Clone();

        int n = arr.Length;
        int k = n;
        var buckets = new List<int>[k];
        for (int i = 0; i < k; i++) buckets[i] = new List<int>();

        foreach (int v in arr)
        {
            int idx = (int)((long)(v - mn) * (k - 1) / (mx - mn));
            buckets[idx].Add(v);
        }

        var result = new List<int>(arr.Length);
        foreach (var b in buckets)
        {
            InsertionSort(b);
            result.AddRange(b);
        }
        return result.ToArray();
    }

    static void Main(string[] args)
    {
        int[] nums = { 7, 23, 45676, 3443676, 21123, 12345 };
        var sorted = BucketSort(nums);
        Console.WriteLine(string.Join(", ", sorted));
    }
}