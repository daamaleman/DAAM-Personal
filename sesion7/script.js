function multiplicar(num1, num2) {
    return num1 * num2;
}

document.addEventListener('DOMContentLoaded', () => {
    const frm = document.getElementById('formulario');
    frm.addEventListener('submit', (event) => {
        event.preventDefault();
        const number1 = document.getElementById('number1').value;
        const number2 = document.getElementById('number2').value;
        const result = multiplicar(number1, number2);
        alert(result);
    });
});