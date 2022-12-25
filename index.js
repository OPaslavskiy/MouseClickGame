const clickMeDiv = document.querySelector(".square");
const many_clicks = document.querySelector(".many_clicks");
const clock = document.querySelector(".timer");
console.log(clickMeDiv);

clickMeDiv.addEventListener("click", clickMe);

let clicksNumber = 0;
let timer = 4;

function clickMe() {
  clicksNumber += 1;
  imformAboutClicks(clicksNumber);
  setTimer();
}

function imformAboutClicks(clicksNumber) {
  many_clicks.textContent = clicksNumber;
}

function setTimer() {
  if (clicksNumber <= 1) {
    const idInterval = setInterval(() => {
      timer -= 1;
      if (timer === 0) {
        clearInterval(idInterval);
        clickMeDiv.removeEventListener("click", clickMe);
      }
      clock.textContent = timer;
      console.log(idInterval);
      return idInterval;
    }, 1000);
  }
}
