
class persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  mostrar() {
    console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}`);
  }
}

let personas = [
    new persona("Ramon", 20),
    new persona("Yamill", 25),
    new persona("Cesar", 30),
    new persona("Patricio", 24),
    new persona("Miguel", 32),
    new persona("Paco", 37)
] 
console.log("Alumnos: ")
for(let p of personas){
    p.mostrar();

}
