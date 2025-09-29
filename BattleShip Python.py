import random

barcos = [
    ("Portaviones", 5, 1),
    ("Acorazado", 4, 2),
    ("Crucero", 3, 1),
    ("Submarino", 3, 2),
    ("Destructor", 2, 2)
]

tablero = [["~"] * 10 for _ in range(10)]
tablero_oculto = [["~"] * 10 for _ in range(10)]

def colocar_barco(tablero, tamaño, simbolo):
    colocado = False
    while not colocado:
        orientacion = random.choice(["H", "V"])
        if orientacion == "H":
            fila = random.randint(0, 9)
            col = random.randint(0, 10 - tamaño)
            if all(tablero[fila][col + i] == "~" for i in range(tamaño)):
                for i in range(tamaño):
                    tablero[fila][col + i] = simbolo
                colocado = True
        else:
            fila = random.randint(0, 10 - tamaño)
            col = random.randint(0, 9)
            if all(tablero[fila + i][col] == "~" for i in range(tamaño)):
                for i in range(tamaño):
                    tablero[fila + i][col] = simbolo
                colocado = True

simbolos = ["P", "A", "C", "S", "D"]
simbolo_idx = 0
for nombre, tamaño, cantidad in barcos:
    for _ in range(quantity := cantidad):
        colocar_barco(tablero_oculto, tamaño, simbolos[simbolo_idx])
    simbolo_idx += 1

def imprimir_tablero(tablero):
    print("  " + " ".join(str(i) for i in range(10)))
    for idx, fila in enumerate(tablero):
        print(str(idx) + " " + " ".join(fila))

intentos = 0
max_intentos = 60
barcos_restantes = sum(tamaño * cantidad for _, tamaño, cantidad in barcos)

print("¡Bienvenido a Batalla Naval!")
print("Tienes 60 intentos para hundir todos los barcos.")
print("Leyenda: P=Portaviones, A=Acorazado, C=Crucero, S=Submarino, D=Destructor")

while intentos < max_intentos and barcos_restantes > 0:
    imprimir_tablero(tablero)
    try:
        fila = int(input("Adivina la fila (0-9): "))
        columna = int(input("Adivina la columna (0-9): "))
    except ValueError:
        print("Por favor ingresa números válidos.")
        continue

    if fila < 0 or fila > 9 or columna < 0 or columna > 9:
        print("¡Fuera del tablero!")
        continue

    intentos += 1

    if tablero[fila][columna] != "~":
        print("Ya intentaste esa posición.")
        continue

    if tablero_oculto[fila][columna] != "~":
        print(f"¡Tocado! ({tablero_oculto[fila][columna]})")
        tablero[fila][columna] = tablero_oculto[fila][columna]
        barcos_restantes -= 1
    else:
        print("¡Agua!")
        tablero[fila][columna] = "X"

if barcos_restantes == 0:
    print("¡Felicidades! Hundiste todos los barcos.")
else:
    print("¡Se acabaron los intentos!")
    print("Así estaba el tablero oculto:")
    imprimir_tablero(tablero_oculto)
    import random

barcos = [
    ("Portaviones", 5, 1),
    ("Acorazado", 4, 2),
    ("Crucero", 3, 1),
    ("Submarino", 3, 2),
    ("Destructor", 2, 2)
]

tablero = [["~"] * 10 for _ in range(10)]
tablero_oculto = [["~"] * 10 for _ in range(10)]

def colocar_barco(tablero, tamaño, simbolo):
    colocado = False
    while not colocado:
        orientacion = random.choice(["H", "V"])
        if orientacion == "H":
            fila = random.randint(0, 9)
            col = random.randint(0, 10 - tamaño)
            if all(tablero[fila][col + i] == "~" for i in range(tamaño)):
                for i in range(tamaño):
                    tablero[fila][col + i] = simbolo
                colocado = True
        else:
            fila = random.randint(0, 10 - tamaño)
            col = random.randint(0, 9)
            if all(tablero[fila + i][col] == "~" for i in range(tamaño)):
                for i in range(tamaño):
                    tablero[fila + i][col] = simbolo
                colocado = True

simbolos = ["P", "A", "C", "S", "D"]
simbolo_idx = 0
for nombre, tamaño, cantidad in barcos:
    for _ in range(quantity := cantidad):
        colocar_barco(tablero_oculto, tamaño, simbolos[simbolo_idx])
    simbolo_idx += 1

def imprimir_tablero(tablero):
    print("  " + " ".join(str(i) for i in range(10)))
    for idx, fila in enumerate(tablero):
        print(str(idx) + " " + " ".join(fila))

intentos = 0
max_intentos = 60
barcos_restantes = sum(tamaño * cantidad for _, tamaño, cantidad in barcos)

print("¡Bienvenido a Batalla Naval!")
print("Tienes 60 intentos para hundir todos los barcos.")
print("Leyenda: P=Portaviones, A=Acorazado, C=Crucero, S=Submarino, D=Destructor")

while intentos < max_intentos and barcos_restantes > 0:
    imprimir_tablero(tablero)
    try:
        fila = int(input("Adivina la fila (0-9): "))
        columna = int(input("Adivina la columna (0-9): "))
    except ValueError:
        print("Por favor ingresa números válidos.")
        continue

    if fila < 0 or fila > 9 or columna < 0 or columna > 9:
        print("¡Fuera del tablero!")
        continue

    intentos += 1

    if tablero[fila][columna] != "~":
        print("Ya intentaste esa posición.")
        continue

    if tablero_oculto[fila][columna] != "~":
        print(f"¡Tocado! ({tablero_oculto[fila][columna]})")
        tablero[fila][columna] = tablero_oculto[fila][columna]
        barcos_restantes -= 1
    else:
        print("¡Agua!")
        tablero[fila][columna] = "X"

if barcos_restantes == 0:
    print("¡Felicidades! Hundiste todos los barcos.")
else:
    print("¡Se acabaron los intentos!")
    print("Así estaba el tablero oculto:")
    imprimir_tablero(tablero_oculto)