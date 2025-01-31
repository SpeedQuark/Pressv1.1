// Seleccionar elementos del DOM
const randomNumberElement = document.getElementById('randomNumber');
const generateButton = document.getElementById('generateButton');
const minInput = document.getElementById('minInput');
const maxInput = document.getElementById('maxInput');
const historyList = document.getElementById('historyList');

// Array para almacenar el historial
const history = [];

// Función para generar un número aleatorio
function generateRandomNumber() {
    const min = parseInt(minInput.value);
    const max = parseInt(maxInput.value);
    
    // Validar que el mínimo sea menor que el máximo
    if (min >= max) {
        alert("El valor mínimo debe ser menor que el máximo.");
        return;
    }

    // Generar el número aleatorio
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    randomNumberElement.textContent = randomNumber;

    // Agregar el número al historial
    history.push(randomNumber);
    updateHistory();
}

// Función para actualizar el historial
function updateHistory() {
    historyList.innerHTML = history.map(num => `<li>${num}</li>`).join('');
}

// Asignar la función al evento click del botón
generateButton.addEventListener('click', generateRandomNumber);
