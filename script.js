const startHour = 6
const endHour = 18

document.addEventListener("DOMContentLoaded", (event) => {
  const wrapperDiv = document.getElementById("wrapper");
  const timeDiv = document.getElementById("time");
  const dayDiv = document.getElementById("day");
  const dateDiv = document.getElementById("date");
  setInterval(() => {
    const now = moment();
    if (now.hour() >= startHour && now.hour() < endHour) {
      timeDiv.innerHTML = now.format("LT");
      dayDiv.innerHTML = now.format("dddd");
      dateDiv.innerHTML = now.format("MMMM D");
    } else {
      timeDiv.innerHTML = "";
      dayDiv.innerHTML = "";
      dateDiv.innerHTML = "";
    }
    const hoursSinceOn = Math.max(now.hour() - startHour, 0);
    const totalHoursOn = endHour - startHour
    wrapperDiv.style.marginLeft = `${(hoursSinceOn / totalHoursOn) * totalHoursOn}vw`;
  }, 1000);
});
