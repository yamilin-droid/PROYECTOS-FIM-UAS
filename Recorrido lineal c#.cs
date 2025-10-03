using System; // Importa el espacio de nombres System para usar funcionalidades como Console.

class Program // Define la clase principal llamada Program.
{
    // Método que realiza una búsqueda lineal en el arreglo.
    static int BusquedaLineal(int[] edades, int buscado)
    {
        // Recorre el arreglo buscando el valor especificado.
        for (int i = 0; i < edades.Length; i++)
        {
            if (edades[i] == buscado)
            {
                return i; // Retorna el índice si se encuentra el valor.
            }
        }
        return -1; // Retorna -1 si el valor no se encuentra.
    }

    // Método principal que se ejecuta al iniciar el programa.
    static void Main(string[] args)
    {
        // Se declara e inicializa un arreglo de enteros.
        int[] edades = { 23, 25, 36, 24, 37, 43, 38 };

        // Se imprime el recorrido del arreglo con sus índices.
        Console.WriteLine("Recorrido del arreglo:");
        for (int i = 0; i < edades.Length; i++)
        {
            Console.WriteLine("Índice: " + i + " Valor: " + edades[i]);
        }

        // Se modifica el valor en el índice 5, reemplazando 43 por 19.
        edades[5] = 19;
        Console.WriteLine("Edades después de añadir la edad 19:");
        foreach (int edad in edades)
        {
            Console.WriteLine(edad);
        }

        // Se realiza una búsqueda lineal del valor 36.
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
