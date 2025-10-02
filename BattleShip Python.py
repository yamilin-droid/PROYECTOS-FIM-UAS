import random

# Definición de barcos: (nombre, tamaño, cantidad)
barcos = [
    ("Portaviones", 5, 1),
    ("Acorazado", 4, 2),
    ("Crucero", 3, 1),
    ("Submarino", 3, 2),
    ("Destructor", 2, 2)
]

# Símbolos para barcos y fichas
FICHA_AGUA = "⚪"
FICHA_TOCADO = "🔴"
FICHA_BARCO_J1 = "🟩"  # Barco jugador 1 (verde)
FICHA_BARCO_J2 = "🔵"  # Barco jugador 2 (azul)

def crear_tablero():
    return [[FICHA_AGUA for _ in range(10)] for _ in range(10)]

def colocar_barco(tablero, tamaño, simbolo):
    colocado = False
    while not colocado:
        orientacion = random.choice(["H", "V"])
        if orientacion == "H":
            fila = random.randint(0, 9)
            col = random.randint(0, 10 - tamaño)
            if all(tablero[fila][col + i] == FICHA_AGUA for i in range(tamaño)):
                for i in range(tamaño):
                    tablero[fila][col + i] = simbolo
                colocado = True
        else:
            fila = random.randint(0, 10 - tamaño)
            col = random.randint(0, 9)
            if all(tablero[fila + i][col] == FICHA_AGUA for i in range(tamaño)):
                for i in range(tamaño):
                    tablero[fila + i][col] = simbolo
                colocado = True

def imprimir_tablero(tablero):
    print("  " + " ".join(str(i) for i in range(10)))
    for idx, fila in enumerate(tablero):
        print(str(idx) + " " + " ".join(fila))

def preparar_tablero_jugador(simbolo_barco):
    tablero = crear_tablero()
    for nombre, tamaño, cantidad in barcos:
        for _ in range(cantidad):
            colocar_barco(tablero, tamaño, simbolo_barco)
    return tablero

def jugar_turno(tablero_mostrar, tablero_oculto, jugador):
    while True:
        imprimir_tablero(tablero_mostrar)
        print(f"Turno del Jugador {jugador}")
        try:
            fila = int(input("Adivina la fila (0-9): "))
            columna = int(input("Adivina la columna (0-9): "))
        except ValueError:
            print("Por favor ingresa números válidos.")
            continue

        if fila < 0 or fila > 9 or columna < 0 or columna > 9:
            print("¡Fuera del tablero!")
            continue

        if tablero_mostrar[fila][columna] != FICHA_AGUA:
            print("Ya intentaste esa posición.")
            continue

        if tablero_oculto[fila][columna] in [FICHA_BARCO_J1, FICHA_BARCO_J2]:
            print("¡Tocado!")
            tablero_mostrar[fila][columna] = FICHA_TOCADO
            tablero_oculto[fila][columna] = FICHA_TOCADO
            return True
        else:
            print("¡Agua!")
            tablero_mostrar[fila][columna] = FICHA_AGUA
            return False

def contar_barcos(tablero, simbolo_barco):
    return sum(fila.count(simbolo_barco) for fila in tablero)

# Preparar tableros para ambos jugadores
tablero_j1 = preparar_tablero_jugador(FICHA_BARCO_J1)
tablero_j2 = preparar_tablero_jugador(FICHA_BARCO_J2)
tablero_mostrar_j1 = crear_tablero()
tablero_mostrar_j2 = crear_tablero()

print("¡Bienvenido a Batalla Naval!")
print("Barcos del Jugador 1: 🟩 (verde)")
print("Barcos del Jugador 2: 🔵 (azul)")
print("Aciertos: 🔴  Agua: ⚪")

turno = 1
while True:
    if turno == 1:
        barcos_restantes = contar_barcos(tablero_j2, FICHA_BARCO_J2)
        if barcos_restantes == 0:
            print("¡Felicidades Jugador 1! Hundiste todos los barcos azules.")
            break
        print("\n--- Jugador 1 ataca ---")
        jugar_turno(tablero_mostrar_j1, tablero_j2, 1)
        turno = 2
    else:
        barcos_restantes = contar_barcos(tablero_j1, FICHA_BARCO_J1)
        if barcos_restantes == 0:
            print("¡Felicidades Jugador 2! Hundiste todos los barcos verdes.")
            break
        print("\n--- Jugador 2 ataca ---")
        jugar_turno(tablero_mostrar_j2, tablero_j1, 2)
        turno = 1
