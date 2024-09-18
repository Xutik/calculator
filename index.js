console.log('test')

let firstNumber
let secondNumber
let operation

document.getNumber('display').addEventListener()
function getNumber() {
    const numberInput = document.getElementById('display');
    const number = Number(numberInput.value);
    
  }


document.getElementById('display').addEventListener()
const display = document.getElementById('display');
function updateDisplay(value) {
    document.getElementById('display').value = value;
  }

document.getElementById('delete').addEventListener('click', deleteLastChar);
function deleteLastChar() {
    let display = document.getElementById('display'); 
    let currentValue = display.value;
    
    if (currentValue.length > 0) {
    display.value = currentValue.slice(0, -1);
    }
  }

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
  button.addEventListener('click', function() {
    const value = this.textContent;
    display.value += value;
  });
});

