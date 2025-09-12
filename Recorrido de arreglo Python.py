#creando un arreglo (matriz)
edades = [
    [22,45,36],
    [28,19,31],
    [23,43,38]
]
#devolviendo el tamaño de las filas
filas = len(edades)
columnas = len(edades)
#recorriendo el arreglo por columnas con un ciclo anidado
for j in range(columnas):
    for i in range(filas):
        print(edades[i][j], end=" ")
    print()