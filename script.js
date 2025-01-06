let display = document.getElementById("display");
let scientificPanel = document.getElementById("scientific");

// Variable to hold the last entered value
let lastInput = "";

function appendValue(value) {
  lastInput = display.value;  // Save current display value before appending
  display.value += value;
}

function clearDisplay() {
  lastInput = "";  // Clear the stored input as well
  display.value = "";
}

function deleteLast() {
  lastInput = display.value;  // Save current display value before deleting
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    let expression = display.value;

    // Tangani faktorial (!)
    expression = expression.replace(/(\d+)!/g, (match, num) => {
      return factorial(parseInt(num));
    });

    // Evaluasi ekspresi
    display.value = eval(expression);
    lastInput = display.value;  // Save the result as the last input
  } catch {
    display.value = "Syntact Error";
  }
}

function toggleScientific() {
  scientificPanel.style.display =
    scientificPanel.style.display === "block" ? "none" : "block";
}

function factorial(n) {
  if (n < 0) return "Error";
  if (n === 0 || n === 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

function previewCalculation() {
  display.value = lastInput;  // Set the display to the last input value
}
