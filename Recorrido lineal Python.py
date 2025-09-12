#creando un arreglo
edades = [23,25,36,24,37,43,38]

for i in range(len(edades)):
    print(f"Indice: {i} |Edades: {edades[i]}")
#añadiendo un elemento sin remplazarlo
edades.append(22)
print(f"Edades despues de añadirle 22: {edades}")
#añadiendo un elemento remplazandolo
edades[0] = 19
print(f"Edades despues de remplazar 23 por 19: {edades}")
#funcion para realizar una busqueda lineal
def busqueda_lineal(edades, buscado):
    for i in range(len(edades)):
        if edades[i] == buscado:
            return i
    return -1
#pidiendo el numero por buscar
buscado = int(input("Ingresa el numero a buscar: "))
#buscando con la funcion de busqueda lineal
posi = busqueda_lineal(edades, buscado)
if posi != -1:
    print(f"La edad {buscado} se encuentra en el indice: {posi}")
else:
    print(f"La edad {buscado} no se encuentra")