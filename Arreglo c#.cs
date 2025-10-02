// Se importa el espacio de nombres 'System', que contiene clases fundamentales como Console, Math, etc.
using System;

// Se define un espacio de nombres personalizado llamado 'MyCompiler'
// Los espacios de nombres ayudan a organizar el código y evitar conflictos entre clases
namespace MyCompiler {

    // Se define una clase llamada 'Program' que contiene el punto de entrada del programa
    class Program {

        // Método principal 'Main' que se ejecuta al iniciar el programa
        // 'string[] args' permite recibir argumentos desde la línea de comandos
        public static void Main(string[] args) {

            // Se declaran e inicializan tres variables enteras: a, b y c con los valores 1, 2 y 3 respectivamente
            int a = 1, b = 2, c = 3;

            // Se crea un arreglo de enteros llamado 'arr' que contiene los valores de las variables a, b y c
            // El arreglo tendrá los elementos: [1, 2, 3]
            int[] arr = { a, b, c };

            // Nota: No hay ninguna instrucción para mostrar o manipular el arreglo, por lo que el programa termina silenciosamente
        }
    }
}
