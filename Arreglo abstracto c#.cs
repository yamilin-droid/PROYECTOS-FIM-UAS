using System;
//creando un tipo de dato abstracto
class Persona
{
    public string Nombre { get; set; }
    public int Edad { get; set; }

    public Persona(string nombre, int edad)
    {
        Nombre = nombre;
        Edad = edad;
    }
    //metodo para mostrar la informacion
    public void Mostrar()
   {
        Console.WriteLine($"Nombre: {Nombre}, Edad: {Edad}");
    }
}

class Datos_abstractos
{
    static void Main()
    {
        //creando un arreglo para (Persona)
        Persona[] personas = new Persona[6]
        {
            new Persona("Ana", 20),
            new Persona("Luis", 25),
            new Persona("Clara", 30),
            new Persona("Pablo", 24),
            new Persona("Victor", 32),
            new Persona("Maria", 37)
        };
        //recorriendo el arreglo con el ciclo for each
        foreach (Persona p in personas)
        {
            p.Mostrar();
        }
    }
}
