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
        userButtons.forEach((btn) => (btn.style.backgroundColor = "#000"));
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