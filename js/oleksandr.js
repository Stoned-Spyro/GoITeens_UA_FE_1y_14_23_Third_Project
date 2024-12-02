
  const yearButton = document.getElementById("yearButton")
  function checkLeapYear() {
    const year = parseInt(document.getElementById("year").value);
    const result = document.getElementById("yearResult");
  
    if (!isNaN(year)) {
      if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        result.textContent = "Ви народилися у високосний рік!";
      } else {
        result.textContent = "Ваш рік народження не є високосним.";
      }
    } else {
      result.textContent = "Будь ласка, введіть коректний рік.";
    }
  }
  yearButton.addEventListener("click", checkLeapYear)

  const guessButton = document.getElementById("guessButton")


function checkGuess() {
  const guess = parseInt(document.getElementById("guess").value);
  const result = document.getElementById("guessResult");
  const randomNumber = Math.floor(Math.random() * 10) + 1;

  if (!isNaN(guess)) {
    if (guess === randomNumber) {
      result.textContent = `Вітаю, ви вгадали число! (${randomNumber})`;
    }else {
      result.textContent = `Ви програли комп'ютер загадав число (${randomNumber})`;
      result.style.color = `red`
    }
  } else {
    result.textContent = "Будь ласка, введіть коректне число.";
  }
}
guessButton.addEventListener("click", checkGuess)