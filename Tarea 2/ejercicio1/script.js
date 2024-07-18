//Celsius a farenheith

function convertirCelsiusAFarenheit(celsius){
    return celsius * 9/5 + 32;
}

document.addEventListener('DOMContentLoaded', () => {
    const conv = document.getElementById('convertir');
    conv.addEventListener('submit', (event) => {
        event.preventDefault();
        const celsius = document.getElementById('temp').value;
        const result = convertirCelsiusAFarenheit(celsius);
        alert("La conversion a fahrenheit es: " + result);
    });
});
