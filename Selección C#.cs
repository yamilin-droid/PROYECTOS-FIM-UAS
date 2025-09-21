using System;

class Seleccion
{
    static void SeleccionSort(int[] arr)
    {
        for (int i = 0; i < arr.Length; i++)
        {
            int minIdx = i;
            for (int j = i+1; j < arr.Length; j++)
            {
                if (arr[j] < arr[minIdx]) minIdx = j;
            }
            int temp = arr[i];
            arr[i] = arr[minIdx];
            arr[minIdx] = temp;
        }
    }

    static void Main()
    {
        int[] lista = {1, 32, 56, 345};
        SeleccionSort(lista);
        Console.Write("Selección: ");
        foreach (int n in lista) Console.Write(n + " ");
    }
}