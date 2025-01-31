// Seleccionar elementos del DOM
const randomNumberElement = document.getElementById('randomNumber');
const generateButton = document.getElementById('generateButton');

// Función para generar un número aleatorio entre 1 y 100
function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    randomNumberElement.textContent = randomNumber;
}

// Asignar la función al evento click del botón
generateButton.addEventListener('click', generateRandomNumber);
