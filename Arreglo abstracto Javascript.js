// Se define una clase llamada 'persona' que representa a una persona con nombre y edad
class persona {
  
  // El constructor se ejecuta al crear una nueva instancia de la clase
  // Recibe dos parámetros: 'nombre' y 'edad'
  constructor(nombre, edad) {
    // Se asigna el valor del parámetro 'nombre' a la propiedad 'nombre' del objeto
    this.nombre = nombre;
    // Se asigna el valor del parámetro 'edad' a la propiedad 'edad' del objeto
    this.edad = edad;
  }

  // Método llamado 'mostrar' que imprime en consola el nombre y la edad de la persona
  mostrar() {
    // Se utiliza interpolación de cadenas para mostrar los valores de 'nombre' y 'edad'
    console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}`);
  }
}

// Se crea un arreglo llamado 'personas' que contiene múltiples instancias de la clase 'persona'
// Cada elemento representa un alumno con su respectivo nombre y edad
let personas = [
    new persona("Ramon", 20),
    new persona("Yamill", 25),
    new persona("Cesar", 30),
    new persona("Patricio", 24),
    new persona("Miguel", 32),
    new persona("Paco", 37)
]

// Se imprime en consola el encabezado "Alumnos:"
console.log("Alumnos: ")

// Se recorre el arreglo 'personas' utilizando un ciclo for...of
for (let p of personas) {
    // En cada iteración se llama al método 'mostrar' del objeto actual
    // Esto imprime el nombre y la edad de cada alumno
    p.mostrar();
}
