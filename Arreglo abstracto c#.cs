// Se importa el espacio de nombres System, que contiene clases básicas como Console
using System;

// Se define una clase llamada 'Persona' que representa a una persona con nombre y edad
class Persona
{
    // Propiedad pública 'Nombre' de tipo string con métodos automáticos get y set
    public string Nombre { get; set; }

    // Propiedad pública 'Edad' de tipo int con métodos automáticos get y set
    public int Edad { get; set; }

    // Constructor de la clase 'Persona' que recibe dos parámetros: nombre y edad
    public Persona(string nombre, int edad)
    {
        // Asigna el valor del parámetro 'nombre' a la propiedad 'Nombre'
        Nombre = nombre;

        // Asigna el valor del parámetro 'edad' a la propiedad 'Edad'
        Edad = edad;
    }

    // Método público llamado 'Mostrar' que imprime el nombre y la edad de la persona
    public void Mostrar()
    {
        // Utiliza interpolación de cadenas para mostrar los valores de 'Nombre' y 'Edad'
        Console.WriteLine($"Nombre: {Nombre}, Edad: {Edad}");
    }
}

// Se define una clase llamada 'Datos_abstractos' que contiene el punto de entrada del programa
class Datos_abstractos
{
    // Método principal 'Main' que se ejecuta al iniciar el programa
    static void Main()
    {
        // Se declara un arreglo de tipo 'Persona' con capacidad para 6 elementos
        // Se inicializa con 6 instancias de la clase 'Persona', cada una con nombre y edad
        Persona[] personas = new Persona[6]
        {
            new Persona("Ramón", 23),
            new Persona("Yamill", 19),
            new Persona("Cesar", 18),
            new Persona("Patricio", 20),
            new Persona("Miguel", 19),
            new Persona("Paco", 19)
        };

        // Se recorre el arreglo 'personas' utilizando un ciclo foreach
        foreach (Persona p in personas)
        {
            // En cada iteración se llama al método 'Mostrar' del objeto actual
            // Esto imprime el nombre y la edad de cada persona en la consola
            p.Mostrar();
        }
    }
}
