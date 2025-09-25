using System;

class InsercionDesordenado
{
    static void InsercionSort(int[] arr)
    {
        for (int i = 1; i < arr.Length; i++)
        {
            int key = arr[i];
            int j = i - 1;
            while (j >= 0 && arr[j] > key)
            {
                arr[j + 1] = arr[j];
                j--;
            }
            arr[j + 1] = key;
        }
    }

    static void Main()
    {
        int[] arr = {7, 2, 9, 1, 10, 5, 3, 8, 6, 4};
        Console.Write("Original: ");
        foreach (int n in arr) Console.Write(n + " ");
        Console.WriteLine();

        InsercionSort(arr);

        Console.Write("Ordenado: ");
        foreach (int n in arr) Console.Write(n + " ");
    }
}