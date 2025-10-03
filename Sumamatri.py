# Programa para sumar dos matrices bidimensionales

# Se define una función para leer una matriz del usuario
def leer_matriz(filas, columnas):
    # Crea una matriz vacía
    matriz = []
    # Recorre cada fila
    for i in range(filas):
        # Crea una fila vacía
        fila = []
        # Recorre cada columna
        for j in range(columnas):
            # Pide al usuario el valor de la celda [i][j]
            valor = float(input(f"Ingrese el valor para la posición [{i}][{j}]: "))
            # Agrega el valor a la fila
            fila.append(valor)
        # Agrega la fila a la matriz
        matriz.append(fila)
    # Retorna la matriz completa
    return matriz

# Se define una función para sumar dos matrices
def sumar_matrices(matriz1, matriz2):
    # Obtiene el número de filas
    filas = len(matriz1)
    # Obtiene el número de columnas
    columnas = len(matriz1[0])
    # Crea una matriz resultado vacía
    resultado = []
    # Recorre cada fila
    for i in range(filas):
        # Crea una fila vacía para el resultado
        fila = []
        # Recorre cada columna
        for j in range(columnas):
            # Suma los valores correspondientes de ambas matrices
            suma = matriz1[i][j] + matriz2[i][j]
            # Agrega la suma a la fila resultado
            fila.append(suma)
        # Agrega la fila resultado a la matriz resultado
        resultado.append(fila)
    # Retorna la matriz suma
    return resultado

# Se define una función para imprimir una matriz
def imprimir_matriz(matriz):
    # Recorre cada fila de la matriz
    for fila in matriz:
        # Imprime la fila
        print(fila)

# Pide al usuario el número de filas
filas = int(input("Ingrese el número de filas: "))
# Pide al usuario el número de columnas
columnas = int(input("Ingrese el número de columnas: "))

# Lee la primera matriz del usuario
print("Ingrese los valores de la primera matriz:")
matriz1 = leer_matriz(filas, columnas)

# Lee la segunda matriz del usuario
print("Ingrese los valores de la segunda matriz:")
matriz2 = leer_matriz(filas, columnas)

# Suma las dos matrices
resultado = sumar_matrices(matriz1, matriz2)

# Imprime el resultado
print("La suma de las dos matrices es:")
imprimir_matriz(resultado)