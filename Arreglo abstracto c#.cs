using System;
class Persona
{
    public string Nombre { get; set; }
    public int Edad { get; set; }

    public Persona(string nombre, int edad)
    {
        Nombre = nombre;
        Edad = edad;
    }
    
    public void Mostrar()
   {
        Console.WriteLine($"Nombre: {Nombre}, Edad: {Edad}");
    }
}

class Datos_abstractos
{
    static void Main()
    {
        
        Persona[] personas = new Persona[6]
        {
            new Persona("Ramón", 23),
            new Persona("Yamill", 19),
            new Persona("Cesar", 18),
            new Persona("Patricio", 20),
            new Persona("Miguel", 19),
            new Persona("Paco", 19)
        };
        
        foreach (Persona p in personas)
        {
            p.Mostrar();
        }
    }
}

