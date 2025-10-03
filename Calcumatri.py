# Programa para realizar operaciones aritméticas entre dos matrices bidimensionales

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

# Se define una función para realizar la operación seleccionada
def operar_matrices(matriz1, matriz2, operacion):
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
            # Realiza la operación seleccionada
            if operacion == "suma":
                valor = matriz1[i][j] + matriz2[i][j]
            elif operacion == "resta":
                valor = matriz1[i][j] - matriz2[i][j]
            elif operacion == "multiplicacion":
                valor = matriz1[i][j] * matriz2[i][j]
            elif operacion == "division":
                # Evita la división por cero
                if matriz2[i][j] != 0:
                    valor = matriz1[i][j] / matriz2[i][j]
                else:
                    valor = "Indefinido"
            else:
                valor = None
            # Agrega el valor calculado a la fila resultado
            fila.append(valor)
        # Agrega la fila resultado a la matriz resultado
        resultado.append(fila)
    # Retorna la matriz resultado
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

# Pide al usuario el tipo de operación
print("Operaciones disponibles: suma, resta, multiplicacion, division")
operacion = input("Ingrese el tipo de operación que desea realizar: ").lower()

# Realiza la operación seleccionada
resultado = operar_matrices(matriz1, matriz2, operacion)

# Imprime el resultado
print(f"El resultado de la {operacion} es:")
imprimir_matriz(resultado)