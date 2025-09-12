edad = [23,25,36,24,37,43,38]

for i in range(len(edad)):
    print(f"Indice: {i} |Edad: {edad[i]}")

edades.append(22)
print(f"Edad despues de añadirle 22: {edad}")

edades[0] = 19
print(f"Edad despues de remplazar 23 por 19: {edad}")

def busqueda_lineal(edad, buscado):
    for i in range(len(edad)):
        if edad[i] == buscado:
            return i
    return -1
buscado = int(input("Ingresa el numero a buscar: "))

posi = busqueda_lineal(edad, buscado)
if posi != -1:
    print(f"La edad {buscado} se encuentra en el indice: {posi}")
else:

    print(f"La edad {buscado} no se encuentra")
