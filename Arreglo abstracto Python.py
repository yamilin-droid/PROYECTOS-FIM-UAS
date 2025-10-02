# Se define una clase llamada 'persona' que representa a una persona con nombre y edad
class persona:
    
    # Método constructor que se ejecuta al crear una nueva instancia de la clase
    # Recibe dos parámetros: 'nombre' y 'edad'
    def __init__(self, nombre, edad):
        # Se asigna el valor del parámetro 'nombre' al atributo 'nombre' del objeto
        self.nombre = nombre
        # Se asigna el valor del parámetro 'edad' al atributo 'edad' del objeto
        self.edad = edad         

    # Método llamado 'mostrar' que imprime el nombre y la edad de la persona
    def mostrar(self):
        # Se utiliza una f-string para mostrar los valores de 'nombre' y 'edad' en formato legible
        print(f"Nombre: {self.nombre} Edad: {self.edad}")

# Se crea una lista llamada 'personas' que contiene varias instancias de la clase 'persona'
# Cada elemento representa una persona con su respectivo nombre y edad
personas = [
    persona("Ramon", 20),
    persona("Yamill", 21),
    persona("Cesar", 33),
    persona("Dana", 26),
    persona("Pablo", 24),
    persona("Paco", 37)
]

# Se recorre la lista 'personas' utilizando un ciclo for
for p in personas:
    # En cada iteración se llama al método 'mostrar' del objeto actual
    # Esto imprime el nombre y la edad de cada persona en la lista
    p.mostrar()
    

