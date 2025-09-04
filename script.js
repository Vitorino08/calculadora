const display = document.getElementById("display");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculateResult() {
  try {
    // Avalia a expressão digitada
    display.value = eval(display.value);
  } catch {
    display.value = "Erro";
  }
}
