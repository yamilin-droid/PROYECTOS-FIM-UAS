barcos = [
    ("Portaviones", 5, 1, "🟨"),  
    ("Acorazado", 4, 2, "🟪"),     
    ("Crucero", 3, 1, "🟧"),       
    ("Submarino", 3, 2, "⬛"),     
    ("Destructor", 2, 2, "🟫")     
]

FICHA_AGUA = "⚪"
FICHA_TOCADO = "💥"

def crear_tablero():
    return [[FICHA_AGUA for _ in range(15)] for _ in range(15)]

def imprimir_tablero(tablero):
    print("   " + " ".join(f"{i:2}" for i in range(15)))
    for idx, fila in enumerate(tablero):
        print(f"{idx:2} " + " ".join(fila))

def colocar_barco(tablero, nombre, tamaño, simbolo):
    colocado = False
    while not colocado:
        imprimir_tablero(tablero)
        print(f"\nColocando {nombre} de {tamaño} casillas ({simbolo})")
        try:
            fila = int(input("Fila inicial (0-14): "))
            col = int(input("Columna inicial (0-14): "))
            orientacion = input("Orientación (H=horizontal, V=vertical): ").upper()
        except ValueError:
            print("Entrada inválida, intenta de nuevo.")
            continue

        if orientacion == "H":
            if col + tamaño > 15:
                print("No cabe horizontalmente.")
                continue
            if any(tablero[fila][col+i] != FICHA_AGUA for i in range(tamaño)):
                print("Espacio ocupado.")
                continue
            for i in range(tamaño):
                tablero[fila][col+i] = simbolo
            colocado = True

        elif orientacion == "V":
            if fila + tamaño > 15:
                print("No cabe verticalmente.")
                continue
            if any(tablero[fila+i][col] != FICHA_AGUA for i in range(tamaño)):
                print("Espacio ocupado.")
                continue
            for i in range(tamaño):
                tablero[fila+i][col] = simbolo
            colocado = True
        else:
            print("Orientación inválida.")

def preparar_tablero_jugador():
    tablero = crear_tablero()
    for nombre, tamaño, cantidad, simbolo in barcos:
        for _ in range(cantidad):
            colocar_barco(tablero, nombre, tamaño, simbolo)
    return tablero

def jugar_turno(tablero_mostrar, tablero_oculto, jugador):
    while True:
        imprimir_tablero(tablero_mostrar)
        print(f"\nTurno del Jugador {jugador}")
        try:
            fila = int(input("Adivina la fila (0-14): "))
            columna = int(input("Adivina la columna (0-14): "))
        except ValueError:
            print("Por favor ingresa números válidos.")
            continue

        if fila < 0 or fila > 14 or columna < 0 or columna > 14:
            print("¡Fuera del tablero!")
            continue

        if tablero_mostrar[fila][columna] != FICHA_AGUA:
            print("Ya intentaste esa posición.")
            continue

        if tablero_oculto[fila][columna] not in [FICHA_AGUA, FICHA_TOCADO]:
            print("¡Tocado!")
            tablero_mostrar[fila][columna] = FICHA_TOCADO
            tablero_oculto[fila][columna] = FICHA_TOCADO
            return True
        else:
            print("¡Agua!")
            tablero_mostrar[fila][columna] = "🌊"
            return False

def contar_barcos(tablero):
    return sum(celda not in [FICHA_AGUA, FICHA_TOCADO, "🌊"] for fila in tablero for celda in fila)

# Preparación de tableros para ambos jugadores
print("Jugador 1 coloca sus barcos:")
tablero_j1 = preparar_tablero_jugador()
print("\nJugador 2 coloca sus barcos:")
tablero_j2 = preparar_tablero_jugador()

tablero_mostrar_j1 = crear_tablero()
tablero_mostrar_j2 = crear_tablero()

print("\n¡Comienza la Batalla Naval!")
print("Símbolos de barcos: 🟨 🟪 🟧 ⬛ 🟫")
print("Aciertos: 💥  Agua: 🌊")

turno = 1
while True:
    if turno == 1:
        barcos_restantes = contar_barcos(tablero_j2)
        if barcos_restantes == 0:
            print("¡Felicidades Jugador 1! Hundiste toda la flota enemiga.")
            break
        print("\n--- Jugador 1 ataca ---")
        jugar_turno(tablero_mostrar_j1, tablero_j2, 1)
        turno = 2
    else:
        barcos_restantes = contar_barcos(tablero_j1)
        if barcos_restantes == 0:
            print("¡Felicidades Jugador 2! Hundiste toda la flota enemiga.")
            break
        print("\n--- Jugador 2 ataca ---")
        jugar_turno(tablero_mostrar_j2, tablero_j1, 2)
        turno = 1
