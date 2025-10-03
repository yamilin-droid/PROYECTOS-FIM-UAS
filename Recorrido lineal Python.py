# Se declara e inicializa una lista de edades.
edad = [23, 25, 36, 24, 37, 43, 38]

# Se recorre la lista e imprime cada índice junto con su valor.
for i in range(len(edad)):
    print(f"Indice: {i} | Edad: {edad[i]}")

# Se añade una nueva edad (22) al final de la lista.
edad.append(22)
print(f"Edad después de añadirle 22: {edad}")

# Se reemplaza el primer valor (23) por 19.
edad[0] = 19
print(f"Edad después de remplazar 23 por 19: {edad}")

# Función que realiza una búsqueda lineal en la lista.
def busqueda_lineal(edad, buscado):
    # Recorre la lista buscando el valor especificado.
    for i in range(len(edad)):
        if edad[i] == buscado:
            return i  # Retorna el índice si se encuentra el valor.
    return -1  # Retorna -1 si el valor no se encuentra.

# Solicita al usuario un número para buscar en la lista.
buscado = int(input("Ingresa el número a buscar: "))

# Se llama a la función de búsqueda lineal.
posi = busqueda_lineal(edad, buscado)

# Se imprime el resultado de la búsqueda.
if posi != -1:
    print(f"La edad {buscado} se encuentra en el índice: {posi}")
else:
    print(f"La edad {buscado} no se encuentra")
