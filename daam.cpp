#include <iostream>

using namespace std;

int main()
{
    int op;
    cout << "Sumar" << endl;
    if (op == 1)
    {
        arreglarNumero();
    }
    
}

void arreglarNumero()
{
    int num1;
    int num2;
    int result;
    cout << "Ingrese el primer numero: ";
    cin >> num1;
    cout << "Ingrese el segundo numero: ";
    cin >> num2;
    result = num1 + num2;
    cout << "El resultado es: " << result << endl;
    
}