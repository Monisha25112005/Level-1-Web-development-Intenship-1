function convertTemp() {
  const input = parseFloat(document.getElementById("tempInput").value);
  const selectedUnit = document.querySelector('input[name="unit"]:checked').value;
  const resultDiv = document.getElementById("resultDisplay");

  if (isNaN(input)) {
    resultDiv.textContent = "Please enter a valid temperature.";
    return;
  }

  let celsius, fahrenheit, kelvin;

  if (selectedUnit === "celsius") {
    celsius = input;
    fahrenheit = (input * 9/5) + 32;
    kelvin = input + 273.15;
  } else if (selectedUnit === "fahrenheit") {
    celsius = (input - 32) * 5/9;
    fahrenheit = input;
    kelvin = celsius + 273.15;
  } else if (selectedUnit === "kelvin") {
    kelvin = input;
    celsius = input - 273.15;
    fahrenheit = (celsius * 9/5) + 32;
  }

  resultDiv.innerHTML = `
    <strong>Converted Values:</strong><br>
    Celsius: ${celsius.toFixed(2)} °C<br>
    Fahrenheit: ${fahrenheit.toFixed(2)} °F<br>
    Kelvin: ${kelvin.toFixed(2)} K
  `;
}
