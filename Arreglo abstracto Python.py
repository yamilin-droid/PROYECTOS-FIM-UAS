class persona:
    def __init__(self,nombre,edad):
        self.nombre = nombre
        self.edad = edad         
    def mostrar(self):
        print(f"Nombre: {self.nombre} Edad: {self.edad}")

personas = [
    persona("Ramon", 20),
    persona("Yamill", 21),
    persona("Cesar", 33),
    persona("Dana", 26),
    persona("Pablo", 24),
    persona("Paco", 37)
]

for p in personas:
    p.mostrar()

    
