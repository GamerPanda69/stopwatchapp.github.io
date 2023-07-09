//setting varianles
let timeInterval;
let seconds = 0;
//function to start the timer
function playTimer() {
  timeInterval = setInterval(() => {
    seconds++;
    updateTimer();
  }, 1000);
}
//stop timer function
function pauseTimer() {
  clearInterval(timeInterval);
}
//reset timer function
function resetTimer() {
  seconds = 0;
  pauseTimer();
  updateTimer();
}
//To update the seconds
function updateTimer() {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const actualTime = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds % 60);
  document.querySelector(".Timer").textContent = actualTime;
}
//timer structure(0on front if value under 10)
function formatTime(time) {
  return time < 10 ? "0" + time : time;
}
//adding event listeners
document.querySelector(".Start").addEventListener("click", playTimer);
document.querySelector(".Stop").addEventListener("click", pauseTimer);
document.querySelector(".Reset").addEventListener("click", resetTimer);
