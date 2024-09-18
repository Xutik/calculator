console.log('test')

let firstNumber
let secondNumber
let operation

// document.getNumber('display').addEventListener()
function getNumber(x) {
    // const numberInput = document.getElementById('display');
    // const number = Number(numberInput.value);
    const numberInput = document.getElementById('display')

    if(x ==='.' && numberInput.value.includes('.')) {
        return
    }
    if(x ==='.' && numberInput.value ==='') {
        return numberInput.value = '0.'
    }
    numberInput.value += x
    // numberInput.value = Number(x)
}


// document.getElementById('display').addEventListener()
// const display = document.getElementById('display');
// function updateDisplay(value) {
//     document.getElementById('display').value = value;
//   }

// document.getElementById('delete').addEventListener('click', deleteLastChar);
function deleteAll() {
    let display = document.getElementById('display'); 
    display.value = '';
  }

