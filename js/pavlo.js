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
//             Football
let mainFootball = document.querySelector('.football-main-window');
let footballBall = document.querySelector('.football-ball');
let outlineCode = mainFootball.getBoundingClientRect()
let footballBallWinTop = outlineCode.top + window.scrollY
let footballBallWinLeft = outlineCode.left + window.scrollX
footballBall.style.top =  footballBallWinTop + 10+ 'px';
footballBall.style.left = footballBallWinLeft + 10  + 'px';
document.addEventListener('click', function(event) {
    let outlineCode = mainFootball.getBoundingClientRect()
    let footballBallWinTop = outlineCode.top + window.scrollY
    let footballBallWinLeft = outlineCode.left + window.scrollX
    let Y = event.clientY + window.scrollY - (footballBall.offsetHeight / 2);
    let X = event.clientX + window.scrollX - (footballBall.offsetWidth / 2); 
    if(Y < footballBallWinTop || X < footballBallWinLeft || Y > footballBallWinTop + outlineCode.height - footballBall.offsetHeight || X > footballBallWinLeft + outlineCode.width - footballBall.offsetWidth ){

    }
    else{
        footballBall.style.top = Y + 'px';
        footballBall.style.left = X + 'px';
    }
});
//               Scientists
const scientists = [ 
    { 
        name: "Albert", 
        surname: "Einstein", 
        born: 1879, 
        dead: 1955, 
        id: 1 
    }, 
    { 
        name: "Isaac", 
        surname: "Newton", 
        born: 1643, 
        dead: 1727, 
        id: 2 
    }, 
    { 
        name: "Galileo", 
        surname: "Galilei", 
        born: 1564, 
        dead: 1642, 
        id: 3 
    }, 
    { 
        name: "Marie", 
        surname: "Curie", 
        born: 1867, 
        dead: 1934, 
        id: 4 
    }, 
    { 
        name: "Johannes", 
        surname: "Kepler", 
        born: 1571, 
        dead: 1630, 
        id: 5 
    }, 
    { 
        name: "Nicolaus", 
        surname: "Copernicus", 
        born: 1473, 
        dead: 1543, 
        id: 6 
    }, 
    { 
        name: "Max", 
        surname: "Planck", 
        born: 1858, 
        dead: 1947, 
        id: 7 
    }, 
    { 
        name: "Katherine", 
        surname: "Blodgett", 
        born: 1898, 
        dead: 1979, 
        id: 8 
    }, 
    { 
        name: "Ada", 
        surname: "Lovelace", 
        born: 1815, 
        dead: 1852, 
        id: 9 
    }, 
    { 
        name: "Sarah E.", 
        surname: "Goode", 
        born: 1855, 
        dead: 1905, 
        id: 10 
    }, 
    { 
        name: "Lise", 
        surname: "Meitner", 
        born: 1878, 
        dead: 1968, 
        id: 11 
    }, 
    { 
        name: "Hanna", 
        surname: "Hammarström", 
        born: 1829, 
        dead: 1909, 
        id: 12 
    } 
];
const alphabet = {
    'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5, 'F': 6, 'G': 7, 'H': 8, 'I': 9, 'J': 10, 
    'K': 11, 'L': 12, 'M': 13, 'N': 14, 'O': 15, 'P': 16, 'Q': 17, 'R': 18, 'S': 19, 
    'T': 20, 'U': 21, 'V': 22, 'W': 23, 'X': 24, 'Y': 25, 'Z': 26
}
//              querySelector
let scientists_19_st_but = document.querySelector('#scientists-19-st')
let scientists_alphabet = document.querySelector('#scientists-alphabet')
let scientists_age = document.querySelector('#scientists-age')
let scientists_born = document.querySelector('#scientists-born')
let scientists_albert_born = document.querySelector('#scientists-albert-born')
let scientists_C = document.querySelector('#scientists-C')
let scientists_A = document.querySelector('#scientists-A')
let scientists_best_worst = document.querySelector('#scientists-best-worst')
let scientists_first_letter = document.querySelector('#scientists-first-letter')
let box_texts = document.querySelectorAll('.main-scientist-item-title')
let box_texts_2 = document.querySelectorAll('.main-scientist-item-date')
//              code
scientists_19_st_but.addEventListener('click',function(){
    let output = []
    for(let i = 0;i < 12;i++){
        box_texts[i].textContent = ''
        box_texts_2[i].textContent = ''
    }
    for(let scientist of scientists){
        if(scientist.born > 1800 && scientist.born < 1900){
            output.unshift(scientist)
        }
    }
    for(let i = 0;i < output.length;i++){
        box_texts[i].textContent = output[i].name + ' ' + output[i].surname
        box_texts_2[i].textContent = output[i].born + '-' + output[i].dead
    }
})
scientists_alphabet.addEventListener('click',function(){
    let output = []
    for(let i = 0;i < 12;i++){
        box_texts[i].textContent = ''
        box_texts_2[i].textContent = ''
    }
    let list = {
        A: [], 
        B: [], 
        C: [], 
        D: [], 
        E: [], 
        F: [], 
        G: [], 
        H: [], 
        I: [], 
        J: [],
        K: [],
        L: [], 
        M: [], 
        N: [], 
        O: [], 
        P: [], 
        Q: [], 
        R: [], 
        S: [], 
        T: [],
        U: [],
        V: [], 
        W: [],
        X: [], 
        Y: [], 
        Z: []
    }
    let outputFinal = []
    for(let scientist of scientists){
        let firstLet = scientist.name[0]
        for(let item in list){
            if(firstLet == item){
                list[item].unshift(scientist)
            }
        }
    }
    for(let item in list){
        if(list[item].length == 0){
            continue
        }
        else{
            output.push(list[item])
        }
    }
    for(let item of output){
        for(let _ of item){
            outputFinal.push(_)
        }
    }
    output = outputFinal
    for(let i = 0;i < output.length;i++){
        box_texts[i].textContent = output[i].name + ' ' + output[i].surname
        box_texts_2[i].textContent = output[i].born + '-' + output[i].dead
    }
})
scientists_age.addEventListener('click',function(){
    for(let i = 0;i < 12;i++){
        box_texts[i].textContent = ''
        box_texts_2[i].textContent = ''
    }
    let output = [];
    let slientOut = scientists.slice();
    
    while (slientOut.length > 0) {
        let bestNum = 0;
        let index = 0;
        for (let i = 0; i < slientOut.length; i++) {
            let num = slientOut[i].dead - slientOut[i].born;
            if (num > bestNum) {
                bestNum = num;
                index = i;
            }
        }
        let removedElement = slientOut.splice(index, 1);
        output.push(removedElement);
    }
    for(let i = 0;i < output.length;i++){
        box_texts[i].textContent = output[i][0].name + ' ' + output[i][0].surname
        box_texts_2[i].textContent = output[i][0].born + '-' + output[i][0].dead
    }
    
})
scientists_born.addEventListener('click',function(){
    for(let i = 0;i < 12;i++){
        box_texts[i].textContent = ''
        box_texts_2[i].textContent = ''
    }
    let output = [];
    let upNum = 0
    let upName = {}
    for(let item of scientists){
        if(upNum < item.born){
            upNum = item.born
            upName = item
            output.push(upName)
        }
    }    
    for(let item of output){
        box_texts[i].textContent = item.name + ' ' + item.surname
        box_texts_2[i].textContent = item.born + '-' + item.dead
    }
})
scientists_albert_born.addEventListener('click',function(){
    for(let i = 0;i < 12;i++){
        box_texts[i].textContent = ''
        box_texts_2[i].textContent = ''
    }
    let output = [];
    for(let item of scientists){
        if(item.name == "Albert" && item.surname == "Einstein"){
            output.push(item)
        }
        console.log('1')
    }    
    for(let item of output){
        box_texts[i].textContent = item.name + ' ' + item.surname
        box_texts_2[i].textContent = item.born + '-' + item.dead
    }
})
scientists_C.addEventListener('click',function(){
    for(let i = 0;i < 12;i++){
        box_texts[i].textContent = ''
        box_texts_2[i].textContent = ''
    }
    let output = [];
    for(let item of scientists){
        if(item.surname[0] == "C"){
            output.push(item)
            continue
        }
    }    
    for(let i = 0;i < output.length;i++){
        box_texts[i].textContent = output[i].name + ' ' + output[i].surname
        box_texts_2[i].textContent = output[i].born + '-' + output[i].dead
    }
})
scientists_A.addEventListener('click',function(){
    for(let i = 0;i < 12;i++){
        box_texts[i].textContent = ''
        box_texts_2[i].textContent = ''
    }
    let output = [];
    for(let item of scientists){
        if(item.name[0] == "A"){
            output.push(item)
            continue
        }
    }    
    for(let i = 0;i < output.length;i++){
        box_texts[i].textContent = output[i].name + ' ' + output[i].surname
        box_texts_2[i].textContent = output[i].born + '-' + output[i].dead
    }
})
scientists_best_worst.addEventListener('click',function(){
    for(let i = 0;i < 12;i++){
        box_texts[i].textContent = ''
        box_texts_2[i].textContent = ''
    }
    let output = [];
    let bestNum = 0
    let worstNum = 10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
    for(let item of scientists){
        let age = item.dead - item.born
        if(bestNum < age){
            bestNum = item
            continue
        }
        if(worstNum > age){
            worstNum = item
            continue
        }
    }   
    output.push(bestNum)
    output.push(worstNum)
    for(let i = 0;i < output.length;i++){
        box_texts[i].textContent = output[i].name + ' ' + output[i].surname
        box_texts_2[i].textContent = output[i].born + '-' + output[i].dead
    }
})
scientists_first_letter.addEventListener('click',function(){
    for(let i = 0;i < 12;i++){
        box_texts[i].textContent = ''
        box_texts_2[i].textContent = ''
    }
    let output = [];
    for(let item of scientists){
        if(item.name[0] == item.surname[0]){
            output.push(item)
        }
    }   
    for(let i = 0;i < output.length;i++){
        box_texts[i].textContent = output[i].name + ' ' + output[i].surname
        box_texts_2[i].textContent = output[i].born + '-' + output[i].dead
    }
})