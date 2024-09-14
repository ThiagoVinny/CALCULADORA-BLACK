function displaynum(num) {
    document.Calculator.display.value += num;
}

function clearDisplay() {
    document.Calculator.display.value = "";
}

function calculate() {
    try {
        document.Calculator.display.value = eval(document.Calculator.display.value);
    } catch (err) {
        document.Calculator.display.value = "Error";
    }
}
