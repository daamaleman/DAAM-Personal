// Demostrar si el numero es par o impar

function esPar(numero){
    return numero % 2 == 0;
}

document.addEventListener('DOMContentLoaded', () => {
    const dem = document.getElementById('demostrar');
    dem.addEventListener('submit', (event) => {
        event.preventDefault();
        const numero = document.getElementById('num').value;
        const result = esPar(numero);
        if(result){
            alert("El numero es par");
        }else{
            alert("El numero es impar");
        }
    });
});