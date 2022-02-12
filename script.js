const daysel = document.getElementById("days");
const hourssel = document.getElementById("hours");
const minsel = document.getElementById("mins");
const secondsel = document.getElementById("seconds");
const newYears = "1 jan 2023";
function countdown() {
  const newYearDate = new Date(newYears);
  const currentDate = new Date();
  const seconds = (newYearDate - currentDate) / 1000;
  const days = Math.floor(seconds / 3600 / 24);
  const hours = Math.floor(seconds / 3600) % 24;
  const minutes = Math.floor(seconds / 60) % 60;
  const sec = Math.floor(seconds % 60);
  daysel.innerHTML = formatTime(days);
  hourssel.innerHTML = formatTime(hours);
  minsel.innerHTML = formatTime(minutes);
  secondsel.innerHTML = formatTime(sec);
}
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
countdown();
setInterval(countdown, 1000);
