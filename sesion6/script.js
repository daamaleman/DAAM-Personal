document.addEventListener('DOMContentLoaded', () => {
    const formp = document.getElementById('productFrm');
    const registerTable = document.getElementById('productTable');
    formp.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('productName').value;
        const price = document.getElementById('productPrice').value;
        const stock = document.getElementById('productStock').value;
        const min = document.getElementById('productMin').value;
        const row = document.createElement('tr');
        const colortxt = (stock >= min)?'text-success': 'text-danger';
        row.innerHTML = `
        <td>${name}</td>
        <td class= "text-end">${price}</td>`
        row.innerHTML += `
        <td class= "${colortxt} text-end">${stock}</td>
        <td class= "text-end">${min}</td>`
        registerTable.appendChild(row);
        formp.reset();
    });
});