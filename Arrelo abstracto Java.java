class Persona { 
    private final String nombre;
    private final int edad;

    public Persona(String nombre, int edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
   
    public void mostrar() {
        System.out.println("Nombre: " + nombre + " Edad: " + edad);
    }
}

public class Dato_abstracto {
    public static void main(String[] args) {
        
        Persona[] personas = new Persona[6];
       
        personas[0] = new Persona("Analí", 20);
        personas[1] = new Persona("Ramon", 36);
        personas[2] = new Persona("Mike", 23);
        personas[3] = new Persona("Yamill", 24);
        personas[4] = new Persona("Paco", 32);
        personas[5] = new Persona("Maria la que no quería", 37);
        
        for (Persona p: personas) {
            p.mostrar();
        }
    }
}


