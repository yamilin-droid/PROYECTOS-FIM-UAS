// Se define una clase llamada 'Persona' que representa a una persona con nombre y edad
class Persona {

    // Se declara un atributo privado y final (constante) llamado 'nombre' de tipo String
    private final String nombre;

    // Se declara un atributo privado y final llamado 'edad' de tipo entero
    private final int edad;

    // Constructor de la clase 'Persona' que recibe dos parámetros: nombre y edad
    public Persona(String nombre, int edad) {
        // Se asigna el valor del parámetro 'nombre' al atributo 'nombre' del objeto
        this.nombre = nombre;

        // Se asigna el valor del parámetro 'edad' al atributo 'edad' del objeto
        this.edad = edad;
    }

    // Método público llamado 'mostrar' que imprime el nombre y la edad de la persona
    public void mostrar() {
        // Se utiliza System.out.println para mostrar los datos en consola
        System.out.println("Nombre: " + nombre + " Edad: " + edad);
    }
}

// Clase principal del programa llamada 'Dato_abstracto'
public class Dato_abstracto {

    // Método principal 'main' que se ejecuta al iniciar el programa
    public static void main(String[] args) {

        // Se declara un arreglo de tipo 'Persona' con capacidad para 6 elementos
        Persona[] personas = new Persona[6];

        // Se inicializa cada posición del arreglo con una instancia de la clase 'Persona'
        personas[0] = new Persona("Analí", 20);
        personas[1] = new Persona("Ramon", 36);
        personas[2] = new Persona("Mike", 23);
        personas[3] = new Persona("Yamill", 24);
        personas[4] = new Persona("Paco", 32);
        personas[5] = new Persona("Maria la que no quería", 37);

        // Se recorre el arreglo 'personas' utilizando un ciclo for-each
        for (Persona p : personas) {
            // En cada iteración se llama al método 'mostrar' del objeto actual
            // Esto imprime el nombre y la edad de cada persona en consola
            p.mostrar();
        }
    }
}


