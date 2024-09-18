console.log('test')

let firstNumber
let operation

function getNumber(x) {
    const numberInput = document.getElementById('display')

    if(x ==='.' && numberInput.value.includes('.')) {
        return
    }
    if(x ==='.' && numberInput.value ==='') {
        return numberInput.value = '0.'
    }

    if(numberInput.value.length > 9) {
        return
    }

    numberInput.value += x
}
function deleteAll() {
    let display = document.getElementById('display'); 
    display.value = '';
    firstNumber = '';
    operation = '';
}

function division() {
    let display = document.getElementById('display'); 
    firstNumber = display.value
    operation = '/'
    display.value = '';
}

function multiplication() {
    let display = document.getElementById('display'); 
    firstNumber = display.value
    operation = '*'
    display.value = '';
}

function substraction() {
    let display = document.getElementById('display'); 
    firstNumber = display.value
    operation = '-'
    display.value = '';
}

function sum() {
    let display = document.getElementById('display'); 
    firstNumber = display.value
    operation = '+'
    display.value = '';
}

function result() {
    let display = document.getElementById('display'); 
    let second = display.value
    if(operation === '/'){
        display.value = Number(firstNumber)/Number(second)
    }
    if(operation === '*'){
        display.value = Number(firstNumber)*Number(second)
    }
    if(operation === '-'){
        display.value = Number(firstNumber)-Number(second)
    }
    if(operation === '+'){
        display.value = Number(firstNumber)+Number(second)
    }
    firstNumber = display.value
    operation = ''
}

