edades = [
    [22,45,36],
    [28,19,31],
    [23,43,38]
]

filas = len(edades)
columnas = len(edades)

for j in range(columnas):
    for i in range(filas):
        print(edades[i][j], end=" ")

    print()
