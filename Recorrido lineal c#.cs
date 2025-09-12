using System;

class Program
{
    static int BusquedaLineal(int[] edades, int buscado)
    {
        
        for (int i = 0; i < edades.Length; i++)
        {
            if (edades[i] == buscado)
            {
                return i;
            }
        }
        return -1;
    }

    static void Main(string[] args)
    {
        int[] edades = { 23, 25, 36, 24, 37, 43, 38 };

       
        Console.WriteLine("Recorrido del arreglo:");
        for (int i = 0; i < edades.Length; i++)
        {
            Console.WriteLine("Índice: " + i + " Valor: " + edades[i]);
        }

        
        edades[5] = 19;
        Console.WriteLine("Edades después de añadir la edad 19:");
        foreach (int edad in edades)
        {
            Console.WriteLine(edad);
        }

        
        int pos = BusquedaLineal(edades, 36);
        if (pos != -1)
        {
            Console.WriteLine("La edad 36 se encuentra en el índice: " + pos);
        }
        else
        {
            Console.WriteLine("No se encontró la edad 36");
        }
    }
}

