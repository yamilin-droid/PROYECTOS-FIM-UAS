// Importa todas las clases del paquete java.util, que incluye estructuras de datos como ArrayList, HashMap, etc.
// En este caso no se utilizan directamente, pero podrían ser útiles en programas más grandes.
import java.util.*;

// Importa todas las clases del paquete java.lang, que incluye clases fundamentales como String, Math, Integer, etc.
// Este paquete se importa automáticamente, por lo que esta línea es redundante.
import java.lang.*;

// Importa todas las clases del paquete java.io, que permite operaciones de entrada/salida como leer archivos, escribir en consola, etc.
// Aunque no se usa en este código, podría ser útil en otros contextos.
import java.io.*;

// Define una clase pública llamada Main. En Java, toda aplicación comienza desde una clase.
class Main {

    // Método principal que se ejecuta al iniciar el programa.
    // 'String[] args' permite recibir argumentos desde la línea de comandos.
    public static void main(String[] args) {

        // Se declaran e inicializan tres variables enteras: a, b y c con los valores 1, 2 y 3 respectivamente.
        int a = 1, b = 2, c = 3;

        // Se crea un arreglo de enteros llamado 'arr' que contiene los valores de las variables a, b y c.
        // El arreglo tendrá los elementos: [1, 2, 3]
        int[] arr = { a, b, c };
    }
}
