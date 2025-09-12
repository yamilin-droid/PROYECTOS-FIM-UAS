#include <iostream>
#include <string>
using namespace std;
//creando un tipo de dato abstracto(persona)
class persona{
    string nombre;
    int edad;
    public:
    persona(string n, int e){
        nombre = n;
        edad = e;
    }
    //metodo para mostrar la informacion 
    void mostrar(){
        cout << "Nombre: " << nombre << " Edad: " << edad << endl;
    }
};
int Dato_abstracto(){
    //creando un arreglo
    persona personas[6] = {
        persona("Ana", 20),
        persona("Luis", 25),
        persona("Clara", 30),
        persona("Pablo", 24),
        persona("Victor", 32),
        persona("Maria", 37)
    };
    //mostrando el arreglo con ciclo for
    for (int i = 0; i < 6; i++){
    personas[i].mostrar();

    }
    return 0;
}