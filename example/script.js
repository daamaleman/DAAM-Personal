const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const message = document.getElementById('message');

yesButton.addEventListener('click', function() {
    message.textContent = 'Sabía que dirías que sí';
});

noButton.addEventListener('click', function() {
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();
    const buttonRect = noButton.getBoundingClientRect();
    
    const randomX = Math.random() * (containerRect.width - buttonRect.width);
    const randomY = Math.random() * (containerRect.height - buttonRect.height);

    noButton.style.position = 'absolute';
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
});