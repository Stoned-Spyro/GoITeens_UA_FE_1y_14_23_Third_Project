//! sps

document.addEventListener("DOMContentLoaded", function () {
    let userScore = 0;
    let computerScore = 0;
    let userChoice = "";
  
    const userButtons = document.querySelectorAll(".sps-home__button");
    const computerButton = document.querySelector(".sps-home__computer");
    const resultText = document.querySelector(".sps-home__text");
    const scoreComputer = document.querySelectorAll(".sps-home__itemr")[1];
    const scoreUser = document.querySelectorAll(".sps-home__itemr")[2];
    const computerChoiceDisplay = document.createElement("button");
  

    computerChoiceDisplay.classList.add("sps-home__button");
    computerButton.parentElement.appendChild(computerChoiceDisplay);
    computerChoiceDisplay.style.display = "none";
  
    const choices = ["камінь", "ножиці", "папір"];
    const choiceIcons = ["./img/sps/stone.png", "./img/sps/scissors.png", "./img/sps/paper.png"];
  
    userButtons.forEach(function (button, index) {
      button.addEventListener("click", function () {
        userChoice = choices[index];
        userButtons.forEach(btn => (btn.style.backgroundColor = "#000"));
        button.style.backgroundColor = "#7e7e7e";
      });
    });
  
    computerButton.addEventListener("click", function () {
      if (userChoice === "") {
        alert("Спочатку оберіть варіант!");
        return;
      }
  
      const computerChoiceIndex = Math.floor(Math.random() * 3);
      const computerChoice = choices[computerChoiceIndex];
      let result;
  
     
      computerChoiceDisplay.style.display = "block";
      computerChoiceDisplay.style.marginTop = "30px";
      computerChoiceDisplay.style.position = "relative";
      computerChoiceDisplay.style.marginRight = "auto";
      computerChoiceDisplay.style.marginLeft = "auto";
      computerChoiceDisplay.innerHTML = `<img src="${choiceIcons[computerChoiceIndex]}" alt="${computerChoice}">`;
  
      
      if (userChoice === computerChoice) {
        result = "Нічия!";
        resultText.style.color = "yellow";
      } else if (
        (userChoice === "камінь" && computerChoice === "ножиці") ||
        (userChoice === "ножиці" && computerChoice === "папір") ||
        (userChoice === "папір" && computerChoice === "камінь")
      ) {
        result = "Ви виграли раунд!";
        resultText.style.color = "#039900";
        userScore++;
      } else {
        result = "Комп'ютер виграв раунд!";
        resultText.style.color = "#990000";
        computerScore++;
      }
  
      resultText.textContent = result;
      scoreUser.textContent = `Ви - ${userScore}`;
      scoreComputer.textContent = `Комп’ютер - ${computerScore}`;
    });
  });

  //! three number

  const enterNumbers = document.querySelectorAll(".three-home__input");
  const biggestNumber = document.querySelector(".three-home__text");

  function searchMaxNumber(){
    const numberArray = Array.from(enterNumbers).map(input => Number(input.value));;
    if(numberArray.every(num => !isNaN(num) && num !== 0)){
      const max = Math.max(...numberArray); 
      biggestNumber.textContent = `Найбільше число, яке ви ввели - ${max}`;
    }
  }

  enterNumbers.forEach(input => {
    input.addEventListener("input", searchMaxNumber);
  });


//! team
const arrowLeft = document.querySelector('.team-home__arrow-left');
const arrowRight = document.querySelector('.team-home__arrow-right');
const slides = document.querySelectorAll('.team-home__slides');
const bottom = document.getElementById('bottom');

let currentSlideIndex = 0;
const paginationLines = [];

function createPaginationLine() {
  const div = document.createElement('div');
  div.className = 'team-home__pagination';
  bottom.appendChild(div);
  paginationLines.push(div);
}

function addPagination() {
  slides.forEach(createPaginationLine);
  paginationLines[0].classList.add('active');
  paginationLines.forEach((line, index) => {
    line.addEventListener('click', () => changeSlide(index));
  });
}

function addActiveClass() {
  paginationLines[currentSlideIndex].classList.add('active');
}

function removeActiveClass() {
  paginationLines[currentSlideIndex].classList.remove('active');
}

function showSlide() {
  slides[currentSlideIndex].classList.add('block');
  paginationLines[currentSlideIndex].classList.add('active');
}

function hideSlide() {
  slides[currentSlideIndex].classList.remove('block');
  paginationLines[currentSlideIndex].classList.remove('active');
}

function changeSlide(slideIndex) {
  hideSlide();
  removeActiveClass();
  currentSlideIndex = slideIndex;
  addActiveClass();
  showSlide();
}

function previousSlide() {
  let newSlideIndex = currentSlideIndex - 1;
  if (newSlideIndex < 0) {
    newSlideIndex = slides.length - 1;
  }
  changeSlide(newSlideIndex);
}

function nextSlide() {
  let newSlideIndex = currentSlideIndex + 1;
  if (newSlideIndex > slides.length - 1) {
    newSlideIndex = 0;
  }
  changeSlide(newSlideIndex);
}

addPagination();
arrowLeft.addEventListener('click', previousSlide);
arrowRight.addEventListener('click', nextSlide);

//! time

const inputField = document.querySelector('.time-home__calcurator');
const button = document.querySelector('.time-home__button');
const outputText = document.querySelector('.time-home__text');

function formatTime(seconds) {
  const days = Math.floor(seconds / (24 * 3600));
  seconds %= 24 * 3600;
  const hours = Math.floor(seconds / 3600);
  seconds %= 3600;
  const minutes = Math.floor(seconds / 60);
  seconds %= 60;

  return `${days} дн. ${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

button.addEventListener('click', () => {
  const inputValue = inputField.value;
  const seconds = parseInt(inputValue, 10);

  if (!isNaN(seconds) && seconds >= 0) {
    const formattedTime = formatTime(seconds);
    outputText.textContent = formattedTime;
  } else {
    outputText.textContent = 'Це не є числом';
  }
});
