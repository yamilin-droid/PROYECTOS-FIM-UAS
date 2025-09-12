#creando un tipo de dato abstracto(persona)
class persona:
    def __init__(self,nombre,edad):
        self.nombre = nombre
        self.edad = edad
    #metodo para mostrar la informacion           
    def mostrar(self):
        print(f"Nombre: {self.nombre} Edad: {self.edad}")
#creando un arreglo para el dato abstracto
personas = [
    persona("Ana", 20),
    persona("Luis", 21),
    persona("Clara", 33),
    persona("Dana", 26),
    persona("Pablo", 24),
    persona("Diego", 37)
]
#mostrando los datos del arreglo con un ciclo for each
for p in personas:
    p.mostrar()
    