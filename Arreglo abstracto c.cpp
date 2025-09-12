#include <iostream>
#include <string>
using namespace std;
class persona{
    string nombre;
    int edad;
    public:
    persona(string n, int e){
        nombre = n;
        edad = e;
    } 
    void mostrar(){
        cout << "Nombre: " << nombre << " Edad: " << edad << endl;
    }
};
int Dato_abstracto(){
    persona personas[6] = {
        persona("Ana", 20),
        persona("Luis", 25),
        persona("Clara", 30),
        persona("Pablo", 24),
        persona("Victor", 32),
        persona("Maria", 37)
    };

    for (int i = 0; i < 6; i++){
    personas[i].mostrar();

    }
    return 0;

}
