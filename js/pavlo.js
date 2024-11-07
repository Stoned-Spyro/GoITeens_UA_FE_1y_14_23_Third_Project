//              Calculator
//                  querySelector
let resultOutput = document.querySelector('.calculator-result-calculator')
let firstNumberInput = document.querySelector('.calculator-input-number[data-action="number_1"]')
let secondNumberInput = document.querySelector('.calculator-input-number[data-action="number_2"]')
let multiplyButton = document.querySelector('.calculator-button-action[data-action="*"]')
let plusButton = document.querySelector('.calculator-button-action[data-action="+"]')
let minusButton = document.querySelector('.calculator-button-action[data-action="-"]')
let divideButton = document.querySelector('.calculator-button-action[data-action="/"]')
let resultButton = document.querySelector('.calculator-button-action[data-action="="]')
//                   Code
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
//           Google Dino
let mainWindow = document.querySelector('.main-dino-window')
let dino = document.querySelector('.dino-player')
let startButton = document.querySelector('.dino-button-restart')
let groundX = 0
let speed = 10
let isJump = false
let dinoY = 90
let cactusSpawnX = 450
let time = 0
let gameStatus = 'none'
let i = 0
let animationNeed = true
let cactusFrames = ['/img/dino/cactus_1.png', '/img/dino/cactus_2.png']
let dinoAnimateFrames = ['/img/dino/dino_idle_1.png', '/img/dino/dino_run_1.png', '/img/dino/dino_run_2.png']
let intervals = []

function resetGame() {
    intervals.forEach(clearInterval)
    intervals = []
    groundX = 0
    dinoY = 90
    dino.style.marginTop = dinoY + 'px'
    time = 0
    isJump = false
    gameStatus = 'none'
    dino.style.marginTop = '90px'
    let cactuss = document.querySelectorAll('.cactus')
    for(let cactusNow of cactuss){
        cactusNow.remove()
    }
    startButton.style.display = 'block'
}

setInterval(function () {
    let dinoNowY = dino.style.marginTop
    dinoNowY = parseFloat(dinoNowY)
    if(dinoNowY > 90){
        dinoY = 90
        dino.style.marginTop = 90 + 'px'
    }
}, 100)

let start = () => {
    startButton.style.display = 'none'
    gameStatus = 'playing'

    intervals.push(setInterval(function () {
        mainWindow.style.backgroundPosition = groundX + 'px 130px'
        groundX = groundX - speed / 3.0
    }, speed))

    intervals.push(setInterval(function () {
        if (animationNeed == true) {
            dino.src = dinoAnimateFrames[i]
            i++
            if (i == 3) {
                i = 0
            }
        }
    }, 100))

    document.addEventListener('keydown', function (event) {
        if (event.code == 'KeyW') {
            if (gameStatus == 'playing' && isJump == false) {
                let i = 0
                isJump = true
                const jumpUp = setInterval(function () {
                    i++
                    if (i == 81) {
                        clearInterval(jumpUp)
                        const jumpDown = setInterval(function () {
                            i--
                            if (i == 0) {
                                clearInterval(jumpDown)
                                isJump = false
                            } else {
                                dinoY++
                                dino.style.marginTop = dinoY + 'px'
                            }
                        }, 3)
                    } else {
                        dinoY--
                        dino.style.marginTop = dinoY + 'px'
                    }
                }, 3)

            }
        }
    })

    intervals.push(setInterval(function () {
        if (gameStatus == 'playing') {
            time++
            document.querySelector('.dino-time').textContent = 'Рахунок: ' + time
        }
    }, 500))

    intervals.push(setInterval(function () {
        const cactus = document.createElement('img')
        cactus.src = cactusFrames[Math.round(Math.random() * 1)]
        cactus.style.position = 'absolute'
        cactus.className = 'cactus'
        cactus.style.marginLeft = cactusSpawnX + 'px'
        mainWindow.append(cactus)

        let cactusX = cactusSpawnX
        const cactusRun = setInterval(function () {
            cactusX = cactusX - 3.35
            cactus.style.marginLeft = cactusX + 'px'
            if (cactusX < 0) {
                cactus.remove()
            }
            checkTouch()
        }, speed)
        intervals.push(cactusRun)
    }, 2000))

    function checkTouch() {
        const dinoCheck = dino.getBoundingClientRect();
        let cactus = document.querySelector('.cactus');
        if (cactus == null) return;
    
        const cactusCheck = cactus.getBoundingClientRect();
        const cactusBuffer = 20; 
        if (
            dinoCheck.right > cactusCheck.left + cactusBuffer &&
            dinoCheck.left < cactusCheck.right - cactusBuffer &&
            dinoCheck.bottom > cactusCheck.top + cactusBuffer &&
            dinoCheck.top < cactusCheck.bottom - cactusBuffer
        ) {
            resetGame();
        }
    }
    
}

startButton.addEventListener('click', function () {
    document.querySelector('.dino-time').textContent = 'Рахунок: 0'
    start()
})
