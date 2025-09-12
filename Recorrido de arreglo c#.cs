using System;

class Program
{
    
    static void Array()
    {
        int[,] edades = {
            {22, 36, 43},
            {28, 19, 31},
            {31, 27, 19}
        };
       
        int filas = edades.GetLength(0);
        int columnas = edades.GetLength(1);
       
        for (int j = 0; j < columnas; j++)
        {
            for (int i = 0; i < filas; i++)
            {
                console.Write(edades[i, j]);
            }
            ;
            console.WriteLine();
        }
    }

}
