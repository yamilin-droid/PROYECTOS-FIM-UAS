//creando un tipo de dato abstracto(persona)
class persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  //metodo para mostrar la informacion
  mostrar() {
    console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}`);
  }
}
//declarando un arreglo 
let personas = [
    new persona("Ana", 20),
    new persona("Luis", 25),
    new persona("Clara", 30),
    new persona("Pablo", 24),
    new persona("Victor", 32),
    new persona("Maria", 37)
] 
//mostrando los elementos del arreglo for of
console.log("Alumnos: ")
for(let p of personas){
    p.mostrar();
}