using System;

class Program
{
    static int Partition(int[] a, int low, int high)
    {
        int pivot = a[high];
        int i = low;
        for (int j = low; j < high; j++)
        {
            if (a[j] <= pivot)
            {
                (a[i], a[j]) = (a[j], a[i]);
                i++;
            }
        }
        (a[i], a[high]) = (a[high], a[i]);
        return i;
    }

    static void QuickSort(int[] a, int low, int high)
    {
        if (low < high)
        {
            int p = Partition(a, low, high);
            QuickSort(a, low, p - 1);
            QuickSort(a, p + 1, high);
        }
    }

    static void Main(string[] args)
    {
        int[] nums = { 8, 75, 35, 21, 32, 32, 65, 0 };
        QuickSort(nums, 0, nums.Length - 1);
        Console.WriteLine(string.Join(", ", nums));
    }
}