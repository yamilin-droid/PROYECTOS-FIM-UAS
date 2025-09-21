using System;

class Burbuja
{
    static void BurbujaSort(int[] arr)
    {
        for (int i = 0; i < arr.Length; i++)
        {
            for (int j = 0; j < arr.Length-i-1; j++)
            {
                if (arr[j] > arr[j+1])
                {
                    int temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
            }
        }
    }

    static void Main()
    {
        int[] lista = {2, 1, 500, 1000};
        BurbujaSort(lista);
        Console.Write("Burbuja: ");
        foreach (int n in lista) Console.Write(n + " ");
    }
}