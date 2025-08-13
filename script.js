// Variables globales
let celsiusInput = document.getElementById('celsiusInput');
let errorMessage = document.getElementById('errorMessage');
let results = document.getElementById('results');
let fahrenheitResult = document.getElementById('fahrenheitResult');
let kelvinResult = document.getElementById('kelvinResult');

//! Función principal para convertir temperatura
function convertTemperature() {
    // Obtener el valor del input
    let inputValue = celsiusInput.value.trim();

    // Limpiar mensajes anteriores
    hideError();
    hideResults();

    // Validar que no esté vacío
    if (inputValue === '') {
        showError('Por favor, ingresa una temperatura.');
        return;
    }

    // Convertir a número
    let celsiusTemp = parseFloat(inputValue);

    // Validar que sea un número válido
    if (isNaN(celsiusTemp)) {
        showError('Error: Debes ingresar un número válido. Ejemplo: 25 o 25.5');
        return;
    }

    // Realizar las conversiones
    let fahrenheitTemp = celsiusToFahrenheit(celsiusTemp);
    let kelvinTemp = celsiusToKelvin(celsiusTemp);

    // Mostrar resultados en el DOM
    displayResults(celsiusTemp, fahrenheitTemp, kelvinTemp);

    // Mostrar resultados en consola
    logResultsToConsole(celsiusTemp, fahrenheitTemp, kelvinTemp);
}

//! Función para convertir Celsius a Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

//! Función para convertir Celsius a Kelvin
function celsiusToKelvin(celsius) {
    return celsius + 273.15;
}

//! Función para mostrar resultados en el DOM
function displayResults(celsius, fahrenheit, kelvin) {
    fahrenheitResult.innerHTML = `
                <span class="temp-value">${celsius}°C</span> = 
                <span class="temp-value">${fahrenheit.toFixed(2)}°F</span>
            `;

    kelvinResult.innerHTML = `
                <span class="temp-value">${celsius}°C</span> = 
                <span class="temp-value">${kelvin.toFixed(2)}K</span>
            `;

    results.classList.add('show');
}

//! Función para mostrar resultados en consola
function logResultsToConsole(celsius, fahrenheit, kelvin) {
    console.log('=== RESULTADOS DE CONVERSIÓN ===');
    console.log(`Temperatura original: ${celsius}°C`);
    console.log(`Conversión a Fahrenheit: ${fahrenheit.toFixed(2)}°F`);
    console.log(`Conversión a Kelvin: ${kelvin.toFixed(2)}K`);
    console.log('================================');
}

//! Función para mostrar mensaje de error
function showError(message) {
    errorMessage.textContent = message;
    errorMessage.classList.add('show');
}

//! Función para ocultar mensaje de error
function hideError() {
    errorMessage.classList.remove('show');
}

//! Función para ocultar resultados
function hideResults() {
    results.classList.remove('show');
}

//! Permitir conversión con Enter
celsiusInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        convertTemperature();
    }
});

//! Limpiar error cuando el usuario empiece a escribir
celsiusInput.addEventListener('input', function () {
    if (errorMessage.classList.contains('show')) {
        hideError();
    }
});

//! Mensaje en la consola
console.log('🌡️ Conversor de Temperatura');
console.log('Ingresa una temperatura en Celsius !!!');