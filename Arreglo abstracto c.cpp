// Se incluyen las librerías necesarias para entrada/salida estándar y manejo de cadenas
#include <iostream>
#include <string>

// Se utiliza el espacio de nombres estándar para evitar escribir 'std::' repetidamente
using namespace std;

// Se define una clase llamada 'persona' que representa a una persona con nombre y edad
class persona {
    // Atributos privados de la clase: nombre (cadena) y edad (entero)
    string nombre;
    int edad;

public:
    // Constructor de la clase que recibe dos parámetros: un string 'n' y un int 'e'
    // Inicializa los atributos 'nombre' y 'edad' con los valores proporcionados
    persona(string n, int e) {
        nombre = n;
        edad = e;
    }

    // Método público que muestra el nombre y la edad de la persona en consola
    void mostrar() {
        cout << "Nombre: " << nombre << " Edad: " << edad << endl;
    }
};

// Función llamada 'Dato_abstracto' que actúa como punto de entrada del programa
int Dato_abstracto() {
    // Se declara un arreglo de 6 objetos de tipo 'persona' con sus respectivos nombres y edades
    persona personas[6] = {
        persona("Ana", 20),
        persona("Luis", 25),
        persona("Clara", 30),
        persona("Pablo", 24),
        persona("Victor", 32),
        persona("Maria", 37)
    };

    // Se recorre el arreglo utilizando un ciclo for
    for (int i = 0; i < 6; i++) {
        // En cada iteración se llama al método 'mostrar' del objeto actual
        // Esto imprime el nombre y la edad de cada persona en consola
        personas[i].mostrar();
    }

    // Se retorna 0 para indicar que el programa finalizó correctamente
    return 0;
}
