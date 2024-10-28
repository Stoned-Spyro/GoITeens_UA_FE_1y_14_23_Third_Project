//         querySelector
let resultOutput = document.querySelector('.calculator-result-calculator')
let firstNumberInput = document.querySelector('.calculator-input-number[data-action="number_1"]')
let secondNumberInput = document.querySelector('.calculator-input-number[data-action="number_2"]')
let multiplyButton = document.querySelector('.calculator-button-action[data-action="*"]')
let plusButton = document.querySelector('.calculator-button-action[data-action="+"]')
let minusButton = document.querySelector('.calculator-button-action[data-action="-"]')
let divideButton = document.querySelector('.calculator-button-action[data-action="/"]')
let resultButton = document.querySelector('.calculator-button-action[data-action="="]')
let nowAction = ''
let result = 0
resultButton.addEventListener('click',function(){
    if (nowAction == ''){
        console.log('No action')
    }
    else{
        let num1 = parseFloat(firstNumberInput.value)
        let num2 = parseFloat(secondNumberInput.value)
        if (isNaN(num1) || isNaN(num2)){
            console.log(true)
        }
        else{
            console.log(nowAction)
            switch(nowAction){
                case '*':
                    result = num1 * num2
                    console.log(result)
                    resultOutput.textContent = num1 * num2
                    break
                case '+':
                    result = num1 + num2
                    console.log(result)
                    resultOutput.textContent = num1 + num2 
                    break
                case '-':
                    result = num1 - num2
                    console.log(result)
                    resultOutput.textContent = num1 - num2
                    break
                case '/':
                    result = num1 / num2
                    console.log(result)
                    resultOutput.textContent = num1 / num2
                    break
        }
    }
    }
})


multiplyButton.addEventListener('click',function(){
    nowAction = '*'
})
minusButton.addEventListener('click',function(){
    nowAction = '-'
})
divideButton.addEventListener('click',function(){
    nowAction = '/'
})
plusButton.addEventListener('click',function(){
    nowAction = '+'
})