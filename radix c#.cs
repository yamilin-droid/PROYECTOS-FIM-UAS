using System;

class Program
{
    static void CountingSortExp(int[] a, int exp)
    {
        const int BASE = 10;
        int n = a.Length;
        int[] count = new int[BASE];
        int[] output = new int[n];

        for (int i = 0; i < n; i++)
            count[(a[i] / exp) % BASE]++;

        for (int i = 1; i < BASE; i++)
            count[i] += count[i - 1];

        for (int i = n - 1; i >= 0; i--)
        {
            int d = (a[i] / exp) % BASE;
            output[--count[d]] = a[i];
        }

        for (int i = 0; i < n; i++)
            a[i] = output[i];
    }

    static void RadixSort(int[] a)
    {
        if (a.Length == 0) return;
        int max = a[0];
        foreach (int v in a) if (v > max) max = v;

        for (int exp = 1; max / exp > 0; exp *= 10)
            CountingSortExp(a, exp);
    }

    static void Main(string[] args)
    {
        int[] nums = { 8, 75, 35, 21, 32, 32, 65, 0 };
        RadixSort(nums);
        Console.WriteLine(string.Join(", ", nums));
    }
}